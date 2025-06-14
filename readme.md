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

## React Lifecycle Methods, Props, and Events in Functional Components

### Lifecycle Methods in Functional Components

In React, functional components do not have lifecycle methods like class
components. Instead, you can use the `useEffect` hook to perform side effects in
functional components.

#### Example: Using `useEffect`

```javascript
import React, { useEffect, useState } from "react";

function ExampleComponent() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // This code runs after the component mounts
    fetch("https://api.example.com/data", {
      params: {
        page: page,
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));

    // This code runs when the component unmounts
    return () => {
      console.log("Component unmounted");
    };
  }, [page]); // Empty dependency array means this effect runs once on mount

  const handleClick = () => {
    setPage(page + 1);
  };

  return (
    <div>
      {data ? <p>Data: {JSON.stringify(data)}</p> : <p>Loading...</p>}
      <button onClick={handleClick}>Go to Next Page</button>
    </div>
  );
}
```

### Props in Functional Components

Props are used to pass data from parent to child components. In functional
components, props are received as an argument.

#### Example: Using Props

```javascript
import React from "react";

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Greeting name="Alice" />;
}
```

### Events in Functional Components

You can handle events in functional components using event handlers.

#### Example: Handling Events

```javascript
import React, { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
```

### Best Practices

1. Use `useEffect` for side effects in functional components.
2. Pass props to child components to share data.
3. Use event handlers to manage user interactions.

## Form Management with Formik and Yup

Formik and Yup are powerful libraries for handling forms in React applications.
Formik helps with form state management, while Yup provides schema-based
validation.

### Setting Up Formik and Yup

First, install the required packages:

```bash
npm install formik yup
```

### Basic Form with Formik

Here's a simple example of a form using Formik:

```javascript
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

// Validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form values:", values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
```

### Advanced Form Validation with Yup

Yup provides a rich set of validation rules. Here's an example of a more complex
form:

```javascript
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters"),
  lastName: Yup.string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  age: Yup.number()
    .required("Age is required")
    .min(18, "Must be at least 18 years old")
    .max(100, "Age must be less than 100"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

function RegistrationForm() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Form values:", values);
    // Handle form submission
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <Field
              type="text"
              name="firstName"
              className={errors.firstName && touched.firstName ? "error" : ""}
            />
            <ErrorMessage name="firstName" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="lastName">Last Name:</label>
            <Field
              type="text"
              name="lastName"
              className={errors.lastName && touched.lastName ? "error" : ""}
            />
            <ErrorMessage name="lastName" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field
              type="email"
              name="email"
              className={errors.email && touched.email ? "error" : ""}
            />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="age">Age:</label>
            <Field
              type="number"
              name="age"
              className={errors.age && touched.age ? "error" : ""}
            />
            <ErrorMessage name="age" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field
              type="password"
              name="password"
              className={errors.password && touched.password ? "error" : ""}
            />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <Field
              type="password"
              name="confirmPassword"
              className={errors.confirmPassword && touched.confirmPassword
                ? "error"
                : ""}
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="error"
            />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}
```

### Best Practices for Form Management

1. **Form Organization**
   - Break complex forms into smaller components
   - Use consistent naming conventions
   - Group related fields together

2. **Validation**
   - Validate on blur and change for better UX
   - Show validation errors only after field interaction
   - Use custom validation messages

3. **Performance**
   - Use `useFormikContext` for nested form components
   - Implement debouncing for expensive validations
   - Memoize form components when necessary

4. **Error Handling**
   - Provide clear error messages
   - Show server-side validation errors
   - Handle network errors gracefully

5. **Accessibility**
   - Use proper ARIA attributes
   - Ensure keyboard navigation works
   - Provide clear error announcements

### Common Yup Validation Rules

```javascript
const schema = Yup.object({
  // String validations
  name: Yup.string()
    .required("Required")
    .min(2, "Too short")
    .max(50, "Too long"),

  // Number validations
  age: Yup.number()
    .required("Required")
    .positive("Must be positive")
    .integer("Must be an integer"),

  // Date validations
  birthDate: Yup.date()
    .required("Required")
    .max(new Date(), "Cannot be in the future"),

  // Array validations
  tags: Yup.array()
    .of(Yup.string())
    .min(1, "At least one tag required"),

  // Object validations
  address: Yup.object({
    street: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    zipCode: Yup.string().matches(/^\d{5}$/, "Invalid zip code"),
  }),

  // Conditional validations
  password: Yup.string().when("isSignUp", {
    is: true,
    then: Yup.string().required("Required"),
  }),
});
```

## React Context API

The Context API provides a way to pass data through the component tree without
having to pass props manually at every level.

### Creating and Using Context

```javascript
// UserContext.js
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

// App.js
function App() {
  return (
    <UserProvider>
      <Navigation />
      <MainContent />
    </UserProvider>
  );
}

// Navigation.js
function Navigation() {
  const { user, logout } = useUser();

  return (
    <nav>
      {user
        ? (
          <>
            <span>Welcome, {user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        )
        : <span>Please log in</span>}
    </nav>
  );
}
```

