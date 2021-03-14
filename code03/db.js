const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/CompExam', 
{
    useUnifiedTopology: true,
    newUrlParser: true,
    useNewUrlParser: true
},
    
(err)=>{
    if(!err)
    {
        console.log("Database connected")
    }
    else{
        console.log("Database not connected")
    }
});
module.exports = mongoose;

