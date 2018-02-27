$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $(".blackfixed").addClass("scrolled");
            $(".navbar-light").addClass("navscroll");
        } else {
            $(".blackfixed").removeClass("scrolled");
            $(".navbar-light").removeClass("navscroll");
        }
    })

    //    footer input validation
  document.querySelector("#subscribe-form").addEventListener("submit", function (event) {
    var requiredIn = document.querySelectorAll("#subscribe-form .required");
    var spans = document.querySelectorAll("#subscribe-form .input span");
    for (var i = 0; i < spans.length; i++) {
      spans[i].parentNode.removeChild(spans[i]);
    }
    errorCount = 0;
    for (var i = 0; i < requiredIn.length; i++) {
      if (requiredIn[i].value == "") {
        requiredIn[i].parentNode.classList.add("has-error");
        var span = document.createElement("SPAN");
        span.innerText = requiredIn[i].getAttribute("required-message");
        requiredIn[i].parentNode.appendChild(span);
        errorCount++;

      } else {
        requiredIn[i].parentNode.classList.remove("has-error");
      }
    }
    if (errorCount == 0) {
      return true;
    }
    event.preventDefault();
  });
})