### Best Practices for Context API

1. **Split Contexts by Domain**
   ```javascript
   // Separate contexts for different concerns
   const ThemeContext = createContext();
   const AuthContext = createContext();
   const SettingsContext = createContext();
   ```

2. **Use Custom Hooks**
   ```javascript
   function useTheme() {
     const context = useContext(ThemeContext);
     if (!context) {
       throw new Error("useTheme must be used within a ThemeProvider");
     }
     return context;
   }
   ```

3. **Memoize Context Values**
   ```javascript
   function ThemeProvider({ children }) {
     const [theme, setTheme] = useState("light");

     const value = useMemo(() => ({
       theme,
       setTheme,
     }), [theme]);

     return (
       <ThemeContext.Provider value={value}>
         {children}
       </ThemeContext.Provider>
     );
   }
   ```

## Code Splitting and Lazy Loading

Code splitting and lazy loading help improve the initial load time of your React
application by splitting the code into smaller chunks that are loaded on demand.

### Using React.lazy and Suspense

```javascript
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// Lazy load components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
}
```

### Lazy Loading with Preloading

```javascript
import React, { lazy, Suspense } from "react";

const LazyComponent = lazy(() => import("./LazyComponent"));

function App() {
  const [showComponent, setShowComponent] = useState(false);

  // Preload the component
  useEffect(() => {
    const preloadComponent = async () => {
      await import("./LazyComponent");
    };
    preloadComponent();
  }, []);

  return (
    <div>
      <button onClick={() => setShowComponent(true)}>
        Load Component
      </button>
      {showComponent && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      )}
    </div>
  );
}
```

## Firebase Integration in React

Firebase provides a suite of tools for building web applications. Here's how to
integrate Firebase with React.

### Setting Up Firebase

```javascript
// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```

### Firebase Authentication

```javascript
// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const value = {
    user,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

// LoginForm.js
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await login(email, password);
    } catch (error) {
      setError("Failed to sign in: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
```

### Firebase Firestore Integration

```javascript
// FirestoreExample.js
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

function FirestoreExample() {
  const [todos, setTodos] = useState([]);

  // Add a new document
  const addTodo = async (title) => {
    try {
      const docRef = await addDoc(collection(db, "todos"), {
        title,
        completed: false,
        createdAt: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  // Get documents
  const getTodos = async () => {
    try {
      const q = query(
        collection(db, "todos"),
        where("completed", "==", false),
      );
      const querySnapshot = await getDocs(q);
      const todoList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTodos(todoList);
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  };

  return (
    <div>
      <button onClick={() => addTodo("New Todo")}>Add Todo</button>
      <button onClick={getTodos}>Get Todos</button>
      <ul>
        {todos.map((todo) => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    </div>
  );
}
```

### Best Practices for Firebase Integration

1. **Environment Variables**
   - Store Firebase configuration in environment variables
   - Never commit sensitive keys to version control

2. **Error Handling**
   - Implement proper error handling for all Firebase operations
   - Show user-friendly error messages

3. **Security Rules**
   - Set up proper security rules in Firebase Console
   - Validate data on both client and server side

4. **Performance**
   - Use pagination for large collections
   - Implement proper indexing
   - Cache frequently accessed data

5. **Authentication**
   - Implement proper authentication state management
   - Handle authentication errors gracefully
   - Implement proper session management

## React Lifecycle Methods, Props, and Events in Functional Components

### Lifecycle Methods in Functional Components

In React, functional components do not have lifecycle methods like class
components. Instead, you can use the `useEffect` hook to perform side effects in
functional components.

#### Example: Using `useEffect`

```javascript
import React, { useEffect, useState } from "react";

function ExampleComponent() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // This code runs after the component mounts
    fetch("https://api.example.com/data", {
      params: {
        page: page,
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));

    // This code runs when the component unmounts
    return () => {
      console.log("Component unmounted");
    };
  }, [page]); // Empty dependency array means this effect runs once on mount

  const handleClick = () => {
    setPage(page + 1);
  };

  return (
    <div>
      {data ? <p>Data: {JSON.stringify(data)}</p> : <p>Loading...</p>}
      <button onClick={handleClick}>Go to Next Page</button>
    </div>
  );
}
```

### Props in Functional Components

Props are used to pass data from parent to child components. In functional
components, props are received as an argument.

#### Example: Using Props

```javascript
import React from "react";

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Greeting name="Alice" />;
}
```

### Events in Functional Components

You can handle events in functional components using event handlers.

#### Example: Handling Events

```javascript
import React, { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
```

### Best Practices

1. Use `useEffect` for side effects in functional components.
2. Pass props to child components to share data.
3. Use event handlers to manage user interactions.
