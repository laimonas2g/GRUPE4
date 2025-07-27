let taskList = [];

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        taskList.push({ id: Date.now(), task: taskValue });
        taskInput.value = '';
        displayTasks();
    }
}

// Function to display tasks
function displayTasks() {
    const taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = '';

    taskList.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `${task.task} <button onclick="editTask(${task.id})">Edit</button> <button onclick="deleteTask(${task.id})">Delete</button>`;
        taskListElement.appendChild(li);
    });
}

// Function to edit a task
function editTask(id) {
    const task = taskList.find(task => task.id === id);
    const newTaskValue = prompt('Edit task:', task.task);

    if (newTaskValue) {
        task.task = newTaskValue;
        displayTasks();
    }
}

// Function to delete a task
function deleteTask(id) {
    taskList = taskList.filter(task => task.id !== id);
    displayTasks();
}