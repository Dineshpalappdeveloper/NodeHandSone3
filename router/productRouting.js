const productRouter = require("express").Router();

productRouter.get("/api/product/:id", (req, res) => {
    res.send("this is single page")
})


productRouter.get("/api/order", (req, res) => {
    res.send("this is order page")
})
productRouter.get("/api/creteProduct", (req, res) => {
    res.send("this is creteProduct page")
})
module.exports = productRouter;