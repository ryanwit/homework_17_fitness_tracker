const express = require ("express")
const app = express()
const path = require("path")

//removing bc serer.js file has static 
// app.get("/", (request, response)  => {
//     response.sendFile(path.join(__dirname, '../public/index.html'))
// })

app.get("/exercise", (request, response)  => {
    response.sendFile(path.join(__dirname, '../public/exercise.html'))
})

app.get("/stats", (request, response)  => {
    response.sendFile(path.join(__dirname, '../public/stats.html'))
})

module.exports = (app)