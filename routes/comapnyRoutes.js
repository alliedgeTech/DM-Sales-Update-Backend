const express = require("express")
const companyController = require("../controller/companyController")

const router = express.Router();

router.post('/addcompany', companyController.addcompany)
router.get('/companys', companyController.getAllcompany)
router.delete('/company/:id', companyController.deletecompanyById)

module.exports = router