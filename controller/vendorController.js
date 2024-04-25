const vendorSchema = require("../models/vendorSchema");

exports.addvendor = (async (request, response) => {
    try {
        const vendor = await vendorSchema.create(request.body);
        response.status(200).json({
            message: "vendor added successfully.",
            data: vendor
        })
    } catch (err) {
        response.status(500).json({
            message: "Error while saving data",
            data: err
        })  
    }
})

exports.getVendors = (async (request, response) => {
    try {
        const vendors = await vendorSchema.find({});
        response.status(200).json({
            message: "vendors retrived successfully.",
            data: vendors
        })
    } catch (err) {
        response.status(500).json({
            message: "Error while retriving data",
            data: err
        })
    }
})

exports.updateVendor = (async (request, response) => {
    try {
        const vendor = await vendorSchema.findByIdAndUpdate({ "_id": request.params.id }, request.body);
        response.status(200).json({
            message: "vendor updated successfully.",
            data: vendor
        })
    } catch (err) {
        response.status(500).json({
            message: "Error while update data",
            data: err
        })
    }
})

exports.getVendorById = (async (request, response) => {
    try {
        const vendor = await vendorSchema.findById(request.params.id);
        response.status(200).json({
            message: "Vendor retrived successfully",
            data: vendor
        })
    } catch (err) {
        response.status(200).json({
            message: "Error while retriving client.",
            data: err
        })
    }
})

exports.deleteVendor = (async (request, response) => {
    try {
        const vendor = await vendorSchema.findByIdAndDelete(request.params.id);
        response.status(200).json({
            message: "vendor deleted successfully",
            data: vendor
        })
    } catch (err) {
        response.status(200).json({
            message: "Error while deleting client.",
            data: err
        })
    }
})