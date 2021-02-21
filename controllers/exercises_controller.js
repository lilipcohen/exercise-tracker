const db = require('../models');
module.exports = {
getWorkouts:  (req, res) => {
    db.Workouts.find({
        // $addFields: { "totalDuration": duration }
      })
      .then(dbWorkout => {
        console.log(dbWorkout)
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
},
createWorkout: (req, res) => {
    db.Workouts.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
},
    updateWorkout: (req, res) => {
        console.log(req.body)
        db.Workouts.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body }} , { new: true })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
},
deleteWorkout: (req, res) => {
    db.Workouts.remove({_id: req.params.id})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    })
}

}
