// Import (require) connection.js
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
    var array = [];
    for (var i = 0; i < num; i++) {
        array.push("?");
    }
    return array.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(object) {
    var array = [];
    // loop through the keys and push the key/value as a string int array
    for (var key in object) {
        var value = object[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(object, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            array.push(key + "=" + value);
        }
    }
    // translate array of strings to a single comma-separated string
    return array.toString();
}

var orm = {
    // Display all burgers in the db.
    selectAll: function(table, done) {
        var query = "SELECT * FROM " + table + ";";

        connection.query(query, function(error, result) {
            if (error) {
                throw error;
            }
            done(result);
        });
    },
    // Add a burger to the db.
    insertOne: function(table, cols, vals, done) {
        var query = "INSERT INTO " + table;
        query += " (";
        query += cols.toString();
        query += ") ";
        query += "VALUES (";
        query += printQuestionMarks(vals.length);
        query += ") ";

        console.log(query);

        connection.query(query, vals, function(error, result) {
            if (error) {
                throw error;
            }
            done(result);
        });
    },
    // Set burger devoured status to true.
    updateOne: function(table, objVals, state, done) {
        var query = "UPDATE " + table;
        query += " SET ";
        query += objToSql(objVals);
        query += " WHERE ";
        query += state;

        console.log(query);

        connection.query(query, function(error, result) {
            if (error) {
                throw error;
            }
            done(result);
        });
    },
    // Delete a burger from the db.
    deleteOne: function(table, state, done) {
        var query = "DELETE FROM " + table;
        query += " WHERE ";
        query += state;

        console.log(query);

        connection.query(query, function(error, result) {
            if (error) {
                throw error;
            }
            done(result);
        });
    }
};

// Export the ORM object in module.exports.
module.exports = orm;