///////| CONSTANTS DECLARATIONS |////////////////////////////////////////////////
// constants to idenfify what is the action we are doing
const CREATE = 0;
const UPDATE = 1;
const DELETE = 2;
// constant to access data from localStorage
const DATA = 'crudData';

///////| GLOBAL VARIABLES |/////////////////////////////////////////////////////

// keep track of the action we are currently working on
let action;
// keep track of the selected message index
let selectedId;
/* messages object
// {
        lastId: {number}, // this field will always exist and only keeps track of the last id that was used
        id: message,
        id2: message2
        .
        .
        .
    }
*/
let messages = {};

///////| FORM FUNCTIONS |//////////////////////////////////////////////////////

// Show or hides the form
//  params: 
//        show boolean (true or false)
function showForm(show) {
    // get element that contains the form
    let form = document.getElementById('formContainer');
    // https://www.w3schools.com/js/js_if_else.asp
    // if condition to see if we should show or hide the form
    if( show == true) { // if parameter show is true
        // removingt he class d-none makes the form visible and pushes the list down
        form.classList.remove('d-none');
    } else { // if parameter show is false
        // adding the class d-none hides the form
        form.classList.add('d-none');
    }    
}

// clears the form inputs
function clearForm() {
    let input = document.getElementById('simpleMessage');
    input.value = '';
    // set the focus of the input on the textare
    input.focus();
    // in case the page has been scrolled down too much this would return it into view
    input.scrollIntoView();
}

// opens the form to create a new item
function createItem() {
    // change form title
    document.getElementById('formTitle').innerText = 'Create';
    // call to show the form
    showForm(true);
    // we assign the action to create
    action = CREATE;
    // clear values
    clearForm();    
    //
    document.getElementById('simpleMessage').focus();
}

// opens the form to edit an existing item
function updateItem(id){
    // change form title
    document.getElementById('formTitle').innerText = 'Edit';    
    // call to show the form
    showForm(true);
    // we assign the action to update
    action = UPDATE;
    // clear values
    clearForm();
    // populate the form with the information to edit
    // get the textarea HTML element and set the value
    document.getElementById('simpleMessage').value = messages[id];        
    // set selected id
    selectedId = id;
}

// removes item from the list
function removeItem(id) {
    // executes the browser confirm window that gives the option of yes or no, the answer is boolean and pass onto variable response
    let response = confirm('Do you want to remove the message "' + messages[id] + '" ?');
    // we check for the response
    if(response === true) { // if answer was yes or ok
        // remove the message from the object
        // https://www.w3schools.com/howto/howto_js_remove_property_object.asp
        delete messages[id];
        // remove row from table
        removeRow(id);
        // update storage
        updateStorage();
    } else { 
        // if not we do nothing
        // this block of code doesn't need to exist, added to make it more explanatory 
    }    
}

// save changes for the new item or updates the existing item
function saveChanges() {
    // get message to be saved
    let message = document.getElementById('simpleMessage').value;
    // https://www.w3schools.com/js/js_switch.asp
    // check if the action as a new item or update item
    switch(action) {
        case CREATE:
                    // increases lastId used by one
                    messages.lastId++; 
                    // add message to list of messages                    
                    messages[messages.lastId] = message; // adds a key[lastId]:value[message] to messages                    
                    // calls for a row creation with the new index and message
                    createRow(messages.lastId, message);
                    break;
        case UPDATE: 
                    // update message in the list of messages                    
                    messages[selectedId] = message; // updates key[selectedId]:value[message] in messages                    
                    // calls for update on the message of the selected index
                    updateRow(selectedId, message);
                    break;
    }
    // update storage data
    updateStorage();
    // hide the form
    showForm(false);    
    // set action to creation by default
    action = CREATE;
}


// hides the form without affecting the data
function cancelChanges() {
    // hide the form
    showForm(false);    
}

///////| DOM MANIPULATION |//////////////////////////////////////////////////////

// creates a new row for the content grid
function createRow(id, message) {    
    // get element #content from simple.html
    let content = document.getElementById('content');
    // the += operator in strings works as an append function: "string" += "new" ...  "stringnew"
    // we add more HTML inside the grid, the browser will interprete it as we add it
    content.innerHTML += 
        // creates a new row in the table <tr>
        '<tr id="' + DATA + '-' + id +'" data="' + id + '">' +
            // creates cell that contains the message and adds a unique identifier for it "message-{id}"
            '<td id="message-' + id + '" class="p-2 border">' + message + '</td>' +
            // creates cell for the options' buttons
            '<td class="text-center p-2 border">' + 
                // create edit button that points to updateItem({id})
                '<button class="btn btn-outline-info" onclick="updateItem(' + id + ')">' +
                    // bootstrap icons https://icons.getbootstrap.com/icons/pen-fill/
                    '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pen-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
                        '<path fill-rule="evenodd" d="M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>' +
                    '</svg>' + 
                    'Edit' + 
                '</button>' + 
                // create edit button that points to removeItem({id})
                '<button class="btn btn-outline-danger" onclick="removeItem(' + id + ')">' + 
                    // bootstrap icons https://icons.getbootstrap.com/icons/trash-fill/
                    '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
                        '<path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>' +
                    '</svg>' +
                    'Remove' + 
                '</button>' + 
            '</td>' +
        '</tr>';
}

// updates the message 
function updateRow(id, message) {
    // get element that holds message
    let messageElement = document.getElementById('message-' + id);
    // overwrites the text displayed with the updated version
    messageElement.innerText = message;    
}

// removes the <tr> that pertains to the message
function removeRow(id) {
    // get the row element, the rows have unique ids with the format "crudData-{id}". DATA = "crudData"
    let row = document.getElementById(DATA + '-' + id);
    // remove the element from the DOM
    row.remove();
}

///////| STORAGE |//////////////////////////////////////////////////////

// we are using localStorage because we still haven't seen back-end, this example is not optimal and is only
// for learning purposes

// load messages from the localStorage
function loadMessages() {
    // read the object crudData from the local storage
    // https://www.w3schools.com/js/js_json_parse.asp
    // JSON.parse( string ); returns a JSON object from a string    
    // localStorage.getItem(DATA) returns a string
    messages = JSON.parse(localStorage.getItem(DATA));
    if(messages !== null) { // if messages exist from previous session it wont be null
        // we empty the previous content if already exists        
        let content = document.getElementById('content');
        // set innerHTML to empty space to empty it
        content.innerHTML = '';
        // populate the HTML table
        for(let id in messages) {
            // we exclude the id we use to keep track of our last id, we create a row for every id besides it
            if(id !== 'lastId') {
                createRow(id, messages[id]);
            }
        }
    } else { // if is null, create an object with lastId = 0;
        messages = {
            lastId: 0
        };
    }
}

// update the storage data
function updateStorage() {
    // overwrite object crudData in the local storage with the content of messages
    // https://www.w3schools.com/js/js_json_stringify.asp
    // JSON.stringify( object ); returns a string representation of the object passed as parameter
    // we need to send it as string due limitations of localStorage
    localStorage.setItem(DATA, JSON.stringify(messages));
}

// reset state of application 
function resetApp() {
    // executes the browser confirm window that gives the option of yes or no, the answer is boolean and pass onto variable response
    let response = confirm('Do you want to reset the data?');
    // we check for the response
    if(response === true) { // if answer was yes or ok
        // reset localStorage data
        // set messages to empty and lastId = 0
        messages = {
            lastId: 0
        };
        // update storage
        updateStorage();
        // we call to load messages to redraw the grid and update the global variables
        loadMessages();
    } // we will omit the else if the response was false, we simply do nothing
}