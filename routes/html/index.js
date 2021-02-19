const router = require("express").Router();
var path = require("path");
// const exerciseRoutes = require("./exercise")

router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/stats.html"));
});

module.exports = router;