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
const user={"name": String(req.body.name) , "id": Number(users.length+1)}
users.push(user);
if(user.name.length >= 10){
users.pop();
return res.status(422).json({"error": "texto muito longo"})
}
else{
return res.status(201).json({"message":"usuario feito"})    
}
})
app.get("/users" , (req,res)=>{
if(users.length <=0){
return res.status(422).json({"error":"array vazio"});
}
else{
    return res.status(200).json(users);
}

})
app.get("/users/:id", (req, res)=>{
const id = Number(req.params.id);
const singleUser = users.find(user => id === user.id );
const status= singleUser ? 200 : 404;
return res.status(status).json(singleUser);


})
app.listen(3000);