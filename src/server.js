const express = require("express");
const app= express();
app.use(
express.urlencoded({
extended: true,
}),
)
app.use(express.json())
let users = [];
app.post("/users/:name/:id", (req, res)=>{
const user =req.params;
users.push(user);
res.json({"message":"usuario feito"})
})
app.get("/users" , (req,res)=>{
res.json(users);
})
app.listen(3000);