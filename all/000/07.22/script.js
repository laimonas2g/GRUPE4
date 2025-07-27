const tableDataEl = document.getElementById("table-data");
const loadingEl = document.getElementById("loading");
const tableEl = document.getElementById("table");

tableEl.classList.add("hide");

fetch("https://stephen-king-api.onrender.com/api/books")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);

    loadingEl.classList.add("hide");
    tableEl.classList.remove("hide");

    data.data.forEach((book) => {
      tableDataEl.insertAdjacentHTML(
        "beforeend",
        `<tr data-bookid="${book.id}">
        <td>${book.Title}</td>
        <td>${book.Year}</td>
        <td>${book.Pages}</td>
        <td>${book.Publisher}</td>
        <td>${book.ISBN}</td>
        <td>${book.Notes[0] ? book.Notes.join(".<br/>") : "¯\\_(ツ)_/¯"}</td>
        </tr>`
      );
    });
  });

tableDataEl.addEventListener("click", (e) => {
  const tr = e.target.parentElement;
  const villainsRow = document.getElementById("villains-row");
  const bookID = tr.dataset.bookid;
  // console.log(bookID);
  if (villainsRow && villainsRow != tr) {
    tableDataEl.removeChild(villainsRow);
  }

  if (villainsRow != tr) {
    fetch("https://stephen-king-api.onrender.com/api/book/" + bookID)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        tr.insertAdjacentHTML(
          "afterend",
          `<tr id="villains-row">
          <td colspan="2">${data.data.Title}</td>
          <td colspan="4">${data.data.villains
            .map(
              (villain) =>
                `<a href="${villain.url}" class="villain-link">${villain.name}</a>`
            )
            .join("<br/>")}</td>
        </tr>`
        );

        const links = Array.from(
          document.getElementsByClassName("villain-link")
        );
        // console.log(links);

        links &&
          links.forEach((link) => {
            link.addEventListener("click", (e) => {
              e.stopPropagation();
              e.preventDefault();
              console.log(e.target);
            });
          });
      });
  }
});
