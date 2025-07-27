const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const value = input.value.trim();
  if (value) {
    addTask(value);
    input.value = '';
  }
});

function addTask(text) {
  const li = document.createElement('li');
  li.textContent = text;

  // Mark as done on click
  li.addEventListener('click', function () {
    li.classList.toggle('done');
    if (li.classList.contains('done')) {
      showAutoRemoveMsg(li);
      setTimeout(() => {
        li.remove();
      }, 3000);
    } else {
      removeAutoRemoveMsg(li);
    }
  });

  // Remove button
  const removeBtn = document.createElement('span');
  removeBtn.textContent = '✖';
  removeBtn.className = 'remove-btn';
  removeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    li.remove();
  });
  li.appendChild(removeBtn);

  list.appendChild(li);
}

function showAutoRemoveMsg(li) {
  removeAutoRemoveMsg(li);
  const msg = document.createElement('span');
  msg.className = 'auto-remove-msg';
  msg.textContent = 'Task will be removed in 3 seconds';
  li.appendChild(msg);
}

function removeAutoRemoveMsg(li) {
  const msg = li.querySelector('.auto-remove-msg');
  if (msg) msg.remove();
}