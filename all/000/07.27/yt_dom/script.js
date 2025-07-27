// DOM Manipulation Examples with Explanations

// -------------------------
// 1. getElementById()
// -------------------------
const mainTitle = document.getElementById('main-title'); // Select element by ID
// mainTitle.textContent = 'Changed Title'; // Uncomment to change the title

// -------------------------
// 2. getElementsByClassName()
// -------------------------
const exampleClasses = document.getElementsByClassName('example-class'); // Returns HTMLCollection
// Loop through and log each element
// for(let el of exampleClasses) {
//   console.log(el.textContent);
// }

// -------------------------
// 3. getElementsByTagName()
// -------------------------
const listItems = document.getElementsByTagName('li'); // All <li> elements

// -------------------------
// 4. querySelector()
// -------------------------
const firstDiv = document.querySelector('.example-class'); // Selects first element with class

// -------------------------
// 5. querySelectorAll()
// -------------------------
const allDivs = document.querySelectorAll('.example-class'); // NodeList of all elements with class

// -------------------------
// 6. setTimeout()
// -------------------------
// Change the color of the title after 2 seconds
setTimeout(() => {
  mainTitle.style.color = 'darkred';
  // console.log('Changed color after 2 seconds');
}, 2000);

// -------------------------
// 7. setInterval() & stopInterval
// -------------------------
let intervalId = null;
document.getElementById('start-interval-btn').addEventListener('click', () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      mainTitle.style.color = mainTitle.style.color === 'darkred' ? 'darkblue' : 'darkred';
      // console.log('Interval running...');
    }, 1000);
  }
});
document.getElementById('stop-interval-btn').addEventListener('click', () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    mainTitle.style.color = 'black';
    // console.log('Interval stopped.');
  }
});

// -------------------------
// 8. Creating Elements
// -------------------------
document.getElementById('add-item-btn').addEventListener('click', () => {
  // Create a new <li> element
  const newItem = document.createElement('li'); // Creating element
  newItem.textContent = `Item ${listItems.length + 1}`; // Modifying text
  // Add it to the list
  document.getElementById('my-list').appendChild(newItem); // Adding element
});

// -------------------------
// 9. Modifying the text
// -------------------------
document.getElementById('modify-text-btn').addEventListener('click', () => {
  mainTitle.textContent = 'The Title Has Been Modified!';
});

// -------------------------
// 10. Modifying Attributes & Classes
// -------------------------
firstDiv.setAttribute('data-demo', 'true'); // Add custom attribute
firstDiv.classList.add('new-class'); // Add a new CSS class
// Remove class example: firstDiv.classList.remove('example-class');

// -------------------------
// 11. Traverse the DOM
// -------------------------
// Parent Node Traversal
const childDiv = document.getElementById('child');
const parentDiv = childDiv.parentNode; // or .parentElement
// parentDiv.style.border = '2px solid red';

// Child Node Traversal
const parent = document.getElementById('parent');
const children = parent.children; // HTMLCollection of child elements
// for (let c of children) { console.log(c); }

// Sibling Node Traversal
const siblingDiv = document.getElementById('sibling');
const prevSibling = siblingDiv.previousElementSibling; // The child div
const nextSibling = siblingDiv.nextElementSibling; // Usually null here

// -------------------------
// 12. Event Listeners & Events
// -------------------------
// Mouseover Event
document.getElementById('hover-div').addEventListener('mouseover', function() {
  this.style.background = '#ffcc80';
  this.textContent = 'Mouse is over me!';
});
document.getElementById('hover-div').addEventListener('mouseout', function() {
  this.style.background = '#ffe082';
  this.textContent = 'Hover over me (Mouseover Event)';
});

// Reveal Event (Click to reveal hidden text)
document.getElementById('reveal-btn').addEventListener('click', () => {
  document.getElementById('hidden-text').style.display = 'block';
});

// -------------------------
// 13. Event Propagation
// -------------------------
const eventDemo = document.getElementById('event-demo');
eventDemo.addEventListener('click', function(e) {
  // This runs for any click inside #event-demo
  // e.target is the actual element clicked
  // console.log('Event Propagation: Clicked on', e.target);
}, false); // Bubbling phase

// -------------------------
// 14. Event Delegation
// -------------------------
// Instead of putting a listener on every button, put it on the parent
eventDemo.addEventListener('click', function(e) {
  if (e.target && e.target.id === 'event-btn') {
    alert('Event Delegation: Button clicked!');
  }
});
// Now, if you add more buttons inside #event-demo, they can share this handler

/* 
====================
Summary of Concepts
====================

- getElementById(): Selects element by its ID (returns a single element).
- getElementsByClassName(): Selects all elements with a given class (returns live HTMLCollection).
- getElementsByTagName(): Selects all elements with a given tag name (returns live HTMLCollection).
- querySelector(): Selects the first element matching a CSS selector.
- querySelectorAll(): Selects all elements matching a CSS selector (returns static NodeList).
- setTimeout(): Runs code after a delay.
- setInterval(): Runs code repeatedly at intervals.
- Creating Elements: document.createElement().
- Adding Elements: .appendChild(), .insertBefore(), etc.
- Modifying the text: .textContent, .innerHTML, .innerText.
- Modifying Attributes & Classes: .setAttribute(), .classList.add(), .classList.remove().
- Traverse the DOM: .parentNode, .children, .previousElementSibling, .nextElementSibling.
- Event Listeners & Events: .addEventListener(). Event types include 'click', 'mouseover', etc.
- Mouseover: 'mouseover' event.
- Reveal Event: Reveal hidden elements on an event.
- Event Propagation: Events bubble up through parent elements.
- Event Delegation: Using a parent to handle events for its children (even for future children).
*/



















