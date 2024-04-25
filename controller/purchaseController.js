const purchaseModel = require("../models/purchaseSchema");
const stockController = require("./stockController")
const stockSchema = require("../models/stockSchema");
const stockHistory = require("../models/histroySchema")

module.exports.addPurchase = async (request, response) => {
  try {
    var data = request.body;
    const history = [];
    const stockData = await stockSchema.find({});
    data.items = data.items.map((item) => {
      delete item.id;
      const stock = stockData.find(stock => stock.companyId.toString() === item.companyId && stock.itemId.toString() === item.itemId)
      const data = {
        companyId: item.companyId,
        itemId: item.itemId,
        type: "purchase",
        inQty: parseFloat(item.qty),
        currentQty: stock?.qty ? stock?.qty : 0,
        date: request.body.date
      }
      history.push(data)
      return {
        companyId: item.companyId,
        qty: parseFloat(item.qty),  
        price: parseFloat(item.price),
        gstper: parseFloat(item.gstper),
        itemId: item.itemId,
        uom: item.uom,
      };
    });

    const res = await purchaseModel.create(data);
    await stockController.addToStock(data.items);
    await stockHistory.insertMany(history);
    response.status(200).json({
      message: "purchase added succesfully",
      data: res,
    });
  } catch (error) {
    response.status(500).json({
      message: "Error while adding purchase.",
      data: error,
    });
  }
};


module.exports.getPurchases = async (request, response) => {
  try {
    const res = await purchaseModel
      .find()
      .populate("vendorId")
      .populate("items.itemId")
      .populate("items.companyId")
      .exec();
    response.status(200).json({
      message: "Data retrived succesfully.",
      data: res,
    });
  } catch (error) {
    response.status(500).json({
      message: "Error while retriving data.",
      data: error,
    });
  }
};

module.exports.getBillNumber = (async (request, response) => {
  try {
    const res = await purchaseModel
      .find({ invoice: request.body.data });
    if (res.length === 0) {
      response.status(200).json({
        message: "Data retrived succesfully.",
        data: true,
      });
    } else {
      response.status(200).json({
        message: "Data retrived succesfully.",
        data: false,
      });
    }
  } catch (error) {
    response.status(500).json({
      message: "Error while retriving data.",
      data: error,
    });
  }
})