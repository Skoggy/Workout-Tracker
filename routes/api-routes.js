const mongojs = require("mongojs");
const db = require('../models')




module.exports = (app) => {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then((dbWorkouts) => {
            res.json(dbWorkouts)
        }).catch((err) => {
            res.status(400).json(err)
        })

    })

    app.post("/api/workouts", ({ body }, res) => {
        db.Workout.create(body)
            .then(dbWorkouts => {
                res.json(dbWorkouts);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.update({
            _id: mongojs.ObjectID(req.params.id)
        },
            { $push: { exercises: req.body } },
            { new: true })
            .then(dbWorkouts => {
                res.json(dbWorkouts);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).then(dbWorkouts => {
            res.json(dbWorkouts);
        })
            .catch(err => {
                res.status(400).json(err);
            });
    });
}