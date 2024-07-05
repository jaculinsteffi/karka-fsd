const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: String,
    age:Number,
    createdAt:Date,
    updatedAt:Date,
    hobbies:[String],
    contact:{
        mobNum:Number,
        email:String
    }
})

const userModel = mongoose.model('User',userSchema)
module.exports = userModel