const express = require("express");
const dbConnect = require("./db");
const app = express();
app.use(express.json())

app.get("/", async(req, res) => {
    let data = awaitUser.find()
    res.send(data)
})


//post for creating
app.post("/", async(req, res) => {
    let data = await User.create(req.body)
    res.send("done")
})