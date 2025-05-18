/////html elements

const addBook = document.querySelector("#addBook");
const shelf = document.querySelector("#shelf");
const body = document.querySelector("body");



/////events
addBook.addEventListener("click", function(){
    
    overlay();
    bookForm();
    let submit = document.querySelector("#submitButton");
        submit.addEventListener("click", function(){
            let authorInput = document.querySelector("#author").value;
            let titleInput = document.querySelector("#title").value;
            let pageInput = document.querySelector("#pages").value;
            let readInput = document.querySelector("#read").value ;
            let bookID = crypto.randomUUID();
    
                
            function bookDetailsProcess(bookID, author, title, page, read){
                this.author = author;
                this.title = title;
                this.page = page;
                this.read = read;   
                this.bookID = bookID;
            }

            bookDetailsProcess.prototype.changeStatus = function(){

            };


            let bookDetails = new bookDetailsProcess(bookID, authorInput, titleInput, pageInput, readInput);
            addEventListener("click", function(){

            })

        }); 


    //save the form in an object

    //use object constructor

    //use prototype for the read or not read yet
    
    /*
    // add these when the form is done
    let book = bookDesign();
    let delBook = removeBook();
    append(book, delBook); 
*/




    
});

////functions////
function bookForm(){
    let container = document.createElement("div");
    container.classList = "container";
    
    let authorLabel = document.createElement("label");
    let author = document.createElement("input");
    authorLabel.htmlFor = "author";
    authorLabel.textContent = "Author:"

    author.id = "author";
    author.placeholder = "Enter book author..."
    
    
    let titleLabel = document.createElement("label");
    let title = document.createElement("input");
    titleLabel.htmlFor = "title";
    titleLabel.textContent = "Title:"

    title.id = "title";
    title.placeholder = "Enter book title..."

    let numberLabel = document.createElement("label");
    let number = document.createElement("input");

    numberLabel.htmlFor = "pages";
    numberLabel.textContent = "Number of pages";

    number.id="pages";
    number.type = "number";

    let readLabel = document.createElement("label");
    let read = document.createElement("input");

    readLabel.htmlFor = "read";
    readLabel.textContent = "Have you read the book?"

    read.type = "checkbox";
    read.id = "read";
    read.value = "true";

    let submitButton = document.createElement("button");
    submitButton.id = "submitButton";
    submitButton.textContent = "Submit";


    container.appendChild(authorLabel);
    container.appendChild(author);
    container.appendChild(titleLabel);
    container.appendChild(title);
    container.appendChild(numberLabel);
    container.appendChild(number);
    container.appendChild(readLabel);
    container.appendChild(read);
    container.appendChild(submitButton);
    body.appendChild(container);


}

function overlay(){
    let addoverlay = document.createElement("div");
    addoverlay.classList = "overlay";
    body.appendChild(addoverlay);
}
function bookDesign(){
    let book = document.createElement("div");
    

    book.style.height = "10rem";
    book.style.width = "2rem";
    book.style.backgroundColor = " rgb(" + Math.random()*256  + "," + Math.random()*256  + "," + Math.random()*256 + ")";
    book.style.border = "0.3rem solid black";

    return book;
    
}
function removeBook(){
    let deleteBook = document.createElement("button");
    let deleteIcon = document.createElement("img");
    
    deleteIcon.src = "delete-svgrepo-com.svg";
    deleteIcon.style.width = "1.5rem";

    deleteBook.style.position = "relative";
    deleteBook.style.top = "8rem";
    deleteBook.appendChild(deleteIcon);
    
    return deleteBook;
}
function append(book, deleteBook){
    
    book.appendChild(deleteBook);
    shelf.appendChild(book);
}