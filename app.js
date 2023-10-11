const express = require("express");
const app = express();

app.set("views", "./views");
app.set("view engine","ejs");

const home =require("./routes/home");
app.use("/", home);

app.get("/",(req,res)=>{
    res.render("home/login");
});


module.exports =app;
// dfadf