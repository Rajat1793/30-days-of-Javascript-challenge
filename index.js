const originalConsoleLog = console.log;

// Override console.log to capture logs
console.log = function(message) {
    // Append the log message to the console-output div
    const consoleOutput = document.getElementById('console-output');
    consoleOutput.innerHTML += message + '<br>';
    
    // Call the original console.log function
    originalConsoleLog(message);
};

function day_1() {
    var number = 10
    console.log("Declared number is: ",number);
    console.log("Typeof: ",typeof(number))
    
    let string = "Rajat"
    console.log("Declared string is: ",string);
    console.log("Typeof: ",typeof(string))
    
    const variable = true
    console.log("Declared boolean variable is: ",variable);
    console.log("Typeof: ",typeof(variable))
    
    var array = [1,2,4]
    console.log("Declared array is: ",array);
    console.log("Typeof: ",typeof(array))
    
    var person = new Object()
    person.first_name = "rajat"
    person.second_name = "jaiswal"
    console.log("Declared object is: ",person);
    console.log("Typeof",typeof(person))
    
    let number2 = 20
    console.log("Number defined using let: ",number2);
    number2 =30
    console.log("Number defined using let: ",number2);
    
    const number3  = 40
    try{
        console.log("Number defined using const: ",number3);
        console.log("Typeof",typeof(number3))
        number3 = 50
    }
    catch (err){
        console.log(err)
    }
}

function day_2() {

}

