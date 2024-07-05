const schedule = require('node-schedule')
const emailService = require('../services/email')

const date = new Date(2024, 5, 19, 12, 40, 0)
console.log(date)
schedule.scheduleJob(date, function(){
    console.log("Heloo alllaaaa");
})

// const job = schedule.scheduleJob('*/5 * * * * *', function(){
//     console.count("Job done")

//     emailService.sendEmail()
//     job.cancel()
// })
module.exports = {schedule}