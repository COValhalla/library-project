const exampleBook1 = {
    title: "The Hobbit",
    author: "J.R.R Tolkien",
    pages: "305",
    readStatus: "read"
}
const exampleBook2 = {
    title: "Dune",
    author: "Frank Herbert",
    pages: "521",
    readStatus: "read"
}

let myLibrary = [exampleBook1, exampleBook2]


myLibrary.forEach((book) => {
    createLibraryCard(book)
});

// Creates a card for the book.
function createLibraryCard(book) {
    const newCard = document.createElement("div");
    newCard.classList.add("content__card");

    const newTitle = document.createElement("div");
    newTitle.classList.add("content__title");
    newTitle.textContent = `Title: ${book.title}`

    const newAuthor = document.createElement("div");
    newAuthor.classList.add("content__author");
    newAuthor.textContent = `Author: ${book.author}`;

    const newPages = document.createElement("div");
    newPages.classList.add("content__pages");
    newPages.textContent = `Pages: ${book.pages}`;

    const newStatus = document.createElement("div");
    newStatus.classList.add("content__status");
    newStatus.textContent = `Status: ${book.readStatus}`

    newCard.append(newTitle, newAuthor, newPages, newStatus);
    document.getElementsByClassName("content")[0].appendChild(newCard);
}

// Loop through array of book objects
// For each book object, createLibrary card, add text details

class Book {
    constructor(title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }
    addBookToLibrary() {
        myLibrary.push(this)
        return this;
    }
    createLibraryCard(){
        const newCard = document.createElement("div");
        newCard.classList.add("content__card");
    
        const newTitle = document.createElement("div");
        newTitle.classList.add("content__title");
        newTitle.textContent = `Title: ${this.title}`
    
        const newAuthor = document.createElement("div");
        newAuthor.classList.add("content__author");
        newAuthor.textContent = `Author: ${this.author}`;
    
        const newPages = document.createElement("div");
        newPages.classList.add("content__pages");
        newPages.textContent = `Pages: ${this.pages}`;
    
        const newStatus = document.createElement("div");
        newStatus.classList.add("content__status");
        newStatus.textContent = `Status: ${this.readStatus}`
    
        newCard.append(newTitle, newAuthor, newPages, newStatus);
        document.getElementsByClassName("content")[0].appendChild(newCard);
    }
}




var subButton = document.getElementById('submit-button');
subButton.addEventListener('click', storeBookData);

// });
// On SubmitEvent, store each of the text fields in a variable

function storeBookData() {
    var formTitle = document.getElementById('title').value;
    var formAuthor = document.getElementById('author').value;
    var formPages = document.getElementById('pages').value;
    var formStatus = document.getElementById('status').value;
    console.log('button click')
    newBook = new Book(formTitle, formAuthor, formPages, formStatus).addBookToLibrary().createLibraryCard();
}



