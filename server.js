const express = require("express"); // npm express
const logger = require("morgan"); // npm logger
const mongoose = require("mongoose"); // npm mongoose

const PORT = process.env.PORT || 3000; // port 3000 local host
const db = require("./models");
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded ({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindModify: false});

// establishing routes
app.use(require("./routes/html-routes"))
app.use(require("./routes/api-routes"))

//establishing connection to server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`)
})