const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    // today date
    type: Date,
    default: Date.now,
  },
  exercises: [
    // array
    {
      name: {
        type: String,
        trim: true,
        required: "Enter your workout that you did here",
      },
      type: {
        type: String,
        required: "What type of workout",
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
          type: Number,
      },
      reps: {
        type: Number,
      },
      duration: {
        type: Number,
        required: "How long was the workout",
      },
    },
  ],
},
    {
        toJSON: {
            virtuals: true,
        }
    }
);

// adds to schema - takes all of increments of gets a total of workout
workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

var Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
