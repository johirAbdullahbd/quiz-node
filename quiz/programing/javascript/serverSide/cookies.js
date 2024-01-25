const cookies = [
  {
    question: "What is a cookie in the context of web development?",
    options: [
      "A server-side scripting language",
      "A small piece of data stored on the client's machine",
      "A style sheet for web design",
      "A database for storing user information",
    ],
    correctAnswer: "A small piece of data stored on the client's machine",
  },
  {
    question: "How is a cookie typically set in JavaScript?",
    options: ["document.setCookie()", "document.cookie = 'key=value'", "setCookie('key', 'value')", "cookie.set('key', 'value')"],
    correctAnswer: "document.cookie = 'key=value'",
  },
  {
    question: "What is the purpose of the 'expires' attribute in a cookie?",
    options: [
      "To specify the time when the cookie was created",
      "To set the cookie's expiration date and time",
      "To determine the cookie's size",
      "To indicate the domain to which the cookie belongs",
    ],
    correctAnswer: "To set the cookie's expiration date and time",
  },
  {
    question: "How can you retrieve the value of a specific cookie in JavaScript?",
    options: ["document.getCookie('key')", "getCookieValue('key')", "document.cookie.getValue('key')", "document.cookie.split(';')"],
    correctAnswer: "document.cookie.split(';')",
  },
  {
    question: "What is the purpose of the 'path' attribute in a cookie?",
    options: [
      "To specify the directory path of the web server",
      "To set the cookie's expiration date and time",
      "To indicate the domain to which the cookie belongs",
      "To define the URL path for which the cookie is valid",
    ],
    correctAnswer: "To define the URL path for which the cookie is valid",
  },
];
module.exports = cookies;
