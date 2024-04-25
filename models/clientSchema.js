const mongoose = require("mongoose")

const clientSchema = new mongoose.Schema({
    "name": {
        required: true,
        type: String,
        message: "user name is required."
    },
    "phoneNumber": {
        required: true,
        type: Number,
        message: "Phone number is required."
    },
    "email": {
        type: String,
    },
    "address": {
        required: true,
        type: String,
        message: "Address is required."
    }
})

module.exports = mongoose.model("client", clientSchema)