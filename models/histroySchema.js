const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
    date: {
        type: String,
        required: true,
        message: "date is required"
    },
    type: {
        type: String,
        enum: [
            "sell",
            "purchase"
        ],
        required: true,
        message: "type is required"
    },
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "company"
    },
    itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "companyWiseItem"
    },
    inQty: {
        type: Number,
        required: true,
        message: "qty is required"

    },
    currentQty: {
        type: Number,
        required: true,
        message: "remaining stock is requiredd"
    }
})

module.exports = mongoose.model("history", historySchema)