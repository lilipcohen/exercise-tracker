const db = require('../models');
module.exports = {
getpage:  (req, res) => {
    db.Workouts.find({})
    .then(dbWorkout=> {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
},
createWorkout: (req, res) => {
    db.Workouts.create({})
    .then(dbWorkout=> {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
},

}
