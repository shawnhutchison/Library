const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
    let newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
}

function displayBook(book) {
    const newCard = document.createElement('article');
    let dataID = Math.floor(Math.random() * 100000);
    newCard.setAttribute('data-id', dataID);
    
    const newCardTitle = document.createElement('h3');
    newCardTitle.textContent = book.title;
    newCard.appendChild(newCardTitle);

    const newCardAuthor = document.createElement('h4');
    newCardAuthor.textContent = book.author;
    newCard.appendChild(newCardAuthor);

    const newCardPages = document.createElement('p');
    newCardPages.textContent = `${book.pages} pages`;
    newCard.appendChild(newCardPages);

    const newCardStatusContainer = document.createElement('div');
    newCardStatusContainer.classList.add('status_container');
    
    // const newCardStatus_Started = document.createElement('button');
    // newCardStatus_Started.textContent = 'Started';
    // newCardStatusContainer.appendChild(newCardStatus_Started);

    // const newCardStatus_Finished = document.createElement('button');
    // newCardStatus_Finished.textContent = 'Finished';
    // newCardStatusContainer.appendChild(newCardStatus_Finished);

    newCard.appendChild(newCardStatusContainer)

    const newCardButton_Remove = document.createElement('button');
    newCardButton_Remove.setAttribute('data-id', dataID);
    newCardButton_Remove.textContent = 'Remove';
    newCardButton_Remove.classList.add('remove_button');
    newCardButton_Remove.addEventListener('click', function(event) {
        let removeBookID = event.target.getAttribute('data-id');
        removeBook(removeBookID);
    });
    newCard.appendChild(newCardButton_Remove);

    const libraryContainer = document.querySelector('.library');

    if (libraryContainer) {
        libraryContainer.appendChild(newCard);
    } else {
        console.error('Library container not found!');
    }
}

// Initialize library with sample books and display them
addBookToLibrary("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 224);
addBookToLibrary('Dune', 'Frank Herbert', 896);
addBookToLibrary('Dracula', 'Bram Stoker', 432);

for (let i = 0; i < myLibrary.length; i++) {
    displayBook(myLibrary[i]);
}

// Add a book functionality
document.getElementById('bookForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting to the server
    event.preventDefault();

    // Get the form values
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');

    addBookToLibrary(title.value, author.value, pages.value)
    displayBook(myLibrary[myLibrary.length - 1]);

    title.value = title.placeholder;
    author.value = author.placeholder;
    pages.value = '';
});


function removeBook(id) {
    let bookToRemove = document.querySelector(`article[data-id="${id}"]`);
    console.log(bookToRemove);
    if (bookToRemove) {
        bookToRemove.parentNode.removeChild(bookToRemove);
    } else {
        console.log('Failed to target dom node');
    }

}


