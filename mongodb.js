const mongoose=require("mongoose")

mongoose.connect("mongodb://0.0.0.0:27017/LoginSignupTutorial")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed to connect");
})

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        reuired:true
    },
    password:{
        type:String,
        requied:true
    }
})

const collection = new mongoose.model("LoginCollection",LogInSchema)

module.exports = collection 