const modules = [
  {
    question: "What is the purpose of modules in JavaScript?",
    options: ["To create HTML elements", "To define and organize reusable pieces of code", "To style HTML elements", "To manipulate the DOM"],
    correctAnswer: "To define and organize reusable pieces of code",
  },
  {
    question: "How can you import a module in JavaScript?",
    options: ["Using the 'require' keyword", "Using the 'import' keyword", "Using the 'module' keyword", "Using the 'include' keyword"],
    correctAnswer: "Using the 'import' keyword",
  },
  {
    question: "Which of the following is a valid way to export a function from a module?",
    options: ["export default myFunction;", "module.export = myFunction;", "exports.myFunction = myFunction;", "export myFunction;"],
    correctAnswer: "export default myFunction;",
  },
  {
    question: "What is the purpose of the 'export' keyword in a module?",
    options: [
      "To import external libraries",
      "To define global variables",
      "To make functions private",
      "To make functions and variables available for use in other modules",
    ],
    correctAnswer: "To make functions and variables available for use in other modules",
  },
  {
    question: "Which of the following is a valid way to import all exports from a module as an object in JavaScript?",
    options: [
      "import * as myModule from './myModule';",
      "import { myModule } from './myModule';",
      "import myModule from './myModule';",
      "import { * } from './myModule';",
    ],
    correctAnswer: "import * as myModule from './myModule';",
  },
];
module.exports = modules;
