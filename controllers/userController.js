const { v4: uuidv4 } = require("uuid");
const generateUniqueNumber = require("./generateKye");

// Import Mongoose models
const { UniqueStringModel, CertificateModel, User } = require("../schema/userSchema");

// Function to save data to MongoDB with error handling
async function saveData(model, data) {
  try {
    await model.create(data);
    console.log(`Data saved for ${model.modelName}`);
  } catch (error) {
    console.error(`Error saving data for ${model.modelName} to MongoDB:`, error);
  }
}

// Endpoint to handle exam data
const examData = async (req, res) => {
  const { uniqueString, subjectName, step, score } = req.body;
  console.log(req.body, "body");

  try {
    const existingUser = await UniqueStringModel.findOne({ uniqueString });

    if (existingUser) {
      console.log(existingUser, "exit");
      existingUser.subjectName = subjectName;
      existingUser.rejult[step] = score;
      await existingUser.save();
      res.json({ success: true, uniqueString, message: "Data saved for user" });
    } else {
      if (step !== "step1") {
        res.json({ success: false, message: "running time finish" });
        return;
      }
      const newUser = new UniqueStringModel({
        uniqueString: uuidv4(),
        rejult: { [step]: score },
        subjectName,
      });
      await newUser.save();
      res.json({ success: true, uniqueString: newUser.uniqueString, message: "New user created and data saved" });

      // Create data deletion after 30 minutes
      setTimeout(async () => {
        console.log("call set Timeout");
        await newUser.deleteOne(); // Use deleteOne for removing a document
      }, 1800000); // 30 minutes in milliseconds
    }
  } catch (error) {
    console.error("Error in examData:", error);
    res.json({ success: false, message: "Error processing exam data" });
  }
};

// Endpoint to handle certificate data
const certificateData = async (req, res) => {
  const { uniqueString, JAQC, email, password, name } = req.body;

  try {
    const existingUser = await UniqueStringModel.findOne({ uniqueString });

    if (!existingUser) {
      res.json({ success: false, message: "Invalid user" });
      return;
    }

    const certificates = await CertificateModel.find();
    const keyArr = certificates.map((cert) => cert.JAQC);
    const data = existingUser.rejult;
    const number = Object.values(data).reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    const score = (number / 100) * 10;
    const points = parseFloat(score.toFixed(10));

    if (name) {
      const code = generateUniqueNumber(keyArr);
      certificates.push({
        JAQC: code,
        email,
        password,
        name,
        rejult: [{ subjectName: existingUser.subjectName, score: points }],
      });
      await saveData(CertificateModel, certificates);
      res.json({ success: true, JAQC: code, message: "Data saved for user" });
    } else {
      const code = keyArr.find((key) => key == JAQC);

      if (!code) {
        res.json({ success: false, message: "Code is not match" });
        return;
      }

      const index = certificates.findIndex((item) => item.JAQC === code);
      const obj = certificates[index];

      if (obj.password === password && obj.email === email) {
        obj.rejult.push({ subjectName: existingUser.subjectName, score });
        await saveData(CertificateModel, certificates);
        res.json({ success: true, JAQC: code, message: "Data saved for user" });
      } else {
        res.json({ success: false, message: "Password or email is not match" });
      }
    }
  } catch (error) {
    console.error("Error in certificateData:", error);
    res.json({ success: false, message: "Error processing certificate data" });
  }
};

// Endpoint to get result from certificate data
const rejultCertificate = async (req, res) => {
  const { JAQC, id } = req.body;

  try {
    const certificate = await CertificateModel.findOne({ JAQC });

    if (certificate) {
      res.json({ success: true, name: certificate.name, JAQC, rejult: certificate.rejult });
      if (id) {
        UniqueStringModel.deleteMany({ id }, (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log("Documents deleted successfully");
          }
        });
      }
    } else {
      res.json({ success: false, message: "Invalid JAQC" });
    }
  } catch (error) {
    console.error("Error in rejultCertificate:", error);
    res.json({ success: false, message: "Error retrieving rejult certificate data" });
  }
};
const createUser = async (req, res) => {
  console.log(req.body, "reqBody");
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    console.log("error", error);
    res.status(400).send(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    console.log(users, "users");
    res.send(users);
  } catch (error) {
    console.log("error", error);
    res.status(500).send(error);
  }
};

module.exports = { examData, certificateData, rejultCertificate, createUser, getAllUsers };
