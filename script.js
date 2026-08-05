// =====================================
// ŞELALE ÖĞRENCİ YURDU
// Premium Script
// =====================================

// Geri Sayım

const targetDate = new Date("2026-08-10T20:00:00").getTime();

function updateCountdown() {

const now = new Date().getTime();

const distance = targetDate - now;

if (distance <= 0) {

["days","hours","minutes","seconds"].forEach(id=>{

document.getElementById(id).textContent="00";

});

return;

}

const days = Math.floor(distance / (1000*60*60*24));
const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
const seconds = Math.floor((distance % (1000*60)) / 1000);

document.getElementById("days").textContent = String(days).padStart(2,"0");
document.getElementById("hours").textContent = String(hours).padStart(2,"0");
document.getElementById("minutes").textContent = String(minutes).padStart(2,"0");
document.getElementById("seconds").textContent = String(seconds).padStart(2,"0");

}

setInterval(updateCountdown,1000);

updateCountdown();


// Loader

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

setTimeout(()=>{

loader.style.display="none";

},1800);

});


// Kart Animasyonu

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.2});

document.querySelectorAll(".card,.contact-card,.student-photo,.countdown-box").forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(70px)";

item.style.transition=".8s";

observer.observe(item);

});
// =====================================
// PREMIUM ETKİLEŞİMLER
// =====================================

// Hero 3D Hareketi
const hero = document.querySelector(".hero-content");

document.addEventListener("mousemove",(e)=>{

if(!hero) return;

const x=(window.innerWidth/2-e.clientX)/35;
const y=(window.innerHeight/2-e.clientY)/35;

hero.style.transform=
`rotateY(${x}deg) rotateX(${-y}deg)`;

});

document.addEventListener("mouseleave",()=>{

if(hero){

hero.style.transform="rotateY(0deg) rotateX(0deg)";

}

});


// Premium Buton Efekti

document.querySelectorAll(".btn,.hero-button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.boxShadow="0 0 40px rgba(212,175,55,.45)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.boxShadow="";

});

});


// Sayaç Kutularına Hareket

setInterval(()=>{

document.querySelectorAll(".time-box").forEach(box=>{

box.animate([

{transform:"translateY(0px)"},

{transform:"translateY(-6px)"},

{transform:"translateY(0px)"}

],{

duration:1000,

easing:"ease-in-out"

});

});

},5000);


// Kart Hover Parıltısı

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 25px 60px rgba(212,175,55,.30)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="";

});

});


console.log("Şelale Öğrenci Yurdu Premium v2 Hazır");
const openingScreen = document.getElementById("opening-screen");
const openBtn = document.querySelector(".open-btn");

openBtn.addEventListener("click", () => {

    openingScreen.classList.add("opened");

    setTimeout(() => {
        openingScreen.classList.add("fade-out");
    }, 2000);

});
document.addEventListener("DOMContentLoaded", () => {

    const music = document.getElementById("bg-music");

    if (music) {

        openBtn.addEventListener("click", () => {

            music.play().catch(() => {});

        });

    }

});
window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});
