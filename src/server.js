const express = require("express"); //express
const app= express();
app.use(                                                         //middleware form
express.urlencoded({
extended: true,
}),
)
app.use(express.json())                                         //middleware json
let users = [];                                                 //array
app.post("/users", (req, res)=>{                                //post
const user={"name": String(req.body.name) ,"job":String(req.body.job),"id": Number(users.length+1)}
users.push(user);
if(user.name.length >= 10 || user.job.length >=20){
users.pop();
return res.status(422).json({"error": "too many caracters"})
}
else{
return res.status(201).json({"message":"user created"})    
}
})
app.get("/users" , (req,res)=>{                                     //get all
if(users.length <=0){
return res.status(422).json({"error":"array empty"});
}
else{
    return res.status(200).json(users);
}

})
app.get("/users/:id", (req, res)=>{                                   //get 1
const id = Number(req.params.id);
const singleUser = users.find(user => id === user.id );
const status= singleUser ? 200 : 404;
return res.status(status).json(singleUser);
})
app.put("/users/:id", (req, res)=>{                                //put
const id= Number(req.params.id);
const indexUser = users.findIndex(user => user.id === id);
if(indexUser !== -1){
users[indexUser].name = String(req.body.name);
users[indexUser].job = String(req.body.job);
return res.status(200).json({"message":"user edited!"}) ;
}
else{
    return res.status(422).json({"error":"this user don't exist"});}
})
app.patch("/users/:id", (req, res)=>{                                //patch
const id = Number(req.params.id);
const indexUser =users.findIndex(user => user.id === id);
const body = req.body;
if(indexUser !== -1){
users[indexUser] ={...users[indexUser], ...body, id}
return res.status(200).json({"message":"user edited!"}) ;
}
else{
return res.status(422).json({"error":"this user don't exist"})
}
})
app.listen(3000);