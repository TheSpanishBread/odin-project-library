const addBook = document.querySelector("#addBook");
const shelf = document.querySelector("#shelf");

addBook.addEventListener("click", function(){
    let book = bookDesign();
    let delBook = removeBook();
    append(book, delBook);





    
});



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