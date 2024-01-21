// Get books from the database and populate the list
const bookList = document.getElementById("book-list");

// Function to retrieve books from the database and populate the list
function getBooks() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "books.json", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const books = JSON.parse(xhr.responseText);
            const ul = document.createElement("ul");
            books.forEach((book) => {
                const li = document.createElement("li");
                li.textContent = book.title + " by " + book.author;
                ul.appendChild(li);
            });
            bookList.appendChild(ul);
        }
    };
    xhr.send();
}

// Add event listener to search form
const searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const bookTitle = document.getElementById("book-title").value.trim();
    const author = document.getElementById("author").value.trim();
    const genre = document.getElementById("genre").value.trim();
    const books = getBooks();
    const filteredBooks = books.filter((book) => {
        return book.title.includes(bookTitle) || book.author.includes(author) || book.genre === genre;
    });
    const ul = document.createElement("ul");
    filteredBooks.forEach((book) => {
        const li = document.createElement("li");
        li.textContent = book.title + " by " + book.author;
        ul.appendChild(li);
    });
    bookList.innerHTML = "";
    bookList.appendChild(ul);
});

// Add event listener to borrow button
const borrowButton = document.getElementById("borrow-button");
borrowButton.addEventListener("click", (e) => {
    e.preventDefault();
    const book = document.getElementById("borrow-book").value.trim();
    const borrowDate = document.getElementById("borrow-date").value.trim();
    const returnDate = document.getElementById("return-date").value.trim();
    // Add borrowing information to the database
    const borrower = {
        book,
        borrowDate,
        returnDate,
    };
    // Save borrower information to local storage
    localStorage.setItem("borrower", JSON.stringify(borrower));
    // Redirect to book details page
    window.location.href = "book-details.html";
});

// Add event listener to reserve button
const reserveButton = document.getElementById("reserve-button");
reserveButton.addEventListener("click", (e) => {
    e.preventDefault();
    const book = document.getElementById("reserve-book").value.trim();
    const reserveDate = document.getElementById("reserve-date").value.trim();
    // Add reservation information to the database
    const reservation = {
        book,
        reserveDate,
    };
    // Save reservation information to local storage
    localStorage.setItem("reservation", JSON.stringify(reservation));
    // Redirect to book details page
    window.location.href = "book-details.html";
});

// Get borrower information from local storage
const borrower = JSON.parse(localStorage.getItem("borrower"));
if (borrower) {
    const borrowerInfo = document.getElementById("borrower-info");
    borrowerInfo.textContent = `Borrower: ${borrower.book} (${borrower.borrowDate} - ${borrower.returnDate})`;
}

// Get reservation information from local storage
const reservation = JSON.parse(localStorage.getItem("reservation"));
if (reservation) {
    const reservationInfo = document.getElementById("reservation-info");
    reservationInfo.textContent = `Reservation: ${reservation.book} (${reservation.reserveDate})`;
}
