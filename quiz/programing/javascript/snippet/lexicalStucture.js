const lexicalStructureSnippet = [
  {
    question: "What will be logged to the console?",
    img: "https://ipfs.filebase.io/ipfs/QmXgdk6vT6TPAUTdt1yen6JmrjTPbFKyCkCiDSVMhHcwwB",
    options: [
      "My name is Alice and I am 25 years old.",
      "My name is ${name} and I am ${age} years old.",
      "Error",
      "undefined",
      "{ name: 'Alice', age: 25 }",
    ],
    correctAnswer: "My name is Alice and I am 25 years old.",
  },
  {
    question: "What will be logged to the console?",
    img: "https://ipfs.filebase.io/ipfs/Qmen7QGosYapVtgZbSUjpaBDLtiqrL2hLG7cFmZeshQWqE",
    options: ["10", "Error", "undefined", "0", "ReferenceError"],
    correctAnswer: "ReferenceError",
  },
  {
    question: "What will be logged to the console?",
    img: "https://ipfs.filebase.io/ipfs/QmWAHvoBf19jPzzGd6MkaFWPEmxTQnhoa7LKP1SymNPJpV",
    options: ["8", "Error", "undefined", "{ add: [Function] }", "'3 + 5'"],
    correctAnswer: "8",
  },
  {
    question: "What will be logged to the console?",
    img: "https://ipfs.filebase.io/ipfs/QmVCkMQcyk68wxyb7gNykk2xKEVx5URke2uAkUb3V9ayso",
    options: ["Bob 30", "{ name: 'Bob', age: 30 }", "undefined undefined", "Error", "{ person: { name: 'Bob', age: 30 } }"],
    correctAnswer: "Bob 30",
  },
];
module.exports = lexicalStructureSnippet;
