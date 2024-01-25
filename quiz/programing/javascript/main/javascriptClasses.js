const classes = [
  {
    question: "What is the purpose of classes in JavaScript?",
    options: [
      "To create new HTML elements",
      "To define and create objects with a blueprint",
      "To apply styles to HTML elements",
      "To manipulate the DOM",
    ],
    correctAnswer: "To define and create objects with a blueprint",
  },
  {
    question: "How do you declare a class in JavaScript?",
    options: ["class MyClass {}", "function MyClass() {}", "let MyClass = class {}", "const MyClass = () => {}"],
    correctAnswer: "class MyClass {}",
  },
  {
    question: "What is the purpose of the 'constructor' method in a JavaScript class?",
    options: [
      "To create a new instance of the class",
      "To initialize the class properties when an object is created",
      "To define the class prototype",
      "To define static methods",
    ],
    correctAnswer: "To initialize the class properties when an object is created",
  },
  {
    question: "How do you create an instance (object) of a JavaScript class?",
    options: ["let obj = new MyClass();", "let obj = MyClass();", "let obj = create(MyClass);", "let obj = createObject(MyClass);"],
    correctAnswer: "let obj = new MyClass();",
  },
  {
    question: "What keyword is used to access the properties of an object inside a class method?",
    options: ["this", "self", "object", "instance"],
    correctAnswer: "this",
  },
  {
    question: "What is the purpose of the 'static' keyword in a JavaScript class?",
    options: [
      "To create a static object",
      "To make a class property accessible without creating an instance of the class",
      "To define static methods",
      "To prevent the modification of class properties",
    ],
    correctAnswer: "To define static methods",
  },
  {
    question: "How can you extend a class in JavaScript?",
    options: [
      "extend MyClass {}",
      "class SubClass = extends MyClass {}",
      "class SubClass extends MyClass {}",
      "class SubClass = MyClass.extend() {}",
    ],
    correctAnswer: "class SubClass extends MyClass {}",
  },
  {
    question: "What is the purpose of the 'super' keyword in a JavaScript class?",
    options: ["To reference the superclass", "To create an instance of the class", "To access the class prototype", "To define static methods"],
    correctAnswer: "To reference the superclass",
  },
  {
    question: "What is the concept of 'inheritance' in classes?",
    options: [
      "The ability to create multiple instances of a class",
      "The ability to extend the functionality of a class by creating a new class",
      "The ability to hide the implementation details of a class",
      "The ability to define static methods",
    ],
    correctAnswer: "The ability to extend the functionality of a class by creating a new class",
  },
  {
    question: "How can you override a method from the superclass in a subclass?",
    options: [
      "By using the 'override' keyword",
      "By using the 'super' keyword",
      "By redefining the method in the subclass",
      "By using the 'extends' keyword",
    ],
    correctAnswer: "By redefining the method in the subclass",
  },
  {
    question: "What does the 'instanceof' operator do in JavaScript?",
    options: [
      "Checks if an object is an instance of a specific class",
      "Checks if a class is an instance of an object",
      "Creates a new instance of a class",
      "Checks if an object is defined",
    ],
    correctAnswer: "Checks if an object is an instance of a specific class",
  },
  {
    question: "How do you create a getter method in a JavaScript class?",
    options: ["get myProperty() {}", "property myProperty get() {}", "function get myProperty() {}", "let myProperty = get {}"],
    correctAnswer: "get myProperty() {}",
  },
  {
    question: "What is the purpose of the 'set' keyword in a JavaScript class?",
    options: [
      "To set the value of a class property",
      "To define a setter method",
      "To create a new instance of a class",
      "To access the class prototype",
    ],
    correctAnswer: "To define a setter method",
  },
  {
    question: "What does the 'extends' keyword indicate in a class declaration?",
    options: [
      "Indicates the inheritance of a superclass",
      "Indicates the implementation of an interface",
      "Indicates the creation of a subclass",
      "Indicates the instantiation of a class",
    ],
    correctAnswer: "Indicates the inheritance of a superclass",
  },
  {
    question: "What is the purpose of the 'extends' keyword in a class declaration?",
    options: [
      "To create a new instance of a class",
      "To define a subclass that inherits from a superclass",
      "To override a method from the superclass",
      "To access the class prototype",
    ],
    correctAnswer: "To define a subclass that inherits from a superclass",
  },
  {
    question: "What is the difference between a class method and an instance method in JavaScript?",
    options: [
      "A class method is static, while an instance method is not",
      "An instance method is static, while a class method is not",
      "They are the same and can be used interchangeably",
      "A class method is called with 'this' keyword, while an instance method is not",
    ],
    correctAnswer: "A class method is static, while an instance method is not",
  },
  {
    question: "How can you define a private property in a JavaScript class?",
    options: [
      "By using the 'private' keyword",
      "By using the 'let' keyword",
      "By using the 'this' keyword",
      "JavaScript does not support private properties in classes",
    ],
    correctAnswer: "JavaScript does not support private properties in classes",
  },
  {
    question: "What is the purpose of the 'new' keyword when creating an instance of a class?",
    options: [
      "To create a new instance of a class",
      "To indicate that the class is new",
      "To define a new property in a class",
      "To create a new object",
    ],
    correctAnswer: "To create a new instance of a class",
  },
  {
    question: "How do you access a static method of a class in JavaScript?",
    options: [
      "By using the 'static' keyword",
      "By using the 'this' keyword",
      "By creating an instance of the class",
      "By calling the method directly on the class",
    ],
    correctAnswer: "By calling the method directly on the class",
  },
];
module.exports = classes;
