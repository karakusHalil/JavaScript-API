const express = require("express");
const router = express.Router();
const Category = require("../model/Category");

router.post("/", async (req,res) => {
    try {
        const { name, description } = req.body;
        
        const category = new Category({name,description});

        await category.save();

        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
})

//GET METHODU

router.get("/",async(req,res) => {
    try {
        const categories = await Category.find();
        res.status(201).json(categories);
    } catch (error) {
        res.status(500).json({error:"Sunucu hatası..."});
    }
})


module.exports = router;