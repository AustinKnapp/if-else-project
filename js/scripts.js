$(document).ready(function() {
  $("#intro form").submit(function(event) {
    event.preventDefault();

    // Hide Intro element
    $("#intro").hide();

    // Collect age of user
    var age = parseInt($("#age").val());

    // Verify age
    if (age > 18) {
      $("#over18").show();
    } else if (age === 18) {
      $("#info").show();
    } else {
      $("#under18").show();
    }
  });
});
