const exampleBook1 = {
    title: "The Hobbit",
    author: "J.R.R Tolkien",
    pages: "305",
    read: "read"
}

const exampleBook2 = {
    title: "Dune",
    author: "Frank Herbert",
    pages: "521",
    read: "read"
}

const exampleBook3 = {
    title: "Letters from Pluto",
    author: "British Fellow",
    pages: "329",
    read: "read"
}

let myLibrary = [exampleBook1, exampleBook2]

function Book (title, author, pages, readStatus){
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
}
// This is the best way to create methods for constructors
Book.prototype.sayTitle = function() {
    console.log(this.title)
  }

function addBookToLibrary(newBook) {
    myLibrary.push(newBook)
}