const mongojs = require("mongojs");
const db = require('../models')


//const populate = require("../seeders/seed.js")


//router.get("/populated", (req, res) => {
//   db.Workout.find({}).populate(populate).then(dbWorkout => {
//       res.json(dbWorkout)
//  }
//  ).catch(err => {
/////      res.json(err)
//  })
//})

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

    app.put("/api/workouts/:id", ({ body }, res) => {
        db.Workout.update({
            _id: mongojs.ObjectID(body.params.id)
        },
            { $push: { excercises: body } },
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