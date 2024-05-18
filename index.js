// let signupBtn = document.getElementById("signupBtn");
// let signinBtn = document.getElementById("signinBtn");

const express = require("express")
const app = express()
const path = require("path")
// const hbs=require("hbs")
// const { template } = require("handlebars")
const collection = require("./mongodb")


//const templatePath=path.join(__dirname,'..')

app.use(express.json())
// app.set("view engine","hbs")
// app.set("views",templatePath)
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.render("index.html");
})

app.get("/signedin",(req,res)=>{
    res.render("home.html");
})

app.post("/",async (req,res)=>{

    const data={
        name: req.body.name,
        email: req.email.email,
        password: req.body.password
    }

    if(signinBtn.classList == "disable"){
    
        await collection.insertMany([data])
    
        res.render("index")

    }

    else if(signupBtn.classList == "disable"){

        try {
            console.log('${email} and ${password}')

        } catch(error) {
            console.log("Invalid Information")
        }
    }

})

app.listen(3000,()=>{
    console.log("port connected");
})