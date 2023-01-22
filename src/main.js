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
});