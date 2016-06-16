$(document).ready(function() {

  $("#intro form").submit(function(event) {
    event.preventDefault();
    $("#intro").hide();

    var age = parseInt($("#age").val());
    alert(age);
    $("#over18").show();

  });



});
