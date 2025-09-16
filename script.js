// --- Part 2: JavaScript Functions ---

// Global variable
let globalCount = 0;

// Function with parameters & return value
function multiply(a, b) {
  return a * b;
}

// Demonstrate local vs global scope
function showResult() {
  let localValue = multiply(3, 5); // local scope
  globalCount++; // modifies global variable
  document.getElementById("result").textContent =
    `3 * 5 = ${localValue} | Function called ${globalCount} times`;
}

// --- Part 3: JS triggers CSS Animations ---

const animateBtn = document.getElementById("animateBtn");
const jsBox = document.getElementById("jsBox");

animateBtn.addEventListener("click", () => {
  jsBox.classList.toggle("animate"); // add/remove animation class
});
