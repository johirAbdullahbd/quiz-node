const invokingFunctions = [
  {
    question: "How do you define a function in JavaScript?",
    options: ["function myFunction() {}", "myFunction = function() {}", "define function myFunction()", "myFunction => {}"],
    correctAnswer: "function myFunction() {}",
  },
  {
    question: "What is the purpose of the 'return' statement in a JavaScript function?",
    options: [
      "To define a new variable",
      "To exit the function and return a value",
      "To print a message to the console",
      "To declare a new function",
    ],
    correctAnswer: "To exit the function and return a value",
  },
  {
    question: "How do you invoke (call) a function in JavaScript?",
    options: ["invoke myFunction();", "call myFunction();", "myFunction.invoke();", "myFunction();"],
    correctAnswer: "myFunction();",
  },
  {
    question: "What is a parameter in a JavaScript function?",
    options: [
      "A variable declared inside a function",
      "A value passed to a function when it is called",
      "The return value of a function",
      "A built-in JavaScript method",
    ],
    correctAnswer: "A value passed to a function when it is called",
  },
  {
    question: "How do you declare a function expression in JavaScript?",
    options: ["function myFunction() {}", "myFunction = function() {}", "define function myFunction()", "myFunction => {}"],
    correctAnswer: "myFunction = function() {}",
  },
  {
    question: "What is the purpose of the 'arguments' object in a JavaScript function?",
    options: [
      "To define function parameters",
      "To store local variables",
      "To access the arguments passed to a function",
      "To return multiple values",
    ],
    correctAnswer: "To access the arguments passed to a function",
  },
  {
    question: "How can you declare a default value for a function parameter in JavaScript?",
    options: [
      "function myFunction(param = defaultValue) {}",
      "function myFunction(param || defaultValue) {}",
      "function myFunction(param = defaultValue || null) {}",
      "function myFunction(param, defaultValue) {}",
    ],
    correctAnswer: "function myFunction(param = defaultValue) {}",
  },
  {
    question: "What is the purpose of the 'this' keyword in a JavaScript function?",
    options: [
      "To reference the function itself",
      "To refer to the global object",
      "To access the current object the function is invoked on",
      "To declare a new variable",
    ],
    correctAnswer: "To access the current object the function is invoked on",
  },
  {
    question: "How do you define an arrow function in JavaScript?",
    options: ["function myFunction() => {}", "myFunction = function() => {}", "() => myFunction()", "() => {}"],
    correctAnswer: "() => {}",
  },
  {
    question: "What does the 'bind()' method do in JavaScript functions?",
    options: [
      "Binds a function to a specific object",
      "Binds a value to a function",
      "Binds a function to the global object",
      "Binds an argument to a function",
    ],
    correctAnswer: "Binds a function to a specific object",
  },
];
module.exports = invokingFunctions;
