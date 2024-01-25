const serverSide = [
  {
    question: "What is Node.js?",
    options: ["A web browser", "A JavaScript testing framework", "A server-side JavaScript runtime", "A JavaScript compiler"],
    correctAnswer: "A server-side JavaScript runtime",
  },
  {
    question: "Which module in Node.js is commonly used for handling file I/O operations?",
    options: ["http", "fs", "path", "util"],
    correctAnswer: "fs",
  },
  {
    question: "What does Express.js provide in the context of Server-Side JavaScript?",
    options: ["A database management system", "A testing framework", "A web application framework", "An authentication library"],
    correctAnswer: "A web application framework",
  },
  {
    question: "How can you install external packages in a Node.js project?",
    options: [
      "Using npm install package-name",
      "Downloading the package manually and adding it to the project",
      "Using git clone",
      "Using the require statement",
    ],
    correctAnswer: "Using npm install package-name",
  },
  {
    question: "Which object provides information about the current module in Node.js?",
    options: ["global", "process", "module", "exports"],
    correctAnswer: "module",
  },
  {
    question: "What is the purpose of the 'require' function in Node.js?",
    options: ["To include external modules", "To declare a variable", "To define a new function", "To export modules"],
    correctAnswer: "To include external modules",
  },
  {
    question: "Which HTTP module function is used to create an HTTP server in Node.js?",
    options: ["http.createServer()", "http.request()", "http.listen()", "http.server()"],
    correctAnswer: "http.createServer()",
  },
  {
    question: "What is the primary purpose of the 'process' object in Node.js?",
    options: [
      "To manage child processes",
      "To manage the server's file system",
      "To handle HTTP requests",
      "To access the computer's processor information",
    ],
    correctAnswer: "To manage child processes",
  },
  {
    question: "Which npm command is used to install dependencies specified in the package.json file?",
    options: ["npm add", "npm install", "npm update", "npm init"],
    correctAnswer: "npm install",
  },
  {
    question: "What is the purpose of the 'dotenv' module in Node.js?",
    options: [
      "To create a .env file",
      "To load environment variables from a .env file",
      "To encrypt sensitive information",
      "To handle HTTP requests",
    ],
    correctAnswer: "To load environment variables from a .env file",
  },
];
module.exports = serverSide;
