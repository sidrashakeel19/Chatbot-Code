//npm init -y to initiaite project\
//npm install express
//npm is crate.io for javascript
const express = require("express"); //Module add
const app = express(); //object created for express

app.use(express.json());

var students = [
    {id: 1, name: "Sidra"},
    {id: 2, name: "Zain"},
    {id: 3, name: "Zayyan"},
    {id: 4, name: "Shakeel"}
]
//GET is used for fetching data
app.get("/", function(req,res) {
    console.log("Student list Fetch");
    res.send("The following students are available in this batch 01" + JSON.stringify(students))
});

app.get("/home", function(req,res) {
    console.log("The basic request is call");
    res.send("home")
});

app.get("/arrow", function(req,res) {
    res.send("Hello from arrow function")
});

app.post("/student", (req,res)=>{
    var student = {
        id: students.length + 1,
        name: req.body.name
    }
    students.push(student)
    console.log("The current students are" + $(students.length))
    res.send("The student is added");
});
//update
app.put("/student/:id", (req,res)=>{
   var student = students.find(s => s.id === req.params.id)
   student.name = req.body.name 
   console.log(req.params.id);
   res.send("Record is updated")
});

app.listen(5000, function() {
    console.log("The server is up on port 5000")
})