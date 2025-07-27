const form = document.getElementById('item-form');
const input = document.getElementById('item-input');
const list = document.getElementById('item-list');
const removeAll = document.getElementById('remove-all');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const value = input.value.trim();
  if (value) {
    const li = document.createElement('li');
    li.textContent = value;
    list.appendChild(li);
    input.value = '';
  }
});

removeAll.addEventListener('click', function() {
  list.innerHTML = '';
});