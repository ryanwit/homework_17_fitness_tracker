const express = require ("express")
const app = express()
const Workout = require('../models/workout.js')

// gets all workouts 
app.get("/api/workouts", (req, res) => {
    Workout.find().then(data => {
        //.log(data)
        res.json(data)
    }).catch(err => {
        console.log(err)
        res.json(err)
    }) 
});

//gets workout range - getWorkoutInRange()
app.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    }) 
});


//add exercise - addExercise()
app.post("/api/workouts", (req, res) => {
    Workout.create({}).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

//Update
app.put("/api/workouts/:id", ({body, params}, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        { new: true, runValidators: true }
    ).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

//delete workout 
app.delete("/api/workouts", ({ body }, res) => {
    Workout.findByIdAndDelete(body.id)
    .then(() => {
        res.json(true)
    }).catch(err => {
        res.json(err)
    })
});



module.exports = (app);