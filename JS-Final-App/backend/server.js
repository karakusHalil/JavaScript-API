const express = require("express");
const dotenv = require("dotenv");
const routers = require("./routers");
dotenv.config({
    path: "./config/env/config.env"
})

const PORT = process.env.PORT;
const app = express();

app.use("/api",routers);

app.get("/",(req,res) => {
    res.send("Api sayfasına yönlendirildiniz...");
})

app.listen(PORT, () => {
    console.log(`Server ${PORT} portu üzerinden yayında...`);
})