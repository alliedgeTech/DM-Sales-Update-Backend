const companySchema = require("../models/companySchema")

module.exports.addcompany = (async (request, response) => {
    try {
        const company = await companySchema.create(request.body);
        response.status(200).json({
            message: "company added successfully.",
            data: company
        })
    } catch (err) {
        response.status().json({
            message: "Error wihie adding company.",
            data: err
        })
    }
})

module.exports.getAllcompany = (async (request, response) => {
    try {
        const companys = await companySchema.find({}); 
        response.status(200).json({
            message: "company retrived successfully.",
            data: companys
        })
    } catch (err) {
        response.status(500).json({
            message: "Error wihie retriving company.",
            data: err
        })
    }
})

module.exports.deletecompanyById = (async (request, response) => {
    try {
        const company = await companySchema.findByIdAndDelete({ "_id": request.params.id });
        response.status(200).json({
            message: "company deleted successfully.",
            data: company
        })
    } catch (err) {
        response.status(500).json({
            message: "Error wihie deleting company.",
            data: err
        })
    }
})