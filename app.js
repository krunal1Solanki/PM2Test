const express = require('express');
const app = express();
app.get("/", (req, res) => {
    res.send("hello")
})


app.get("/crash", (req, res) => {
    throw new Error("HUHUHUUHHUHU")
})

app.listen(4001, ()=> console.log("fine"))
