// Business Logic
function roboResponse(numInput) {
  return false;
}






// User Logic
$(document).ready(function() {
  $("form#formInput").submit(function(event) {
    event.preventDefault();
    const roboCount = parseInt($("input#numInput").val());
    const output = roboResponse(numInput);
    $("#output").text(output);

  });
}); 