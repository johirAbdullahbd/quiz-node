const scriptJavaRhino = [
  {
    question: "What is Rhino in the context of JavaScript?",
    options: ["A JavaScript testing framework", "A server-side JavaScript runtime", "A JavaScript compiler", "A JavaScript engine for Java"],
    correctAnswer: "A JavaScript engine for Java",
  },
  {
    question: "In Rhino, how can you evaluate JavaScript code from within a Java program?",
    options: [
      "Using the 'console.log()' method",
      "Using the 'executeScript()' method",
      "Using the 'runScript()' function",
      "Using the 'eval()' method",
    ],
    correctAnswer: "Using the 'eval()' method",
  },
  {
    question: "What is the purpose of the 'Context' class in Rhino?",
    options: [
      "To handle HTTP requests",
      "To manage the server's file system",
      "To represent the execution context of JavaScript code",
      "To define a new JavaScript function",
    ],
    correctAnswer: "To represent the execution context of JavaScript code",
  },
  {
    question: "Which Rhino class is responsible for managing JavaScript scope and variables?",
    options: ["ScriptableObject", "JavaScriptEngine", "ScriptContext", "RhinoScope"],
    correctAnswer: "ScriptableObject",
  },
  {
    question: "What is the purpose of the 'load' function in Rhino?",
    options: ["To load external JavaScript files", "To load Java classes", "To load images", "To load stylesheets"],
    correctAnswer: "To load external JavaScript files",
  },
];
module.exports = scriptJavaRhino;
