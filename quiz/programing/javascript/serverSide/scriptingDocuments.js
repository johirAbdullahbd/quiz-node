const scriptingDocuments = [
  {
    question: "What does 'DOM' stand for in the context of JavaScript?",
    options: ["Document Object Model", "Dynamic Object Manipulation", "Data Object Model", "Document Order Model"],
    correctAnswer: "Document Object Model",
  },
  {
    question: "Which method is used to access an HTML element by its id in the DOM?",
    options: ["getElementById()", "getElementsByClassName()", "querySelector()", "getElementByName()"],
    correctAnswer: "getElementById()",
  },
  {
    question: "What property is used to get the text content of an HTML element in the DOM?",
    options: ["textContent", "innerText", "innerHTML", "innerTextContent"],
    correctAnswer: "textContent",
  },
  {
    question: "Which DOM property is used to check if an HTML element has a particular class?",
    options: ["hasClass", "classList", "hasClassList", "classNameList"],
    correctAnswer: "classList",
  },
  {
    question: "What is the purpose of the 'createElement' method in the DOM?",
    options: ["To create a new HTML document", "To create a new HTML element", "To create a new DOM event", "To create a new CSS stylesheet"],
    correctAnswer: "To create a new HTML element",
  },
  {
    question: "Which DOM method is used to add a child element to another element?",
    options: ["appendChild()", "addElement()", "addChildElement()", "insertChild()"],
    correctAnswer: "appendChild()",
  },
  {
    question: "What does the 'parentNode' property represent in the DOM?",
    options: ["The parent HTML document", "The immediate parent element of a node", "The root element of the document", "The next sibling element"],
    correctAnswer: "The immediate parent element of a node",
  },
  {
    question: "How can you remove an HTML element from the DOM using JavaScript?",
    options: ["removeElement()", "deleteElement()", "removeChild()", "detachElement()"],
    correctAnswer: "removeChild()",
  },
  {
    question: "What does the 'addEventListener' method do in the DOM?",
    options: [
      "Adds a new HTML element to the document",
      "Attaches an event listener to an HTML element",
      "Creates a new event in the document",
      "Adds an event to the browser's history",
    ],
    correctAnswer: "Attaches an event listener to an HTML element",
  },
  {
    question: "What is the purpose of the 'event.stopPropagation()' method in the DOM?",
    options: [
      "To prevent the default action of an event",
      "To stop the propagation of the event to parent elements",
      "To trigger the event again",
      "To cancel the event",
    ],
    correctAnswer: "To stop the propagation of the event to parent elements",
  },
];
module.exports = scriptingDocuments;
