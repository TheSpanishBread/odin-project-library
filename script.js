///get dom elements
const addBookButton = document.querySelector("#addBook");
const shelf = document.querySelector("#shelf");
const body = document.querySelector("body");
let myLibrary = [];
///functions
function overlay(){
    let addoverlay = document.createElement("div");
    addoverlay.id = "overlay";
    addoverlay.classList = "overlay";
    body.appendChild(addoverlay);
 }
function bookForm(){
    let formContainer = document.createElement("div");
        formContainer.classList = "formContainer";
        formContainer.id = "formContainer";
    let formContainerTitle = document.createElement("h1");
        formContainerTitle.textContent = "Enter Book Details"
    let formAuthorLabel = document.createElement("label");
        formAuthorLabel.htmlFor = "author";
        formAuthorLabel.textContent = "Author: ";
    let formAuthorInput = document.createElement("input");
        formAuthorInput.placeholder = "Enter book author...";
        formAuthorInput.id = "author";
        formAuthorInput.required = true;
    let formTitleLabel = document.createElement("label");
        formTitleLabel.htmlFor = "title";
        formTitleLabel.textContent = "Book title:";
    let formTitleInput = document.createElement("input");
        formTitleInput.placeholder = "Enter book title";
        formTitleInput.id = "title";
        formTitleInput.required = "true"
    let formPagesLabel = document.createElement("label");
        formPagesLabel.htmlFor = "pages";
        formPagesLabel.textContent = "Enter Number of pages:"
    let formPagesInput = document.createElement("input");
        formPagesInput.type = "number";
        formPagesInput.id = "pages";
        formPagesInput.required = true;
    let formReadLabel = document.createElement("label");
        formReadLabel.htmlFor = "read";
        formReadLabel.textContent = "Have you read this book?   ";
    let formReadInput = document.createElement("input");
        formReadInput.type = "checkbox";
        formReadInput.id = "read";
    let formSubmitButton = document.createElement("button");
        formSubmitButton.textContent = "Add book to shelf";
        formSubmitButton.id = "formSubmitButton";
    formContainer.appendChild(formContainerTitle);
    formContainer.appendChild(formAuthorLabel);
    formContainer.appendChild(formAuthorInput);
    formContainer.appendChild(formTitleLabel);
    formContainer.appendChild(formTitleInput);
    formContainer.appendChild(formPagesLabel);
    formContainer.appendChild(formPagesInput);
    formContainer.appendChild(formReadLabel);
    formReadLabel.appendChild(formReadInput);
    formContainer.appendChild(formSubmitButton);
    body.appendChild(formContainer);

}
function removeForm(){
    let addoverlay = document.querySelector("#overlay");
    let formContainer = document.querySelector("#formContainer");
    body.removeChild(addoverlay);
    body.removeChild(formContainer);
}
///event
addBookButton.addEventListener("click", function(){
    overlay();
    bookForm();
    ///process book
    let formSubmitButton = document.querySelector("#formSubmitButton");
    formSubmitButton.addEventListener("click", function (){
            let author = document.querySelector("#author").value;
            let title = document.querySelector("#title").value;
            let page = document.querySelector("#pages").value;
            let read = document.querySelector("#read");
            if (read.checked){
                read.value = true;
            } else{
                read.value = false;
            }
            let bookID = "book" + crypto.randomUUID();
            myLibrary.push(bookID);
                //save object
            function bookDetailsProcess(bookID, author, title, page, read){
                this.author = author;
                this.title = title;
                this.page = page;
                this.read = read.value;   
                this.bookID = bookID;
               
            }
            ///book design
            bookDetailsProcess.prototype.bookDesign = function (){
                let bookDesign = document.createElement("div"); 
                bookDesign.id = this.bookID;   
                bookDesign.style.height = "10rem";
                bookDesign.style.width = "2rem";
                bookDesign.style.backgroundColor = " rgb(" + Math.random()*256  + "," + Math.random()*256  + "," + Math.random()*256 + ")";
                bookDesign.style.border = "0.3rem solid black";
                shelf.appendChild(bookDesign);
            };
            ///book hover
            bookDetailsProcess.prototype.bookHoverDetails = function(){
                let bookWhole = document.querySelector("#" + this.bookID);
                bookWhole.addEventListener("mouseover", () => {

                    let hoverDetails = document.createElement("div");
                        hoverDetails.id = "hoverDetails";
                    let hoverDetailsAuthor = document.createElement ("p");
                        hoverDetailsAuthor.textContent  = "Author: " + this.author;
                    let hoverDetailsTitle = document.createElement("p");
                        hoverDetailsTitle.textContent = "Title: " + this.title;
                    let hoverDetailsPages = document.createElement("p");
                        hoverDetailsPages.textContent = "Pages: "  + this.page;
                    let hoverDetailsRead = document.createElement("p");
                        hoverDetailsRead.textContent = "Read: " + this.read;
                    let hoverDetailsBookID = document.createElement("p");
                        hoverDetailsBookID.textContent = "Book ID: " + this.bookID;

                        hoverDetails.appendChild(hoverDetailsAuthor);
                        hoverDetails.appendChild(hoverDetailsTitle);
                        hoverDetails.appendChild(hoverDetailsPages);
                        hoverDetails.appendChild(hoverDetailsRead);
                        bookWhole.appendChild(hoverDetails);
                    

                });
                //book mouse out remove hover
                bookWhole.addEventListener("mouseout", () =>{
                     let hoverDetails = document.querySelector("#hoverDetails");
                     bookWhole.removeChild(hoverDetails);
                        });
            }
            bookDetailsProcess.prototype.removeBookIcon = function(){
                    let deleteBookbutton = document.createElement("button");
                    let deleteIcon = document.createElement("img");
                    let bookDesign = document.querySelector("#" + this.bookID);
                    deleteBookbutton.id = "delete-" + this.bookID;
                    deleteIcon.src = "delete-svgrepo-com.svg";
                    deleteIcon.style.width = "1.5rem";

                    deleteBookbutton.style.position = "relative";
                    deleteBookbutton.style.top = "8rem";
                    deleteBookbutton.appendChild(deleteIcon);
                    bookDesign.appendChild(deleteBookbutton);  
            }
            bookDetailsProcess.prototype.removeBook = function(){
                let deleteBookbutton = document.querySelector("#delete-" + this.bookID);
                deleteBookbutton.addEventListener("click", () =>{
                        let bookDesign = document.querySelector("#" + this.bookID);
                        shelf.removeChild(bookDesign);
                        myLibrary = myLibrary.filter(id => id !== this.bookID);
                });

            }
             myLibrary[bookID] = new bookDetailsProcess(bookID, author, title, page, read);
            myLibrary[bookID].bookDesign();
            myLibrary[bookID].bookHoverDetails();
            myLibrary[bookID].removeBookIcon();
            myLibrary[bookID].removeBook();
            removeForm();
    });

});