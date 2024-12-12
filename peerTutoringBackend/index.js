const express = require('express');
const app = express();
const {mongoose} = require('mongoose');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(express.json());

JWT_SECRET = "0fc38d059d070589e18d7f0c0342ffaf68a77c90a5fd0442973fe60695c77b05"
const mongoUrl = "mongodb+srv://ohenek20:kwadwo03@practical-ia.xa0blzh.mongodb.net/?retryWrites=true&w=majority&appName=practical-ia"
//database connection
mongoose.connect(mongoUrl)
.then(() => console.log("MondoDb Connected"))
.catch((e) => console.log("MongoDb not connected", e))

require("./UserSchema")
const User = mongoose.model("userInfo");

app.get("/", (req, res) => {
    res.send({status: "Started"})
})
//register user
app.post("/register", async (req, res) => {
    const {name, email, password} = req.body;

    //encrypt password
    const encryptedPassword = await bcrypt.hash(password, 8)
 
//check if user already exists
    const userExists = await User.findOne({email: email})
    if(userExists){
        return res.status(400).send({data: "User already exists!!"})
    }

    try {
        await User.create({
            name: name,
            email: email,
            password: encryptedPassword,
        })
        res.send({status: "ok", data: "User created"})
    } catch (error) {
        res.status(500).send({status: "Error", data: error})
    }
})
//login user
app.post("/login", async(req, res) => {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email: email })

    if(!userExists){
        return res.status(400).send({data: "User does not exist!!"})
    }
    if(await bcrypt.compare(password, userExists.password)){
        const token = jwt.sign({email: userExists.email}, JWT_SECRET);
    
    if(res.status(201)){
        return res.send({status: "ok", data: token})
    }else{
        return res.send({error: "error"})
    }}
})

app.listen(5001, () => {
    console.log('Server has started');
})