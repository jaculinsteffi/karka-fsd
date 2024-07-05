const db = require("../models/db")

const getData=async(data = {}) => {
    try{
        let database = await db.getDataBase() 

        const collection = database.collection('users')
    
        const cursor = await collection.find(data)
        let users = await cursor.toArray()
        console.log(users, 'users')
        return users
    }
    catch(error){
            return error.message
    }
}

module.exports = {getData}