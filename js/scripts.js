$(document).ready(function() {
  $("form#formInput").submit(function(event) {
    event.preventDefault();
    const numInput = parseInt($("input#numInput").val());
    console.log(numInput);

  });
}); 