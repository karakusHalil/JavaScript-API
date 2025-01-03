const express = require("express");
const { route } = require("./products");
const router = express.Router();

const categories = [
    {
        id: 1,
        name : "Bilgisayar",
    },
    {
        id: 2,
        name : "Cep Telefonu",
    },
    {
        id: 3,
        name : "Televizyon",
    },
    {
        id: 4,
        name : "Beyazeşya",
    },
    {
        id: 5,
        name : "Robot Süpürge",
    },
    {
        id: 6,
        name : "Ses Sistemi",
    },
]


router.get("/",(req,res) => {
    res.status(200).json(categories);
});

router.get("/:id",(req,res) => {
    const id = parseInt(req.params.id);
    for(let i = 0; i < categories.length ; i++){
        if(categories[i].id === id){
            res.status(200).json(categories[i]);
        }else{
            res.status(401).json({
               message : "Hatalı İşlem !" 
            })
        }
    }
})

router.post("/",(req,res) => {
    const id = categories[categories.length-1].id +1;
    categories.push({
        id:id,...req.body
    });
    res.status(201).json(categories);
})

router.put("/:id",(req,res) => {
    const id = parseInt(req.params.id);
    for(let i = 0; i < categories.length ; i++){
        if(categories[i].id === id){
            categories[i] = {
                ...categories[i],
                ...req.body
            }
        }
    }
    res.status(200).json(categories);
})


router.delete("/:id",(req,res) => {
    const id = parseInt(req.params.id);
    for(let i = 0; i < categories.length ; i++){
        if(categories[i].id === id){
            categories.splice(i,1);
        };
    }
    res.status(200).json(categories);
})

module.exports = router;