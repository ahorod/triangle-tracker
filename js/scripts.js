var sum = function(number1, number2) {
  return number1 + number2;
}

$(document).ready(function() {
  $("#form").submit(function(event) {
    var side1Input = parseInt($("#side1").val());
    var side2Input = parseInt($("#side2").val());
    var side3Input = parseInt($("#side3").val());

    if (((sum(side1Input, side2Input) <= side3Input)) || ((sum(side2Input, side3Input) <= side1Input)) || ((sum(side3Input, side1Input) <= side2Input))) {
    $("#result").text("Not a triangle");
    }
    else {
      if ((side1Input === side2Input) && (side1Input === side3Input) && (side2Input === side3Input)) {
        $("#result").text("Equilateral");
      }
      else if ((side1Input === side2Input) || (side1Input === side3Input) || (side2Input === side3Input)){
        $("#result").text("Isosceles");
       }
      else {
        $("#result").text("Scalene");
      }
    }
    event.preventDefault();
  });
});
