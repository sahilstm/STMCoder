const predictBtn = document.getElementById("predictBtn");
const daySelect = document.getElementById("daySelect");
const loaderBox = document.getElementById("loaderBox");
const loaderText = document.getElementById("loaderText");
const result = document.getElementById("result");

const steps = [
  "Reading ahh your day...",
  "Calibrating quantum engine...",
  "Missed call received from aliens...",
  "Going physics with codes...",
  "Analyzing cosmic vibes...",
  "Checking Zomato discounts...",
  "Finalizing next day prediction..."
];

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

predictBtn.addEventListener("click", () => {
  const presentDay = daySelect.value;
  if (!presentDay) {
    alert("Please select your present day!");
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

      const currentIndex = days.indexOf(presentDay);
      const nextDay = days[(currentIndex + 1) % days.length];

      loaderBox.classList.add("hidden");
      result.classList.remove("hidden");
      result.textContent = `Your next day will be: ${nextDay}`;
    }
  }, 1000);
});
