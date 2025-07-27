document.addEventListener('DOMContentLoaded', function () {
    // everything else we type will go inside this!!  


    const bookContainer = document.querySelector('#book-container')
    const bookURL = `http://localhost:3000/books`

    fetch(`${bookURL}`)
        .then(response => response.json())
        .then(bookData => bookData.forEach(function (book) {
            bookContainer.innerHTML += `
      <div id=${book.id}>
        <h2>${book.title}</h2>
        <h4>Author: ${book.author}</h4>
        <img src="${book.coverImage}" width="333" height="500">
        <p>${book.description}</p>
        <button data-id="${book.id}" id="edit-${book.id}" data-action="edit">Edit</button>
        <button data-id="${book.id}" id="delete-${book.id}" data-action="delete">Delete</button>
      </div>`
        })) // end of book fetch
})