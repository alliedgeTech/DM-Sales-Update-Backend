const mongoose = require('mongoose')

const vendorSchema = new mongoose.Schema({
    vendorName: {
        required: true,
        type: String,
        message: "Vendor Name is required."
    },
    gstNo: {
        required: true,
        type: String,
        message: "GST number is required."
    },
    phoneNumber1: {
        required: true,
        type: Number,
        message: "Phone number is required."
    },
    phoneNumber2: {
        type: Number,
    },
    email1: {
        required: true,
        type: String,
        message: "Email is required."
    },
    email2: {
        type: String
    },
    remark: {
        required: true,
        type: String,
        message: "remark is required."
    } ,
    address: {
        required: true,
        type: String,
        message: "address is required."
    }  
})

module.exports = mongoose.model('vendor',vendorSchema)