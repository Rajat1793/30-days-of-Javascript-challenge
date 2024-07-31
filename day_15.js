// DAY 15: CLOSURES

// Task 1: Write a function that returns another function, where the inner function accesses a 
        // variable from the outer function's scope. Call the inner function and log the result.
function outerFunction (){
    const outerVar = 'Rajat'
    return function innerFunction(){
        console.log(outerVar);
    }
}
const innerFunc = outerFunction()
innerFunc()

// Task 2: Create a closure that maintains a private counter. 
        // Implement functions to increment and get the current value of the counter

// google help
function counter(){
    let counter = 0
    return {
        incease :function(){
            counter++
        },
        getValue: function(){
            return counter
        }
    }
}
const count = counter()
count.incease()
console.log(count.getValue());

// Task 3: Write a function that generates unique IDs. 
        // Use a closure to keep track of the last generated ID and increment it with each call
function uniqueID (){
    let lastID = 0
    return function(){
        lastID++
        return lastID
    }
}
const generateID = uniqueID()
console.log(generateID());
console.log(generateID());
console.log(generateID());

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
function userName (name){
    return function(){
        console.log(`Hello ${name}`);
    }
}
const greets = userName('Rajat')
greets()

//Task 5: Write a loop that creates an array of functions. Each function should log its index when called. 
        // Use a closure to ensure each function logs the correct index
//google help
const arrayFunc = []
for (let i =0;i<5;i++){
    arrayFunc.push(function(){
        console.log(i);
    })
}
arrayFunc.forEach(func => func())

// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
// google help
const collectionItem = (function (){
    const items = []
    return{
        addItem: function(item){
            items.push(item)
        },
        removeItem: function(item){
            items.pop()
        },
        listItem: function(item){
            return items.slice()
        }
    }
})()
collectionItem.addItem('Pen')
collectionItem.addItem('Pencil')
console.log(collectionItem.listItem());
collectionItem.removeItem()
console.log(collectionItem.listItem());

// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations
//google help
function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

// Task 8: Create a memoized version of a function that calculates the factorial of a number
// google help
const memoizedFactorial = memoize(function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
});

console.log(memoizedFactorial(5)); // Logs: 120
console.log(memoizedFactorial(5)); // Returns cached result: 120
