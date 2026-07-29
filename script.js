const targetDate = new Date("2026-07-31T19:30:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function countdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if (distance <= 0) {

        if(days) days.textContent = "0";
        if(hours) hours.textContent = "0";
        if(minutes) minutes.textContent = "0";
        if(seconds) seconds.textContent = "0";

        return;

    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));

    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const s = Math.floor((distance % (1000 * 60)) / 1000);

    if(days) days.textContent = d;
    if(hours) hours.textContent = h;
    if(minutes) minutes.textContent = m;
    if(seconds) seconds.textContent = s;

}

countdown();

setInterval(countdown,1000);
