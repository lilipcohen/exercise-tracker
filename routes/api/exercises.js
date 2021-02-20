const router = require('express').Router();

var exercises_controller = require('../../controllers/exercises_controller');

router.route('/')
        .get(exercises_controller.getWorkouts)
        .post(exercises_controller.createWorkout)

router.put("/:id", exercises_controller.updateWorkout)

router.delete("/delete/:id", exercises_controller.deleteWorkout)

router.get("/range", exercises_controller.getWorkouts)


module.exports = router;