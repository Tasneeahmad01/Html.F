const express = require("express");
const app = express();
const port = 8080;






app.get("/register",(req,res)=>{
    let{ user,password } = req.query;
 res.send(`Standard GEt requestfor the deer.`);
});

app.post("/register",(req,res)=>{
    console.log(req.body);
 res.send(`Standard GEt requestfor the deer.`);
});

app.listen(port,()=>{
    console.log(`This server was send ${port}`);
});
