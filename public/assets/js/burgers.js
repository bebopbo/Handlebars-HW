// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-Appetite").on("click", function(event) {
    var id = $(this).data("id");
    var newAppetite = $(this).data("newappetite");
    console.log(newAppetite)
    var newAppetiteState = {
      devoured: newAppetite
    };

    console.log(newAppetiteState)

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newAppetiteState
    }).then(
      function() {
        console.log("changed appetite to", newAppetite);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Cooked new Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
