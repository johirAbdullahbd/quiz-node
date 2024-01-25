const inHtml = [
  {
    question: "Which HTML attribute is used to include external JavaScript files?",
    options: ["src", "href", "script", "link"],
    correctAnswer: "src",
  },
  {
    question: "Where is the recommended location to include the `<script>` tag in an HTML document for optimal performance?",
    options: [
      "Inside the `<head>` section",
      "At the end of the `<body>` section",
      "Immediately after the opening `<html>` tag",
      "Inside a `<div>` element",
    ],
    correctAnswer: "At the end of the `<body>` section",
  },
  {
    question: "What is the purpose of the 'defer' attribute in a `<script>` tag?",
    options: [
      "To load the script asynchronously",
      "To delay the script execution until after the document is parsed",
      "To defer the rendering of the HTML document",
      "To define a deferred function",
    ],
    correctAnswer: "To delay the script execution until after the document is parsed",
  },
  {
    question: "How can you embed inline JavaScript code directly within an HTML document?",
    options: [
      "Using the `<js>` tag",
      "Using the `<inline>` tag",
      "Enclosing the code within `<script>` tags",
      "Inserting the code between `<code>` tags",
    ],
    correctAnswer: "Enclosing the code within `<script>` tags",
  },
  {
    question: "Which event attribute is used to specify a JavaScript function to be executed when a button is clicked?",
    options: ["onclick", "onmouseover", "onchange", "onsubmit"],
    correctAnswer: "onclick",
  },
];
module.exports = inHtml;
