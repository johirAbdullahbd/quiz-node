const webBrowsers2 = [
  {
    question: "What does the 'window' object represent in the browser's JavaScript environment?",
    options: ["The current HTML document", "The browser window or tab", "The document head", "A global JavaScript variable"],
    correctAnswer: "The browser window or tab",
  },
  {
    question: "How can you prevent the default behavior of an HTML form submission using JavaScript?",
    options: ["event.stopDefault()", "event.preventDefault()", "form.preventSubmission()", "form.cancelSubmission()"],
    correctAnswer: "event.preventDefault()",
  },
  {
    question: "Which method is used to add a new CSS class to an HTML element in JavaScript?",
    options: ["element.setClass()", "element.addClass()", "element.classList.add()", "element.modifyClass()"],
    correctAnswer: "element.classList.add()",
  },
  {
    question: "What is the purpose of the 'setTimeout' function in JavaScript?",
    options: [
      "To set a timer for asynchronous operations",
      "To delay the execution of a function",
      "To measure the time taken by a function",
      "To handle repeated tasks",
    ],
    correctAnswer: "To delay the execution of a function",
  },
  {
    question: "How can you check if a variable is of type 'function' in JavaScript?",
    options: ["typeof variable === 'function'", "variable.type === 'function'", "variable.isFunction()", "isFunction(variable)"],
    correctAnswer: "typeof variable === 'function'",
  },
  {
    question: "What is the purpose of the 'querySelector' method in JavaScript?",
    options: [
      "To select the first element that matches a specified CSS selector",
      "To select all elements that match a specified CSS selector",
      "To select elements based on their tag names",
      "To select elements based on their class names",
    ],
    correctAnswer: "To select the first element that matches a specified CSS selector",
  },
  {
    question: "Which event is triggered when an element gains focus in the browser?",
    options: ["onblur", "onfocus", "onclick", "onchange"],
    correctAnswer: "onfocus",
  },
  {
    question: "What is the purpose of the 'localStorage' object in JavaScript?",
    options: [
      "To store session-specific data",
      "To store data that persists across browser sessions",
      "To store server-side data",
      "To store temporary data",
    ],
    correctAnswer: "To store data that persists across browser sessions",
  },
  {
    question: "How can you dynamically create a new HTML element in JavaScript?",
    options: ["createElement('div')", "newElement('div')", "document.create('div')", "createDiv()"],
    correctAnswer: "createElement('div')",
  },
  {
    question: "Which method is used to remove an HTML element from the DOM in JavaScript?",
    options: ["element.delete()", "element.remove()", "element.removeChild()", "element.hide()"],
    correctAnswer: "element.remove()",
  },
];
module.exports = webBrowsers2;
