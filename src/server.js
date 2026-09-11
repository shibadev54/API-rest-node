const express = require("express");
const app= express();
app.use(
express.urlencoded({
extended: true,
}),
)
app.use(express.json())
let users = [];
app.post("/users", (req, res)=>{
 const name = String(req.body.name);
let id = Number(users.length+1);   
const user={"name": name , "id": id}
users.push(user);
if(user.name.length >= 10){
users.pop();
return res.json({"error": "texto muito longo"})
}
return res.json({"message":"usuario feito"})
})
app.get("/users" , (req,res)=>{
return res.json(users);
})
app.get("/users/:id", (req, res)=>{
const id = Number(req.params.id);
const singleUser = users.find(user => id === user.id );
const status= singleUser ? 200 : 404;
return res.status(status).json(singleUser);


})
app.listen(3000);