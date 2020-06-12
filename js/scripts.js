//Business Logic
function roboResponse(roboCount) {
  if (roboCount < 0 || roboCount % 1 !== 0) {
    return "Please enter a Whole Number.";
  } else {
    let array = [];
    array.push(roboCount);
  }
}

// User Logic
$(document).ready(function() {
  $("form#formInput").submit(function(event) {
    event.preventDefault();
    const roboCount = parseFloat($("input#userNumberInput").val());
    const output = roboResponse(roboCount);
    $("#output").text(output);

  });
});