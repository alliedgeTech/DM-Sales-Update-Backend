const express = require("express")
const cors = require("cors")
const app = express()

// dot env config and database config
require("dotenv").config()
require("./config/dbConfig").dbConnect()
const clientRouters = require("./routes/clientRoutes")
const vendorRouters = require("./routes/vendorRoutes")
const companyRouters = require("./routes/comapnyRoutes");
const itemsRouters = require("./routes/companyWiseItemRouters");
const sellRouters = require("./routes/sellRoutes");
const purchaseRouters = require("./routes/purchaseRoutes");
const stockRouters = require("./routes/stockRoutes");
const { enterFinalcialYearInAllData } = require("./controller/sellController")

// enable statements
// enterFinalcialYearInAllData()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// users routes 
app.use("/distributer/api/v1/public/client", clientRouters);

//vendor routes
app.use("/distributer/api/v1/public/vendor", vendorRouters)

// company routes
app.use("/distributer/api/v1/public/company", companyRouters)

// item routers
app.use("/distributer/api/v1/public/item", itemsRouters)

// Purchase routers
app.use("/distributer/api/v1/public/purchase", purchaseRouters)

// sell Routes
app.use("/distributer/api/v1/public/sell", sellRouters)

// Stock Routes
app.use("/distributer/api/v1/public/stock", stockRouters)


// app.get('/incorrect-url-path', (req, res) => {
//     // Redirect to the main page using a 301 status code
//     res.redirect(301, '/');
// });
app.listen(process.env.PORT, () => {
    console.log("server listern on port number : ", process.env.PORT)
})