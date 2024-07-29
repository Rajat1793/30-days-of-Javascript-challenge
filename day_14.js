// DAY 14: CLASSES
// Task 1: Define a class Person with properties name and age, and a method to return a greeting message.
        //  Create an instance of the class and log the greeting message
class Person {
    static totalPerson = 0;
    constructor(name, age,lastname){
        this.name = name
        this.age = age
        this.lastname = lastname
        Person.totalPerson++
       
    }
    greet(){
        return `Hello ${this.name} your age is ${this.age} years`
    }
    updateAge(newAge){
        this.age = newAge
        return `Updated age is: ${this.age}`
    }
    static genericGreeting(){
        return "Hello ! I'm generic greeting"
    }
    get fullName(){
        return `${this.name} ${this.lastname}`
    }
    set fullName(name){
        const [firstName,lastName] = name.split(' ')
        this.name = firstName
        this.lastname = lastName
    }
}
const person = new Person('Rajat',30)
console.log(person.greet());

// Task 2: Add a method to the Person class that updates the age property and logs the updated age
console.log(person.updateAge(40));

// Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. 
        // Create an instance of the Student class and log the student ID.
// super is used to access the parent class to access the parent's properties and methods

class Student extends Person {
    
    constructor (name, age, lastname, studentId){
        super(name, age,lastname)
        this.studentId = studentId
        
    }
    getStudentID(){
        return `Student id is: ${this.studentId}`
    }

    greet(){
        return `${super.greet()} and student id is: ${this.studentId}`
    } 
}
const student = new Student('rajat',30,123)
console.log(student.getStudentID());

// Task 4: Override the greeting method in the Student class to include the student ID in the message. 
        // Log the overridden greeting message
console.log(student.greet());

// Task 5: Add a static method to the Person class that returns a generic greeting message. 
        // Call this static method without creating an instance of the class and log the message
console.log(Person.genericGreeting());

// Task 6: Add a static property to the Student class to keep track of the number of students created. 
        // Increment this property in the constructor and log the total number of students
console.log(`Total students: ${Student.totalPerson}`);
const person1 = new Student('Ram',12,123)
const person2 = new Student('Sita',13,134)
console.log(`Total students: ${Student.totalPerson}`);

// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). 
        // Create an instance and log the full name using the getter
const person3 = new Person('AQ',1,'we')
console.log('Full name:',person3.fullName);

// Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName).
        //  Update the name using the setter and log the updated full name
person3.fullName = 'rajat jaiswal'
console.log(person3.fullName);

// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. 
        // Ensure that the balance can only be updated through these methods
class Account {
    #balance
    constructor (initialBalance){
        this.#balance = initialBalance
    }
    deposit(amount){
        this.#balance += amount
        return(`Deposited ${amount}. New Balance ${this.#balance}`);
    }
    withdraw(amount){
        this.#balance -= amount
        return(`Withdrawl ${amount}. New balance ${this.#balance}`);
    }
}

// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, 
// logging the balance after each operation.

const account = new Account(100)
console.log(account.deposit(50));
console.log(account.withdraw(100));