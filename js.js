

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

const exampleBook3 = {
    title: "Letters from Pluto",
    author: "British Fellow",
    pages: "329",
    readStatus: "read"
}

let myLibrary = [exampleBook1, exampleBook2]

// Determine the length of the Array.
totalBooks = myLibrary.length

document.addEventListener("DOMContentLoaded", function () {
    myLibrary.forEach((book) => {
        console.log(book.pages)
        createLibraryCard(book.title, book.author, book.pages, book.readStatus)
    });
});

function Book(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
}

// Create cards for length of Array


function createLibraryCard(title, author, pages, status) {
    const newCard = document.createElement("div");
    newCard.classList.add("content__card");

    const newTitle = document.createElement("div");
    newTitle.classList.add("content__title");
    newTitle.textContent = `Title: ${title}`

    const newAuthor = document.createElement("div");
    newAuthor.classList.add("content__author");
    newAuthor.textContent = `Author: ${author}`;

    const newPages = document.createElement("div");
    newPages.classList.add("content__pages");
    newPages.textContent = `Pages: ${pages}`;

    const newStatus = document.createElement("div");
    newStatus.classList.add("content__status");
    newStatus.textContent = `Status: ${status}`

    newCard.append(newTitle, newAuthor, newPages, newStatus);
    console.log(newCard);
    document.getElementsByClassName("content")[0].appendChild(newCard);
}

// Loop through array of book objects
// For each book object, createLibrary card, add text details

// This is the best way to create methods for constructors
Book.prototype.sayTitle = function () {
    console.log(this.title)
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook)
}


