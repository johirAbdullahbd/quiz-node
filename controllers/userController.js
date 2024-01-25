const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const generateUniqueNumber = require("./generateKye");

// File names as constants
const FILE_UNIQUE_STRING = "uniqueString.json";
const FILE_CERTIFICATES = "certificates.json";

// Function to load users from a file with error handling
const loadUsers = (fileName) => {
  try {
    const data = fs.readFileSync(fileName, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading ${fileName} file:`, error);
    return [];
  }
};

// Function to load data from a file with error handling
const loadData = (fileName) => {
  try {
    const data = fs.readFileSync(fileName, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading ${fileName} file:`, error);
    return [];
  }
};

// Function to save data to a file with error handling
const saveData = (fileName, data) => {
  try {
    fs.writeFileSync(fileName, JSON.stringify(data), "utf-8");
  } catch (error) {
    console.error(`Error writing ${fileName} file:`, error);
  }
};

// Endpoint to handle exam data
const examData = (req, res) => {
  const uId = uuidv4();
  const { uniqueString, subjectName, score } = req.body;
  const users = loadUsers(FILE_UNIQUE_STRING);

  const existingUserIndex = users.findIndex((user) => user.uniqueString === uniqueString);

  if (existingUserIndex !== -1) {
    console.log("dd");
    users[existingUserIndex] = { uniqueString, subjectName, score };
    saveData(FILE_UNIQUE_STRING, users);
    res.json({ success: true, uniqueString, message: "Data saved for user" });
  } else {
    console.log("ll");
    users.push({ uniqueString: uId, subjectName, score });
    saveData(FILE_UNIQUE_STRING, users);
    res.json({ success: true, uniqueString: uId, message: "New user created and data saved" });
    console.log("helolo");
    // Creata only data deletion after 30 minutes
    setTimeout(() => {
      console.log("call set Timeout");
      // Delete elements from the users array
      const index = users.findIndex((user) => user.uniqueString === uId);
      users.splice(index, 1);
      saveData(FILE_UNIQUE_STRING, users);
    }, 1800000); // 30 minutes in milliseconds
  }
};

// Endpoint to handle certificate data
const certificateData = (req, res) => {
  const { uniqueString, JAQC, email, password, name } = req.body;
  const users = loadUsers(FILE_UNIQUE_STRING);

  const existingUser = users.find((user) => user.uniqueString === uniqueString);

  if (existingUser) {
    try {
      const certificates = loadData(FILE_CERTIFICATES);
      const keyArr = certificates.map((cert) => Object.keys(cert)[0]);

      if (name) {
        const code = generateUniqueNumber(keyArr);
        certificates.push({
          [code]: {
            email,
            password,
            name,
            rejult: { 0: { subjectName: existingUser.subjectName, score: existingUser.score } },
          },
        });
        saveData(FILE_CERTIFICATES, certificates);
        res.json({ success: true, JAQC: code, message: "Data saved for user" });
      } else {
        const code = keyArr.find((key) => key == JAQC);

        if (code) {
          const index = certificates.findIndex((item) => Object.keys(item)[0] === code);
          const obj = certificates[index];
          const len = Object.keys(obj[code].rejult).length;

          if (obj[code].password === password && obj[code].email === email) {
            obj[code].rejult[len] = { subjectName: existingUser.subjectName, score: existingUser.score };
            certificates[index] = obj;
            saveData(FILE_CERTIFICATES, certificates);
            res.json({ success: true, JAQC: code, message: "Data saved for user" });
          } else {
            res.json({ success: false, message: "password or email is not match" });
          }
        } else {
          res.json({ success: false, message: "code is not match" });
        }
      }
    } catch (error) {
      console.error("Error in certificateData:", error);
      res.json({ success: false, message: "Error processing certificate data" });
    }
  } else {
    res.json({ success: false, message: "invalid user" });
  }
};

// Endpoint to get result from certificate data
const rejultCertificate = (req, res) => {
  const JAQC = req.body.JAQC;

  try {
    const certificates = loadData(FILE_CERTIFICATES);

    const index = certificates.findIndex((item) => Object.keys(item)[0] === JAQC);
    if (index !== -1) {
      const data = certificates[index][JAQC];
      console.log(data, "dd");
      res.json({ success: true, name: data.name, JAQC, rejult: data.rejult });
    } else {
      res.json({ success: false, message: "invalid JAQC" });
    }
  } catch (error) {
    console.error("Error in rejultCertificate:", error);
    res.json({ success: false, message: "Error retrieving rejult certificate data" });
  }
};

module.exports = { examData, certificateData, rejultCertificate };
