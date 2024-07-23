// DAY 9: DOM MANIPULATION

// Task 1: Select an HTML element by its ID and change its text content
const myElement = document.getElementById('myElement')
myElement.textContent = 'New Element'

// Task 2: Select an HTML element by its class and change its background color
const myClass = document.querySelector('.myClass')
myClass.style.backgroundColor = 'Red'

// Task 3: Create a new div element with some text content and append it to the body
const myDiv = document.createElement('div')
myDiv.textContent = 'This is new DIV element!!!'
document.body.appendChild(myDiv)

// Task 4: Create a new li element and add it to an existing ul list
const myList = document.getElementById('myList')
const newLi = document.createElement('li')
newLi.textContent = "New List"
myList.appendChild(newLi)

// Task 5: Select an HTML element and remove it from the DOM
const elementRemove = document.getElementById('elementRemove')
elementRemove.remove()

// Task 6: Remove the last child of a specific HTML element
const lastChild = document.getElementById('myList')
lastChild.lastChild.remove()

// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag)
const myImage = document.getElementById('myImage')
myImage.src = './assets/pexels-vladalex94-1402787.jpg'

// Task 8: Add and remove a CSS class to/from an HTML element
const removeClass = document.getElementById('myElement')
removeClass.classList.add('newClass')
removeClass.classList.remove('oldClass')

// Task 9: Add a click event listener to a button that changes the text content of a paragraph
const myButton = document.getElementById('myButton')
const myPara = document.getElementById('myPara')
myButton.addEventListener('click', () =>{
    myPara.textContent = "Button is clicked"
})

// Task 10: Add a mouseover event listener to an element that changes its border color
const myMouseover = document.getElementById('myButton')
myMouseover.addEventListener('mouseover', () =>{
    myMouseover.style.borderColor = 'red'
})