const express = require("express"); // npm express
const logger = require("morgan"); // npm logger
const mongoose = require("mongoose"); // npm mongoose

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded ({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessWorkout", { useNewUrlParser: true});

// establish connection to server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`)
})