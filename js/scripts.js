//Business Logic
function roboResponse(countdownNumber) {
  if (countdownNumber < 0 || countdownNumber % 1 !== 0) {
    return "Please enter a Whole Number.";
  } else {
    let countdownArray = [];
    let i = 0;
    countdownArray.push(countdownNumber);
    while (countdownArray[0] > 0) {
      countdownArray.unshift(countdownArray[i] - 1);
    }
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