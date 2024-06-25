const myNewBooksLibrary=[]
class NewBook {
    constructor(titlenew, author,page,description){
        this.titlenew=title;
        this.authornew=author;
        this.page=page;
        this.description=description;
    }
}

function addNewBook(){
   let titlenew=document.getElementById('titlenew2').value
   let author=document.getElementById('authornew2').value
   let page=document.getElementById('page2').value
   let description=document.getElementById('description2').value

   if (titlenew && author &&page && description) {
    let newBook= new NewBook(titlenew, author,page,description);
    myNewBooksLibrary.push(newBook);
 document.getElementById('titlenew2').value=''
 document.getElementById('authornew2').value=''
 document.getElementById('page2').value=''
 document.getElementById('description2').value=''
    console.log('Book added:', newBook);
    console.log('Library:', myNewBooksLibrary);
} else {
    alert("Please enter both title and author.");
}
   


}