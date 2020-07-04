const display = document.querySelector("#card-holder");
const popUpDisplay = document.querySelector(".bg-modal");
let popped = false;
let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return this.title + " by " + this.author + ", " + this.pages + ", " + (this.read ? "read it." : "not read yet.");
    };
}



function addBookToLibrary(book) {
    myLibrary.push(book);
}

function render() {
    for (let i = 0; i < myLibrary.length; i++) {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        let title = makeElement("h2", myLibrary[i].title);
        title.setAttribute("class", "card-title");
        let author = makeElement("h3", myLibrary[i].author);
        author.setAttribute("class", "class-author");

        //adding elements to card
        card.appendChild(title);
        card.appendChild(author);

        //add card to page
        display.appendChild(card);
    }

}

function makeElement(elementType, content) {
    let Element = document.createElement(elementType);
    Element.textContent = content;
    return Element;
}


//POP UP CONTROLS
function popUp(){
    if(popped == true)
    {
        popUpDisplay.style.display = 'none';
        popped = false;
    }
    else{
        popUpDisplay.style.display = 'flex';
        popped = true;
    }
}