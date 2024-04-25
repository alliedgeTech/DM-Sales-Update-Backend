const express =require("express")
const vendorController = require("../controller/vendorController");


const route= express.Router();

route.post("/addvendor",vendorController.addvendor)
route.get("/getvendor",vendorController.getVendors)
route.get("/vendor/:id", vendorController.getVendorById)
route.put("/vendor/:id", vendorController.updateVendor)
route.delete("/vendor/:id", vendorController.deleteVendor)
module.exports=route