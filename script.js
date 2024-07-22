// script.js
let countdown;
let isRunning = false;
let totalSeconds;

function startTimer() {
    if (isRunning) return;

    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if (totalSeconds <= 0) return;

    isRunning = true;
    updateDisplay(totalSeconds);
    countdown = setInterval(() => {
        totalSeconds--;
        updateDisplay(totalSeconds);
        if (totalSeconds <= 0) {
            clearInterval(countdown);
            isRunning = false;
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(countdown);
    isRunning = false;
}

function resetTimer() {
    clearInterval(countdown);
    totalSeconds = 0;
    isRunning = false;
    updateDisplay(totalSeconds);
    document.getElementById('hours').value = '';
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
}

function updateDisplay(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    document.getElementById('time-display').textContent =
        `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}
