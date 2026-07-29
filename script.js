// ===============================
// ELALE DAVETİYE
// ===============================

// Geri Sayım

const eventDate = new Date("July 31, 2026 19:30:00").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {

    const now = new Date().getTime();

    const distance = eventDate - now;

    if (distance < 0) {
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    if(daysEl) daysEl.innerText = days;
    if(hoursEl) hoursEl.innerText = hours;
    if(minutesEl) minutesEl.innerText = minutes;
    if(secondsEl) secondsEl.innerText = seconds;

}

setInterval(updateCountdown,1000);

updateCountdown();
// ===============================
// SAYFA AÇILIŞ ANİMASYONU
// ===============================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    const cards = document.querySelectorAll(".fade-up");

    cards.forEach((card, index) => {

        setTimeout(() => {

            card.classList.add("show");

        }, index * 250);

    });

});


// ===============================
// YUKARI ÇIK BUTONU
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 400) {

        topBtn.classList.add("active");

    } else {

        topBtn.classList.remove("active");

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}
// ===============================
// PARILTILI ARKA PLAN EFEKTİ
// ===============================

const sparkleContainer = document.getElementById("sparkles");

if (sparkleContainer) {

    function createSparkle() {

        const star = document.createElement("span");

        star.className = "sparkle";

        star.style.left = Math.random() * 100 + "%";
        star.style.animationDuration = (3 + Math.random() * 4) + "s";
        star.style.opacity = Math.random();

        sparkleContainer.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 7000);
    }

    setInterval(createSparkle, 350);
}


// ===============================
// TARİH BİLGİSİ
// ===============================

const today = new Date();

console.log(
    "Davetiye hazırlandı:",
    today.toLocaleDateString("tr-TR")
);


// ===============================
// KONSOL MESAJI
// ===============================

console.log("%c✨ Elale Davetiye ✨", "font-size:20px;color:#b8860b;font-weight:bold;");
console.log("%c31 Temmuz 2026 - Saat 19:30", "font-size:14px;color:#555;");
