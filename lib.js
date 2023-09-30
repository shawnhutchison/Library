const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
    let newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
    displayBook(newBook);
}

function displayBook(book) {
    const newCard = document.createElement('article');
    
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
    
    const newCardStatus_Started = document.createElement('button');
    newCardStatus_Started.textContent = 'Started';
    newCardStatusContainer.appendChild(newCardStatus_Started);

    const newCardStatus_Finished = document.createElement('button');
    newCardStatus_Finished.textContent = 'Finished';
    newCardStatusContainer.appendChild(newCardStatus_Finished);

    newCard.appendChild(newCardStatusContainer)

    const newCardButton_Remove = document.createElement('button');
    newCardButton_Remove.textContent = 'Remove';
    newCard.appendChild(newCardButton_Remove);

    const libraryContainer = document.querySelector('.library');

    if (libraryContainer) {
        libraryContainer.appendChild(newCard);
    } else {
        console.error('Library container not found!');
    }
}
