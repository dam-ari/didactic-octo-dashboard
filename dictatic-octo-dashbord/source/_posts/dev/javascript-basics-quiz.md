---
title: JavaScript Basics Quiz
tags: [JavaScript, Basics, Interview, Questions, Coding, Programming]
category: [Programming, JavaScript, Basics]
background: 
cover: true
---

# JavaScript Basics Quiz

<details>
  <summary>What are the different data types in JavaScript?</summary>
  
  The different data types in JavaScript are:
  - `string`
  - `number` (includes integers, floating-point numbers, `Infinity`, and `NaN`)
  - `boolean`
  - `null`
  - `undefined`
  - `symbol` (unique and immutable identifiers)
  - `bigInt` (for integers of arbitrary length)

</details>

<details>
  <summary>Explain the difference between `var`, `let`, and `const`.</summary>
  
  Similarities:
  - All are used to declare variables.

  Differences:
  1. **Scope**:
     - `var` is function-scoped or globally-scoped.
     - `let` and `const` are block-scoped.
  2. **Redeclaration**:
     - `var` can be redeclared within the same scope.
     - `let` cannot be redeclared within the same scope.
     - `const` cannot be redeclared within the same scope.
  3. **Hoisting**:
     - `var` is hoisted to the top of the scope and initialized with `undefined`.
     - `let` and `const` are hoisted but not initialized.
  4. **Global Object**:
     - `var` variables declared globally are added to the global object.
     - `let` and `const` are not.
  5. **Assignment**:
     - `var` and `let` can be reassigned.
     - `const` must be initialized at declaration and cannot be reassigned.

</details>

<details>
  <summary>What is `hoisting` in JavaScript?</summary>
  
  Hoisting is the mechanism where variables and function declarations are moved to the top of their respective scopes before the code is executed. This allows the use of functions and variables before they are declared in the code.
  
  - **Variable hoisting with `var`**:
    ```javascript
    console.log(x); // undefined
    var x = 5;
    console.log(x); // 5
    ```
  - **Variable hoisting with `let` and `const`**:
    ```javascript
    // console.log(y); // ReferenceError: Cannot access 'y' before initialization
    let y = 5;
    console.log(y); // 5
    ```
  - **Function hoisting**:
    ```javascript
    console.log(foo()); // "foo"
    
    function foo() {
      return "foo";
    }
    ```
  - **Function expression hoisting**:
    ```javascript
    // console.log(bar()); // TypeError: bar is not a function
    var bar = function() {
      return "bar";
    };
    console.log(bar()); // "bar"
    ```
  
</details>

<details>
  <summary>Explain the concept of `closures` in JavaScript.</summary>
  
  Closures are a feature of JavaScript where an inner function has access to variables from its outer enclosing function's scope, even after the outer function has finished executing. This allows the inner function to remember and continue to access these variables.

  **Example**:
  ```javascript
  function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
      console.log('Outer Variable:', outerVariable);
      console.log('Inner Variable:', innerVariable);
    };
  }

  const newFunction = outerFunction('outside');
  newFunction('inside');
  ```

  **Practical Uses**:
  1. **Data Privacy**:
     ```javascript
     function counter() {
       let count = 0;
       return function() {
         count += 1;
         return count;
       };
     }

     const increment = counter();
     console.log(increment()); // 1
     console.log(increment()); // 2
     console.log(increment()); // 3
     ```
  2. **Callbacks and Event Handlers**:
     ```javascript
     function createButton(label) {
       const button = document.createElement('button');
       button.innerText = label;
       button.onclick = function() {
         alert(`Button ${label} clicked`);
       };
       document.body.appendChild(button);
     }

     createButton('Click Me');
     ```
  3. **Function Factories**:
     ```javascript
     function createMultiplier(multiplier) {
       return function(number) {
         return number * multiplier;
       };
     }

     const double = createMultiplier(2);
     const triple = createMultiplier(3);

     console.log(double(5)); // 10
     console.log(triple(5)); // 15
     ```

</details>
