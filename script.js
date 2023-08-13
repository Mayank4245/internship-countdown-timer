// Get references to the timer value elements
const hr1 = document.querySelector('.hr1');
const hr2 = document.querySelector('.hr2');
const min1 = document.querySelector('.min1');
const min2 = document.querySelector('.min2');
const sec1 = document.querySelector('.sec1');
const sec2 = document.querySelector('.sec2');

let interval; // Declare a variable to hold the interval reference
let totalSeconds = 0; // Variable to track the total seconds

// Function to update the timer values
function updateTimer() {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const h = String(hours).padStart(2, '0');
  const m = String(minutes).padStart(2, '0');
  const s = String(seconds).padStart(2, '0');

  hr1.textContent = h.charAt(0);
  hr2.textContent = h.charAt(1);
  min1.textContent = m.charAt(0);
  min2.textContent = m.charAt(1);
  sec1.textContent = s.charAt(0);
  sec2.textContent = s.charAt(1);
}

// Sample countdown function
function startCountdown() {
  interval = setInterval(function () {
    totalSeconds++;

    if (totalSeconds <= 3600) {
      updateTimer();
    } else {
      clearInterval(interval);
      console.log('Countdown complete!');
    }
  }, 1000); // Update every second
}

// Function to stop the countdown
function stopCountdown() {
  clearInterval(interval);
}

// Function to clear the timer
function clearTimer() {
  totalSeconds = 0;
  updateTimer();
  clearInterval(interval);
}

// Add click event listeners to the buttons
const startButton = document.querySelector('.btn button:nth-child(1)');
startButton.addEventListener('click', startCountdown);

const stopButton = document.querySelector('.btn button:nth-child(2)');
stopButton.addEventListener('click', stopCountdown);

const clearButton = document.querySelector('.btn button:nth-child(3)');
clearButton.addEventListener('click', clearTimer);
