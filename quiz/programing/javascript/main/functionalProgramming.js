const functionalPrograming = [
  {
    question: "What is a higher-order function in JavaScript?",
    options: [
      "A function that operates on higher-order numbers",
      "A function that takes another function as an argument or returns a function",
      "A function with a higher priority",
      "A function with a larger number of lines of code",
    ],
    correctAnswer: "A function that takes another function as an argument or returns a function",
  },
  {
    question: "What is a pure function in functional programming?",
    options: [
      "A function with no side effects and the same input always produces the same output",
      "A function that is defined using 'function' keyword",
      "A function that modifies external variables",
      "A function that has asynchronous operations",
    ],
    correctAnswer: "A function with no side effects and the same input always produces the same output",
  },
  {
    question: "What does the term 'immutability' mean in functional programming?",
    options: [
      "The ability of a function to mutate variables",
      "The ability to change the value of a variable",
      "The idea that once a data structure is created, it cannot be changed",
      "The ability to use mutable data types",
    ],
    correctAnswer: "The idea that once a data structure is created, it cannot be changed",
  },
  {
    question: "What is the purpose of the 'map()' function in JavaScript?",
    options: [
      "To create a new array by applying a function to each element of an existing array",
      "To remove elements from an array",
      "To sort the elements of an array",
      "To reverse the order of elements in an array",
    ],
    correctAnswer: "To create a new array by applying a function to each element of an existing array",
  },
  {
    question: "What does the 'filter()' function do in functional programming?",
    options: [
      "Creates a new array with all elements greater than a specified value",
      "Creates a new array with elements that pass a test",
      "Removes duplicate elements from an array",
      "Sorts the elements of an array",
    ],
    correctAnswer: "Creates a new array with elements that pass a test",
  },
  {
    question: "How does the 'reduce()' function work in JavaScript?",
    options: [
      "It filters elements based on a test",
      "It combines all elements of an array into a single value",
      "It sorts the elements of an array",
      "It reverses the order of elements in an array",
    ],
    correctAnswer: "It combines all elements of an array into a single value",
  },
  {
    question: "What is a closure in JavaScript?",
    options: [
      "A function that has no side effects",
      "A function that takes another function as an argument",
      "A combination of a function and the lexical environment within which that function was declared",
      "A function that returns a function",
    ],
    correctAnswer: "A combination of a function and the lexical environment within which that function was declared",
  },
  {
    question: "What is the purpose of the 'forEach()' function in JavaScript?",
    options: [
      "To filter elements based on a test",
      "To apply a function to every element in an array",
      "To create a new array by applying a function to each element of an existing array",
      "To combine all elements of an array into a single value",
    ],
    correctAnswer: "To apply a function to every element in an array",
  },
  {
    question: "What is the significance of currying in functional programming?",
    options: [
      "It involves adding new properties to an object",
      "It converts a function with multiple arguments into a sequence of functions with a single argument",
      "It creates a closure",
      "It reverses the order of elements in an array",
    ],
    correctAnswer: "It converts a function with multiple arguments into a sequence of functions with a single argument",
  },
  {
    question: "What is the purpose of the 'bind()' function in JavaScript?",
    options: [
      "To filter elements based on a test",
      "To create a new array by applying a function to each element of an existing array",
      "To bind a function to a specific object and return a new function",
      "To combine all elements of an array into a single value",
    ],
    correctAnswer: "To bind a function to a specific object and return a new function",
  },
  {
    question: "What is the concept of 'function composition' in functional programming?",
    options: [
      "Combining two functions to create a new one",
      "Creating a closure",
      "Applying a function to every element in an array",
      "Converting a function with multiple arguments into a sequence of functions with a single argument",
    ],
    correctAnswer: "Combining two functions to create a new one",
  },
  {
    question: "What does the 'memoization' technique involve in functional programming?",
    options: [
      "Optimizing a function by using recursion",
      "Caching the results of expensive function calls and returning the cached result",
      "Filtering elements based on a test",
      "Combining all elements of an array into a single value",
    ],
    correctAnswer: "Caching the results of expensive function calls and returning the cached result",
  },
  {
    question: "What is the purpose of the 'partial application' technique in functional programming?",
    options: [
      "Applying a function to every element in an array",
      "Converting a function with multiple arguments into a sequence of functions with a single argument",
      "Creating a closure",
      "Providing a subset of the arguments to a function and returning a new function",
    ],
    correctAnswer: "Providing a subset of the arguments to a function and returning a new function",
  },
  {
    question: "What is the concept of 'side effects' in functional programming?",
    options: [
      "The ability to change the value of a variable",
      "Modifying external variables within a function",
      "A function with no side effects",
      "The ability to use mutable data types",
    ],
    correctAnswer: "Modifying external variables within a function",
  },
  {
    question: "What does the 'thunk' function do in functional programming?",
    options: [
      "Filters elements based on a test",
      "Combines all elements of an array into a single value",
      "Delays the evaluation of a function until it is needed",
      "Creates a closure",
    ],
    correctAnswer: "Delays the evaluation of a function until it is needed",
  },
  {
    question: "What is the purpose of the 'pipe' function in functional programming?",
    options: [
      "Combining two functions to create a new one",
      "Applying a function to every element in an array",
      "Caching the results of expensive function calls",
      "Binding a function to a specific object",
    ],
    correctAnswer: "Combining two functions to create a new one",
  },
  {
    question: "How do you declare a higher-order function in JavaScript?",
    options: ["function myFunction() {}", "myFunction = function() {}", "define function myFunction() {}", "myFunction = higherOrder(function() {})"],
    correctAnswer: "myFunction = function() {}",
  },
  {
    question: "What is the purpose of the 'compose' function in functional programming?",
    options: [
      "Combining two functions to create a new one",
      "Creating a closure",
      "Applying a function to every element in an array",
      "Binding a function to a specific object",
    ],
    correctAnswer: "Combining two functions to create a new one",
  },
  {
    question: "What is the concept of 'referential transparency' in functional programming?",
    options: [
      "The ability to reference a variable outside of its scope",
      "The ability to use mutable data types",
      "The ability to reference a function without invoking it",
      "The ability to replace a function call with its result without affecting the program's behavior",
    ],
    correctAnswer: "The ability to replace a function call with its result without affecting the program's behavior",
  },
  {
    question: "What is the purpose of the 'currying' technique in functional programming?",
    options: [
      "Combining two functions to create a new one",
      "Applying a function to every element in an array",
      "Converting a function with multiple arguments into a sequence of functions with a single argument",
      "Binding a function to a specific object",
    ],
    correctAnswer: "Converting a function with multiple arguments into a sequence of functions with a single argument",
  },
];
module.exports = functionalPrograming;
