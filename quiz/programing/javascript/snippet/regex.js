const regexSnipeet = [
  {
    question: "What will be the value of 'isValidEmail1' and 'isValidEmail2'?",
    img: "https://ipfs.filebase.io/ipfs/QmSYyYWhiCLSMphT2qvWxU2ecQNzWMaphuWeGzXjkTNy9R",
    options: ["true, true", "true, false", "false, true", "false, false", "Error"],
    correctAnswer: "true, true",
  },
  {
    question: "What will be the value of 'extractedDate'?",
    img: "https://ipfs.filebase.io/ipfs/QmXsbrdFB8HNVVt9k2wFX5BxvFdfNZpt51U2Yy2WZ9ocuz",
    options: ["'01/15/2022'", "'15/01/2022'", "'Invalid Date'", "'2022/01/15'", "Error"],
    correctAnswer: "'01/15/2022'",
  },
  {
    question: "What will be the value of 'strippedHTML'?",
    img: "https://ipfs.filebase.io/ipfs/QmR9mXVWeCC6EKDj5hVv9gonWPo738ZAJtVX1xiNtpxoxN",
    options: ["'<p>Hello, <strong>world</strong>!</p>'", "'Hello, world!'", "'Invalid HTML'", "Error", "'world'"],
    correctAnswer: "'Hello, world!'",
  },
  {
    question: "What will be the value of 'isValidHexColor1' and 'isValidHexColor2'?",
    img: "https://ipfs.filebase.io/ipfs/QmQiTGjcBsCRJv4V3qUwXCQzjdPik4oR8PM88xztRsHhZy",
    options: ["true, true", "true, false", "false, true", "false, false", "Error"],
    correctAnswer: "true, false",
  },
  {
    question: "How many elements will be in the 'sentences' array?",
    img: "https://ipfs.filebase.io/ipfs/QmTLeooSn1j6mgDJhBgwpB3pcxGdigFEwQ1enC3poGsH8J",
    options: ["3", "4", "5", "6", "Error"],
    correctAnswer: "5",
  },
];
module.exports = regexSnipeet;
