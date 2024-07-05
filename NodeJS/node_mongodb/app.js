const express = require ('express')
const app = express()
const bodyparser = require('body-parser')
const userRoutes = require ('./routes/user')
const script = require('./routes/script')
const schedule = require('./jobs/schedule')
const encryption = require('./routes/encryption')

app.use(bodyparser.urlencoded())
app.use(express.json()) 

app.use('/users', userRoutes)
app.use('/script', script)
app.use('/users',encryption)


app.use((req,res,next)=>{
    res.status(404).send("<h1>page not found?</h1>")
})

app.listen(3000)