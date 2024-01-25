// controllers/quizController.js
const quizModel = require("../models/quizModel");
const javascript = require("../models/javascriptModel");

const getQuestions = (req, res) => {
  const subjectName = req.body.subjectName;
  console.log(subjectName, "subjectName");
  try {
    const allQuestions = javascript.getQuestions();
    res.json({ success: true, allQuestions });
  } catch (error) {
    console.error("Error getting quiz questions:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const addQuestion = (req, res) => {
  try {
    const { question, options, correctAnswer } = req.body;
    quizModel.addQuestion({ question, options, correctAnswer });
    res.json({ success: true, message: "Question added successfully" });
  } catch (error) {
    console.error("Error adding quiz question:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const updateQuestion = (req, res) => {
  try {
    // Implement logic to update a quiz question
    res.json({ success: true, message: "Question updated successfully" });
  } catch (error) {
    console.error("Error updating quiz question:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const deleteQuestion = (req, res) => {
  try {
    // Implement logic to delete a quiz question
    res.json({ success: true, message: "Question deleted successfully" });
  } catch (error) {
    console.error("Error deleting quiz question:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { getQuestions, addQuestion, updateQuestion, deleteQuestion };
