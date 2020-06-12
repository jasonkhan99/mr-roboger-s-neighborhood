//Business Logic

// function roboResponse(countdownNumber) {
//   if (countdownNumber < 0 || countdownNumber % 1 !== 0) {
//     return "Please enter a Whole Number.";
//   } else {
//     let countdownArray = [];
//     countdownArray.push(countdownNumber);
//     for (let i = countdownArray.length - 1; i >= 0; i = 0) {
//       countdownArray.unshift(countdownArray[i] - 1);
//       if (countdownArray[i] === -1) {
//         break;
//       }
//       let replace3Array = countdownArray.slice();
//       for (let i = 0; replace3Array.length > i; i++) {
//         if (replace3Array[i].toString().includes("3")) {
//           replace3Array.splice(i, 1, "Won't you be my neighbor?");
//         }
//       }
//       console.log(replace3Array);
//     }
//   }
// }

function roboResponse(countdownNumber) {
  if (countdownNumber < 0 || countdownNumber % 1 !== 0) {
    return "Please enter a Whole Number.";
  } else {
    let countdownArray = [];
    let i = 0;
    countdownArray.push(countdownNumber);
    while (countdownArray[0] > 0) {
      countdownArray.unshift(countdownArray[i] - 1);
      let replace3Array = countdownArray.slice();
      for (let i = 0; replace3Array.length > i; i++) {
        if (replace3Array[i].toString().includes("3")) {
          replace3Array.splice(i, 1, "Won't you be my neighbor?");
        } else if (replace3Array[i].toString().includes("2")) {
          replace3Array.splice(i, 1, "Bloop!");
        } else if (replace3Array[i].toString().includes("1")) {
          replace3Array.splice(i, 1, "Bleep!");
        }
      }
      console.log(replace3Array);
    }
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