const express = require("express"); //express
const mysql = require("mysql2/promise");
require("dotenv").config();
const app= express();
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});
app.use(                                                         //middleware form
express.urlencoded({
extended: true,
}),
)
app.use(express.json())                                         //middleware json
                                                 
app.post("/users/:name/:job/:age", async (req, res)=>{     //post
const {name, job, age} = req.params;
const [user] = await pool.execute('INSERT INTO users (name, job, age) VALUES(?,?,?)', [name, job, age]);
res.status(201).json({"message": "usuario criado!"});
})
app.get("/users" , async (req,res)=>{                                     //get all
const [users] = await pool.query('SELECT * FROM users');
res.status(200).json({"message": "esses sao os usuarios:", "Users": users});
})
app.get("/users/:id", async (req, res)=>{                                   //get 1
const id = req.params.id;
const [user] = await pool.query('SELECT name, job, age, created_at, updated_at FROM users WHERE id = ?', [id]);
res.status(200).json({"message": "esse é um usuario:", "User": user});
})
app.put("/users/:name/:job/:age/:id", async(req, res)=>{                                //put
const {name, job, age, id} = req.params;
const [user] = await pool.execute('UPDATE users SET name = ?, job = ?, age =? WHERE id = ?', [name, job, age, id]);
res.status(200).json({"message": "usuario editado"});
})
app.patch("/users/:id", async (req, res)=>{                                //patch

})
app.delete("/users", async (req, res)=>{                               //delete all
const [users] = await pool.query('TRUNCATE TABLE users');
res.status(200).json({"message": "usuarios deletados"});
})
app.delete("/users/:id", async(req, res)=>{                         //delete one
const id = req.params.id;
const [user] = await pool.execute('DELETE FROM users WHERE id = ?', [id]);
res.status(200).json({"message": "usuario deletado"});
})
app.listen(3000);