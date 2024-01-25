const objectSnippet = [
  {
    question: "What will be logged to the console?",
    img: "https://ipfs.filebase.io/ipfs/QmNcvDiZgHEes8saiZgcbB4NcZnPZhRZZ9cgdYJRch9skN",
    options: ["John New York", "John undefined", "undefined New York", "Error"],
    correctAnswer: "John New York",
  },
  {
    question: "What will be logged to the console?",
    img: "https://ipfs.filebase.io/ipfs/QmSpis2sn5o7kRipMHT1MCTXPN61FNTvLyh54mmPXx4uMK",
    options: [
      "Toyota Camry engine started",
      "undefined undefined engine started",
      "Error",
      "{ brand: 'Toyota', model: 'Camry', startEngine: [Function] }",
    ],
    correctAnswer: "Toyota Camry engine started",
  },
  {
    question: "What will be the value logged to the console?",
    img: "https://ipfs.filebase.io/ipfs/Qmbkhyw1wVxsBdywVgw97zsYgjFqYytg1q2neVLPwVU2Fy",
    options: [
      "{ name: 'Alice', age: 30 }",
      "{ address: '123 Main St', occupation: 'Engineer' }",
      " { name: 'Alice', age: 30, address: '123 Main St', occupation: 'Engineer' }",
      "Error",
    ],
    correctAnswer: "{ name: 'Alice', age: 30, address: '123 Main St', occupation: 'Engineer' }",
  },
  {
    question: "What will be logged to the console?",
    img: "https://ipfs.filebase.io/ipfs/QmQDaosaxy4tEJ2c2RGqjPyTC6fCLiCPtyu6XmwNbkBemj",
    options: [
      "Hello, my name is John and I am 25 years old",
      "Error",
      "undefined undefined",
      "Hello, my name is undefined and I am undefined years old",
    ],
    correctAnswer: "Hello, my name is John and I am 25 years old",
  },
  {
    question: "What will be logged to the console?",
    img: "https://ipfs.filebase.io/ipfs/QmedzohsGVkJEahRapwmVk5vsdQiMcTiNrXAPGiMUnR2iF",
    options: ["Charlie", "BOB", "Bob", "Error"],
    correctAnswer: "BOB",
  },
  {
    question: "What will be logged to the console?",
    img: "https://ipfs.filebase.io/ipfs/QmZapViBLMBhKYGimHYT29b3mMhH8UmJbKNGkztRYbQPpo",
    options: [
      "{ title: 'The Hobbit', author: 'J.R.R. Tolkien' } { title: '1984', author: 'George Orwell' }",
      "Error",
      "undefined undefined",
      "{ title: '1984', author: 'George Orwell' } { title: 'The Hobbit', author: 'J.R.R. Tolkien' }",
    ],
    correctAnswer: "{ title: 'The Hobbit', author: 'J.R.R. Tolkien' } { title: '1984', author: 'George Orwell' }",
  },

  {
    question: "What will be the value logged to the console?",
    img: "https://ipfs.filebase.io/ipfs/QmSHtxjMkGkTFwnyR2ueNdCPmWb4Wsma3dDJVhPVCG212s",
    options: ["{ sum: 7, product: 12 }", "Error", "{ add: [Function], multiply: [Function], calculate: [Function] }", "{ sum: 12, product: 7 }"],
    correctAnswer: "{ sum: 7, product: 12 }",
  },
  {
    question: "What will be logged to the console?",
    img: "https://ipfs.filebase.io/ipfs/QmYqrj6Hn7P8heesyLpCMEXCsYCBFEMGZKDGmPbzvYXG5M",
    options: ["30", "Alice", " undefined", "Error"],
    correctAnswer: "30",
  },
  {
    question: "What will be logged to the console?",
    img: "https://ipfs.filebase.io/ipfs/QmYqrj6Hn7P8heesyLpCMEXCsYCBFEMGZKDGmPbzvYXG5M",
    options: ["{ name: 'John', age: 30 }", "Error", "{ name: 'John', age: 25 }", "undefined"],
    correctAnswer: "{ name: 'John', age: 25 }",
  },
  {
    question: "What will be logged to the console?",
    img: "https://ipfs.filebase.io/ipfs/QmPxkC4UoMYmx3EXENHSx34KNbsAEPEoeAixJGqHX6zAdq",
    options: [
      "Toyota Camry engine started. Toyota Camry is now driving. Toyota Camry engine stopped",
      "undefined undefined",
      "{ brand: 'Toyota', model: 'Camry', startEngine: [Function], drive: [Function], stopEngine: [Function] }",
      "Error",
    ],
    correctAnswer: "Toyota Camry engine started. Toyota Camry is now driving. Toyota Camry engine stopped",
  },
];
module.exports = objectSnippet;
