var countdownDate = new Date("Jan 1, 2022, 00:00:00");

var countdownFunction = setInterval(function () {
  var now = new Date().getTime();
  var distance = countdownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown-time").innerHTML =
    days +
    " days :" +
    hours +
    " hours :" +
    minutes +
    " minutes :" +
    seconds +
    " seconds";

  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown-time").innerHTML = "EXPIRED";
  }
}, 1000);
