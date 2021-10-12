const button = document.querySelector(".inputBtn");
const input = document.querySelector("#email");
const errorMsg = document.querySelector("#errorMsg");
const errorImg = document.querySelector("#errorImg");

let correct = true;
button.addEventListener("click", (event) => {
    if (!input.value.includes("@" && ".co")) {
        input.classList.add("redBorder");
        errorMsg.classList.remove("hidden");
        errorImg.classList.remove("hidden");
        correct = false;
    }
});



input.addEventListener("change", (event) => {
    if (correct === false) {
        input.classList.remove("redBorder");
        errorMsg.classList.add("hidden");
        errorImg.classList.add("hidden");
    }
});