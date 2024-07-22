// DAY 7: OBJECTS

// Task 1: Create an object representing a book with properties like title, author, and year, 
//          and log the object to the console.
var book = {
    title: 'Javascript',
    author: 'Rajat',
    year: 2024,
    books:["DSA Self Paced Course",
            "Full Stack Development",
            "Devops Boot Camp",
            "GATE Prepration"], 
}
console.log(book);

// Task 2: Access and log the title and author properties of the book object.
console.log(`Task 2: ${book.title}`);
console.log(`Task 2: ${book.author}`);

// Task 3: Add a method to the book object that returns a string with the book's title and author,
//          and log the result of calling this method.
book.print_details = function(){  //method
    return(`Book's title: ${book.title} and author: ${book.author}`);
}
console.log(`Task 3: ${book.print_details()}`);

// Task 4: Add a method to the book object that takes a parameter (year) 
//         and updates the book's year property, then log the updated object.
book.add_details = function(year){
    book.year = year
    return (`Book year is updated to: ${book.year}`)
}
console.log(`Task 4: ${book.add_details(2025)}`);
console.log('updated lib: ',book);

// Task 5: Create a nested object representing a library with properties like name and books 
//          (an array of book objects), and log the library object to the console.
const library = {
    name:'Computer science',
    books :[book]
}
console.log(`Library: ${library}`);

// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(`Library name: ${library.name} and titles of all books available: ,`,book.title);

// Task 7: Add a method to the book object that uses the this keyword to return a string with 
//      the book's title and year, and log the result of calling this method.
book.getTitle = function(){
    return `${this.title} and ${this.year}`
}
console.log(book.getTitle());

// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for (let prop in book){
    console.log(`${prop}: ${book[prop]}`);
}
// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log('Keys:', Object.keys(book));
console.log('Values:', Object.values(book));
