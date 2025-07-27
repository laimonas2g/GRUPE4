const clock = document.getElementById('clock');
const themeBtn = document.getElementById('theme-btn');
const pauseBtn = document.getElementById('pause-btn');
let interval = null;
let paused = false;

function updateClock() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}

function startClock() {
  if (interval) return;
  interval = setInterval(updateClock, 1000);
}

function stopClock() {
  clearInterval(interval);
  interval = null;
}

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

pauseBtn.addEventListener('click', () => {
  paused = !paused;
  if (paused) {
    stopClock();
    pauseBtn.textContent = 'Resume';
  } else {
    startClock();
    pauseBtn.textContent = 'Pause';
  }
});

clock.addEventListener('mouseover', () => clock.classList.add('hover'));
clock.addEventListener('mouseout', () => clock.classList.remove('hover'));

updateClock();
startClock();