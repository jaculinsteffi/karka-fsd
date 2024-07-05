const express = require("express")
const route = express.Router()
// route.use(express.json())
const userGet = require('../services/userService')
const db = require("../models/db")
const ObjectId = db.ObjectId;


route.get('/list', async (req, res) =>{
    try{
      let value = await userGet.getData()
      console.log(value,'oooo')
      res.status(201).json(value)
    }
    catch(err){
        return res.status(200).json({message : 'internal server error'})

    }
 
    
})

route.post('/add', async (req, res) =>{
    try{
        let request = req.body
        console.log(req)
        let database = await db.getDataBase()

        const collection = database.collection('users')

        // let data = {name : request.name, age : request.age, place : request.place}

        let data = request.map(item =>({
            name: item.name,
            age: item.age,
            place: item.place

        }))
        await collection.insertMany(data)
        

        return res.status(200).send({message : "Inserted Successfuly"})
    }
    catch(error){

    }
})

route.post('/edit', async(req, res) => {
   
    try{
        let data = req.body;
        // console.log("jdsfdkjfskdv");
        // console.log(data);
       
        // console.log(data.user_id);

        // const userId = new ObjectId(data.user_id);
        // console.log("ObjectId:", userId);
        // let cursor = await collection.find({_id : new ObjectId(data.user_id)})
        // let users = await cursor.toArray()

        let users = await userGet.getData({_id : new ObjectId(data.user_id)})
        // console.log("users");
        // console.log(users);
        // console.log(users.length);
       

        if(users.length == 1){
            const database = await db.getDataBase() 
            const collection = database.collection('users')
            await collection.updateOne({_id: new ObjectId(data.user_id)}, {$set:{age : data.age}})

            return res.status(200).send({message : "Updated Successfuly"})
        }

        
    }
    catch (error){
            console.log(error)
    }
})

route.post('/delete', async (req,res)=> {
    try{
        let data = req.body
        let users = await userGet.getData({_id : new ObjectId(data.user_id)})
        if(users.length == 1){
            const database = await db.getDataBase()
            const collection = database.collection('users')
            await collection.deleteOne({_id: new ObjectId(data.user_id)}, {$set:{age : data.age}})

            return res.status(200).send({message : "deleted Successfuly"})
        }
    }
    catch(e){
        console.log(e)
    }
})
module.exports = route
