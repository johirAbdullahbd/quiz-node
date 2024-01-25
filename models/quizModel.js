// models/quizModel.js
const quizQuestions = require("../quiz/questions/javascript");

const getQuestions = () => {
  return quizQuestions;
};

const addQuestion = (newQuestion) => {
  quizQuestions.push(newQuestion);
};

// Implement other data-related operations (update, delete, etc.) as needed

module.exports = { getQuestions, addQuestion };
