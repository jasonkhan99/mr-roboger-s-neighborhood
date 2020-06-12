//Business Logic
function roboResponse(countdownNumber) {
  if (countdownNumber < 0 || countdownNumber % 1 !== 0) {
    return "Please enter a Whole Number.";
  } else {
    let countdownArray = [];
    countdownArray.push(countdownNumber);
    console.log(countdownArray);
    
  }
}

// User Logic
$(document).ready(function() {
  $("form#formInput").submit(function(event) {
    event.preventDefault();
    const countdownNumber = parseFloat($("input#userNumberInput").val());
    const output = roboResponse(countdownNumber);
    console.log(countdownNumber);
    $("#output").text(output);

  });
});