const myButtons = document.querySelectorAll(".button");
const myTextarea = document.querySelector("h2");

const myBackspaceBtn = document.querySelector(".backspace");
const mySpaceBtn = document.querySelector(".space");
const myCapslockBtn = document.querySelector(".capslock");

let burn = [];

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "Backspace":
            burn.pop();
            myTextarea.textContent = burn.join("");
            break;
        default:
            myTextarea.textContent += event.key;
            burn = myTextarea.textContent.split("");
    }
});

myButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        myTextarea.textContent += btn.innerText;
        burn = myTextarea.textContent.split("");
    });
});

myBackspaceBtn.addEventListener("click", () => {
    burn.pop();
    myTextarea.textContent = burn.join("");
});

mySpaceBtn.addEventListener("click", () => {
    burn.push(" ");
    myTextarea.textContent = burn.join("");
});

myCapslockBtn.addEventListener("click", () => {
    myButtons.forEach((btn) => {
        btn.classList.toggle("uppercase");
    });
});
