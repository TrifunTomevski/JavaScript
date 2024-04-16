const books = [
    {
        title: "The Hobbit",
        author: "J. R. R. Tolkien",
        maxPages: 200,
        onPage: 60,
    },
    {
        title: "Harry Potter",
        author: "J. K. Rowling",
        maxPages: 250,
        onPage: 150,
    },
    {
        title: "50 Shades of Grey",
        author: "E. L. James",
        maxPages: 150,
        onPage: 150,
    },
    {
        title: "Don Quixote",
        author: "Miguel de Cervantes",
        maxPages: 350,
        onPage: 300,
    },
    {
        title: "Hamlet",
        author: "William Shakespeare",
        maxPages: 550,
        onPage: 550,
    },
];

const bookList = document.getElementById("book-list");

for (let book of books) {
    const bookListItem = document.createElement("li");
    const bookTitle = document.createTextNode(
        `${book.title} by ${book.author}`
    );

    if (book.maxPages === book.onPage) {
        bookListItem.style.color = "green";
        bookListItem.appendChild(document.createTextNode(`You already read `));
    } else {
        bookListItem.style.color = "red";
        bookListItem.appendChild(
            document.createTextNode(`You still need to read `)
        );
    }

    bookListItem.appendChild(bookTitle);
    bookList.appendChild(bookListItem);
}

const addBookForm = document.querySelector("#add-book-form");
const table = document.querySelector("table");

addBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const titleInput = document.querySelector("#title-input");
    const authorInput = document.querySelector("#author-input");
    const maxPagesInput = document.querySelector("#max-pages-input");
    const onPageInput = document.querySelector("#on-page-input");

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
    <td>${titleInput.value}</td>
    <td>${authorInput.value}</td>
    <td>${maxPagesInput.value}</td>
    <td>${onPageInput.value}</td>
    <td>
      <div class="progress myProgressBar${table.rows.length}" id="myProgress">
        <div class="bar" style="width: ${
            (onPageInput.value / maxPagesInput.value) * 100
        }%" id="myBar${table.rows.length}">${(
        (onPageInput.value / maxPagesInput.value) *
        100
    ).toFixed(0)}%</div>
      </div>
    </td>
  `;
    table.appendChild(newRow);
    titleInput.value = "";
    authorInput.value = "";
    maxPagesInput.value = "";
    onPageInput.value = "";
});
