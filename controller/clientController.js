const clientSchema = require("../models/clientSchema")

exports.addClient = (async (request, response) => {
    try {
        const client = await clientSchema.create(request.body);
        response.status(200).json({
            message: "client added successfully.",
            data: client
        })
    } catch (err) {
        response.status(500).json({
            message: "Error while saving data",
            data: err
        })
    }
})

exports.getClients = (async (request, response) => {
    try {
        const clients = await clientSchema.find({});
        response.status(200).json({
            message: "clients retrived successfully.",
            data: clients
        })
    } catch (err) {
        response.status(500).json({
            message: "Error while retriving data",
            data: err
        })
    }
})

// GSTNo phoneNumber phoneNumber2 email email2 panNumber address
exports.updateClient = (async (request, response) => {
    try {
        const client = await clientSchema.findByIdAndUpdate({ "_id": request.params.id }, request.body);
        response.status(200).json({
            message: "client updated successfully.",
            data: client
        })
    } catch (err) {
        response.status(500).json({
            message: "Error while update data",
            data: err
        })
    }
})

exports.getClientById = (async (request, response) => {
    try {
        const client = await clientSchema.findById(request.params.id);
        response.status(200).json({
            message: "Client retrived successfully",
            data: client
        })
    } catch (err) {
        response.status(500).json({
            message: "Error while retriving client.",
            data: err
        })
    }
})

exports.deleteClient = (async (request, response) => {
    try {
        const client = await clientSchema.findByIdAndDelete(request.params.id);
        response.status(200).json({
            message: "Client deleted successfully",
            data: client
        })
    } catch (err) {
        response.status(500).json({
            message: "Error while deleting client.",
            data: err
        })
    }
})