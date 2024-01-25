const typeValuesVariables = [
  {
    question: "What is the primary purpose of a variable in JavaScript?",
    options: ["To store and manipulate data", "To create loops", "To define functions", "To control the flow of the program"],
    correctAnswer: "To store and manipulate data",
  },
  {
    question: "Which of the following is not a primitive data type in JavaScript?",
    options: ["Number", "String", "Object", "Boolean"],
    correctAnswer: "Object",
  },
  {
    question: "What is the result of the expression '5' + 3 in JavaScript?",
    options: ["8", "53", "Error", "Undefined"],
    correctAnswer: "53",
  },
  {
    question: "What is the difference between 'null' and 'undefined' in JavaScript?",
    options: [
      "'null' is an object, and 'undefined' is a primitive value",
      "'null' represents the absence of a value, and 'undefined' is assigned by the JavaScript engine",
      "'null' is assigned explicitly by the programmer, and 'undefined' is assigned by the JavaScript engine",
      "There is no difference; 'null' and 'undefined' are interchangeable",
    ],
    correctAnswer: "'null' represents the absence of a value, and 'undefined' is assigned by the JavaScript engine",
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["variable", "var", "let", "const"],
    correctAnswer: "var",
  },
  {
    question: "What is the value of the expression '10' == 10 in JavaScript?",
    options: ["true", "false", "Error", "Undefined"],
    correctAnswer: "true",
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
    question: "Which of the following is a valid way to comment multiple lines in JavaScript?",
    options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "' This is a comment"],
    correctAnswer: "/* This is a comment */",
  },
  {
    question: "What is the purpose of the 'NaN' value in JavaScript?",
    options: ["Represents an undefined value", "Indicates a syntax error", "Represents a not-a-number value", "Denotes a null value"],
    correctAnswer: "Represents a not-a-number value",
  },
  {
    question: "Which of the following is a valid string in JavaScript?",
    options: ["'Hello World'", '"Hello World"', "Hello World", "All of the above"],
    correctAnswer: '"Hello World"',
  },
  {
    question: "What is the purpose of the 'Boolean' object in JavaScript?",
    options: [
      "To represent true or false values",
      "To create boolean expressions",
      "To convert other types to boolean values",
      "To perform bitwise operations",
    ],
    correctAnswer: "To convert other types to boolean values",
  },
  {
    question: "How do you declare a constant variable in JavaScript?",
    options: ["var myConst = 42;", "let myConst = 42;", "const myConst = 42;", "const var myConst = 42;"],
    correctAnswer: "const myConst = 42;",
  },
  {
    question: "Which of the following is a falsy value in JavaScript?",
    options: ["0", "NaN", "'' (empty string)", "All of the above"],
    correctAnswer: "All of the above",
  },
  {
    question: "What is the purpose of the 'parseFloat' function in JavaScript?",
    options: [
      "To convert a string to a floating-point number",
      "To round a number to the nearest integer",
      "To convert a number to a string",
      "To parse a string as an integer",
    ],
    correctAnswer: "To convert a string to a floating-point number",
  },
  {
    question: "Which operator is used for strict equality in JavaScript?",
    options: ["==", "===", "!=", "!=="],
    correctAnswer: "===",
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
    question: "What is the maximum safe integer in JavaScript?",
    options: ["2^53 - 1", "2^32 - 1", "2^64 - 1", "There is no maximum safe integer"],
    correctAnswer: "2^53 - 1",
  },
  {
    question: "What is the purpose of the 'NaN' property 'isNaN()' in JavaScript?",
    options: [
      "To check if a value is not a number",
      "To check if a value is a number",
      "To convert a value to a number",
      "To check if a value is infinity",
    ],
    correctAnswer: "To check if a value is not a number",
  },
  {
    question: "In JavaScript, what is the purpose of the 'undefined' value?",
    options: ["To represent the absence of a value", "To represent a not-a-number value", "To indicate an error", "To represent a null value"],
    correctAnswer: "To represent the absence of a value",
  },
  {
    question: "Which keyword is used to prevent the modification of a variable in JavaScript?",
    options: ["readonly", "immutable", "const", "protect"],
    correctAnswer: "const",
  },
];
module.exports = typeValuesVariables;
