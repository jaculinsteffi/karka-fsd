const express = require('express')
const route = express.Router()
const path = require('path')
route.get('/third',(req,res,next)=>{
    console.log("hii...")
    // res.send("<form action='/user/submit' method='post'><input type='text' name='product'/><input type='submit' value='submit'/></form>")
    res.sendFile(path.join(__dirname,'..','views','product.html'))
    
})
route.post('/submit',(req,res,next)=>{
    console.log(req.body)
    res.send("<h1>product added</h1>")
    
})

route.get('/a1',(req,res)=>{
    console.log("a2")
    res.send("<h1>a2</h1>")
})
module.exports = route