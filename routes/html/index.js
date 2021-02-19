const router = require("express").Router();
var path = require("path");
const exercises_controller = require("../../controllers/exercises_controller")

router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/stats.html"));
});

router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/exercise.html"));
});

module.exports = router;