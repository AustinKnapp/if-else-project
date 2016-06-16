$(document).ready(function() {

  $("#intro form").submit(function(event) {
    event.preventDefault();
    $("#intro").hide();

    $("#over18").show();

  });



});
