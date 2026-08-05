// =======================================
// ŞELALE ÖĞRENCİ YURDU
// Premium Script
// =======================================

// Toplantı Tarihi
const targetDate = new Date("2026-08-10T20:00:00").getTime();

// Geri Sayım
function countdown() {

const now = new Date().getTime();

const distance = targetDate - now;

if(distance <= 0){

document.getElementById("days").textContent="00";
document.getElementById("hours").textContent="00";
document.getElementById("minutes").textContent="00";
document.getElementById("seconds").textContent="00";

return;

}

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

const seconds=Math.floor((distance%(1000*60))/1000);

document.getElementById("days").textContent=String(days).padStart(2,"0");

document.getElementById("hours").textContent=String(hours).padStart(2,"0");

document.getElementById("minutes").textContent=String(minutes).padStart(2,"0");

document.getElementById("seconds").textContent=String(seconds).padStart(2,"0");

}

setInterval(countdown,1000);

countdown();


// HERO PARALLAX

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero-image");

if(hero){

hero.style.transform=`scale(1.1) translateY(${window.scrollY*0.15}px)`;

}

});


// SCROLL ANIMATION

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.15
});

document.querySelectorAll(".glass-card").forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(70px)";

card.style.transition="all .8s ease";

observer.observe(card);

});
// =======================================
// Premium Efektler
// =======================================

// Sayfa açılış efekti
window.addEventListener("load", () => {
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 1s ease";
        document.body.style.opacity = "1";
    }, 100);
});

// Altın butonlara hover parıltısı
document.querySelectorAll(".btn, .gold-button").forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.boxShadow = "0 0 35px rgba(255,213,79,.6)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.boxShadow = "";
    });

});

// Fare hareketine göre Hero efekti
document.addEventListener("mousemove", (e) => {

    const hero = document.querySelector(".hero-content");

    if (!hero) return;

    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;

    hero.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});

// Sayfadan çıkınca normale dön
document.addEventListener("mouseleave", () => {

    const hero = document.querySelector(".hero-content");

    if(hero){

        hero.style.transform="rotateX(0deg) rotateY(0deg)";

    }

});

// Telefon ve WhatsApp butonlarına nabız animasyonu
setInterval(()=>{

document.querySelectorAll(".float-btn").forEach(btn=>{

btn.animate([

{transform:"scale(1)"},

{transform:"scale(1.12)"},

{transform:"scale(1)"}

],{

duration:1200

});

});

},3500);

console.log("Premium Şelale Öğrenci Yurdu sitesi yüklendi.");
