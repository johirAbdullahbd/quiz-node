const objectAttributes = [
  {
    question: "What is the purpose of the 'prototype' property in JavaScript objects?",
    options: [
      "To set the default value for an object property",
      "To define the object's prototype chain",
      "To serialize the object",
      "To create a new object",
    ],
    correctAnswer: "To define the object's prototype chain",
  },
  {
    question: "How can you add a new property to an existing JavaScript object?",
    options: [
      "object.newProperty = 'value';",
      "object.addProperty('newProperty', 'value');",
      "object.prototype.newProperty = 'value';",
      "object['newProperty'] = 'value';",
    ],
    correctAnswer: "object['newProperty'] = 'value';",
  },
  {
    question: "What is the purpose of the 'delete' operator in JavaScript when used with an object property?",
    options: ["To remove the entire object", "To remove the object property", "To delete the object", "To delete the object's prototype"],
    correctAnswer: "To remove the object property",
  },
  {
    question: "How can you check if an object has a specific property in JavaScript?",
    options: [
      "object.hasProperty('propertyName');",
      "'propertyName' in object;",
      "object.propertyExists('propertyName');",
      "object.checkProperty('propertyName');",
    ],
    correctAnswer: "'propertyName' in object;",
  },
  {
    question: "What is the purpose of the 'Object.keys()' method in JavaScript?",
    options: [
      "To return an array of an object's enumerable property names",
      "To return an array of an object's prototype chain",
      "To serialize an object",
      "To create a new object",
    ],
    correctAnswer: "To return an array of an object's enumerable property names",
  },
  {
    question: "What does the 'Object.freeze()' method do in JavaScript?",
    options: [
      "Adds new properties to an object",
      "Removes properties from an object",
      "Prevents any changes to an object's properties",
      "Creates a shallow copy of an object",
    ],
    correctAnswer: "Prevents any changes to an object's properties",
  },
  {
    question: "Which method is used to convert a JavaScript object to a JSON string?",
    options: ["object.parseJSON()", "object.stringify()", "JSON.stringify(object)", "object.toJSON()"],
    correctAnswer: "JSON.stringify(object)",
  },
  {
    question: "What is the purpose of the 'JSON.parse()' method in JavaScript?",
    options: [
      "To parse a JSON string into a JavaScript object",
      "To serialize a JavaScript object",
      "To convert a JavaScript object to a JSON string",
      "To delete properties from a JavaScript object",
    ],
    correctAnswer: "To parse a JSON string into a JavaScript object",
  },
  {
    question: "How does JavaScript represent undefined properties in a JSON string?",
    options: ["As the string 'undefined'", "As the number 0", "As the boolean value false", "By omitting the property"],
    correctAnswer: "By omitting the property",
  },
  {
    question: "What is the purpose of the 'Object.getOwnPropertyDescriptor()' method in JavaScript?",
    options: [
      "To retrieve the attributes of an object property",
      "To delete an object property",
      "To add a new property to an object",
      "To create a new object",
    ],
    correctAnswer: "To retrieve the attributes of an object property",
  },
  {
    question: "How can you iterate over the properties of an object in JavaScript?",
    options: ["Using a 'for' loop", "Using a 'while' loop", "Using a 'do-while' loop", "All of the above"],
    correctAnswer: "All of the above",
  },
  {
    question: "What is the purpose of the 'Object.create()' method in JavaScript?",
    options: [
      "To create a new object with the specified prototype object",
      "To clone an existing object",
      "To delete properties from an object",
      "To add a new property to an object",
    ],
    correctAnswer: "To create a new object with the specified prototype object",
  },
  {
    question: "What does the 'Object.values()' method do in JavaScript?",
    options: [
      "Returns an array of an object's enumerable property values",
      "Deletes an object property",
      "Adds new properties to an object",
      "Freezes an object",
    ],
    correctAnswer: "Returns an array of an object's enumerable property values",
  },
  {
    question: "What is the purpose of the 'Object.seal()' method in JavaScript?",
    options: [
      "Adds new properties to an object",
      "Prevents any changes to an object's properties",
      "Deletes an object property",
      "Returns an array of an object's enumerable property values",
    ],
    correctAnswer: "Prevents any changes to an object's properties",
  },
  {
    question: "Which statement is used to check if an object property exists before accessing it?",
    options: ["if (object.property) {}", "if (object.property !== undefined) {}", "if (object.hasProperty('property')) {}", "All of the above"],
    correctAnswer: "All of the above",
  },
];
module.exports = objectAttributes;
