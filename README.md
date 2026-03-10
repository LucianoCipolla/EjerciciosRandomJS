# 📚 JavaScript Review — freeCodeCamp
> These notes are based on freeCodeCamp's JavaScript curriculum and are intended for personal study purposes only.  
> All original content belongs to [freeCodeCamp](https://www.freecodecamp.org) (licensed under [BSD-3-Clause](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/LICENSE.md)).

> Concepts to prepare for the upcoming prep exam.

---

## Table of Contents

- [Working with HTML, CSS, and JavaScript](#working-with-html-css-and-javascript)
- [Data Types](#data-types)
- [Variables](#variables)
- [Strings](#strings)
- [Numbers](#numbers)
- [Operators](#operators)
- [Conditionals & Control Flow](#conditionals--control-flow)
- [Functions](#functions)
- [Arrays](#arrays)
- [Objects](#objects)
- [Loops](#loops)
- [Classes](#classes)
- [Higher Order Functions](#higher-order-functions)
- [DOM & Web APIs](#dom--web-apis)
- [Events](#events)
- [Asynchronous JavaScript](#asynchronous-javascript)
- [Error Handling](#error-handling)
- [Regular Expressions](#regular-expressions)
- [Storage](#storage)
- [Other Topics](#other-topics)

---

## Working with HTML, CSS, and JavaScript

While HTML and CSS provide website structure, JavaScript brings interactivity by enabling complex functionality such as handling user input, animating elements, and building full web applications.

---

## Data Types

| Type | Description |
|------|-------------|
| `Number` | Integers and floating-point values (e.g. `7`, `3.14`) |
| `String` | Sequence of characters in quotes (e.g. `"hello"`) |
| `Boolean` | `true` or `false` |
| `Undefined` | Declared variable with no assigned value |
| `Null` | Intentionally empty value |
| `Object` | Collection of key-value pairs |
| `Symbol` | Unique, immutable identifier |
| `BigInt` | Integers too large for `Number` (e.g. `123n`) |

```js
let pet = { name: "Fluffy", age: 3, type: "dog" };

const crypticKey1 = Symbol("saltNpepper");
const crypticKey2 = Symbol("saltNpepper");
console.log(crypticKey1 === crypticKey2); // false

const veryBigNumber = 1234567890123456789012345678901234567890n;
```

### `typeof` Operator

```js
let age = 25;
console.log(typeof age);       // "number"

let user = null;
console.log(typeof user);      // "object" (known JS quirk)
```

---

## Variables

```js
let cityName = "New York";   // can be reassigned
cityName = "Los Angeles";

const MAX_SIZE = 100;        // cannot be reassigned
```

### Naming Conventions

- Use **camelCase**: `cityName`, `isLoggedIn`
- Start with a letter, `_`, or `$` — never a number
- No spaces or special characters (except `_` and `$`)
- Not reserved keywords
- Case-sensitive: `age` ≠ `Age`

---

## Strings

```js
const developer = "Jessica";
console.log(developer[0]);    // "J"  (zero-based index)

// Template literals
const greeting = `Hello, ${developer}!`;

// Escaping
const statement = "She said, \"Hello!\"";

// Newline character
const poem = "Line 1\nLine 2";
```

### Common String Methods

| Method | Description |
|--------|-------------|
| `.indexOf("x")` | Index of first match, or `-1` |
| `.includes("x")` | Returns `true`/`false` |
| `.slice(0, 4)` | Extracts portion of string |
| `.toUpperCase()` / `.toLowerCase()` | Changes case |
| `.replace("a", "b")` | Replaces first match |
| `.replaceAll("a", "b")` | Replaces all matches |
| `.repeat(3)` | Repeats string N times |
| `.trim()` / `.trimStart()` / `.trimEnd()` | Removes whitespace |
| `.split("")` | Splits into array |
| `.charCodeAt(0)` | ASCII code of character |
| `String.fromCharCode(65)` | Character from ASCII code |

---

## Numbers

```js
console.log(5 + '10');   // "510"  (string coercion with +)
console.log('10' - 5);   // 5     (numeric coercion with -)
```

### Math Object

```js
Math.random()    // 0 to <1
Math.max(1,2,3)  // 3
Math.min(1,2,3)  // 1
Math.ceil(4.1)   // 5
Math.floor(4.9)  // 4
Math.round(4.5)  // 5
Math.trunc(4.9)  // 4
Math.sqrt(9)     // 3
Math.abs(-5)     // 5
Math.pow(2, 3)   // 8
```

### Number Methods

```js
isNaN(NaN)            // true
Number.isNaN(NaN)     // true (more reliable)
parseFloat("3.14px")  // 3.14
parseInt("42px")      // 42
(3.14159).toFixed(2)  // "3.14"
```

---

## Operators

### Arithmetic

`+`, `-`, `*`, `/`, `%` (remainder), `**` (exponent)

### Comparison

`==` (loose), `===` (strict), `!=`, `!==`, `>`, `<`, `>=`, `<=`

### Logical

```js
true && "hello"   // "hello"  (AND — returns second if first is truthy)
false || "hello"  // "hello"  (OR  — returns second if first is falsy)
null ?? "default" // "default" (?? — returns right only if left is null/undefined)
```

### Ternary

```js
const weather = temperature > 25 ? "sunny" : "cool";
```

### Increment / Decrement

```js
let x = 5;
console.log(++x); // 6 (prefix: increment first)
console.log(x++); // 6 (postfix: return first, then increment)
```

---

## Conditionals & Control Flow

```js
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else {
  console.log("C");
}
```

### switch

```js
switch (day) {
  case 1:
    console.log("Monday");
    break;
  default:
    console.log("Other");
}
```

### Truthy / Falsy

Falsy values: `false`, `0`, `""`, `null`, `undefined`, `NaN`  
Everything else is truthy.

---

## Functions

```js
// Function declaration (hoisted)
function greet(name) {
  return `Hello, ${name}!`;
}

// Arrow function
const greet = (name) => `Hello, ${name}!`;

// Single param — parens optional
const double = n => n * 2;
```

### Scope

- **Global scope** — accessible everywhere
- **Local scope** — only inside the function
- **Block scope** — `let`/`const` inside `{}`

### Closures

```js
function outerFunction(x) {
  let y = 10;
  function innerFunction() {
    console.log(x + y); // accesses outer scope
  }
  return innerFunction;
}
const closure = outerFunction(5);
closure(); // 15
```

---

## Arrays

```js
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]);    // "apple"
console.log(fruits.length); // 3
```

### Common Array Methods

| Method | Description |
|--------|-------------|
| `.push(x)` | Add to end |
| `.pop()` | Remove from end |
| `.shift()` | Remove from start |
| `.unshift(x)` | Add to start |
| `.indexOf(x)` | Find index |
| `.includes(x)` | Check existence |
| `.splice(i, n)` | Add/remove at position |
| `.slice(i, j)` | Copy portion |
| `.concat(arr)` | Merge arrays |
| `.join("")` | Array to string |
| `.reverse()` | Reverse in place |
| `.sort()` | Sort (use compare fn for numbers) |
| `.flat()` | Flatten nested arrays |
| `[...arr]` | Spread / shallow copy |

### Destructuring

```js
const [first, second, ...rest] = ["apple", "banana", "orange", "mango"];
```

---

## Objects

```js
const person = { name: "Alice", age: 30 };

// Access
console.log(person.name);       // dot notation
console.log(person["name"]);    // bracket notation

// Add / update
person.job = "Engineer";

// Delete
delete person.job;

// Check property
Object.hasOwn(person, "name"); // true (modern, recommended)
"name" in person;              // true
```

### Destructuring

```js
const { name, age } = person;
```

### Optional Chaining

```js
user?.profile?.address?.street  // won't throw if any part is undefined
```

### JSON

```js
JSON.stringify({ name: "Alice" });  // '{"name":"Alice"}'
JSON.parse('{"name":"Alice"}');     // { name: "Alice" }
```

---

## Loops

```js
// for
for (let i = 0; i < 5; i++) { }

// for...of (arrays, strings)
for (const item of array) { }

// for...in (object properties)
for (const key in object) { }

// while
while (condition) { }

// do...while (runs at least once)
do { } while (condition);
```

`break` exits the loop early. `continue` skips to the next iteration.

---

## Classes

```js
class Dog {
  constructor(name) {
    this.name = name;
  }
  bark() {
    console.log(`${this.name} says woof!`);
  }
}

const dog = new Dog("Gino");
dog.bark(); // "Gino says woof!"
```

### Inheritance

```js
class Car extends Vehicle {
  constructor(brand, year, doors) {
    super(brand, year); // calls parent constructor
    this.doors = doors;
  }
}
```

### Static Methods & Properties

```js
class MathHelper {
  static PI = 3.14159;
  static square(n) { return n * n; }
}

MathHelper.square(4); // 16
```

---

## Higher Order Functions

```js
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(n => console.log(n));           // iterate
numbers.map(n => n * 2);                        // [2, 4, 6, 8, 10]
numbers.filter(n => n % 2 === 0);              // [2, 4]
numbers.reduce((acc, n) => acc + n, 0);         // 15
numbers.every(n => n > 0);                      // true
numbers.some(n => n > 4);                       // true
```

### Method Chaining

```js
const result = "  Hello, World!  "
  .trim()
  .toLowerCase()
  .replace("world", "JavaScript");
// "hello, JavaScript!"
```

---

## DOM & Web APIs

```js
document.getElementById("id");
document.querySelector(".class");
document.querySelectorAll("li");

element.innerHTML = "<p>Hello</p>";
element.textContent = "Hello";
element.setAttribute("src", "image.png");
element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("active");

const li = document.createElement("li");
parent.appendChild(li);
parent.removeChild(li);
```

---

## Events

```js
btn.addEventListener("click", (event) => {
  event.preventDefault(); // stops default behavior
  console.log("clicked!");
});

btn.removeEventListener("click", handler);
```

Common events: `click`, `input`, `change`, `submit`, `DOMContentLoaded`, `focus`, `blur`

### Event Bubbling & Delegation

Events bubble up through parent elements. **Event delegation** listens on a parent instead of each child.

---

## Asynchronous JavaScript

### Promises

```js
fetch("https://api.example.com/data")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### async / await

```js
async function getData() {
  try {
    const res = await fetch("https://api.example.com/data");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

### setTimeout / setInterval

```js
setTimeout(() => console.log("after 3s"), 3000);

const id = setInterval(() => console.log("every 2s"), 2000);
clearInterval(id); // stop it
```

---

## Error Handling

```js
try {
  // risky code
} catch (err) {
  console.error(err);
} finally {
  // always runs
}

// Throwing custom errors
throw new TypeError("Expected a number");
```

### Error Types

| Type | Cause |
|------|-------|
| `SyntaxError` | Incorrect syntax (missing bracket, etc.) |
| `ReferenceError` | Accessing undeclared variable |
| `TypeError` | Wrong type operation |
| `RangeError` | Value out of allowed range |

---

## Regular Expressions

```js
const regex = /freeCodeCamp/i;
regex.test("freecodecamp");          // true
"freecodecamp".match(regex);         // match array
"I like cats".replace(/cats/, "dogs"); // "I like dogs"
```

### Flags

| Flag | Description |
|------|-------------|
| `i` | Case-insensitive |
| `g` | Global (match all) |
| `m` | Multiline |
| `s` | Dot matches newlines |

### Character Classes

| Class | Matches |
|-------|---------|
| `.` | Any char except newline |
| `\d` | Digits `[0-9]` |
| `\w` | Word chars `[a-z0-9_]` |
| `\s` | Whitespace |
| `\D`, `\W`, `\S` | Negations of above |

---

## Storage

### localStorage

```js
localStorage.setItem("key", "value");
localStorage.getItem("key");
localStorage.removeItem("key");
localStorage.clear();
```

### sessionStorage

Same API as `localStorage`, but data is cleared when the tab closes.

### Cookies

```js
document.cookie = "user=Alice; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
```

> ⚠️ Never store passwords or sensitive data in `localStorage`.

---

## Other Topics

### var, Hoisting & Scope

- `var` is function-scoped and hoisted (initialized as `undefined`)
- `let`/`const` are block-scoped and in the **temporal dead zone** before declaration
- Function declarations are fully hoisted

### Sets & Maps

```js
const set = new Set([1, 2, 3]);  // unique values only
set.add(4); set.has(1); set.delete(2);

const map = new Map([["key", "value"]]);
map.set("name", "Alice"); map.get("name");
```

### Modules

```js
// math.js
export function add(a, b) { return a + b; }
export default function subtract(a, b) { return a - b; }

// main.js
import { add } from "./math.js";
import subtract from "./math.js";
import * as Math from "./math.js";
```

### Recursion

```js
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
```

### Pure vs Impure Functions

- **Pure**: same input → same output, no side effects
- **Impure**: modifies external state or has side effects

### Currying

```js
const curriedAdd = a => b => a + b;
curriedAdd(2)(3); // 5
```