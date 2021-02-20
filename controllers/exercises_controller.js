const db = require('../models');
module.exports = {
getWorkouts:  (req, res) => {
    db.Workouts.find({})
    .then(dbWorkout=> {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
},
createWorkout: ({ body }, res) => {
  db.Workouts.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
},
updateWorkout: (req, res) => {
    db.Workouts.updateOne({_id: req.params.id})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    })
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
