const express = require ("express")
const app = express()
const path = require("path")

app.get("/exercise", (request, response)  => {
    response.sendFile(path.join(__dirname, '../public/exercise.html'))
})

app.get("/stats", (request, response)  => {
    response.sendFile(path.join(__dirname, '../public/stats.html'))
})

module.exports = (app)