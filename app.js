const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");
const navLogo = document.querySelector("#navbar-logo");
const body = document.querySelector("body");

// Get Full Year
function getYear() {
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById("demo").innerHTML = n;
}

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
  body.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".animate-hero", {
  duration: 0.6,
  opacity: 0,
  y: -150,
  stagger: 0.3,
});

gsap.from(".animate-about", {
  scrollTrigger: ".animate-about",
  duration: 0.5,
  opacity: 1,
  x: -150,
  stagger: 0.12,
});

gsap.from(".animate-img", {
  scrollTrigger: ".animate-img",
  duration: 1.2,
  opacity: 0,
  x: -200,
});

gsap.from(".animate-email", {
  scrollTrigger: ".animate-email",
  duration: 0.8,
  opacity: 0,
  y: -150,
  stagger: 0.25,
  delay: 0.6,
});

gsap.from(".animate-card", {
  scrollTrigger: ".animate-card",
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.1,
  delay: 0.2,
});

gsap.from(".animate-popular-picks", {
  scrollTrigger: ".animate-popular-picks",
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.3,
  delay: 0.2,
});

gsap.from(".animate-business", {
  scrollTrigger: ".animate-business",
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.3,
  delay: 0.7,
});
