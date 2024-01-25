const clientSideStorage = [
  {
    question: "What is the purpose of client-side storage in JavaScript?",
    options: [
      "To store server-side data",
      "To improve the performance of server requests",
      "To store data on the user's device",
      "To manage CSS styles",
    ],
    correctAnswer: "To store data on the user's device",
  },
  {
    question: "Which of the following is a method for storing small amounts of data on the client side?",
    options: ["LocalStorage", "Database", "Server-Side Session", "External API"],
    correctAnswer: "LocalStorage",
  },
  {
    question: "How much data can be stored in LocalStorage in most browsers?",
    options: ["5 MB", "10 MB", "Unlimited", "1 MB"],
    correctAnswer: "5 MB",
  },
  {
    question: "Which method is used to set an item in LocalStorage?",
    options: ["localStorage.set()", "localStorage.setItem()", "localStorage.add()", "localStorage.addStorage()"],
    correctAnswer: "localStorage.setItem()",
  },
  {
    question: "How do session cookies differ from persistent cookies?",
    options: [
      "Session cookies are stored indefinitely, while persistent cookies are temporary",
      "Session cookies are deleted when the browser is closed, while persistent cookies remain",
      "Session cookies require user authentication, while persistent cookies do not",
      "There is no difference between session and persistent cookies",
    ],
    correctAnswer: "Session cookies are deleted when the browser is closed, while persistent cookies remain",
  },
  {
    question: "Which method is used to read a cookie in JavaScript?",
    options: ["readCookie()", "getCookie()", "document.cookie()", "Cookies.read()"],
    correctAnswer: "document.cookie()",
  },
  {
    question: "What is the purpose of the 'expires' attribute in a cookie?",
    options: [
      "To specify when the cookie was created",
      "To set the cookie's initial value",
      "To define the cookie's expiration date",
      "To indicate the cookie's encryption level",
    ],
    correctAnswer: "To define the cookie's expiration date",
  },
  {
    question: "Which API is commonly used for client-side storage in modern web applications?",
    options: ["IndexedDB", "SQLStorage", "ClientDB", "WebStorage"],
    correctAnswer: "IndexedDB",
  },
  {
    question: "What is the purpose of the 'key' in IndexedDB?",
    options: [
      "It represents the encryption key for the database",
      "It uniquely identifies a stored object",
      "It defines the data type of the stored object",
      "It specifies the index for the database",
    ],
    correctAnswer: "It uniquely identifies a stored object",
  },
  {
    question: "Which method is used to remove an item from LocalStorage?",
    options: ["localStorage.remove()", "localStorage.removeItem()", "localStorage.delete()", "localStorage.deleteItem()"],
    correctAnswer: "localStorage.removeItem()",
  },
];
module.exports = clientSideStorage;
