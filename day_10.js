// DAY 10: EVENT HANDLING

// Task 1: Add a click event listener to a button that changes the text content of a paragraph
const myButton = document.getElementById('myButton')
const myPara = document.getElementById('myPara')
myButton.addEventListener('click', () =>{
    myPara.textContent = 'Hello Rajat!!!'
})

// Task 2: Add a double-click event listener to an image that toggles its visibility.
const myDoubleClick = document.getElementById('myImage')
myDoubleClick.addEventListener('dblclick', () =>{
    myDoubleClick.style.display = (myDoubleClick === 'none')? 'block' : 'none'
})

// Task 3: Add a mouseover event listener to an element that changes its background color
const myHeading = document.getElementById('heading')
myHeading.addEventListener('mouseover', () => {
    myHeading.style.backgroundColor = 'Red'
})

// Task 4: Add a mouseout event listener to an element that resets its background color
myHeading.addEventListener('mouseout', () => {
    myHeading.style.backgroundColor = ''
})

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console
const myText = document.getElementById('myTextBox')
myText.addEventListener('keydown', (event) =>{
    console.log(`Inputed key: ${event.key}`);
})

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph
myText.addEventListener('keyup', () =>{
    console.log(`Inputed text: ${myText.value}`);
})

//Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console
// ChatGTP help
const myForm = document.getElementById('myForm')
myForm.addEventListener('submit', (event) =>{
    event.preventDefault()
    const formData = new FormData(myForm)
    for (const [key, value] of formData.entries()){
        console.log(`${key}: ${value}`);
    }
})

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph
const mySelect = document.getElementById('mySelect')
mySelect.addEventListener('change', () =>{
    displayParagraph.textContent = `Name selected: ${mySelect.value}`
})

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation

const myList = document.getElementById('myList')
myList.addEventListener('click', (event) =>{
    if (event.target.tagName === 'LI'){
        console.log(`Clicked list is: ${event.target.textContent}`);
    }
})

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements
const parentElement = document.getElementsByClassName('parentElement')

