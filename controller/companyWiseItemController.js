const itemByCompanySchema = require("../models/companyWiseItemSchema")

module.exports.addItem = (async (request, response) => {
    try {
        const Item = await itemByCompanySchema.create(request.body);
        response.status(200).json({
            message: "Item added successfully.",
            data: Item
        })
    } catch (err) {
        response.status(500).json({
            message: "Error while adding Item.",
            data: err
        })
    }
})

module.exports.getItems = (async (request, response) => {
    try {
        const Items = await itemByCompanySchema.find({}).populate("companyId").exec();
        response.status(200).json({
            message: "Items retrived successfully.",
            data: Items
        })
    } catch (err) {
        response.status(500).json({
            message: "Error while retriving data",
            data: err
        })
    }
})

module.exports.updateItem = (async (request, response) => {
    try {
        const Item = await itemByCompanySchema.findByIdAndUpdate({ "_id": request.params.id }, request.body);
        response.status(200).json({
            message: "Item updated successfully.",
            data: Item
        })
    } catch (err) {
        response.status(500).json({
            message: "Error while update data",
            data: err
        })
    }
})

module.exports.getItemById = (async (request, response) => {
    try {
        const Item = await itemByCompanySchema.findById(request.params.id).populate("companyId").exec();
        response.status(200).json({
            message: "Item retrived successfully",
            data: Item
        })
    } catch (err) {
        response.status(500).json({
            message: "Error while retriving Item.",
            data: err
        })
    }
})

module.exports.deleteItem = (async (request, response) => {
    try {
        const Item = await itemByCompanySchema.findByIdAndDelete({ "_id": request.params.id });
        response.status(200).json({
            message: "Item deleted successfully",
            data: Item
        })
    } catch (err) {
        response.status(500).json({
            message: "Error while deleting Item.",
            data: err
        })
    }
})

module.exports.getCompanyWiseAllItem = (async (request, response) => {
    try {
        const id = request.query.companyId;
        const items = await itemByCompanySchema.find({ "companyId": id });
        response.status(200).json({
            message: "Item retrived successfully",
            data: items
        })
    } catch (err) {
        response.status(500).json({
            message: "Error while retriving Item.",
            data: err
        })
    }
})