// const {client} = require('../config/db')
// const db = client.db('taskmanagementsystem')
// const collection = db.collection('appuser')
// const projectCol = db.collection('addproject')


// module.exports={ collection, projectCol}


const mongodb=require('mongodb')
const mongoClient=mongodb.MongoClient
const ObjectId=mongodb.ObjectId

let database

async function getDatabase(){
    const client = await mongoClient.connect("mongodb://localhost:27017")
    database=client.db('taskmanagementsystem')

    if(!database){
        console.log("Database not connected")
    }
    return database
}

module.exports={getDatabase,ObjectId}