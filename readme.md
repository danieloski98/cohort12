# HTML Accessibility Guide for Students

## Introduction to Web Accessibility

Web accessibility ensures that websites and web applications are usable by
everyone, including people with disabilities. This guide covers fundamental HTML
accessibility practices with practical examples.

## Why Accessibility Matters

- **Legal requirements**: Many countries have laws requiring accessible websites
- **Larger audience**: Improves usability for all users, including those with
  disabilities
- **Better SEO**: Many accessibility practices also improve search engine
  optimization
- **Ethical responsibility**: Creating inclusive digital experiences

## Key HTML Accessibility Techniques

### 1. Semantic HTML

Use HTML elements that clearly describe their purpose rather than styling
generic elements.

#### Example: Non-semantic vs. Semantic HTML

❌ **Poor Practice**:

```html
<div class="header">Website Title</div>
<div class="navigation">
  <div class="nav-item">Home</div>
  <div class="nav-item">About</div>
</div>
<div class="main-content">
  <div class="section-title">Welcome</div>
  <div class="paragraph">This is the main content.</div>
</div>
<div class="footer">Copyright 2025</div>
```

✅ **Good Practice**:

```html
<header>Website Title</header>
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>
<main>
  <h1>Welcome</h1>
  <p>This is the main content.</p>
</main>
<footer>Copyright 2025</footer>
```

### 2. Alternative Text for Images

Always provide descriptive alt text for images so screen readers can explain
them to users.

#### Example: Alt Text

❌ **Poor Practice**:

```html
<img src="chart.jpg" />
```

✅ **Good Practice**:

```html
<img src="chart.jpg" alt="Bar chart showing sales growth from 2020-2025" />
```

For decorative images that don't convey information:

```html
<img src="decorative-line.jpg" alt="" />
```

### 3. Proper Heading Structure

Use headings (`<h1>` through `<h6>`) in a logical, hierarchical order to
structure your content.

#### Example: Heading Structure

❌ **Poor Practice**:

```html
<h3>Main Page Title</h3>
<h1>First Section</h1>
<h2>Subsection</h2>
```

✅ **Good Practice**:

```html
<h1>Main Page Title</h1>
<h2>First Section</h2>
<h3>Subsection</h3>
```

### 4. Form Accessibility

Forms need proper labels, instructions, and error messages to be accessible.

#### Example: Accessible Form

❌ **Poor Practice**:

```html
<div>
  Name: <input type="text" />
  <span class="error">Required</span>
</div>
```

✅ **Good Practice**:

```html
<div>
  <label for="name">Name:</label>
  <input type="text" id="name" aria-required="true" />
  <span id="name-error" role="alert">This field is required</span>
</div>
```

### 5. ARIA Attributes

Accessible Rich Internet Applications (ARIA) attributes enhance accessibility
when HTML alone isn't sufficient.

#### Example: ARIA in Navigation

```html
<nav aria-label="Main Navigation">
  <ul role="menubar">
    <li role="none">
      <a href="/" role="menuitem">Home</a>
    </li>
    <li role="none">
      <a
        href="/products"
        role="menuitem"
        aria-haspopup="true"
        aria-expanded="false"
      >Products</a>
      <ul role="menu">
        <li role="none">
          <a href="/products/new" role="menuitem">New Arrivals</a>
        </li>
        <li role="none">
          <a href="/products/sale" role="menuitem">Sale Items</a>
        </li>
      </ul>
    </li>
  </ul>
</nav>
```

### 6. Keyboard Navigation

Ensure all interactive elements are keyboard accessible.

#### Example: Skip Navigation Link

```html
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>

  <header><!-- Navigation, etc. --></header>

  <main id="main-content">
    <h1>Page Title</h1>
    <!-- Main content -->
  </main>
</body>
```

### 7. Tables

Use proper table markup with headers and captions.

#### Example: Accessible Table

❌ **Poor Practice**:

```html
<table>
  <tr>
    <td>Name</td>
    <td>Age</td>
    <td>Role</td>
  </tr>
  <tr>
    <td>Alex</td>
    <td>25</td>
    <td>Developer</td>
  </tr>
</table>
```

✅ **Good Practice**:

```html
<table>
  <caption>Team Members</caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alex</td>
      <td>25</td>
      <td>Developer</td>
    </tr>
  </tbody>
</table>
```

### 8. Color and Contrast

Ensure sufficient color contrast and don't rely solely on color to convey
information.

#### Example: Form Validation

❌ **Poor Practice**:

