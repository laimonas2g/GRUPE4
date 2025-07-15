const tableDataEl = document.getElementById('table-data')

fetch('https://stephen-king-api.onrender.com/api/books')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.data.forEach(book => {
            tableDataEl.insertAdjacentHTML('beforeend',
                `<tr>
                <td>${book.Title}</td>
                <td>${book.Year}</td>
                <td>${book.Pages}</td>
                <td>${book.Publisher}</td>
                <td>${book.ISBN}</td>
                <td>${book.Notes}</td>
            </tr>`
            )
        });

    });















