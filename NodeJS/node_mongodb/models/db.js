const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient; 
const ObjectId = mongodb.ObjectId

let database;

async function getDataBase(){
    const client = await mongoClient.connect('mongodb://127.0.0.1:27017')
    database = client.db('karka') 

    if(!database){
        console.log('Database not connected')
    }

    return database; 
} 

module.exports = {
    getDataBase, ObjectId
}