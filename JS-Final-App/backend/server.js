const express = require("express");
const dotenv = require("dotenv");


const PORT = 6000;
const app = express();



app.listen(PORT, () => {
    console.log(`Server ${PORT} portu üzerinden yayında...`);
})