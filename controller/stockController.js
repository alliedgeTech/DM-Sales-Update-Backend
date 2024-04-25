const stockModel = require("../models/stockSchema")
// const purchaseSchema = require("../models/purchaseSchema");
// const sellSchema = require("../models/sellSchema");
const histroySchema = require("../models/histroySchema");


// module.exports.addToStock = ((data) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             for (let i = 0; i < data.length; i++) {
//                 const velidateResp = await stockModel.find({
//                     $and: [
//                         { "companyId": data[i].companyId },
//                         { "itemId": data[i].itemId }
//                     ]
//                 })
//                 if (velidateResp.length === 0 || velidateResp === null || velidateResp === undefined) {
//                     var inserted = await stockModel.create(data[i])
//                 } else {
//                     var qty = velidateResp[0].qty + parseFloat(data[i].qty);
//                     var updated = await stockModel.findByIdAndUpdate({ _id: velidateResp[0]._id }, { $set: { qty: qty } })
//                 }
//             }
//             resolve();
//         } catch (error) {
//             // console.log("error occured in adding stock : ", error);
//             reject();
//         }
//     })
// })

module.exports.addToStock = ((data, res, weneedtoupdate = false) => {
    return new Promise(async (resolve, reject) => {
        try {
            for (let i = 0; i < data.length; i++) {
                const velidateResp = await stockModel.find({
                    $and: [
                        { "companyId": data[i].companyId },
                        { "itemId": data[i].itemId }
                    ]
                })


                // console.log("this is velidataHistory : ", velidataHistory);

                if (velidateResp.length === 0 || velidateResp === null || velidateResp === undefined) {
                    var inserted = await stockModel.create(data[i]);
                    console.log('this is add to stock running : ');
                } else {
                    if (weneedtoupdate) {
                        const velidataHistory = await histroySchema.find({
                            $and: [
                                { "companyId": data[i].companyId },
                                { "itemId": data[i].itemId },
                                { "date": res[0].date },
                            ]
                        })
                        var history = await histroySchema.findByIdAndUpdate({ _id: velidataHistory[0]._id }, { $inc: { inQty: -data[i].qty } }, { new: true })
                    }

                    var qty = velidateResp[0].qty + parseFloat(data[i].qty);
                    var updated = await stockModel.findByIdAndUpdate({ _id: velidateResp[0]._id }, { $set: { qty: qty } })
                    // console.log("history : ", history , " and this is qty : " ,qty);
                }
            }
            resolve();
        } catch (error) {
            // console.log("error occured in adding stock : ", error);
            reject();
        }
    })
})

module.exports.removeStocks = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            for (let i = 0; i < data.length; i++) {
                const velidateResp = await stockModel.find({
                    $and: [
                        { "companyId": data[i].companyId },
                        { "itemId": data[i].itemId }
                    ]
                })
                if (velidateResp.length !== 0 || velidateResp !== null || velidateResp !== undefined) {
                    var qty = velidateResp[0].qty - parseFloat(data[i].qty);
                    var price = velidateResp[0].price - parseFloat(data[i].price);
                    var updated = await stockModel.findByIdAndUpdate({ _id: velidateResp[0]._id }, { price: price, qty: qty })
                }
            }
            resolve();
        } catch (error) {
            // console.log("error occured in adding stock : ", error);
            reject();
        }
    })
}

module.exports.getStockData = (async (request, response) => {
    try {
        const data = await stockModel.find()
            .populate("companyId").populate("itemId").exec();
        response.status(200).json({
            message: "data retrived successfully.",
            data: data
        })
    } catch (error) {
        response.status(500).json({
            message: "Error while retriving data.",
            data: error
        })
    }
})


module.exports.getStockHistory = (async (request, response) => {
    try {
        var id = request.params.id;
        const stock = await stockModel.findById(id);
        const stockHistory = await histroySchema.find({
            $and: [
                { companyId: stock.companyId },
                { itemId: stock.itemId }
            ]
        })
            .populate("companyId")
            .populate("itemId").exec();

        // console.log(" ====>> ", stockHistory);
        const uniqueData = {};

        // Iterate through the original data
        stockHistory.forEach((item) => {
            // const { date, type, inQty, currentQty } = item;
            const { date, type, inQty, currentQty, companyId, itemId } = item;
            const key = `${date}-${type}`;

            // If the combination exists in uniqueData, update the inQty and currentQty
            if (uniqueData[key]) {
                uniqueData[key].inQty += inQty;
                // uniqueData[key].currentQty += currentQty;
            } else {
                // Otherwise, create a new entry with the combination
                uniqueData[key] = {
                    date,
                    type,
                    inQty,
                    // currentQty,
                    company: {
                        _id: companyId._id,
                        name: companyId.name,
                    },
                    item: {
                        _id: itemId._id,
                        name: itemId.name,
                    },
                };
            }
        });

        // Convert the uniqueData object back to an array
        const uniqueDataArray = Object.values(uniqueData);

        // console.log(uniqueDataArray);


        response.status(200).json({
            message: "Data retriving successfully.",
            data: uniqueDataArray,
        });
    } catch (error) {
        // console.log(error);
        response.status(500).json({
            message: "Error while retriving stock history.",
            data: error,
        });
    }
})

