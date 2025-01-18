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

//GET CATEGORY

router.get("/",async(req,res) => {
    try {
        const categories = await Category.find();
        res.status(201).json(categories);
    } catch (error) {
        res.status(500).json({error:"Sunucu hatası..."});
    }
})

//GETBYID CATEGORY



//UPDATE CATEGORY

router.put("/:categoryId",async(req,res) => {
    try {
        const categoryId = req.params.categoryId;
        const updatedInfo = req.body;
        const updatedCategory = await Category.findById(categoryId);
        if(!updatedCategory){
            res.status(404).json({error: "Kategori bulunamadı..."});
        }
        const resultCategory = await Category.findByIdAndUpdate(categoryId,updatedInfo,{ new: true, runValidators: true });
        res.status(200).json(resultCategory);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
})

module.exports = router;