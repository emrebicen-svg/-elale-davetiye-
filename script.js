// =====================================
// ŞELALE ÖĞRENCİ YURDU
// Geri Sayım Sayacı
// =====================================

const hedefTarih = new Date("August 10, 2026 20:00:00").getTime();

function geriSayim() {

const simdi = new Date().getTime();

const fark = hedefTarih - simdi;

if (fark <= 0) {

document.getElementById("days").innerHTML = "00";
document.getElementById("hours").innerHTML = "00";
document.getElementById("minutes").innerHTML = "00";
document.getElementById("seconds").innerHTML = "00";

return;

}

const gun =
Math.floor(fark / (1000 * 60 * 60 * 24));

const saat =
Math.floor((fark % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

const dakika =
Math.floor((fark % (1000 * 60 * 60)) / (1000 * 60));

const saniye =
Math.floor((fark % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML =
String(gun).padStart(2,"0");

document.getElementById("hours").innerHTML =
String(saat).padStart(2,"0");

document.getElementById("minutes").innerHTML =
String(dakika).padStart(2,"0");

document.getElementById("seconds").innerHTML =
String(saniye).padStart(2,"0");

}

setInterval(geriSayim,1000);

geriSayim();
// =====================================
// Sayfa Efektleri
// =====================================

// Sayfa açıldığında en üste git
window.onload = function () {
    window.scrollTo(0, 0);
};

// Yumuşak kaydırma
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const hedef = document.querySelector(this.getAttribute("href"));

        if (hedef) {
            hedef.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Altın butonlara küçük tıklama efekti
document.querySelectorAll(".btn, .gold-button").forEach(btn => {
    btn.addEventListener("click", function () {
        this.style.transform = "scale(0.97)";
        setTimeout(() => {
            this.style.transform = "";
        }, 150);
    });
});

console.log("Şelale Öğrenci Yurdu sitesi başarıyla yüklendi.");
