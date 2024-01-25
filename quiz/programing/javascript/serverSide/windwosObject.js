const windowsObject = [
  {
    question: "What does the 'window' object represent in JavaScript?",
    options: ["The current HTML document", "A specific HTML element", "The browser window or tab", "A JavaScript function"],
    correctAnswer: "The browser window or tab",
  },
  {
    question: "Which property is used to get the inner width of the browser window?",
    options: ["window.innerWidth", "window.outerWidth", "window.clientWidth", "window.screenWidth"],
    correctAnswer: "window.innerWidth",
  },
  {
    question: "How can you open a new browser window using JavaScript?",
    options: ["window.openWindow()", "window.createWindow()", "window.newWindow()", "window.open()"],
    correctAnswer: "window.open()",
  },
  {
    question: "What is the purpose of the 'localStorage' property in the window object?",
    options: [
      "To store data that persists across browser sessions",
      "To store session-specific data",
      "To manage the browser's history",
      "To control the visibility of browser windows",
    ],
    correctAnswer: "To store data that persists across browser sessions",
  },
  {
    question: "Which method is used to navigate to a new URL in the current browser window?",
    options: ["window.goto()", "window.navigateTo()", "window.location()", "window.location.href"],
    correctAnswer: "window.location.href",
  },
];
module.exports = windowsObject;
