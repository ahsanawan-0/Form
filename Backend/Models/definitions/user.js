const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  candidateName: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  dateStarted: {
    type: Date,
    required: true,
  },
  dateExited: {
    type: Date,
    required: true,
  },
  primaryReasonForLeaving: {
    type: String,
    enum: [
      "Unsatisfactory Salary",
      "Insufficient Career Growth",
      "Other (please specify below)",
    ],
    required: true,
  },
  otherPrimaryReason: {
    type: String,
    required: function () {
      return this.primaryReasonForLeaving === "Other (please specify below)";
    },
  },
  experienceDescription: {
    type: String,
    enum: ["Unfavorable", "Growth-Oriented"],
    required: true,
  },
  mainIssuesEncountered: {
    type: String,
    enum: ["Lack of Official Coordination", "Misbehavior of Staff"],
    required: true,
  },
  firstRadioQuestion: {
    type: String,
    enum: ["Yes", "No (Please mention the cause below)"],
    required: true,
  },
  secondRadioQuestion: {
    type: String,
    enum: ["Yes", "No"],
    required: true,
  },
  cause: {
    type: String,
    required: function () {
      return this.firstRadioQuestion === "No (Please mention the cause below)";
    },
  },
  anyRemarks: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
