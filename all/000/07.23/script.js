const tableDataEl = document.getElementById("table-data");
const loadingEl = document.getElementById("loading");
const tableEl = document.getElementById("table");

const blurDiv = document.createElement("div");
blurDiv.id = "blur-div";

const modalDiv = document.createElement("div");
modalDiv.className = "modal-div";

const closeBtn = document.createElement("div");
closeBtn.id = "close-btn";
closeBtn.textContent = "x";

const contentEl = document.createElement("div");
contentEl.className = "content-div";

modalDiv.appendChild(closeBtn);
modalDiv.appendChild(contentEl);
blurDiv.appendChild(modalDiv);

// console.log(modalDiv)

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

              fetch(e.target.href)
              .then(res => res.json())
              .then(data => {
                console.log(data)
              contentEl.innerHTML = `
                <h2>${data.data.name}</h2>
                <p>${data.data.status}</p>
                <ul> ${data.data.books
                  .map(book => `<li>${book.title}</li>`)
                  .join("")}</ul>
              `;
              console.log(blurDiv);
              document.body.appendChild(blurDiv);
            })
          })
      })
      }
    )
  }
});