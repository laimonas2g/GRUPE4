// html - index.html looks like this:
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="style.css">
//     <script src="app.js" defer></script>
//     <title>CRUD Operation</title>
// </head>

// <body onload="readAll()">
//     <div class="container">
//         <div class="form_container">
//             <form class="create_form">
//                 <input type="text" class="name" placeholder="Enter name" />
//                 <input type="email" class="email" placeholder="Enter Email" />
//                 <button type="button" onclick="add()">Create</button>
//             </form>
//             <form class="update_form">
//                 <input type="text" class="uname" />
//                 <input type="text" class="uemail" />
//                 <button type="button" onclick="update()">Update</button>
//             </form>
//             <div class="add_div">
//                 <button onclick="create()">Add +</button>
//             </div>

//             <table>
//                 <thead>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Action</th>
//                 </thead>
//                 <tbody class="data_table">

//                 </tbody>
//             </table>
//         </div>
//     </div>


// </body>

// </html>


// Data array to store user records
let data = [
    { id: 1, name: 'sami', email: 'sami@gmail.com' },
    { id: 2, name: 'khan', email: 'khan@gmail.com' },
];

// Function to read all records and display them in the table
function readAll() {
    // Save data to localStorage
    localStorage.setItem('object', JSON.stringify(data));
    // Select the table body where data will be displayed
    const tabledata = document.querySelector('.data_table');
    // Get data from localStorage
    const object = localStorage.getItem('object');
    const objectdata = JSON.parse(object);
    let elements = '';

    // Loop through each record and create table rows
    objectdata.forEach(record => {
        elements += `<tr>
            <td>${record.name}</td>
            <td>${record.email}</td>
            <td>
               <button class="edit" onclick="edit(${record.id})">Edit</button>
               <button class="delete" onclick="delet(${record.id})">Delete</button>
            </td>
        </tr>`;
    });

    // Insert the rows into the table body
    tabledata.innerHTML = elements;
}

// Function to show the create form and hide the add button/div
function create() {
    // Show the create form
    document.querySelector('.create_form').style.display = 'block';
    // Hide the add button/div
    document.querySelector('.add_div').style.display = 'none';
    // Hide the update form if visible
    document.querySelector('.update_form').style.display = 'none';
}

// Function to add a new record
function add() {
    // Get the name and email from the form
    const name = document.querySelector('.name').value;
    const email = document.querySelector('.email').value;

    // Validate input
    if (!name || !email) {
        alert('Please enter both name and email.');
        return;
    }

    // Generate a new id based on the highest current id
    const newId = data.length > 0 ? Math.max(...data.map(rec => rec.id)) + 1 : 1;
    // Create a new object with the new id, name, and email
    const newObj = { id: newId, name: name, email: email };
    // Add the new object to the data array
    data.push(newObj);
    // Refresh the table to reflect the new record
    readAll();
    // Clear the form fields
    document.querySelector('.name').value = '';
    document.querySelector('.email').value = '';
    // Hide the create form and show the add button/div
    document.querySelector('.create_form').style.display = 'none';
    document.querySelector('.add_div').style.display = 'block';
}

// Function to delete a record by id
function delet(id) {
    // Filter out the record with the matching id and update the data array
    data = data.filter(rec => rec.id !== id);
    // Refresh the table to reflect the deletion
    readAll();
}

// Function to show the update form with the selected record's data
function edit(id) {
    // Show the update form
    document.querySelector('.update_form').style.display = 'block';
    // Hide the create form and add button/div
    document.querySelector('.create_form').style.display = 'none';
    document.querySelector('.add_div').style.display = 'none';
    // Find the record by id
    const obj = data.find(rec => rec.id === id);
    // Fill the form fields with the record's data
    document.querySelector('.uname').value = obj.name;
    document.querySelector('.uemail').value = obj.email;
    // Add a hidden field to store the id for updating
    let idInput = document.querySelector('.id');
    if (!idInput) {
        idInput = document.createElement('input');
        idInput.type = 'hidden';
        idInput.className = 'id';
        document.querySelector('.update_form').appendChild(idInput);
    }
    idInput.value = obj.id;
}

// Function to update a record
function update() {
    // Get the updated values from the form
    const id = parseInt(document.querySelector('.id').value);
    const name = document.querySelector('.uname').value;
    const email = document.querySelector('.uemail').value;

    // Validate input
    if (!name || !email) {
        alert('Please enter both name and email.');
        return;
    }

    // Find the index of the record to update
    const index = data.findIndex(rec => rec.id === id);
    if (index !== -1) {
        // Update the record in the data array
        data[index] = { id, name, email };
        // Refresh the table to reflect the update
        readAll();
        // Hide the update form and show the add button/div
        document.querySelector('.update_form').style.display = 'none';
        document.querySelector('.add_div').style.display = 'block';
    }
}

// Hide forms on initial load and show add button/div
window.onload = function() {
    readAll();
    document.querySelector('.create_form').style.display = 'none';
    document.querySelector('.update_form').style.display = 'none';
    document.querySelector('.add_div').style.display = 'block';
};

