const BALL = document.querySelectorAll(".main-div img");
const POPUP = document.querySelector(".popup");
const POPUP__CLOSE = document.querySelector(".popup__close");
const POPUP__IMG = document.querySelector(".popup img");

let INDEX__IMG;

BALL.forEach((ball) => {
    ball.addEventListener("click", (e) => {
        POPUP.classList.remove("hidden");
        POPUP__IMG.src = e.target.src;
    });
});

POPUP__CLOSE.addEventListener("click", () => {
    POPUP.classList.add("hidden");
});