const express = require("express");
const bodyParser = require("body-parser");
const date=require(__dirname +"/date.js");

// console.log(date());
const app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.set("view engine", "ejs");
//App.use(bodyParser.urlencoded({extended:true}));

//Items is defined here so that we can access it as soon as page loads ,i.e, via get in ine 17.
const items = ["Reading Book", "Riding bike", "Playing Guitar"];
const worklist = [];
app.get("/", function(req, res) {

  //Using our resuable function date to feature date in the app.
  const day=date.getDate();
  // const day=date.getDay();
  res.render("list", {
    listTitle:day,
    newitems: items
  });
});
//making apost request to the list.ejs and vice versa.
app.post("/", function(req, res) {
  // console.log(req.body);
  const item = req.body.value;
  if (req.body.list === "Work") {
    worklist.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work",
    newitems: worklist
  });
});
app.get("/about",function(req,res){
  res.render("about");
})

//listening to a certain port
app.listen(3000, function() {
  console.log("Server running on port 3000");
});
