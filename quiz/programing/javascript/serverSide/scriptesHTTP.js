const scriptedHTTP = [
  {
    question: "What is the primary purpose of making HTTP requests in JavaScript?",
    options: [
      "To define the structure of a web page",
      "To handle server-side operations",
      "To manipulate the DOM",
      "To retrieve or send data to a server",
    ],
    correctAnswer: "To retrieve or send data to a server",
  },
  {
    question: "Which method is commonly used to make an asynchronous HTTP GET request in JavaScript?",
    options: ["fetch()", "get()", "request()", "xhr()"],
    correctAnswer: "fetch()",
  },
  {
    question: "What is the purpose of the 'XMLHttpRequest' object in JavaScript?",
    options: ["To parse XML documents", "To create XML data", "To handle HTTP requests and responses", "To manipulate HTML elements"],
    correctAnswer: "To handle HTTP requests and responses",
  },
  {
    question: "How can you include query parameters in an HTTP GET request using the 'fetch' API?",
    options: [
      "By appending them to the request URL",
      "By including them in the request body",
      "By setting them as headers",
      "By adding them as a separate parameter in the fetch function",
    ],
    correctAnswer: "By appending them to the request URL",
  },
  {
    question: "What does the 'response.json()' method do in the context of HTTP requests?",
    options: ["Parses the response as JSON data", "Creates a new JSON object", "Sends a JSON request", "Converts the request to a JSON format"],
    correctAnswer: "Parses the response as JSON data",
  },
];
module.exports = scriptedHTTP;
