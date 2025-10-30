document.addEventListener("DOMContentLoaded", getBooks);

async function getBooks() {
  try {
    const response = await fetch("https://upadhayay.github.io/db.json");
    const data = await response.json();
    const worksDiv = document.getElementById("worksList");

    if (data.books && data.books.length > 0) {
      for (let book of data.books) {
        const bookCard = document.createElement("div");
        bookCard.className = "book";

        const img = document.createElement("img");
        img.src = "images/book.png";
        img.className = "book-picture";

        const textDiv = document.createElement("div");
        textDiv.className = "book-info";
        const title = document.createElement("strong");

        title.textContent = book.title;


        const year = document.createTextNode(" (" + book.year + ") ");
        const status = document.createElement("span");

        status.className = "status";
        status.textContent = "Published: " + (book.published ? "Yes":"No");

        textDiv.appendChild(title);
        textDiv.appendChild(year);
        textDiv.appendChild(status);

        bookCard.appendChild(img);
        bookCard.appendChild(textDiv);

        worksDiv.appendChild(bookCard);
      }

    } else {
      worksDiv.textContent = "There were no books....";
    }
  } catch (error) {
    console.error("Error on books...", error);
  }
}