const router = require('express').Router();

var exercises_controller = require('../../controllers/exercises_controller');

router.route('/')
        .get(exercises_controller.getpage)
        // .post(workouts_controller.range);
        // .put(workouts_controller.range);

module.exports = router;