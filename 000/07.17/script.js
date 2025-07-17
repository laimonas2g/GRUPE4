const tableDataEl = document.getElementById('table-data');
const loadingEl = document.getElementById('loading');
const tableEl = document.getElementById('table');

tableEl.classList.add('hide');

fetch('https://stephen-king-api.onrender.com/api/books')
    .then(res => res.json())
    .then(data => {
        console.log(data);

        loadingEl.classList.add('hide');
        tableDataEl.classList.remove('hide');

        data.data.forEach(book => {
            tableDataEl.insertAdjacentHTML(
                'beforeend',
                `<tr>
                <td>${book.Title}</td>
                <td>${book.Year}</td>
                <td>${book.Pages}</td>
                <td>${book.Publisher}</td>
                <td>${book.ISBN}</td>
               <td>${
                  book.Notes[0] ? book.Notes.join(".<br/>") : "¯\\_(ツ)_/¯"
                }</td>
            </tr>`
            )
        });

    });















