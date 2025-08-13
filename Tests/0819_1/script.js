const storedData = [];

// Load tasks from local storage on page load
const savedTasks = localStorage.getItem('tasks');
if (savedTasks) {
    storedData.push(...JSON.parse(savedTasks));
}
renderList();

const addButtom = document.querySelector('[data-input-button]');
const inputField = document.querySelector('[data-text-input]');
const dataList = document.querySelector('[data-stored-list]');

addButtom.addEventListener('click', _ => {
    if (inputField.value) {
        storedData.push(inputField.value);
        saveTasks();
        renderList();
        inputField.value = '';
    }
});

function renderList() {
    dataList.innerHTML = '';
    for (let i = 0; i < storedData.length; i++) {
        const li = document.createElement('li');
        li.innerText = storedData[i];

        const delbutton = document.createElement('button');
        delbutton.innerText = 'Delete';

        delbutton.addEventListener('click', _ => {
            storedData.splice(i, 1);
            saveTasks();
            renderList();
        });

        li.appendChild(delbutton);
        dataList.appendChild(li);
    }
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(storedData));
}