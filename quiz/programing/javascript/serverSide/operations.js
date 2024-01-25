const operations = [
  {
    question: "In the context of the DOM, what is a 'node'?",
    options: ["A type of JavaScript variable", "An HTML element", "A function in the DOM API", "A fundamental building block in the DOM hierarchy"],
    correctAnswer: "A fundamental building block in the DOM hierarchy",
  },
  {
    question: "Which method is commonly used to create a new text node in JavaScript?",
    options: ["createElement()", "createTextNode()", "innerText()", "appendTextNode()"],
    correctAnswer: "createTextNode()",
  },
  {
    question: "What is the purpose of the 'parentNode' property in the DOM?",
    options: [
      "To identify the parent HTML document",
      "To specify the parent node of an element",
      "To create a new parent node",
      "To manipulate the parent node's text content",
    ],
    correctAnswer: "To specify the parent node of an element",
  },
  {
    question: "Which property is used to access the first child node of an HTML element in the DOM?",
    options: ["firstChildNode", "childNode", "firstChild", "firstNode"],
    correctAnswer: "firstChild",
  },
  {
    question: "What is the purpose of the 'removeChild' method in the DOM?",
    options: [
      "To delete the current node",
      "To remove a child node from a parent node",
      "To remove the last child of a node",
      "To hide a child node's visibility",
    ],
    correctAnswer: "To remove a child node from a parent node",
  },
];
module.exports = operations;
