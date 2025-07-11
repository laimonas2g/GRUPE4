// script.js



// Initialize an empty array to store tasks

let tasks = [];



// Create operation: Add a new task

function createTask() {

    const taskInput = document.getElementById('taskInput');

    const task = taskInput.value;

    if (task) {

        tasks.push({ id: Date.now(), name: task });

        taskInput.value = '';

        renderTasks();

    }

}



// Read operation: Display tasks

function renderTasks() {

    const taskList = document.getElementById('taskList');

    taskList.innerHTML = ''; // Clear the current list

    tasks.forEach(task => {

        const li = document.createElement('li');

li.innerHTML = `
    <span>${task.name}</span>
    <span>
        <button onclick="editTask(${task.id})">Edit</button>
        <button onclick="deleteTask(${task.id})">Delete</button>
    </span>
`;

        taskList.appendChild(li);

    });

}



// Update operation: Edit a task

function editTask(id) {

    const newTaskName = prompt("Enter the new task name:");

    if (newTaskName) {

        tasks = tasks.map(task => task.id === id ? { ...task, name: newTaskName } : task);

        renderTasks();

    }

}



// Delete operation: Remove a task

function deleteTask(id) {

    tasks = tasks.filter(task => task.id !== id);

    renderTasks();

}



// Initial rendering of tasks

renderTasks();