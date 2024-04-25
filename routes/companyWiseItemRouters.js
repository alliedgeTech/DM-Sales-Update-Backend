const router = require("express").Router()
const itemController = require("../controller/companyWiseItemController")

router.post("/additem", itemController.addItem)
router.get("/items", itemController.getItems)
router.put("/item/:id", itemController.updateItem)
router.get("/item/:id", itemController.getItemById)
router.delete("/item/:id", itemController.deleteItem)
router.get("/item-by-company", itemController.getCompanyWiseAllItem)

module.exports = router