const express = require("express");
const router = express.Router();

const products = [
    {
        id : 1,
        name : "Toshiba Laptop",
        price : 15000,
        stockAmount : 12,
        categories : "Bilgisayar"
    },
    {
        id : 2,
        name : "Dell Laptop",
        price : 14000,
        stockAmount : 10,
        categories : "Bilgisayar"
    },
    {
        id : 3,
        name : "Casper Desktop",
        price : 15000,
        stockAmount : 12,
        categories : "Bilgisayar"
    },
    {
        id : 4,
        name : "Samsung S20",
        price : 13000,
        stockAmount : 17,
        categories : "Cep Telefonu"
    },
    {
        id : 5,
        name : "Iphone 15",
        price : 17000,
        stockAmount : 15,
        categories : "Cep Telefonu"
    }
]


router.get("/",(req,res) => {
    res.json(products);
})

module.exports = router;