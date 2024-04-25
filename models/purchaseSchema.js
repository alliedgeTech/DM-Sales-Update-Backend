const mongoose = require("mongoose")

const purchaseSchema = new mongoose.Schema({
    date: {
        type: String,
        require: true,
        message : "date is require"
    },
    invoice: {
        type: String,
        require: true,
        unique: true,
        message : "invoice is require"
    },
    vendorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "vendor"
    },
    remark: {
        type: String,
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
                message : "price is require"
            },
            qty: {
                type: Number,
                require: true,
                message : "qty is require"
      
            },
            gstper:{
                type: Number,
                require: true,
                message : "GST is require"
               },
            uom: {
                type: String,
                require: true,
                message : "Unit of mesurment is require"
            },
        }
    ]
})

module.exports = mongoose.model("purchase", purchaseSchema)