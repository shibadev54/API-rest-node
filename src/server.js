const express = require("express");
const app= express();
app.use(
express.urlencoded({
extended: true,
}),
)
app.use(express.json())
let users = [];
app.get('/', (req, res)=>{
res.json({"message":"olá, seja bem vindo",
    "user": "você é o julio"}
);
})
app.post("/users", (req, res)=>{
const user = req.body;
users.push(user);
res.json(user);
})
app.get("/users", (req,res)=>{
res.json(users);
})
app.get('/products', (req, res)=>{
res.json({"message":"esses sao produtos"});
})
app.listen(3000);