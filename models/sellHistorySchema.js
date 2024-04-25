const mongoose = require("mongoose")

const sellAmountHistorySchema = new mongoose.Schema({
    sellId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "sell",
        required: [true, "sell bill id is required."]
    },
    type: {
        type: String,
        required: [true, "Payment type is required."]
    },
    date: {
        type: String,
        required: [true, "Date is required."]
    },
    amount: {
        type: Number,
        required: [true, "Amount is required."]
    },
    receiptno:{
        type: String,
    }
})

module.exports = mongoose.model("sellAmountHistory", sellAmountHistorySchema)