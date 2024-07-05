const express = require('express')
const db = require('../modals/db')
const { Cursor } = require('mongoose')
const { ObjectId } = require("mongodb");

const routes = express.Router()
const auth = require('./auth')

routes.post('/add', auth.verifyToken, async(req,res)=>{
    try{
   const { projectname, projectemail, projectdescription, projectrequirement, projectdeadline, projectstatus} = req.body

   let database = await db.getDatabase();
   const addedproject = await database.collection('projectCols').insertOne(req.body)
   res.status(201).json({ message: "Project Added successfully" })
    }
    catch(error){
        console.log(error)
        res.status(500).json({ message: "Internal server error" })
    }
})
routes.get('/all', async(req,res)=>{
    try {
        let database = await db.getDatabase()
        const collection = database.collection('projectCols')
        
        const cursor = collection.find({})
        const projects = await cursor.toArray()

        res.status(200).json(projects)

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Internal server error" })
    }

})
routes.post('/edit', async(req,res)=>{
    try{
    let data = req.body
    // console.log(data)
    const userId = new ObjectId(data._id)
    let database = await db.getDatabase()
    const collection = database.collection('projectCols')
   
    const cursor =  await collection.findOne({_id: new ObjectId(data._id)})
    // console.log(cursor)
    // let users = await cursor.toArray()
    // console.log(users)
    if(cursor){
    
        
        await collection.updateOne({_id: new ObjectId(data._id)}, {$set:{projectstatus :data.projectstatus}})
        return res.status(200).send({message : "updated successfully"})
    }
  }
  catch(err){
    console.log(err)
  }
  
  })
module.exports = routes