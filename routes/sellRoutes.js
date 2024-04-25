const router = require("express").Router()
const sellController = require("../controller/sellController")

router.post("/add-sell", sellController.addSell);
router.get("/get-sell", sellController.getSell);
router.delete("/deletesell/:id", sellController.deleteSell)
router.put("/datewisesellprice", sellController.datewisesellprice)
router.put("/datewisesellitem", sellController.datewisesellitem)
router.delete("/deletesell/:id", sellController.deleteSell)
router.put("/update-money", sellController.updateDebitMony)
router.put("/updateaddmoneydate", sellController.updateDebitMoneyDate)
router.get("/get-price-history", sellController.getSellWisePriceHistory)
router.put("/get-sellbill", sellController.getsellBillNumber);
router.put("/get-datewiseaddmoney", sellController.datewiseAddMoneyList)
router.put("/get-between", sellController.getRecordBetweenDate)
router.get("/search", sellController.getClientWiseSellbills);

module.exports = router