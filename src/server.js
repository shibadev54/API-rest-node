const express = require("express"); //express
const mysql = require("mysql2/promise");
require("dotenv").config();
const app= express();
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
app.use(                                                         //middleware form
express.urlencoded({
extended: true,
}),
)
app.use(express.json())                                         //middleware json
                                                 
app.post("/users", async (req, res)=>{                                //post

})
app.get("/users" , async (req,res)=>{                                     //get all
const [rows] = await pool.query(
'SELECT * FROM User'
);
})
app.get("/users/:id", async (req, res)=>{                                   //get 1

})
app.put("/users/:id", async(req, res)=>{                                //put

})
app.patch("/users/:id", async (req, res)=>{                                //patch

})
app.delete("/users", async (req, res)=>{                               //delete all

})
app.delete("/users/:id", async(req, res)=>{                         //delete one
 
})
app.listen(3000);