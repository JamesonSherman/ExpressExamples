var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");  //removes the need to use .ejs on the end of the file renders
let friends = ["bill","bob","george"];


app.get("/", function(request,response){
response.render("home");
});

app.get("/fallinlovewith/:thing", function(request,response){
    let thing = request.params.thing;
    response.render("love",{thingvar: thing});
});

app.get("/posts", function(request, response){
var posts = [
{title: "post1", author: "Susy"},
{title: "post2", author: "Colt"},
{title: "post3", author: "dillion"},
{title: "post4", author: "Bob"}]
response.render("posts", {posts: posts});
});


app.post("/addfriend", function(request,response){
   let friend = request.body.newfriendform;
   friends.push(friend);
response.redirect("/friends");
});

app.get("/friends",function(request,response){
response.render("friends", {friends: friends});
});
app.listen(3000,function(){
    console.log("listening on 3000");
});