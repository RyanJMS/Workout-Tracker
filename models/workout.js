const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  date: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: { type: String, trim: true, required: "Enter the exercise type" },
    },
    {
      name: {
        type: String,
        trim: true,
        required: "Enter the exercise name",
      },
    },
    {
      duration: {
        type: Number,
        required: "Enter the exercise duration (mins)",
      },
    },
    {
      distance: {
        type: Number,
      },
    },
    {
      reps: {
        type: Number,
      },
    },
    {
      sets: {
        type: Number,
      },
    },
    {
      weight: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
