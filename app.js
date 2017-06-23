const express = require("express");
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static("public"));

app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

let toDo = [

];

let completed = [];


app.get("/", function(req, res){
  res.render("index", {toDo: toDo, completed: completed});
});

app.post("/", function(req, res){
  if(req.body.newTodo){
  toDo.push(req.body.newTodo);
  res.redirect("/");
  }
  else {
    toDo.splice(toDo.indexOf(req.body.incomplete), 1);
    completed.push(req.body.incomplete)
    res.redirect("/")
  }
});

app.listen(3000, function(){
  console.log("App is running on localhost:3000");
});