const express = require("express");
const app= express();
app.use(
express.urlencoded({
extended: true,
}),
)
app.use(express.json())
app.get('/', (req, res)=>{
res.send("bem vindo");
})
app.get('/users', (req , res)=>{
res.send("esses sao usuarios");

})
app.get('/products', (req, res)=>{
res.send("esses sao produtos");
})
app.listen(3000);