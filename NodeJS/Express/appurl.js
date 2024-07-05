const express = require ('express')
// const http = require('http')



const app = express()
const bodyParser = require('body-parser')
const adminRoute = require('./routes/routes')
const browseRoute = require('./routes/routefile')
app.use(bodyParser.urlencoded())
app.use('/admin',browseRoute)
app.use('/user',adminRoute)

 

app.use((req,res)=>{
    res.status(404).send("<h1>404 page not found</h1>")
})
// app.use('/second',(req,res,next)=>{
//     console.log("hello")
    
// })

// app.use('/third',(req,res,next)=>{
//     console.log("hii...")
//     res.send("<form action='/store' method='post'><input type='text' name='product'/><input type='submit' value='submit'/></form>")
    
// })
// app.post('/store',(req,res,next)=>{
//     console.log(req.body)
//     res.send("<h1>product added</h1>")
    
// })
// const server =http.createServer(app)

// server.listen(8001)
app.listen(8002)