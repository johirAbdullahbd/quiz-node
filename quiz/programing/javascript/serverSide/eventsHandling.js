const eventsHandling = [
  {
    question: "What is an event in JavaScript?",
    options: ["A function declaration", "A user action or system occurrence", "A JavaScript variable", "An HTML element"],
    correctAnswer: "A user action or system occurrence",
  },
  {
    question: "Which method is commonly used to attach an event listener to an HTML element in JavaScript?",
    options: ["bindEvent()", "attachEvent()", "addEventListener()", "listenToEvent()"],
    correctAnswer: "addEventListener()",
  },
  {
    question: "What does the 'event.preventDefault()' method do in event handling?",
    options: [
      "Prevents the default styling of the event",
      "Stops the event from propagating to parent elements",
      "Prevents the default action associated with the event",
      "Stops the event from firing",
    ],
    correctAnswer: "Prevents the default action associated with the event",
  },
  {
    question: "How can you remove an event listener from an HTML element?",
    options: ["removeEventListener()", "deleteListener()", "detachEvent()", "removeEvent()"],
    correctAnswer: "removeEventListener()",
  },
  {
    question: "Which event is triggered when an HTML form is submitted?",
    options: ["onsubmit", "onchange", "onsubmitForm", "onformsubmit"],
    correctAnswer: "onsubmit",
  },
  {
    question: "What is event propagation in JavaScript?",
    options: [
      "The process of creating new events",
      "The flow of an event through the DOM hierarchy",
      "The default action associated with an event",
      "The duration of an event's existence",
    ],
    correctAnswer: "The flow of an event through the DOM hierarchy",
  },
  {
    question: "What is event delegation in JavaScript?",
    options: [
      "Attaching multiple events to a single element",
      "Handling events using a central parent element",
      "Delegating events to the browser",
      "Dispatching events to multiple elements",
    ],
    correctAnswer: "Handling events using a central parent element",
  },
  {
    question: "Which property is used to identify the target element of an event?",
    options: ["event.target", "event.element", "event.source", "event.destination"],
    correctAnswer: "event.target",
  },
  {
    question: "What does the 'event.stopPropagation()' method do in event handling?",
    options: [
      "Prevents the default action of an event",
      "Stops the event from propagating to parent elements",
      "Triggers the event again",
      "Cancels the event",
    ],
    correctAnswer: "Stops the event from propagating to parent elements",
  },
  {
    question: "Which event is triggered when a user clicks on an HTML element?",
    options: ["onclick", "onmouseover", "onchange", "onsubmit"],
    correctAnswer: "onclick",
  },
  {
    question: "What is the purpose of the 'event.type' property in event handling?",
    options: [
      "To identify the event target",
      "To specify the event handler function",
      "To determine the type of the triggered event",
      "To set the event's default action",
    ],
    correctAnswer: "To determine the type of the triggered event",
  },
  {
    question: "Which method is used to create a custom event in JavaScript?",
    options: ["dispatchEvent()", "createEvent()", "triggerEvent()", "fireEvent()"],
    correctAnswer: "createEvent()",
  },
  {
    question: "What is the purpose of the 'event.clientX' property in mouse events?",
    options: [
      "To get the X-coordinate of the mouse pointer",
      "To check if the left mouse button is pressed",
      "To get the target element of the event",
      "To get the client area's width",
    ],
    correctAnswer: "To get the X-coordinate of the mouse pointer",
  },
  {
    question: "Which event is triggered when an HTML element gains focus?",
    options: ["onblur", "onfocus", "onclick", "onchange"],
    correctAnswer: "onfocus",
  },
  {
    question: "What does the 'event.key' property represent in keyboard events?",
    options: ["The pressed key's character", "The event type", "The event target", "The key code of the pressed key"],
    correctAnswer: "The pressed key's character",
  },
];
module.exports = eventsHandling;
