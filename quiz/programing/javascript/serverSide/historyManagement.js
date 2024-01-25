const historyManagement = [
  {
    question: "What is the primary purpose of the History API in JavaScript?",
    options: [
      "To track user behavior on a website",
      "To manipulate the browser's navigation history",
      "To store user preferences",
      "To handle server-side operations",
    ],
    correctAnswer: "To manipulate the browser's navigation history",
  },
  {
    question: "Which method is used to add a new entry to the browser's history in JavaScript?",
    options: ["history.addEntry()", "history.pushState()", "history.appendEntry()", "history.newEntry()"],
    correctAnswer: "history.pushState()",
  },
  {
    question: "What is the purpose of the 'state' parameter in the 'pushState' method?",
    options: [
      "To set the browser's current state",
      "To specify the URL of the new entry",
      "To store custom data associated with the new entry",
      "To remove a specific entry from the history",
    ],
    correctAnswer: "To store custom data associated with the new entry",
  },
  {
    question: "Which event is triggered when the user navigates back or forward in the browser history?",
    options: ["onnavigate", "onhistorychange", "onpopstate", "onstatechange"],
    correctAnswer: "onpopstate",
  },
  {
    question: "How can you change the URL displayed in the browser's address bar without triggering a page reload?",
    options: [
      "By using the 'history.reload()' method",
      "By modifying the 'location.href' property directly",
      "By using the 'history.replaceState()' method",
      "By calling the 'window.refresh()' function",
    ],
    correctAnswer: "By using the 'history.replaceState()' method",
  },
];
module.exports = historyManagement;
