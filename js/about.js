$(document).ready(function () {
  /* Scroll NavBar */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".blackfixed").addClass("scrolled");
      $(".navbar-light").addClass("navscroll");
    } else {
      $(".blackfixed").removeClass("scrolled");
      $(".navbar-light").removeClass("navscroll");
    }
  })
  /* Scroll NavBar */

  /* Snake */
  $(".snake").snakeify({
    speed: 100
  });
  /* Snake */

  /* Progress Bar */
  if ($(".progress-bar").length) {
    $(".progress-bar").each(function () {
      var self = $(this);
      var to = $(this).attr("aria-valuenow");

      var from = 0;
      var interval = setInterval(function () {
        from++;
        self.parent().prev().text(from);
        if (from == to) {
          clearInterval(interval);
        }
      }, 30);
    });
  }

  if ($(".progress-bar2").length) {
    $(".progress-bar2").each(function () {
      var self = $(this);
      var to = $(this).attr("aria-valuenow");

      var from = 2054;
      var interval = setInterval(function () {
        from++;
        self.parent().prev().text(from);
        if (from == to) {
          clearInterval(interval);
        }
      }, 30);
    });
  }
  if ($(".progress-bar3").length) {
    $(".progress-bar3").each(function () {
      var self = $(this);
      var to = $(this).attr("aria-valuenow");

      var from = 1400;
      var interval = setInterval(function () {
        from++;
        self.parent().prev().text(from);
        if (from == to) {
          clearInterval(interval);
        }
      }, 30);
    });
  }
  if ($(".progress-bar4").length) {
    $(".progress-bar4").each(function () {
      var self = $(this);
      var to = $(this).attr("aria-valuenow");

      var from = 1979;
      var interval = setInterval(function () {
        from++;
        self.parent().prev().text(from);
        if (from == to) {
          clearInterval(interval);
        }
      }, 30);
    });
  }
  /* Progress Bar */

  // //    footer input validation
  // document.querySelector("#subscribe-form").addEventListener("submit", function (event) {
  //   var requiredIn = document.querySelectorAll("#subscribe-form .required");
  //   var spans = document.querySelectorAll("#subscribe-form .input span");
  //   for (var i = 0; i < spans.length; i++) {
  //     spans[i].parentNode.removeChild(spans[i]);
  //   }
  //   errorCount = 0;
  //   for (var i = 0; i < requiredIn.length; i++) {
  //     if (requiredIn[i].value == "") {
  //       requiredIn[i].parentNode.classList.add("has-error");
  //       var span = document.createElement("SPAN");
  //       span.innerText = requiredIn[i].getAttribute("required-message");
  //       requiredIn[i].parentNode.appendChild(span);
  //       errorCount++;

  //     } else {
  //       requiredIn[i].parentNode.classList.remove("has-error");
  //     }
  //   }
  //   if (errorCount == 0) {
  //     return true;
  //   }
  //   event.preventDefault();
  // });
});