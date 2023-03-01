const express = require("express");
// const { dirname } = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/",function(req,res){
    // console.log(req.body.num1);
    var x = Number(req.body.num1);
    var y = Number(req.body.num2);
    y = y/100;
    var ans = x/(y*y);
    ans = ans.toFixed(2);
  res.send("Your BMI is "+ans);
    // res.send("<div style='background-color: green; text-align: center; font-size: 3rem; color: aqua;'><h1>The sum is <%=ans %></h1></div>");
})

app.listen(3000,function(){
    console.log("Server is logged in");
});

