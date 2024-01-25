const clientServerSideScriptingSnipeet = [
  {
    question: "What will be displayed in the browser after the script execution?",
    img: "https://ipfs.filebase.io/ipfs/QmTBsGK3rkVyDoT4e65u6pDjqXXZLkKiVYcWVA5isA2UbC",
    options: ["Hello, World!", "Updated Heading", "[object HTMLHeadingElement]", "Error", "Undefined"],
    correctAnswer: "Updated Heading",
  },
  {
    question: "What will happen when the button is clicked?",
    img: "https://ipfs.filebase.io/ipfs/QmYohdvRmryGvZb6E99jCNVXJqhFaCsbWMa1mDRSHvcFgg",
    options: [
      "The page will reload.",
      "An alert with the message 'Button Clicked!' will be shown.",
      "The button text will change.",
      "Error",
      "Nothing will happen.",
    ],
    correctAnswer: "An alert with the message 'Button Clicked!' will be shown.",
  },
  {
    question: "What does this Node.js script do?",
    img: "https://ipfs.filebase.io/ipfs/QmYxcgPz2621Ev2oBsgQzfZQ2fPcc4WSLCHqy2htWQaqzD",
    options: [
      "It creates a web server that listens on port 3000 and responds with 'Hello, World!' for all requests.",
      "It reads a file named 'Hello, World!' and sends it as a response.",
      "It prints 'Hello, World!' to the console.",
      "Error",
      "It creates an HTTP client.",
    ],
    correctAnswer: "It creates a web server that listens on port 3000 and responds with 'Hello, World!' for all requests.",
  },
  {
    question: "What will be the response when accessing the root path (http://localhost:3000/)?",
    img: "https://ipfs.filebase.io/ipfs/QmYh8jxdDfXvSRt9m2EJSHwM3QZVPqmCamXp1ujB7fDV48",
    options: ["Error", "'Hello, World!'", "[Object]", "'Cannot GET /'", "'Express.js Server'"],
    correctAnswer: "'Hello, World!'",
  },
  {
    question: "What will be displayed in the 'result' div after the script execution?",
    img: "https://ipfs.filebase.io/ipfs/QmcZ2SEe3GqfoFPAnQFN3A9LTNupup1jKt4nUQY4iWhHsW",
    options: [
      "Error",
      "'[object Object]'",
      '{"userId": 1, "id": 1, "title": "...", "completed": false}',
      "'https://jsonplaceholder.typicode.com/todos/1'",
      "Undefined",
    ],
    correctAnswer: '{"userId": 1, "id": 1, "title": "...", "completed": false}',
  },
];
module.exports = clientServerSideScriptingSnipeet;
