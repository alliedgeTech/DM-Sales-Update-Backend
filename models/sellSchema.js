const mongoose = require("mongoose")

const sellSchema = new mongoose.Schema({
    date: {
        type: String,
        require: true,
        message: "date is require"
    },
    paymentType: {
        type: Number,
        require: true,
        message: "payment is require"
    },
    paymentMode: {
        type: String,
        require: true,
        message: "paymentMode is require"
    },
    sellbillno: {
        type: String,
        require: true,
        unique: true,
        message: "Sellbillno is require",
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "client"
    },
    remark: {
        type: String,
        require: true
    },
    total: {
        type: Number,
        require: true
    },
    items: [
        {
            companyId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "company"
            },
            itemId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "companyWiseItem"
            },
            price: {
                type: Number,
                require: true,
                message: "price is require"
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
        }
    ]
})

module.exports = mongoose.model("sell", sellSchema)