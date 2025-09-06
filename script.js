let display = document.getElementById("display");
let sciSection = document.querySelector(".scientific");

// Append normal values
function appendValue(value) {
  display.value += value;
}

// Append scientific functions
function appendSci(value) {
  display.value += value;
}

// Get current value
function getValue() {
  return display.value;
}

// Clear screen
function clearDisplay() {
  display.value = "";
}

// Delete last char
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate result safely
function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Toggle scientific section
function toggleScientific() {
  sciSection.classList.toggle("hidden");
}

// Theme toggle
let themeSwitch = document.getElementById("themeSwitch");
let themeLabel = document.getElementById("themeLabel");

themeSwitch.addEventListener("change", () => {
  if (themeSwitch.checked) {
    document.body.classList.add("light");
    themeLabel.textContent = "☀️ Light Mode";
  } else {
    document.body.classList.remove("light");
    themeLabel.textContent = "🌙 Dark Mode";
  }
});
