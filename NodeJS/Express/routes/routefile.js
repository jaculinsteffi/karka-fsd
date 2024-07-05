const express = require('express')
const route = express.Router()
const path = require('path')

route.get('/first',(req,res)=>{
    // res.send("<form action='/admin/last' method='post'><input type='text' name='product'/><input type='submit' value='submit'/></form>")
    // res.sendFile("/views,view.html")
    // console.log()
    res.sendFile(path.join(__dirname,'..','views','view.html'))
})
route.post('/last',(req,res)=>{
    console.log(req.body)
    res.send("<h1>hii</h1>")
})

route.get('/a1',(req,res)=>{
    console.log("a1")
    res.send("<h1>a1</h1>")
})
module.exports = route