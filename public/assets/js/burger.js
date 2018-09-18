$(function() {
    $(".eatBurger").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        var isDevoured = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: isDevoured
        }).then(function() {
            console.log("Burger devoured");
            location.reload();
        });
    });

    $(".deleteBurger").on("click", function(event) {
        event.preventDefault();
        //deletes the burger according to the burger id
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });

    // Add a new burger.
    $(".formInit").on("submit", function(event) {
        event.preventDefault();

        //object to hold out burger
        var addBurger = {
            burger_name: $("#addburger").val().trim(),
            devoured: 0
        };

        // Send the POST to my custom route.
        $.ajax("/api/burgers", {
            type: "POST",
            //retrieves data from our object and posts to db
            data: addBurger
        }).then(function() {
            console.log("Added new burger");
            // Reload the page to get the updated burger list.
            location.reload();
        });
    });
});