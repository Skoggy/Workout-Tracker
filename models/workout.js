const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    excercises:
        [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Please Enter An Excercise Type"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Please Enter in an Excercise Name"
                },
                duration: {
                    type: Number,
                    required: "Please Enter in a Duration"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                }
            }
        ]


},

);
const Workout = mongoose.model("Workout", WorkoutSchema)
module.exports = Workout