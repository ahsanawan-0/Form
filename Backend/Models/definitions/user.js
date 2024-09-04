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
    // Custom validation to allow empty string
    validate: {
      validator: function (v) {
        return (
          this.primaryReasonForLeaving !== "Other (please specify below)" ||
          v.length > 0
        );
      },
      message: "Other primary reason cannot be empty if 'Other' is selected.",
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
    enum: ["Yes", "No"],
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
      return this.firstRadioQuestion === "No";
    },
    // Custom validation to allow empty string
    validate: {
      validator: function (v) {
        return this.firstRadioQuestion !== "No" || v.length > 0;
      },
      message: "Cause cannot be empty if 'No' is selected.",
    },
  },
  anyRemarks: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
