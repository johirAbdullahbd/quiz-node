const closures = [
  {
    question: "What is a closure in JavaScript?",
    options: [
      "A function that is defined using 'function' keyword",
      "A combination of a function and the lexical environment within which that function was declared",
      "A function with no side effects",
      "A function that takes another function as an argument or returns a function",
    ],
    correctAnswer: "A combination of a function and the lexical environment within which that function was declared",
  },
  {
    question: "What is the purpose of a closure in JavaScript?",
    options: [
      "To create private variables and functions",
      "To add new properties to an object",
      "To modify external variables",
      "To execute asynchronous operations",
    ],
    correctAnswer: "To create private variables and functions",
  },
  {
    question: "How does a closure maintain access to its outer function's variables even after the outer function has finished executing?",
    options: [
      "By using the 'this' keyword",
      "By using the 'arguments' object",
      "By creating a new lexical environment",
      "By forming a reference to the variables in the outer function's scope",
    ],
    correctAnswer: "By forming a reference to the variables in the outer function's scope",
  },
  {
    question: "What is the concept of 'lexical scoping' in relation to closures?",
    options: [
      "The ability to reference a variable outside of its lexical scope",
      "The ability to reference a variable within its lexical scope",
      "The ability to use mutable data types",
      "The ability to modify external variables",
    ],
    correctAnswer: "The ability to reference a variable within its lexical scope",
  },
  {
    question: "How can you create a closure in JavaScript?",
    options: [
      "By using the 'arguments' object",
      "By defining a function inside another function and returning it",
      "By using the 'this' keyword",
      "By declaring a function with the 'function' keyword",
    ],
    correctAnswer: "By defining a function inside another function and returning it",
  },
];
module.exports = closures;
