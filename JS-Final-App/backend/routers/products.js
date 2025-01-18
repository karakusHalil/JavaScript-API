const express = require("express");
const router = express.Router();
const Product = require("../model/Product");


router.post("/",async (req,res) => {
    try {
        //const {name , price, description, stock} = req.body;
        //const product = new Product(req.body);
        //res.json(name,price,description,stock);

        // const {name , price, description, stock} = req.body;
        // const product = new Product ({name , price, description, stock});
        // await product.save();
        // res.status(201).json(product);

        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;