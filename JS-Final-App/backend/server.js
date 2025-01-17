const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const routers = require("./routers");
dotenv.config({
    path: "./config/env/config.env"
})

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connection success");
    } catch (error) {
        throw error;
    }
}
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api",routers);

app.get("/",(req,res) => {
    res.send("Api sayfasına yönlendirildiniz...");
})

app.listen(PORT,async () => {
    await connect();
    console.log(`Server ${PORT} portu üzerinden yayında...`);
})