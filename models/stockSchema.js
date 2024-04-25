const mongoose = require("mongoose")

const stockSchema = new mongoose.Schema({

    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "company"
    },
    itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "companyWiseItem"
    },
    qty: {
        type: Number,
        require: true,
        message: "qty is require"
    },
    uom: {
        type: String,
        require: true,
        message: "Unit of mesurment is require"
    },
})

module.exports = mongoose.model("stock", stockSchema);