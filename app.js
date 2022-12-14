const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + "/public"));

app.listen(3000,()=>{
    console.log("Servidor iniciado");
})


app.get("/",(req,res)=>{
    res.sendFile (path.resolve("./views/index.html"))
})


app.get("/productCart",(req,res)=>{
    res.sendFile (path.resolve("./views/productCart.html"))
})

app.get("/productDetail",(req,res)=>{
    res.sendFile (path.resolve("./views/productDetail.html"))
})

app.get("/register",(req,res)=>{
    res.sendFile (path.resolve("./views/register.html"))
})

app.get("/login",(req,res)=>{
    res.sendFile (path.resolve("./views/login.html"))
})
