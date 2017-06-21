const express = require("express");
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

const todos = [];

app.get("/", function(req, res) {
  res.render("index", { todos: todos });
});

app.post("/", function (req, res) {
  todos.push(req.body.todo);
  res.redirect('/');
});

app.listen(3000, function() {
  console.log("App is running on localhost:3000");
});