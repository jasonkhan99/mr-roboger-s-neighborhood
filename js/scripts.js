function roboResponse(countdownNumber) {
  let replaceArray = [];
  if (countdownNumber < 0 || countdownNumber % 1 !== 0) {
    return "Please enter a Whole Number.";
  } else {
    let countdownArray = [];
    countdownArray.push(countdownNumber);
    while (countdownArray[0] > 0) {
      countdownArray.unshift(countdownArray[0] - 1);
      replaceArray = countdownArray.slice();
      for (let i = 0; replaceArray.length > i; i++) {
        if (replaceArray[i].toString().includes("3")) {
          replaceArray.splice(i, 1, "Won't you be my neighbor?");
        } else if (replaceArray[i].toString().includes("2")) {
          replaceArray.splice(i, 1, "Bloop!");
        } else if (replaceArray[i].toString().includes("1")) {
          replaceArray.splice(i, 1, "Bleep!");
        }
      }
    }
    return replaceArray.join(", ");
  }
}

$(document).ready(function() {
  $("form#formInput").submit(function(event) {
    event.preventDefault();
    const countdownNumber = parseFloat($("input#userNumberInput").val()); 
    const output = roboResponse(countdownNumber);
    $("#output").text(output);
  });
});