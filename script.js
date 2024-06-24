const myLibrary = [];

class Book {
  constructor(name, author) {
    this.title = name;
    this.author = author;
  }
}

function addBookToLibrary() {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  if (title && author) {
      let newBook = new Book(title, author);
      myLibrary.push(newBook);
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
      console.log('Book added:', newBook);
      console.log('Library:', myLibrary);
  } else {
      alert("Please enter both title and author.");
  }
  render();
  // do stuff here
}

function render(){
  const bookContainer = document.getElementById('BookContainer');
  bookContainer.innerHTML = ''; // Clear the container before re-rendering
  for (let book of myLibrary) {
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book');
      bookDiv.textContent = `Title: ${book.title}, Author: ${book.author}`;
      bookContainer.appendChild(bookDiv);
  }

}