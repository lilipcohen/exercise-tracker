const router = require("express").Router();
const exercisesRoutes = require("./exercises")

router.use("/exercises", exercisesRoutes)

module.exports = router;