const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors middleware
const quizRoutes = require("./routes/quizRoutes");
const app = express();

app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

app.use("/api/quiz", quizRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
