const rowForm = document.getElementById('row-form');
const tableBody = document.querySelector('#data-table tbody');

rowForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value.trim();
  if (name && age) {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = name;
    tr.appendChild(tdName);

    const tdAge = document.createElement('td');
    tdAge.textContent = age;
    tr.appendChild(tdAge);

    const tdAction = document.createElement('td');
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.className = 'delete-btn';
    delBtn.addEventListener('click', function() {
      tr.remove();
    });
    tdAction.appendChild(delBtn);
    tr.appendChild(tdAction);

    tableBody.appendChild(tr);

    rowForm.reset();
  }
});