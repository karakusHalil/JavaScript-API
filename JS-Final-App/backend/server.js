const express = require("express");
const dotenv = require("dotenv");

dotenv.config({
    path: "./config/env/config.env"
})

const PORT = process.env.PORT;
const app = express();



app.listen(PORT, () => {
    console.log(`Server ${PORT} portu üzerinden yayında...`);
})