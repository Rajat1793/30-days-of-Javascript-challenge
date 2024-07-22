// Day 8

//Task 1: Use template literals to create a string that includes variables for a person's
//      name and age, and log the string to the console.
const name = 'Rajat'
const age = 30
console.log(`Name: ${name} and age is: ${age}`);

//Task 2: Create a multi-line string using template literals and log it to the console.
const multiline = `This is multiline
                    string and to see 
                    how it works`
console.log(multiline);

// Task 3: Use array destructuring to extract the first and second elements from 
//          an array of numbers and log them to the console.
const arr_num = [1,2,3,4,5]
const [first,second ] = arr_num
console.log(`First element: `,first);
console.log(`Second element: `,second);

// Task 4: Use object destructuring to extract the title and author from a book 
// object and log them to the console.

const book ={
    title: 'Javascript',
    author: 'Rajat',
}
const {title, author} = book
console.log(`Title: ${title} and author is: ${author}`);

// Task 5: Use the spread operator to create a new array that includes all elements of an 
//         existing array plus additional elements, and log the new array to the console.
// SPREAD operator is used to expand or spread elements of an iterable ojects into individual elements
const array1 = [1,2,3]
const array2 = [4,5,6]
const mergeArray = [...array1, ...array2]
console.log(`Mergered array using spread ... operator: ${mergeArray}`);

const newArray = [0,...array1,8,9,...array2]
console.log(`New merged array: ${newArray}`);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, 
//          sum them, and return the result.
// REST operator is used to collect multiple elements into a single array. It is particularly 
// useful in function parameters to allow a function to accept an arbitrary number of arguments
 const sum = function(...mergeArray){
    return mergeArray.reduce((total, num) => total+num, 0)
 }
 console.log(`Sum of numbers: ${sum(1,2,3)}`);
 console.log(`Sum of numbers: ${sum(...array2,...array1)}`);


//  Task 7: Write a function that takes two parameters and returns their product, 
//     with the second parameter having a default value of 1. Log the result of calling this 
//     function with and without the second parameter.
function product(a, b=1){
    return a * b
}
console.log(`Product: ${product(2,3)}`);
console.log(`Product without second value: ${product(2)}`);

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the 
    // object to the console.
// ENHANCED OBJECT LITERALS in JavaScript that allows for a more concise and expressive way to create objects
const myObject = {
    name: 'Rajat',
    greeting(){
        return `Hello my name is ${this.name}`
    }
}
console.log(myObject);
console.log(myObject.greeting());

// Task 9: Create an object with computed property names based on variables and log the object to the console
// COMPUTED PROPERTY NAME allows you to set property names dynamically – that is, property names will be expressions that evaluate to a value.
// more details at: https://www.freecodecamp.org/news/how-to-set-dynamic-object-properties-using-computed-property-names/
const key = 'dynamicKey'
const dynamicObj ={
    [key]:'Dynamic value'
}
console.log(dynamicObj);
const key1 = "language"
const key2 = "isStudent"

const obj = {
  name: "dillion",
  age: 1000,
  [key1]: "javascript",
  [key2]: true
}
console.log(obj)