// Digital Clock Logic
const timeDisplay = document.getElementById('time-display');
const timezoneSelect = document.getElementById('timezone');

function updateClock() {
  const tz = timezoneSelect.value || 'UTC';
  const now = new Date();
  // Format time in the selected time zone
  const options = {
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: false, timeZone: tz
  };
  timeDisplay.textContent = now.toLocaleTimeString([], options) + ` (${tz})`;
}

// Update every second
setInterval(updateClock, 1000);
timezoneSelect.addEventListener('change', updateClock);

// Initial clock display
updateClock();

// --- Quiz logic below  ---
fetch('/question/easy')
  .then(res => res.json())
  .then(q => {
    document.getElementById('quiz').innerHTML = `
      <p>${q.text}</p>
      <input id="answer" placeholder="Your answer">
      <button onclick="submitAnswer(${q.id})">Submit</button>
    `;
  });

function submitAnswer(questionId) {
  const userAnswer = document.getElementById('answer').value;
  fetch('/answer', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ question_id: questionId, user_answer: userAnswer })
  })
  .then(res => res.json())
  .then(result => {
    alert(result.correct ? "Correct!" : "Incorrect.");
    location.reload(); // Load next question
  });
}