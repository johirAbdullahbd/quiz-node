const invocationPerformanceNavigation = [
  {
    question: "What is the purpose of function invocation in JavaScript?",
    options: [
      "To declare a function",
      "To execute a function and run its code",
      "To define a function's parameters",
      "To include a function in the script",
    ],
    correctAnswer: "To execute a function and run its code",
  },
  {
    question: "Which method is used to invoke a function in JavaScript?",
    options: ["call()", "run()", "execute()", "invoke()"],
    correctAnswer: "call()",
  },
  {
    question: "What is the purpose of the 'apply()' method in function invocation?",
    options: [
      "To apply styles to HTML elements",
      "To call a function with a given 'this' value and arguments provided as an array",
      "To apply mathematical operations to a variable",
      "To apply a function's return value to a variable",
    ],
    correctAnswer: "To call a function with a given 'this' value and arguments provided as an array",
  },
  {
    question: "How does the 'bind()' method differ from 'call()' and 'apply()' in function invocation?",
    options: [
      "bind() is used for asynchronous functions, while call() and apply() are synchronous",
      "bind() creates a new function with a fixed 'this' value and parameters",
      "bind() is used for mathematical operations, while call() and apply() are for string manipulation",
      "bind() is a deprecated method, and call() and apply() are preferred",
    ],
    correctAnswer: "bind() creates a new function with a fixed 'this' value and parameters",
  },
  {
    question: "What is the purpose of the 'performance.navigation' object in JavaScript?",
    options: [
      "To navigate between different web pages",
      "To access performance-related information about the current navigation",
      "To measure the time taken for a function invocation",
      "To control the browser's navigation behavior",
    ],
    correctAnswer: "To access performance-related information about the current navigation",
  },
  {
    question: "Which property of 'performance.navigation' indicates whether the page was reloaded?",
    options: ["performance.navigation.reload", "performance.navigation.isReload", "performance.navigation.type", "performance.navigation.refresh"],
    correctAnswer: "performance.navigation.type",
  },
  {
    question: "What does 'performance.navigation.type' equal if the page was loaded directly via the address bar?",
    options: ["0", "1", "2", "3"],
    correctAnswer: "0",
  },
  {
    question: "How can you check if a webpage is being loaded for the first time using 'performance.navigation'?",
    options: [
      "Check if 'performance.navigation.type' is equal to 0",
      "Check if 'performance.navigation.isFirstLoad' is true",
      "Check if 'performance.navigation.loadCount' is 1",
      "Check if 'performance.navigation.type' is equal to 1",
    ],
    correctAnswer: "Check if 'performance.navigation.type' is equal to 0",
  },
  {
    question: "What is the purpose of the 'performance.timing' object in JavaScript?",
    options: [
      "To set the timing of animations",
      "To access performance-related information about various events during page load",
      "To define the duration of a function execution",
      "To measure the time taken for a network request",
    ],
    correctAnswer: "To access performance-related information about various events during page load",
  },
  {
    question: "Which 'performance.timing' property represents the time taken for the entire page to load?",
    options: [
      "performance.timing.pageLoadTime",
      "performance.timing.loadDuration",
      "performance.timing.navigationStart",
      "performance.timing.pageLoadDuration",
    ],
    correctAnswer: "performance.timing.loadDuration",
  },
];
module.exports = invocationPerformanceNavigation;
