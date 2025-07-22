
const images = ["bg1.jpg", "bg2.png", "bg3.png"];
let index = 0;
const heroSection = document.querySelector(".hero");

function changeBackground() {
  heroSection.style.backgroundImage = `linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2)), url('${images[index]}')`;
  index = (index + 1) % images.length;
}

setInterval(changeBackground, 5000);
window.onload = changeBackground;
