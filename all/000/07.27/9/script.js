const quizForm = document.getElementById('quiz-form');
const quizList = document.getElementById('quiz-list');

quizForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const q = document.getElementById('question').value.trim();
  const a = document.getElementById('answer').value.trim();
  if (q && a) {
    const card = document.createElement('div');
    card.className = 'quiz-card';

    const qEl = document.createElement('div');
    qEl.textContent = q;
    card.appendChild(qEl);

    const btn = document.createElement('button');
    btn.textContent = 'Show/Hide Answer';
    card.appendChild(btn);

    const aEl = document.createElement('div');
    aEl.className = 'quiz-answer';
    aEl.textContent = a;
    card.appendChild(aEl);

    btn.addEventListener('click', function() {
      aEl.classList.toggle('show');
    });

    quizList.appendChild(card);
    quizForm.reset();
  }
});