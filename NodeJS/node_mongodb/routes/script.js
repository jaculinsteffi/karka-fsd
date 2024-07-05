const express = require('express')
const route = express.Router()
const emailService = require('../services/email')


route.post('/email', (req, res) => {
    try{
        let data = emailService.sendEmail()
        res.status(201).json(data)
    }
    catch(err){
        return res.status(500).json({ msg: err.message })
    }
    
})

module.exports = route
