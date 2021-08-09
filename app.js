//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const date = require(__dirname +"/date.js");


// console.log(date());

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
let items = ["Buy Food","Cook","Eat Food"];
let workItem =[] ;
app.set('view engine', 'ejs');

app.get("/",function(req,res){
  
    let day = date.getDat ();

    
    res.render("list", {listTittle: day , newListItem : items}); 
});


app.get("/work" , function(req , res){
    res.render("list", {listTittle : "Work List", newListItem : workItem})
});


app.get("/about",function(req,res){
    res.render("about");
});
app.post("/work",function(req,res){
    let item = req.body.newItem;
    workItem.push(item);
    console.log(workItem);
    res.redirect("/work");
})

app.post("/",function(request , response){
    // console.log(request.body);
    let item = request.body.newItem ;
    if(request.body.list === "Work"){
        workItem.push(item);
        response.redirect("/work")
    }
     else
     {
        items.push(item);
        console.log(items);
        response.redirect("/");
     }
   
});
 
app.listen(3000, function () {
    console.log("server running on port 3000");
})