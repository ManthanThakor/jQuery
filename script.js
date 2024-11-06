$(document).ready(function () {
  console.log("jQuery is loaded");

  $("#submit").click(function () {
    const name = $("#fullname").val();
    const email = $("#email").val();
    $("#displayValues").text("Name: " + name + ", Email: " + email);
    $("#fullname").val("");
    $("#email").val("");
  });

  // Card functionality with toggle class
  $(".toggle").click(function () {
    $(this).parent().toggleClass("active");
  });

  $("button").contextmenu(function (e) {
    e.preventDefault();
    $("#test").hide();
  });

  $("#p1").click(function () {
    alert("Bye! You now leave p1!");
  });

  $("input")
    .focus(function () {
      $(this).css("background-color", "yellow");
    })
    .blur(function () {
      $(this).css("background-color", "");
    });

  $("p").on({
    mouseenter: function () {
      $(".span").css("background-color", "lightgray");
    },
    mouseleave: function () {
      $(".span").css("background-color", "lightblue");
    },
    click: function () {
      $(".span").css("background-color", "yellow");
    },
  });

  $(".events").each(function () {
    const self = $(this);
    self.on("click", () => self.css("background-color", "green"));
    self.on("dblclick", () => self.css("background-color", "red"));
    self.on("contextmenu", (e) => {
      e.preventDefault();
      self.css("background-color", "black");
    });
    self.on("mouseenter", () => self.css("background-color", "gray"));
    self.on("mouseleave", () => self.css("background-color", "white"));
  });

  $("#inputField").on("keydown", function (event) {
    $("#output").text(event.type + ": " + event.which);
  });

  $("#hide").click(function () {
    $(".showOrHide").hide();
  });

  $("#show").click(function () {
    $(".showOrHide").show();
  });

  $("#addClass").click(function () {
    $("#classParagraph").addClass("highlight");
  });

  $("#removeClass").click(function () {
    $("#classParagraph").removeClass("highlight");
  });

  $("#appendButton").click(function () {
    $("#appendParagraph").append(" <strong>Appended Text!</strong>");
  });

  $("#prependButton").click(function () {
    $("#appendParagraph").prepend("<strong>Prepended Text!</strong> ");
  });

  $("#afterButton").click(function () {
    $("#beforeAfterParagraph").after("<p>This text was added after!</p>");
  });

  $("#beforeButton").click(function () {
    $("#beforeAfterParagraph").before("<p>This text was added before!</p>");
  });

  $("#showDimensions").click(function () {
    const width = $(".dimension-box").width();
    const height = $(".dimension-box").height();
    $("#dimensionOutput").text(`Width: ${width}, Height: ${height}`);
  });

  $("#showPosition").click(function () {
    const offset = $(".position-box").offset();
    $("#positionOutput").text(`Top: ${offset.top}, Left: ${offset.left}`);
  });

  $("#fadeInBtn").click(function () {
    $(".fade-box").fadeIn();
  });

  $("#fadeOutBtn").click(function () {
    $(".fade-box").fadeOut();
  });

  $("#fadeToggleBtn").click(function () {
    $(".fade-box").fadeToggle();
  });

  $("#fadeToBtn").click(function () {
    $(".fade-box").fadeTo(500, 0.5);
  });

  $("#slideDownBtn").click(function () {
    $(".slide-box").slideDown();
  });

  $("#slideUpBtn").click(function () {
    $(".slide-box").slideUp();
  });

  $("#slideToggleBtn").click(function () {
    $(".slide-box").slideToggle();
  });

  $("#animateWidth").click(function () {
    $(".animate-box").animate({ width: "200px" }, 1000);
  });

  $("#animateHeight").click(function () {
    $(".animate-box").animate({ height: "200px" }, 1000);
  });

  $("#animateBoth").click(function () {
    $(".animate-box").animate({ width: "200px", height: "200px" }, 1000);
  });

  $("#resetAnimation").click(function () {
    $(".animate-box").css({ width: "100px", height: "100px" });
  });

  $("#stopAnimation").click(function () {
    $(".animate-box").stop();
  });

  $("#chainEffects").click(function () {
    $(".boxx").fadeOut(1000).fadeIn(1000).slideUp(500).slideDown(500);
  });

  //Event-target
  $(".Event-target").on("click", function (event) {
    $("#ans").html("Target Element : " + event.target.textContent);
  });
});

const partTwo = document.getElementById("Part-Two");
partTwo.addEventListener("click", () => {
  window.location.href = "./jquery-part-two/partTwo.html";
});
