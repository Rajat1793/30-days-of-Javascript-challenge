// DAY 11: PROMISES AND ASYNC/AWAIT

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log 
    // the message to the console.
const myPromise = new Promise((myResolve) =>{
    setTimeout(() =>{
        myResolve("promise resolved after 2 seconds")
    },6000)
})
myPromise.then(function(message){
    document.getElementById('myPromise').innerHTML = message
})

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and 
    // handle the error using .catch()
const myReject = new Promise((_, myReject) =>{
    setTimeout(() =>{
        myReject("promise rejected after 2 seconds")
    },2000)
})
myReject.catch((message) =>{
    document.getElementById('myPromise').innerHTML = message
})

// Task 3: Create a sequence of promises that simulate fetching data from a server. 
    // Chain the promises to log messages in a specific order
const fetchData = () =>{
    return new Promise((resolve) =>{
        setInterval(() =>{
            resolve("Data fetched...")
        },4000)
    })
}
fetchData()
    .then((data) =>{
        document.getElementById('myPromise').innerHTML = data
        console.log(data);
        return 'Processing data'
    })
    .then((message) =>{
        document.getElementById('myPromise').innerHTML = message
        console.log(message);
        return 'Data processed!'
    })
    .then((final) =>{
        document.getElementById('myPromise').innerHTML = final
        console.log(final);
    })

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value
const myAsync = async () =>{
    const result = await myPromise
    document.getElementById('myAwait').innerHTML = result
}
myAsync()

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message
const myAsyncReject = async () =>{
    try {
        await myReject
    }
    catch(error){
        document.getElementById('myAwait').innerHTML = error
    }
}
myAsyncReject()

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(Response => Response.json())
    .then(data =>{
        console.log('fetched data: ',data);
    })
    .catch(error =>{
        console.log('Error: ',error);
    })

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await
const fetchAsync = async () =>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const data = await response.json()
        console.log('Fetched data using await/async: ',data);
    }
    catch(error){
        console.log('Error fetching data: ',error);
    }
}
fetchAsync()

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values
// Promise.All -> Creates a Promise that is resolved with an array of results
                // when all of the provided Promises resolve, or rejected when any Promise is rejected.
// google help
const PromiseA = Promise.resolve('A')
const PromiseB = Promise.resolve('B')
const PromiseC = Promise.resolve('C')
Promise.all([PromiseA,PromiseB,PromiseC])
    .then((results) =>{
        console.log(results);
    })

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises
// Creates a Promise that is resolved or rejected when any of the provided Promises are resolved or rejected.
// google help
const PromiseD = new Promise((resolve) => setTimeout(() => ('D'),100))
const PromiseE = new Promise((resolve) => setTimeout(() => ('E'),200))
const PromiseF = new Promise((resolve) => setTimeout(() => ('F'),50))
Promise.race([PromiseD,PromiseE,PromiseF])
    .then((result) =>{
        console.log(result);
    })