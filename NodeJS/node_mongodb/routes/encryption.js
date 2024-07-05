const express = require ('express')
const jwt = require('jsonwebtoken')
const db = require('../models/db')
const bcrypt = require('bcrypt')
const routes = express.Router()
require('dotenv').config()

routes.use(express.json());


routes.post('/register', async (req,res)=>{
    const {username , password} = req.body
    console.log(password,'ppp');
    let database = await db.getDataBase()
    const collection = database.collection('reg')

    await bcrypt.genSalt(10, (err,salt)=>{
       bcrypt.hash(password, salt, (err, hashedPassword)=>{
            const password = hashedPassword
            console.log(hashedPassword);
            let data = {username : username, password : password}
            console.log(data);
            collection.insertOne(data)
            .then(()=>res.json("user added"))
            .catch(err=>res.status(400).json('error:'+err))
        })
    })
})
routes.post('/login', async(req,res)=>{
    try{
        const {username , password} = req.body
        
    
        let database = await db.getDataBase()
        const collection = database.collection('reg')
        const user = await collection.findOne({username: username})
        // console.log(user,"uuuuu")
        if(!user){
            return res.status(400).send("user not found")
        }
        // let users = await cursor.toArray()

        var validpass = await bcrypt.compare(password, user.password)
        if(!validpass){
            return res.status(400).send("password incorrect")
        }
        // return res.status(200).json("login successfull")
        const data = {name : username}
        const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN, {expiresIn:'1h'})
        res.json({'accessToken' : accessToken})

    }
    catch(err){
        console.log(err)
    }
})

const verifyToken = (req,res,next)=>{
    const token = req.body.token;
    if(!token){
        return res.status(401)
    }
    jwt.verify(token, process.env.ACCESS_TOKEN,(err,user)=>{
        if(err){
            return res.status(401)
        }
        req.user = user
        next()
    })
}

routes.post('/add-products', verifyToken, (req,res)=>{
    console.log(req.body , "req" )
    return res.json( {"message" : req.body})
})

module.exports = routes

// const express = require('express');
// const db = require('../models/db');
// const bcrypt = require('bcrypt');
// const routes = express.Router();

// routes.post('/register', async (req, res) => {
//     try {
//         const { username, password } = req.body;
//         console.log(password, 'ppp');
        
//         let database = await db.getDataBase();
//         const collection = database.collection('reg');

        
//         const salt = await bcrypt.genSalt(10);
        
        
//         const hashedPassword = await bcrypt.hash(password, salt);

        
//         const data = { username: username, password: hashedPassword };
//         console.log(data);

        
//         await collection.insertOne(data);

        
//         res.json("user added");
//     } catch (err) {

//         res.status(400).json('error: ' + err);
//     }
// });

// module.exports = routes;


