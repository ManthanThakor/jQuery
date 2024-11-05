$(document).ready(function () {
  // Get Children
  $(".get-children").click(function () {
    const children = $(this).siblings(".parent").children(".child");
    alert(
      "Children: " +
        children
          .map(function () {
            return $(this).text();
          })
          .get()
          .join(", ")
    );
  });

  // Get Siblings
  $(".get-siblings").click(function () {
    const siblings = $(this)
      .siblings(".sibling-container")
      .children(".sibling");
    alert(
      "Siblings: " +
        siblings
          .map(function () {
            return $(this).text();
          })
          .get()
          .join(", ")
    );
  });

  // Find Element
  $(".find-element").click(function () {
    const foundElement = $(this).siblings(".finder").find(".find-me");
    alert("Found Element: " + foundElement.text());
  });

  // Closest Traversing
  $(".closest-button").click(function () {
    const closestOuter = $(this).closest(".outer");
    alert("Closest Outer Class: " + closestOuter.attr("class"));
  });

  // Get Descendants
  $(".get-descendants").click(function () {
    const descendants = $(this).siblings(".ancestor").find(".descendant");
    alert(
      "Descendants: " +
        descendants
          .map(function () {
            return $(this).text();
          })
          .get()
          .join(", ")
    );
  });

  // Get Ancestor
  $(".get-ancestor").click(function () {
    const ancestor = $(this).closest(".card").find(".ancestor");
    alert("Ancestor Class: " + ancestor.attr("class"));
  });

  // Filter Fruits
  $(".filter-fruits").click(function () {
    const fruits = $(".filter-item").filter("[data-category='fruit']");
    alert(
      "Fruits: " +
        fruits
          .map(function () {
            return $(this).text();
          })
          .get()
          .join(", ")
    );
  });
});
