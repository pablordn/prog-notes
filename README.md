# prog-notes
programming notes, written in a clear and structured way to reinforce key concepts. They cover variables, data types, control structures, loops, functions, and modern JavaScript features (ES6+). My goal is to keep everything concise, well-explained, and easy to review whenever needed.

```markdown
# Programming Guide

## Variables & Data Types

### Declaring Variables
- **var**: Old way, function-scoped, can be redeclared.
- **let**: Block-scoped, cannot be redeclared within the same scope.
- **const**: Block-scoped, cannot be reassigned.

```js
var x = 10;  // Function-scoped
let y = 20;  // Block-scoped
const z = 30; // Block-scoped & constant
```

### Data Types
1. **Primitive Types** (Immutable)
   - `string`: Text values (`"Hello"`)
   - `number`: Integer & floating points (`42`, `3.14`)
   - `boolean`: True/False values (`true`, `false`)
   - `null`: Represents "nothing"
   - `undefined`: Variable declared but not assigned
   - `symbol`: Unique values for object properties
   - `bigint`: Large numbers beyond `Number.MAX_SAFE_INTEGER`

2. **Reference Types** (Mutable)
   - **Objects**: Collection of key-value pairs `{ name: "Alice", age: 25 }`
   - **Arrays**: Ordered lists `[1, 2, 3]`
   - **Functions**: Callable pieces of code
   - **Date, RegExp, Maps, Sets, etc.**

## Control Structures

### Conditional Statements
- Used to execute code based on conditions.
- `if`, `else if`, and `else` control execution flow.

```js
let age = 18;
if (age >= 18) {
  console.log("Adult");
} else if (age >= 13) {
  console.log("Teenager");
} else {
  console.log("Child");
}
```

- `switch` is useful for checking multiple discrete values.

```js
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Weekend soon!");
    break;
  default:
    console.log("Just another day");
}
```

## Loops
- `for`: Used when the number of iterations is known.
- `while`: Runs as long as the condition is `true`.
- `do...while`: Executes at least once before checking the condition.

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

## Functions

### Function Declaration
```js
function add(a, b) {
  return a + b;
}
```

### Arrow Functions
```js
const multiply = (a, b) => a * b;
```

### Default Parameters
```js
function greet(name = "Guest") {
  console.log("Hello, " + name);
}
```

## Objects & Arrays

### Objects
```js
const person = { name: "Alice", age: 25 };
console.log(person.name);
```

### Arrays
```js
const numbers = [1, 2, 3, 4];
numbers.push(5); // Add element
const last = numbers.pop(); // Remove last element
```

## ES6+ Features

### Destructuring
```js
const [first, second] = [10, 20];
const { name, age } = person;
```

### Spread Operator
```js
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
```

### Template Literals
```js
console.log(`Hello, ${name}`);
```

## Promises & Async

### Promises
```js
fetch("https://api.example.com")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### Async/Await
```js
async function fetchData() {
  try {
    let response = await fetch("https://api.example.com");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```
```
