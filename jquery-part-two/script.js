$(document).ready(function () {
  // Ancestors example
  $(".child").click(function () {
    $(this).parent().css("background-color", "yellow");
    $(this).parents(".ancestor").css("border", "2px solid red");
  });

  // Descendants example
  $(".container").find("p").css("color", "blue");

  // Siblings example
  $(".second").siblings().css("font-weight", "bold");
  $(".first").next().css("color", "green");

  // Filtering example
  $(".items li").filter(":even").css("font-weight", "bold");
  $(".items li").not(":eq(2)").css("color", "red");
});
