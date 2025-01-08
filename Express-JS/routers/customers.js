const express = require("express");
const { route } = require("./products");
const router = express.Router();


const customers = [

        {
            id: 1,
            firstname: "Halil",
            lastname: "Altıntop",
            email: "halilAltıntop@msn.com",
            city: "İstanbul",
            town: "Başakşehir",
            phone: "+90505 353 15 00",
            balance: 15000
        },
        {
            id: 2,
            firstname: "Ayşe",
            lastname: "Yılmaz",
            email: "ayseyilmaz@gmail.com",
            city: "Ankara",
            town: "Çankaya",
            phone: "+90532 456 78 90",
            balance: 20000
        },
        {
            id: 3,
            firstname: "Mehmet",
            lastname: "Kaya",
            email: "mehmetkaya@yahoo.com",
            city: "İzmir",
            town: "Bornova",
            phone: "+90531 987 65 43",
            balance: 18000
        },
        {
            id: 4,
            firstname: "Elif",
            lastname: "Demir",
            email: "elifdemir@hotmail.com",
            city: "Antalya",
            town: "Muratpaşa",
            phone: "+90541 678 12 34",
            balance: 22000
        }
    ];
    

    router.get("/",(req,res) => {
        res.status(200).json(customers);
    });

    router.get("/:id",(req,res) => {
        const id = parseInt(req.params.id);
        let found = false;
        for(let i = 0; i < customers.length ; i++){
            if(customers[i].id === id){
                res.status(200).json(customers[i]);
                found = true;
                break;
            }
        }
        if(!found){
            res.status(401).json({
                message : "Hatalı İşlem!"
            });
        }
    });

    router.post("/",(req,res) => {
        const id = customers[customers.length-1].id +1;
        customers.push({
            id:id,
            ...req.body
        });
        res.status(201).json(customers);
    });

    router.put("/:id",(req,res) => {
        const id = parseInt(req.params.id);
        for(let i = 0; i < customers.length ; i++){
            if(customers[i].id === id){
                customers[i] = {
                    ...customers[i],
                    ...req.body

                }
            }
        }
        res.status(200).json(customers);
    })


    
    router.delete("/:id",(req,res) => {
        const id = parseInt(req.params.id);
        for(let i = 0; i < customers.length ; i++){
            if(customers[i].id === id){
                customers.splice(i,1);
            };
        }
        res.status(200).json(customers);
    })



module.exports = router;