const webSockets = [
  {
    question: "What is the primary purpose of Web Sockets in web development?",
    options: [
      "To create static web pages",
      "To handle server-side operations",
      "To facilitate real-time communication between the client and server",
      "To improve the performance of client-side scripts",
    ],
    correctAnswer: "To facilitate real-time communication between the client and server",
  },
  {
    question: "Which protocol is commonly used by Web Sockets?",
    options: ["HTTP", "FTP", "WebSocket Protocol (WSP)", "SMTP"],
    correctAnswer: "WebSocket Protocol (WSP)",
  },
  {
    question: "What is the main advantage of Web Sockets over traditional HTTP connections?",
    options: [
      "Web Sockets require fewer resources",
      "Web Sockets are more secure",
      "Web Sockets provide a persistent, full-duplex communication channel",
      "Web Sockets only support one-way communication",
    ],
    correctAnswer: "Web Sockets provide a persistent, full-duplex communication channel",
  },
  {
    question: "How is a Web Socket connection initiated from the client-side in JavaScript?",
    options: [
      "Using the 'connect()' method",
      "Using the 'openSocket()' method",
      "Using the 'WebSocket()' constructor",
      "Using the 'initiateConnection()' method",
    ],
    correctAnswer: "Using the 'WebSocket()' constructor",
  },
  {
    question: "What event is commonly used to handle incoming messages in a Web Socket connection?",
    options: ["onmessage", "ondata", "onreceive", "oncommunication"],
    correctAnswer: "onmessage",
  },
];
module.exports = webSockets;
