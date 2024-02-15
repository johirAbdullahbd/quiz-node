const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema for uniqueString data
const uniqueStringSchema = new Schema({
  uniqueString: {
    type: String,
    required: true,
    unique: true,
  },
  subjectName: {
    type: String,
    required: true,
  },

  rejult: {
    step1: Number,
    step2: Number,
    step3: Number,
    step4: Number,
    step5: Number,
  },
});

// Schema for certificate data
const certificateSchema = new Schema({
  JAQC: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  rejult: [
    {
      subjectName: {
        type: String,
        required: true,
      },
      score: {
        type: Number,
        required: true,
      },
    },
  ],
});

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  description: String,
});

const User = mongoose.model("User", userSchema);

// Create models based on the schemas
const UniqueStringModel = mongoose.model("UniqueString", uniqueStringSchema);
const CertificateModel = mongoose.model("Certificate", certificateSchema);

module.exports = {
  UniqueStringModel,
  CertificateModel,
  User,
};
