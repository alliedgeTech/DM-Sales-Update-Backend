const mongoose = require("mongoose")

const companyWiseItemSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        message: "Name is required."
    },
    "companyId": {
        type: mongoose.Schema.Types.ObjectId,
        ref: "company"
    }
})

module.exports = mongoose.model("companyWiseItem", companyWiseItemSchema)