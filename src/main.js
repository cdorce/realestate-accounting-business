
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar__menu");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })

  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))
















/*
let openBtn = document.querySelector(".menu-open");
let closeBtn = document.querySelector(".menu-close");
let menu = document.querySelector(".navbar__menu"); 



openBtn.addEventListener("click", ()=>{
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    menu.classList.toggle("hidden");

});

closeBtn.addEventListener("click", ()=>{
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    menu.classList.toggle("hidden");
}); */