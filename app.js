const express=require("express");
const bodyParser=require("body-parser");

const app=express();

let items=[];
let workitems=[];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){

let today=new Date();
let options={
weekday:"long",
day:"numeric",
month:"long"
};

let day=today.toLocaleDateString("en-US",options);

res.render("list",{ejsday:day,newListItems:items});


});



app.get("/work",function(req,res){
  res.render("list",{ejsday:"Work todo",newListItems:workitems});
});

app.post("/",function(request,response){
let item=request.body.newItem;
if(request.body.buttonval==="Work"){
  workitems.push(item);
  response.redirect("/work");
}
else{
  items.push(item);
  response.redirect("/");
}
//console.log(request.body);
console.log(item);

});

//
// app.post("/work",function(req,res){
// let item=req.body.newItem;
// workitems.push(item);
//
// res.redirect("/work");
// });
app.get("/about",function(req,res){
  res.render("about");
})

app.listen(3000,function(){
  console.log("Server running on port 3000");
});
