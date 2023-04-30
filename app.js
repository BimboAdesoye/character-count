let textArea = document.querySelector("#text-area");
const limitWord = document.querySelector(".limit-word");
let body = document.body;
let darkMode = document.querySelector(".dark-mode");

textArea.addEventListener("input", () => {
  limitWord.innerText = textArea.value.length;
});

darkMode.addEventListener("click", () => {
  //   let hasColor = body.classList.contains("darkMode");
  //   if (hasColor) {
  //     body.classList.remove("darkMode");
  //     darkMode.innerText = "Dark mode";
  //   } else {
  //     body.classList.add("darkMode");
  //     darkMode.innerText = "Light mode";
  //   }
  body.classList.toggle("darkMode");
  darkMode.innerText === "Dark mode"
    ? darkMode.innerText === "Light Mode"
    : darkMode.innerText === "Dark Mode";
});
