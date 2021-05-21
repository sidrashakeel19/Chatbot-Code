//MVC Model View Controller
const express = require("express");
const app = express();
const bodyParser = require("body-parser")
//can also use express
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: false}))

app.use("/",require("./user_routes"));

app.listen(4000,()=>{
    console.log("Server is up on 4000")
})

