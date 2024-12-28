const express = require("express");


const app = express();

const port = 8000;

const users = [
    { id: 1, firstname: "Ali", lastname: "Veli" },
    { id: 2, firstname: "Ayse", lastname: "Kaya" },
    { id: 3, firstname: "Fatma", lastname: "Yilmaz" },
    { id: 4, firstname: "Mehmet", lastname: "Demir" },
    { id: 5, firstname: "Ahmet", lastname: "Celik" },
    { id: 6, firstname: "Elif", lastname: "Gunes" },
    { id: 7, firstname: "Hasan", lastname: "Aydin" },
    { id: 8, firstname: "Huseyin", lastname: "Kilic" },
    { id: 9, firstname: "Zeynep", lastname: "Sahin" },
    { id: 10, firstname: "Emre", lastname: "Er" },
    { id: 11, firstname: "Burcu", lastname: "Oz" },
    { id: 12, firstname: "Merve", lastname: "Cetin" },
    { id: 13, firstname: "Eren", lastname: "Uzun" },
    { id: 14, firstname: "Leyla", lastname: "Tas" },
    { id: 15, firstname: "Berk", lastname: "Orhan" }
];

app.use(express.json());

app.get("/users",(req,res) => {
    res.json(users);
})

app.post("/users",(req,res) =>{
    users.push(req.body);
    res.json(users);
})


app.delete("/users/:id",(req,res) => {
    const userId = parseInt(req.params.id);
    for(let i = 0; i<users.length; i++){
        if(users[i].id === userId){
            users.splice(i,1);
        }
    }
    res.json(users);
})


app.put("/users/:id",(req,res) => {
    const userId = parseInt(req.params.id);
    for(let i = 0; i<users.length; i++){
        if(users[i].id === userId){
            users[i] = {
                ...users[i],...req.body
            }
        }
    }
    res.json(users);
})

app.listen(port,() => {
    console.log(`Server ${port} numaralı port üzerinden yayında...`)
});