```html
<style>
  .error {
    color: red;
  }
</style>
<div>
  <label for="email">Email:</label>
  <input type="email" id="email" />
  <span class="error">Invalid email format</span>
</div>
```

✅ **Good Practice**:

```html
<style>
  .error {
    color: #d50000; /* High contrast red */
    font-weight: bold;
  }
  .error::before {
    content: "⚠️ "; /* Icon in addition to color */
  }
</style>
<div>
  <label for="email">Email:</label>
  <input type="email" id="email" aria-describedby="email-error" />
  <span id="email-error" class="error" role="alert">Invalid email format</span>
</div>
```

## Testing Tools

- **WAVE Web Accessibility Tool**: https://wave.webaim.org/
- **Axe DevTools**: Chrome extension for accessibility testing
- **Lighthouse**: Built into Chrome DevTools
- **Screen readers**: NVDA (Windows), VoiceOver (Mac), JAWS (Windows)

## Accessibility Checklist for Students

1. ☐ Used semantic HTML
2. ☐ Added alt text to all images
3. ☐ Created logical heading structure
4. ☐ Made forms accessible with labels and instructions
5. ☐ Ensured keyboard navigation works
6. ☐ Used proper table markup
7. ☐ Verified sufficient color contrast
8. ☐ Tested with accessibility tools

## Resources for Learning More

- WebAIM: https://webaim.org/
- MDN Web Docs Accessibility Guide:
  https://developer.mozilla.org/en-US/docs/Web/Accessibility
- W3C Web Accessibility Initiative: https://www.w3.org/WAI/

# HTML Typography Guide for Students

## Introduction to Web Typography

Typography is the art and technique of arranging type to make written language
legible, readable, and appealing. On the web, good typography enhances user
experience, increases readability, and reinforces brand identity.

## Why Typography Matters in Web Design

- **Readability**: Makes content easier to consume
- **Hierarchy**: Guides users through content in order of importance
- **Branding**: Conveys personality and tone
- **Accessibility**: Ensures content is readable by everyone
- **User Experience**: Keeps users engaged and reduces eye strain

## Key HTML & CSS Typography Techniques

### 1. Text Elements in HTML

HTML provides several elements specifically designed for text content.

#### Example: Basic Text Elements

```html
<h1>This is a main heading</h1>
<h2>This is a subheading</h2>
<p>
  This is a paragraph of text with <strong>bold text</strong> and <em>italic
    text</em>.
</p>
<blockquote>This is a blockquote for featured text or citations.</blockquote>
<pre>This text preserves whitespace and formatting.</pre>
<code>This is for displaying code snippets.</code>
```

### 2. Font Properties in CSS

CSS offers extensive control over how text appears on your webpage.

#### Example: Font Properties

```css
body {
  font-family: "Open Sans", Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #333333;
}

h1 {
  font-family: "Montserrat", Helvetica, sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  color: #222222;
}
```

### 3. Web Fonts

Web fonts allow designers to use fonts beyond the standard system fonts.

#### Example: Google Fonts Implementation

```html
<head>
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Montserrat:wght@700&display=swap"
    rel="stylesheet"
  />
</head>
```

#### Example: @font-face Rule

```css
@font-face {
  font-family: "CustomFont";
  src:
    url("fonts/customfont.woff2") format("woff2"),
    url("fonts/customfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

body {
  font-family: "CustomFont", sans-serif;
}
```

### 4. Text Alignment and Spacing

CSS provides properties to control text alignment, spacing, and indentation.

#### Example: Text Alignment & Spacing

```css
.text-sample {
  text-align: left; /* Could be center, right, or justify */
  text-indent: 1em; /* Indents the first line of text */
  letter-spacing: 0.5px; /* Space between characters */
  word-spacing: 2px; /* Space between words */
  line-height: 1.6; /* Space between lines, unitless value recommended */
}

.paragraph {
  margin-bottom: 1.5rem; /* Space after paragraphs */
}
```

### 5. Responsive Typography

Typography that adjusts based on screen size improves readability across
devices.

#### Example: Responsive Font Sizes

```css
/* Base font size */
html {
  font-size: 16px;
}

h1 {
  font-size: 2rem; /* 32px on default size */
}

/* Larger fonts on bigger screens */
@media (min-width: 768px) {
  html {
    font-size: 18px;
  }
}

/* Using viewport units for fluid typography */
h2 {
  font-size: calc(1.5rem + 1vw); /* Scales with viewport width */
}
```

### 6. Typographic Hierarchy

Creating a clear hierarchy helps users scan and understand content.

#### Example: Visual Hierarchy

