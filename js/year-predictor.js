const predictBtn = document.getElementById("predictBtn");
const yearInput = document.getElementById("yearInput");
const loaderBox = document.getElementById("loaderBox");
const loaderText = document.getElementById("loaderText");
const result = document.getElementById("result");

const steps = [
  "Processing...",
  "Consulting with aliens...",
  "Asking astrologers...",
  "Calculating via potato...",
  "Checking government files...",
  "Finalizing result...",
  "Almost done..."
];

predictBtn.addEventListener("click", () => {
  const year = yearInput.value;
  if (!year) {
    alert("Please enter a year!");
    return;
  }

  loaderBox.classList.remove("hidden");
  result.classList.add("hidden");

  let i = 0;
  loaderText.textContent = steps[i];

  const interval = setInterval(() => {
    i++;
    if (i < steps.length) {
      loaderText.textContent = steps[i];
    } else {
      clearInterval(interval);

      loaderBox.classList.add("hidden");
      result.classList.remove("hidden");
      result.textContent = `Your next year is: ${parseInt(year) + 1}`;
    }
  }, 1000);
});
