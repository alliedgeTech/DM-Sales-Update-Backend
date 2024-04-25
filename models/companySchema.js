const mongoose = require("mongoose")

const companySchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        message: "Company name is required."
    }
})

module.exports = mongoose.model("company", companySchema)