```html
<article>
  <h1 class="article-title">Main Article Title</h1>
  <p class="article-meta">Posted on May 15, 2025 by Author Name</p>

  <h2 class="section-heading">First Major Section</h2>
  <p>Introduction paragraph to the section...</p>

  <h3 class="subsection-heading">Subsection Title</h3>
  <p>Details about this specific topic...</p>
</article>
```

```css
.article-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #111;
  margin-bottom: 0.5rem;
}

.article-meta {
  font-size: 0.9rem;
  color: #666;
  font-style: italic;
  margin-bottom:
```

# JavaScript Fundamentals Guide for Students

## Introduction to JavaScript

JavaScript is a programming language that adds interactivity to web pages. It
allows you to create dynamic content, control multimedia, animate images, and
much more.

## JavaScript Data Types

JavaScript has several built-in data types:

### Primitive Data Types

- **String**: Text data
  ```javascript
  let name = "Alice";
  let message = "Hello World";
  ```

- **Number**: Numeric data (both integers and decimals)
  ```javascript
  let age = 25;
  let price = 99.99;
  ```

- **Boolean**: True or false values
  ```javascript
  let isActive = true;
  let isComplete = false;
  ```

- **Null**: Represents the intentional absence of any object value
  ```javascript
  let emptyValue = null;
  ```

- **Undefined**: Represents a variable that has been declared but not assigned a
  value
  ```javascript
  let notAssigned;
  ```

### Complex Data Types

- **Object**: Collection of key-value pairs
  ```javascript
  let person = {
    name: "Alice",
    age: 25,
    isStudent: true,
    isAdult: null,
    isAnimal: undefined,
  };

  console.log(person['name']) => "Alice";
  ```

- **Array**: Ordered list of values
  ```javascript
  let colors = ["red", "green", "blue", "orange", 23, true, null, undefined];
  let numbers = [1, 2, 3, 4, 5];

  console.log(colors[0]) => 'red';
  ```

## Variables in JavaScript

Variables are containers for storing data values. JavaScript has three ways to
declare variables:

### var (Function-scoped)

```javascript
var name = "Alice";
```

### let (Block-scoped)

```javascript
let age = 25;
```

### const (Block-scoped, cannot be reassigned)

```javascript
const PI = 3.14159;
```

## Functions in JavaScript

Functions are blocks of code designed to perform a particular task.

### Function Declaration

```javascript
**creation**
function greet(name) {
  return "Hello, " + name + "!";
}
```

### Function Expression

```javascript
const greet = function (name) {
  return "Hello, " + name + "!";
};
```

### Arrow Function (ES6+)

```javascript
const greet = (name) => {
  return "Hello, " + name + "!";
};
```

## JavaScript Events

Events are actions or occurrences that happen in the browser that you can
respond to.

### Common Events

- **Click Event**
  ```javascript
  button.addEventListener("click", function () {
    console.log("Button was clicked!");
  });
  ```

- **Mouse Events**
  ```javascript
  element.addEventListener("mouseover", function () {
    console.log("Mouse is over the element");
  });
  ```

- **Keyboard Events**
  ```javascript
  document.addEventListener("keydown", function (event) {
    console.log("Key pressed: " + event.key);
  });
  ```

- **Form Events**
  ```javascript
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted");
  });
  ```

### Event Handling Best Practices

1. Use `addEventListener` instead of inline event handlers
2. Consider event delegation for multiple elements
3. Use `preventDefault()` when needed
4. Clean up event listeners when they're no longer needed

## Resources for Learning More

- MDN JavaScript Guide:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
- JavaScript.info: https://javascript.info/
- Eloquent JavaScript: https://eloquentjavascript.net/

## JavaScript Arrays

Arrays are a fundamental part of JavaScript and are used to store multiple
values in a single variable. They are list-like objects and come with a variety
of methods to perform operations on the stored data.

### Common Array Methods

- **Push Method**
  - The `push()` method adds one or more elements to the end of an array and
    returns the new length of the array.
  ```javascript
  let fruits = ["apple", "banana"];
  fruits.push("orange");
  fruits.push("mango");
  console.log(fruits); // Output: ["apple", "banana", "orange", "mango"]
  // to add in front of the array
  fruits.unshift("pear");
  console.log(fruits); // Output: ["pear", "apple", "banana", "orange", "mango"]
  ```

- **Pop Method**
  - The `pop()` method removes the last element from an array and returns that
    element. This method changes the length of the array.
  ```javascript
  let fruits = ["apple", "banana", "orange"];
  let lastFruit = fruits.pop();
  console.log(lastFruit); // Output: "orange"
  console.log(fruits); // Output: ["apple", "banana"]
  ```

