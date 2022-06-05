const total = document.getElementById("total");
const remaining = document.getElementById("remaining");
const userInput = document.getElementById("user-input");

userInput.maxLength = 50;

let totalChars = 0;
let remainingChars = 50;

userInput.addEventListener("input", () => {
  totalChars = userInput.value.length;
  total.innerText = totalChars;
  remainingChars = 50 - totalChars;
  remaining.innerText = remainingChars;
});
