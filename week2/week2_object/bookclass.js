// Problem Statement: Library Book Management System
// -------------------------------------------------
// Objective : Create a Book class and use it to manage a collection of books in a library.

// Requirements:
//   Create a Book class with the following:

//   Properties:
//       title (string)
//       author (string)
//       pages (number)
//       isAvailable (boolean, default: true)


//   Methods:
//       borrow() - Marks the book as not available
//       returnBook() - Marks the book as available
//       getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
//       isLongBook() - Returns true if pages > 300, false otherwise




//   1. Create at least 5 book objects using the class:
//       Example: "Harry Potter", "1984", "The Hobbit", etc.


//   2. Perform the following operations:

//       i. Display info of all books
//       ii. Borrow 2 books and show their availability status
//       iii. Return 1 book and show updated status
//       iv. Count how many books are "long books" (more than 300 pages)
//       v. List all available books


class Book {

    constructor(title, author, pages) {
        this.title = title
        this.author = author
        this.pages = pages
        this.isAvailable = true
    }

    borrow() {
        this.isAvailable = false
    }

    returnBook() {
        this.isAvailable = true
    }

    getInfo() {
        return this.title + " by " + this.author + " (" + this.pages + " pages)"
    }

    isLongBook() {
        if (this.pages > 300) {
            return true
        } else {
            return false
        }
    }
}


let b1 = new Book('javascript','trump',349)
let b2 = new Book('Ikigai','jain',109)
let b3 = new Book('Rich dad ','someone',350)
let b4 = new Book('Lookism','PTJ',1000)
let b5 = new Book('Harry Potter','JK',388)

let books = [b1, b2, b3, b4, b5]
//1.display all books
for (let book of books) {
    console.log(book.getInfo())
}
//borrow 2 books 
b1.borrow()
b3.borrow()
console.log(b1.title, "available:", b1.isAvailable)
console.log(b3.title, "available:", b3.isAvailable)
//       iii. Return 1 book and show updated status
b1.returnBook();
console.log(b1.title, "available:", b1.isAvailable);
//       iv. Count how many books are "long books" (more than 300 pages)

let count = 0;
for (let book of books) {
    if (book.isLongBook()) {
        count++
    }
}
console.log("Number of long books:", count)
//       v. List all available books
for (let book of books) {
    if (book.isAvailable) {
        console.log(book.title)
    }
}
