const express = require("express");
const app= express();
app.use(
express.urlencoded({
extended: true,
}),
)
app.use(express.json())
let users = [];
app.post("/users/:name/?i=0", (req, res)=>{
const user =req.params;
let i=req.params.i;
users.push(user);
i++;
if(user.name.length >= 10){
users.pop();
return res.json({"error": "texto muito longo"})
}
return res.json({"message":"usuario feito"})
})
app.get("/users/?i" , (req,res)=>{
if(!users[i]){
return res.json(users);    
}
else{return res.json(users[i])}

})
app.listen(3000);