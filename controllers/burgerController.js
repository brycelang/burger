var express = require("express");
var burger = require("../models/burger.js");

// Create the router for the app
var router = express.Router();
// Wild Card
router.get("/", function (req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        //render the index page
        res.render("index", hbsObject);
    });
});

// Add new burger to the db.
router.post("/api/burgers", function (req, res) {
    //insert into db
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
        // Send back the ID of the new burger
        res.json({ id: result.insertId });
    });
});
// Set burger devoured status to true.
router.put("/api/burgers/:id", function(req, res) {
    var state = "id = " + req.params.id;
    burger.updateOne({ devoured: req.body.devoured }, state, function(result) {
        if (result.changedRows === 0) {
            //checks if update was succsesful
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
// Delete burger from db.
router.delete("/api/burgers/:id", function(req, res) {
    var state = "id = " + req.params.id;

    burger.deleteOne(state, function(result) {
        if (result.changedRows === 0) {
            //checks for sucsess
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;