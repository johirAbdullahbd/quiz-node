const asynchronousRhino = [
  {
    question: "What is the primary mechanism for handling asynchronous operations in Rhino?",
    options: ["Callbacks", "Promises", "Async/await", "Event emitters"],
    correctAnswer: "Callbacks",
  },
  {
    question: "How can you simulate asynchronous behavior in Rhino using callbacks?",
    options: ["Using the 'async' keyword", "Using the 'setTimeout' function", "Using the 'await' keyword", "Using the 'Promise' object"],
    correctAnswer: "Using the 'setTimeout' function",
  },
  {
    question: "What is the purpose of the 'Continuation' class in Rhino's asynchronous programming model?",
    options: [
      "To manage promises",
      "To represent asynchronous functions",
      "To handle exceptions in asynchronous code",
      "Rhino does not have a 'Continuation' class",
    ],
    correctAnswer: "Rhino does not have a 'Continuation' class",
  },
  {
    question: "How can you handle errors in asynchronous code in Rhino?",
    options: [
      "Using the 'try/catch' statement",
      "By returning an error object in the callback",
      "Using the 'async/await' syntax",
      "Rhino does not support error handling in asynchronous code",
    ],
    correctAnswer: "By returning an error object in the callback",
  },
  {
    question: "What function can be used to perform an asynchronous operation in Rhino?",
    options: ["asyncOperation", "asyncFunction", "setTimeout", "Rhino does not support asynchronous operations"],
    correctAnswer: "setTimeout",
  },
];
module.exports = asynchronousRhino;
