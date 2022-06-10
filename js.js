let bookID = 1;
function updateStatus(){
    // Add event listener to the status buttons
    console.log(this)
    // On putton press, store ID
    // Loop through myLibrary and update the myLibrary array

}
class Book {
    constructor(title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
        this.bookID = bookID++;
    }
    addBookToLibrary() {
        myLibrary.push(this)
        return this;
    }
    createLibraryCard(){
        const newCard = document.createElement(`div`);
        newCard.classList.add("content__card", this.bookID);
    
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

        const newButton = document.createElement(`button`);
        newButton.classList.add('button');
        newButton.textContent = `Delete`;

        newButton.addEventListener('click', function(){
            newCard.remove();
            myLibrary.splice(this.bookID, 1);
        });

        const statusButton = document.createElement(`button`);
        statusButton.classList.add(`button`, `statusButton`);
        statusButton.textContent = `Status`;
        console.log(statusButton)

        let storedID = this.bookID;

        statusButton.addEventListener('click', function(){
            if (newStatus.textContent == 'Status: Read'){
                newStatus.textContent = 'Status: Unread';
                myLibrary.forEach((book, index) => {
                    if (book.bookID == storedID){
                        myLibrary[index].readStatus = 'Unread'
                    }
                });
                
            } else {
                newStatus.textContent = 'Status: Read'
                myLibrary.forEach((book, index) => {
                    if (book.bookID == storedID){
                        myLibrary[index].readStatus = 'Read'
                    }
                });
            }
        }, false);


        newCard.append(newTitle, newAuthor, newPages, newStatus, newButton, statusButton);
        document.getElementsByClassName("content")[0].appendChild(newCard);
    }
    
}

// Two example books to fill out page initially
const exampleBook1 = {
    title: "The Hobbit",
    author: "J.R.R Tolkien",
    pages: "305",
    readStatus: "Read",
    bookID: '1'
}
const exampleBook2 = {
    title: "Dune",
    author: "Frank Herbert",
    pages: "521",
    readStatus: "Unread",
    bookID: '2'
}

let myLibrary = [exampleBook1, exampleBook2]

myLibrary.forEach((book) => {
    // createLibraryCard(book)
    initialBook = new Book(book.title, book.author, book.pages, book.readStatus).createLibraryCard();
});

//On new book click, unhide form
let hiddenForm = document.getElementById('dialog-box')
let newBookButton = document.getElementById('newBookButton');
newBookButton.addEventListener('click', showForm);

function showForm(){
    hiddenForm.style.visibility = "visible";
}

// On submit click, contruct newBook object and add to library array and createLibraryCard
let subButton = document.getElementById('submit-button');
subButton.addEventListener('click', storeBookData);

function storeBookData() {
    let formTitle = document.getElementById('title').value;
    let formAuthor = document.getElementById('author').value;
    let formPages = document.getElementById('pages').value;
    let formStatus = document.getElementById('status').checked;
    if (formStatus == true) {
        formStatus = 'Read';
    } else {
        formStatus = 'Unread';
    }
    newBook = new Book(formTitle, formAuthor, formPages, formStatus).addBookToLibrary().createLibraryCard();
    hiddenForm.style.visibility = "hidden";
}

// On status click, remove book from DOM and myLibrary array.
const statusButtons = document.querySelectorAll('statusButton')
statusButtons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log("It is working.");
    });
});


