const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose"); // Import Mongoose

const quizRoutes = require("./routes/quizRoutes");

const app = express();

// Mongoose connection setup
const uri = "mongodb+srv://johirabdullahbd:tne6vQRwCC6ZTzJf@cluster1.8fm4vs6.mongodb.net/"; // Replace with your MongoDB Atlas connection string
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Connected to MongoDB Atlas with Mongoose");
});

connection.on("error", (err) => {
  console.error("Error connecting to MongoDB Atlas:", err);
  process.exit(1); // Exit the process on connection error
});

app.use(bodyParser.json());
app.use(cors());
app.use("/api/quiz", quizRoutes);

const PORT = "https://quiz-node-3j0ldw5h3-johirabdullahs-projects.vercel.app/" || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
