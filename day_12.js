// DAY 12: ERROR HANDLING

// Task 1: Write a function that intentionally throws an error and use a try-catch block to 
        // handle the error and log an appropriate message to the console
function throwError(a){
    try{
        functionThrow('Throwing the error')
    }
    catch (error){
        console.log(error);
    }
}
throwError()

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero.
        //  Use a try-catch block to handle this error.
function divide (a,b){
    if (b === 0){
        throw new Error('Denominator is zero')
    }
    return a/b
}
try {
    console.log(divide(10,0));
}
catch (error){
    console.error(`${error}`);
}

// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, 
        // catch, and finally blocks to observe the execution flow.
try {
    console.log(`trying try catch and finally together`);
    console.log(divide(10,1));
}
catch (error){
    console.error(`${error}`);
}
finally {
    console.log("I'll always gets executed");
}

// Task 4: Create a custom error class that extends the built-in Error class.
     // Throw an instance of this custom error in a function and handle it using a try-catch block
class CustomError extends Error {
    constructor(message){
        super(message)
        this.name = "CustomError"
    }
}
function throwCustomError(){
    throw new CustomError('This is custom error')
}
try{
    throwCustomError()
}
catch (error){
    console.error(`${error.name}: ${error.message}`);
}

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) 
        // and throws a custom error if the validation fails. Handle the custom error using a try-catch block
function userInput(input){
    if (!input){
        throw new CustomError('Input cannot be empty')
    }
    return 'Valid input'
}
try{
    console.log(userInput(''));
}
catch (error){
    console.error(`${error.name}: ${error.message}`);
}

// Task 6: Create a promise that randomly resolves or rejects. 
        // Use .catch() to handle the rejection and log an appropriate message to the console
const randomPromise = new Promise((resolve,reject) =>{
    const random = Math.random()
    if (random >0.5){
        resolve('Promise resolved')
    }
    else{
        reject('Promise rejected')
    }
})
randomPromise
.then((message) =>{
    console.log(message);
})
.catch((error) =>{
    console.error(error);
})

// Task 7: Use try-catch within an async function to handle errors from a promise that 
        // randomly resolves or rejects, and log the error message
const asyncRandomPromise = async () =>{
    const randomPromise = new Promise((resolve,reject) =>{
        const random = Math.random()
        if (random >0.5){
            resolve('Promise resolved')
        }
        else{
            reject('Promise rejected')
        }
    })
    try{
        const message = await randomPromise
        console.log(message);
    }
    catch (error){
        console.error('Caught error: ',error);
    }
}
asyncRandomPromise()

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). 
        // Log an appropriate error message to the console.
fetch('https://jsonplaceholder.typicode.com/')
    .then(Response => Response.json())
    .then(data =>{
        console.log('fetched data: ',data);
    })
    .catch(error =>{
        console.error('Error: ',error);
    })

//Task 9: Use the fetch API to request data from an invalid URL within an async function and handle 
        // the error using try-catch. Log an appropriate error message.
const fetchAsync = async () =>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/')
        const data = await response.json()
        console.log('Fetched data using await/async: ',data);
    }
    catch(error){
        console.error('Error fetching data: ',error);
    }
}
fetchAsync()

