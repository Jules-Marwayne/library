let myLibrary = [];

document.getElementById("book").addEventListener("click", function() {
    document.getElementById("form").style.transition = "0.2s ease";
    document.getElementById("form").style.transform = "unset";
    document.getElementById("darken").style.transform = "unset";
})

document.getElementById("darken").addEventListener("click", function() {
    document.getElementById("form").style.transition = "0.2s ease";
    document.getElementById("form").style.transform = "scale(0)";
    document.getElementById("darken").style.transform = "scale(0)";
})

document.getElementById("submit").addEventListener("click", function() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let book = new Book(title, author, pages, read);
    if (title == '' || author == '' || pages == '' || myLibrary.map(book => book.title).includes(title)) {
        return;
    }
    addBookToLibrary(book);
    console.log(myLibrary);
})

function Book(title, author, pages, read=true) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.toggle = function() {
        this.read = !this.read
    };
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    let card = document.createElement("DIV");
    let h3 = document.createElement("H3");
    h3.textContent = book["title"];
    h3.style.fontWeight = "800px";
    let h4 = document.createElement("H4");
    h4.textContent = "Author: " + book["author"];
    let removeBtn = document.createElement("BUTTON");
    removeBtn.textContent = "Remove";
    let readBtn = document.createElement("BUTTON");
    if (book.read == false) {
        readBtn.textContent = "Still reading";
    } else {
        readBtn.textContent = "Finished reading";
    }

    card.appendChild(h3);
    card.appendChild(h4);
    card.appendChild(removeBtn);
    card.appendChild(readBtn);
    card.setAttribute("class", "card")

    removeBtn.addEventListener("click", function() {
        myLibrary = myLibrary.filter(book => book["title"] != book["title"]);
        console.log(myLibrary);
        document.getElementById("books").removeChild(card);
    })
    
    readBtn.addEventListener("click", function() {
        book.toggle();
        if (book.read == false) {
            readBtn.textContent = "Still reading";
        } else {
            readBtn.textContent = "Finished reading";
        }
    })
    document.getElementById("books").appendChild(card);
}