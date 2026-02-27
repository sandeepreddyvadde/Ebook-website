function searchBooks() {
    let input = document.getElementById("search").value.toLowerCase();
    let books = document.getElementsByClassName("book");

    for (let book of books) {
        book.style.display = book.innerText.toLowerCase().includes(input)
            ? "block"
            : "none";
    }
}

function filterBooks(category) {
    let books = document.getElementsByClassName("book");

    for (let book of books) {
        if (category === "all" || book.classList.contains(category)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    }
}

function openLogin() {
    document.getElementById("loginModal").style.display = "block";
}

function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
}

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let msg = document.getElementById("loginMsg");

    if (user === "admin" && pass === "1234") {
        msg.style.color = "green";
        msg.innerText = "Login Successful!";
    } else {
        msg.style.color = "red";
        msg.innerText = "Invalid Credentials";
    }
}
