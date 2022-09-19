var countDownDate = new Date("Nov 4, 2022 17:00:00").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var nextMinute = minutes - 1;
    if (nextMinute < 0) {
        nextMinute = 59;
    }
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var nextSecond = seconds - 1;
    if (nextSecond < 0) {
        nextSecond = 59;
    }

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML =
        '<div class="number" id="currentMin">' + (minutes) + '</div>' + '<div class="number">' + (nextMinute) + '</div>';
    if (seconds == 0) {
        document.getElementById("minutes").innerHTML =
            '<div class="number slide-number">' + (minutes) + '</div>' + '<div class="number">' + (nextMinute) + '</div>';
    }
    document.getElementById("seconds").innerHTML =
        '<div class="number slide-number">' + seconds + '</div>' + '<div class="number">' + (nextSecond) + '</div>';
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").style.display = none;
    }
}, 1000);