let openBtn = document.querySelector("#open-menu");
let closeBtn = document.querySelector("#close-menu");

openBtn.addEventListener("click", () => {
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");

});


closeBtn.addEventListener("click", () => {
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");

});