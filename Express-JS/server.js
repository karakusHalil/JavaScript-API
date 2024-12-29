const express = require("express");
const accessControl = require("./middleware");
const routers = require("./routers");


const app = express();

const port = 8080;



app.use(accessControl);
app.use(express.json());
app.use("/api",routers);



app.listen(port,() => {
    console.log(`Server ${port} numaralı port üzerinden yayında...`)
});