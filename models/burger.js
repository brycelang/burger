// Import the ORM into this file
var sql = require("../config/orm.js");
// The code that will call the ORM functions using burger specific input for the ORM.
var burger = {
    //Select all Query to pull all Burgers from out Burger DB
    selectAll: function(done) {
        sql.selectAll("burgers", function(res) {
            done(res);
        });
    },
    //Calls ORM Functions to insert a burger into our DB
    insertOne: function(cols, vals, done) {
        sql.insertOne("burgers", cols, vals, function(res) {
            done(res);
        });
    },
    // Update function to change devoured state
    updateOne: function(objColVals, state, done) {
        sql.updateOne("burgers", objColVals, state, function(res) {
            done(res);
        });
    },
    // Calls the ORM function to delete a burger
    deleteOne: function(state, done) {
        sql.deleteOne("burgers", state, function(res) {
            done(res);
        });
    }
};

// Exports the file
module.exports = burger;