const express = require("express");
const router = express.Router();
const Product = require("../model/Product");
const { route } = require("./auth");


router.post("/",async (req,res) => {
    try {
        //const {name , price, description, stock} = req.body;
        //const product = new Product(req.body);
        //await product.save();
        //res.json(name,price,description,stock);

        //Daha güvenli.
        // const {name , price, description, stock} = req.body;
        // const product = new Product ({name , price, description, stock});
        // await product.save();
        // res.status(201).json(product);

        //Daha hızlı, ancak veri doğrulama yok
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
})


//GET PRODUCTS

router.get("/",async(req,res) => {
    try {
        //find metodu tablodaki verileri getirir
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({error: "Sunucu hatası..."});
    }
})

//GETBYID PRODUCTS

router.get("/:productId",async(req,res) => {
    try {
        const productId = req.params.productId;
        const product = await Product.findById(productId);
        if(!product){
            return res.status(404).json({error: "Ürün bulunamadı..."});
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
})

//UPDATE PRODUCT

router.put("/",async(req,res)=>{
    try {
        const updatedProduct = req.body;
        const product = await Product.findById(updatedProduct._id);
        if(!product){
            return res.status(404).json({error : "Ürün bulunamadı..."});
        }
        
        const newProduct = await Product.findByIdAndUpdate(updatedProduct._id,updatedProduct, { new: true, runValidators: true });
        res.status(200).json(newProduct);
    } catch (error) {
        res.status(500).json({error: "Sunucu hatası..."});
    }
})


module.exports = router;