const lexicalStructure = [
  {
    question: "What is the purpose of a JavaScript statement terminator?",
    options: [
      "To indicate the end of a program",
      "To separate statements",
      "To terminate the execution of a statement",
      "JavaScript does not require statement terminators",
    ],
    correctAnswer: "To separate statements",
  },
  {
    question: "Which of the following is a valid JavaScript identifier?",
    options: ["_myVar", "123Var", "my Var", "var-my"],
    correctAnswer: "_myVar",
  },
  {
    question: "What is the role of the 'use strict' directive in JavaScript?",
    options: [
      "Enables strict mode for the entire program",
      "Declares a variable with strict scoping",
      "Defines a strict data type",
      "JavaScript does not have a strict mode",
    ],
    correctAnswer: "Enables strict mode for the entire program",
  },
  {
    question: "Which symbol is used for a single-line comment in JavaScript?",
    options: ["//", "/*", "--", "#"],
    correctAnswer: "//",
  },
  {
    question: "What is the correct way to declare a constant variable in JavaScript?",
    options: ["const myConst = 42;", "let myConst = 42;", "var myConst = 42;", "const myConst: 42;"],
    correctAnswer: "const myConst = 42;",
  },
  {
    question: "What is the default scope of a variable declared with 'var' in JavaScript?",
    options: ["Global scope", "Local scope", "Function scope", "Block scope"],
    correctAnswer: "Function scope",
  },
  {
    question: "Which character is used to escape a special character in a string?",
    options: ["\\", "/", "#", "&"],
    correctAnswer: "\\",
  },
  {
    question: "What is the purpose of the 'NaN' value in JavaScript?",
    options: ["Represents an undefined value", "Indicates a syntax error", "Represents a not-a-number value", "Denotes a null value"],
    correctAnswer: "Represents a not-a-number value",
  },
  {
    question: "How can you include a line break in a string in JavaScript?",
    options: ["\\n", "\\r", "\\t", "\\b"],
    correctAnswer: "\\n",
  },
  {
    question: "Which of the following is a falsy value in JavaScript?",
    options: ["0", "NaN", "'' (empty string)", "All of the above"],
    correctAnswer: "All of the above",
  },
  {
    question: "What is the purpose of the 'typeof' operator in JavaScript?",
    options: [
      "To check if a variable is defined",
      "To determine the type of a variable",
      "To convert a variable to a string",
      "To check if a variable is null",
    ],
    correctAnswer: "To determine the type of a variable",
  },
  {
    question: "In JavaScript, what is the purpose of the 'continue' statement?",
    options: [
      "To terminate the program",
      "To skip the current iteration of a loop",
      "To jump to a specific line of code",
      "To resume execution after an error",
    ],
    correctAnswer: "To skip the current iteration of a loop",
  },
  {
    question: "Which of the following is a reserved word in JavaScript?",
    options: ["super", "class", "both 'super' and 'class'", "none of the above"],
    correctAnswer: "both 'super' and 'class'",
  },
  {
    question: "What does the term 'hoisting' refer to in JavaScript?",
    options: [
      "The process of lifting heavy objects in the code",
      "The automatic movement of variable and function declarations to the top of their containing scope",
      "The way functions handle exceptions",
      "The dynamic scoping behavior of JavaScript",
    ],
    correctAnswer: "The automatic movement of variable and function declarations to the top of their containing scope",
  },
  {
    question: "Which of the following is not a valid data type in JavaScript?",
    options: ["null", "undefined", "boolean", "double"],
    correctAnswer: "double",
  },
  {
    question: "What is the purpose of the 'delete' operator in JavaScript?",
    options: ["To remove a property from an object", "To delete a variable", "To delete a function", "To delete a file from the server"],
    correctAnswer: "To remove a property from an object",
  },
  {
    question: "Which of the following is a valid number representation in JavaScript?",
    options: ["1e+10", "1E-10", "Both '1e+10' and '1E-10'", "None of the above"],
    correctAnswer: "Both '1e+10' and '1E-10'",
  },
  {
    question: "What is the purpose of the 'void' operator in JavaScript?",
    options: [
      "To create an empty variable",
      "To make a function return undefined",
      "To convert a value to a string",
      "To negate a boolean expression",
    ],
    correctAnswer: "To make a function return undefined",
  },
  {
    question: "Which of the following is true about the 'let' keyword in JavaScript?",
    options: ["It has block scope", "It has function scope", "It has global scope", "Both 'It has block scope' and 'It has function scope'"],
    correctAnswer: "Both 'It has block scope' and 'It has function scope'",
  },
  {
    question: "What is the purpose of the 'with' statement in JavaScript?",
    options: [
      "To create a new object",
      "To execute a block of code with a specified object as the scope chain",
      "To define a new function",
      "To include an external JavaScript file",
    ],
    correctAnswer: "To execute a block of code with a specified object as the scope chain",
  },
];
module.exports = lexicalStructure;
