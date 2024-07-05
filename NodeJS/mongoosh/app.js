// const mongoose = require('mongoose')
// const User = require('./models/userSchema')

// mongoose.connect('mongodb://localhost:27017/karka')
// .then(()=>{
//     console.log("connected")
// })
// .catch(()=>{
//     console.log("connection error")
// })

// const user = new User({
//     name:"shivu",
//     age:28
// })
// user.save().then(()=>{
//     console.log("user saved")
// })



const mongoose = require('mongoose')
const User = require('./models/userSchema')

mongoose.connect('mongodb://localhost:27017/karka')
.then(()=>{
    console.log("connected")
})
.catch(()=>{
    console.log("connection error")
})

const user = new User({
    name:"shivu",
    age:28
})
async function run () {
    const inserteddata = await User.create({
        name:"sivu",
        age:"23",
        contact:{mobNum:75}
    })
console.log(inserteddata)
}
run() 