const e = require('express')
const db = require('../models')

module.exports = function (app) {

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}, (err, response) => {
            if (err) {
                res.json(err)
            } else {
                res.json(response)
            }

        })

    })
}