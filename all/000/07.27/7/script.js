const chatWindow = document.getElementById('chat-window');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
let messageCount = 0;

chatForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const text = chatInput.value.trim();
  if (text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'message ' + (messageCount % 2 === 0 ? 'even' : 'odd');
    msgDiv.textContent = text;
    chatWindow.appendChild(msgDiv);
    chatInput.value = '';
    chatWindow.scrollTop = chatWindow.scrollHeight;
    messageCount++;
  }
});