const sentences = [
  "JavaScript makes web pages interactive.",
  "Practice makes perfect.",
  "The quick brown fox jumps over the lazy dog.",
  "DOM manipulation is fun and powerful.",
  "Typing speed can be improved with practice."
];
const sentenceDiv = document.getElementById('sentence');
const input = document.getElementById('type-input');
const stats = document.getElementById('stats');
const restartBtn = document.getElementById('restart');

let currentSentence = '';
let startTime = null;
let timer = null;

function pickSentence() {
  currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
  sentenceDiv.textContent = currentSentence;
  input.value = '';
  stats.textContent = '';
  input.disabled = false;
  input.focus();
  startTime = null;
}

function showStats() {
  const time = (Date.now() - startTime) / 1000;
  const words = currentSentence.split(' ').length;
  const wpm = Math.round((words / time) * 60);
  const accuracy = Math.round(
    (input.value.split('').filter((char, i) => char === currentSentence[i]).length / currentSentence.length) * 100
  );
  stats.textContent = `Time: ${time.toFixed(2)}s | WPM: ${wpm} | Accuracy: ${accuracy}%`;
  input.disabled = true;
}

input.addEventListener('input', () => {
  if (!startTime) startTime = Date.now();
  const val = input.value;
  let html = '';
  for (let i = 0; i < currentSentence.length; i++) {
    if (val[i] == null) {
      html += `<span>${currentSentence[i]}</span>`;
    } else if (val[i] === currentSentence[i]) {
      html += `<span class="correct">${currentSentence[i]}</span>`;
    } else {
      html += `<span class="incorrect">${currentSentence[i]}</span>`;
    }
  }
  sentenceDiv.innerHTML = html;
  if (val === currentSentence) showStats();
});

restartBtn.addEventListener('click', pickSentence);

window.onload = pickSentence;