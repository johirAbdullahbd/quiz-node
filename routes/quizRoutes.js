const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quizController");
const userController = require("../controllers/userController");

router.post("/rejultcertificate", userController.rejultCertificate);
router.post("/certificatedata", userController.certificateData);
router.post("/examdata", userController.examData);
router.post("/questions", quizController.getQuestions);
// router.post("/getjavascript", quizController.getQuiz);
router.put("/questions/:id", quizController.updateQuestion);
router.delete("/questions/:id", quizController.deleteQuestion);
//
router.post("/ask", userController.createUser);
router.get("/ask", userController.getAllUsers);

module.exports = router;
