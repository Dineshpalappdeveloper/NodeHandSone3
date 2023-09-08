
const express = require("express");
const route = require("./router/userRouting");
const productRouter = require("./router/productRouting");
const validate = require("./midllerware/usermidller");

const app = express()
app.use(validate)
app.use("/", route)
app.use("/", productRouter)

const port = 3001;

app.get("/", (req, res) => {
    res.send("This is about page ")
})

app.get("/about/:id", (req, res) => {
    const stdId = req.params.id;
    console.log(stdId);
    res.send(`This is   ${stdId} Student`)
})

app.get("/api/createProduct", (req, res) => {
    const { age, name, role } = req.query;
    res.send({ age, name, role })
})

app.listen(port, () => {
    console.log("running on ", port);
})