- **Map Method**
  - The `map()` method creates a new array populated with the results of calling
    a provided function on every element in the calling array.
  ```javascript
  let numbers = [1, 2, 3, 4];
  let doubled = numbers.map(function (number) {
    return number * 2;
  });
  console.log(doubled); // Output: [2, 4, 6, 8]
  ```

- **Filter Method**
  - The `filter()` method creates a new array with all elements that pass the
    test implemented by the provided function.
  ```javascript
  let numbers = [1, 2, 3, 4, 5];
  let arrayOfPersons = [
    {
      name: "john",
      passsed: true,
    },
    {
      name: "emmanuel",
      passed: false,
    },
  ];

  let passedUsers = arrayOfPersons.filter(function (item) {
    if (item?.passed) {
      return item;
    }
  });

  console.log(passedUsers); // output: [  { name: "emmanuel", passed: false }]

  let evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
  });
  console.log(evenNumbers); // Output: [2, 4]
  ```

- **Reduce Method**
  - The `reduce()` method executes a reducer function (that you provide) on each
    element of the array, resulting in a single output value.
  ```javascript
  let numbers = [1, 2, 3, 4];
  let sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  console.log(sum); // Output: 10
  ```

### Best Practices for Using Arrays

1. Use array methods to write clean and concise code.
2. Be mindful of the mutability of arrays when using methods like `push()` and
   `pop()`.
3. Use `map()`, `filter()`, and `reduce()` for functional programming patterns.
4. Always consider the performance implications of array operations on large
   datasets.

## Function Calling, Closures, and Callbacks in JavaScript

### Function Calling

Calling a function means executing the code inside it. You call a function by
using its name followed by parentheses, optionally passing arguments.

```javascript
function sayHello(name) {
  console.log("Hello, " + name + "!");
}

sayHello("Alice"); // Output: Hello, Alice!
```

You can also call functions that return values and use those values:

```javascript
function add(a, b) {
  return a + b;
}

let sum = add(3, 5); // sum is 8
```

### Closures

A closure is a function that remembers the variables from the place where it was
created, even after that place has finished executing. Closures are useful for
data privacy and creating functions with persistent state.

#### Example: Closure

```javascript
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

let counter = makeCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
```

In this example, the inner function remembers the `count` variable even after
`makeCounter` has finished running.

### Callbacks

A callback is a function passed as an argument to another function, to be called
later. Callbacks are commonly used for asynchronous operations, event handling,
and array methods.

#### Example: Callback in Array Method

```javascript
let numbers = [1, 2, 3, 4];

numbers.forEach(function (number) {
  console.log(number * 2);
});
// Output: 2, 4, 6, 8
```

#### Example: Callback in Asynchronous Code

```javascript
function fetchData(callback) {
  setTimeout(function () {
    callback("Data loaded!");
  }, 1000);
}

fetchData(function (message) {
  console.log(message); // Output after 1 second: Data loaded!
});
```

### Best Practices

1. Use closures to create private variables and encapsulate logic.
2. Use callbacks for asynchronous operations, but consider Promises or
   async/await for more complex flows.
3. Always check that a callback is a function before calling it to avoid errors.

## API Calls, Fetch, Promises, Async/Await, and Import/Export in JavaScript

### API Calls and Fetch

The Fetch API provides a modern way to make HTTP requests in JavaScript. It
returns a Promise that resolves to the Response object representing the response
to the request.

#### Example: Fetch API

```javascript
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error fetching data:", error));
```

### Promises

Promises are objects representing the eventual completion or failure of an
asynchronous operation. They allow you to handle asynchronous operations more
elegantly.

#### Example: Creating a Promise

```javascript
let myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
    let success = true;
    if (success) {
      resolve("Operation successful!");
    } else {
      reject("Operation failed!");
    }
  }, 1000);
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

### Async/Await

Async/Await is a modern way to handle asynchronous operations in JavaScript. It
allows you to write asynchronous code in a more synchronous style.

#### Example: Async/Await

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
```

### Import and Export

JavaScript modules allow you to split your code into separate files, making it
more maintainable and reusable. You can use `import` and `export` statements to
share code between modules.

#### Example: Exporting a Module

```javascript
// math.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
```

#### Example: Importing a Module

```javascript
// main.js
import { add, subtract } from "./math.js";

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
```

### Best Practices

1. Use Fetch API for making HTTP requests in modern JavaScript applications.
2. Use Promises and Async/Await for handling asynchronous operations.
3. Use modules to organize and share code across your application.
