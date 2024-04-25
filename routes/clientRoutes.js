const express = require("express")
const clientController = require("../controller/clientController")

const router = express.Router()

// Client routers
router.post('/addclient', clientController.addClient)
router.get("/getclient", clientController.getClients)
router.put("/client/:id", clientController.updateClient)
router.get("/client/:id", clientController.getClientById)
router.delete("/client/:id", clientController.deleteClient)

module.exports = router