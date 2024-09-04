const Joi = require("joi");
const userModel = require("../Models/userModel");

const userSchema = Joi.object({
  candidateName: Joi.string().required(),
  department: Joi.string().required(),
  designation: Joi.string().required(),
  dateStarted: Joi.date().required(),
  dateExited: Joi.date().optional(),
  primaryReasonForLeaving: Joi.string()
    .valid(
      "Unsatisfactory Salary",
      "Insufficient Career Growth",
      "Other (please specify below)"
    )
    .required(),
  otherPrimaryReason: Joi.string().optional().when("primaryReasonForLeaving", {
    is: "Other (please specify below)",
    then: Joi.string().required(),
    otherwise: Joi.optional(),
  }),
  experienceDescription: Joi.string()
    .valid("Unfavorable", "Growth-Oriented")
    .required(),
  mainIssuesEncountered: Joi.string()
    .valid("Lack of Official Coordination", "Misbehavior of Staff")
    .required(),
  firstRadioQuestion: Joi.string().valid("Yes", "No").required(),
  secondRadioQuestion: Joi.string().valid("Yes", "No").required(),
  cause: Joi.string().optional().when("firstRadioQuestion", {
    is: "No (Please mention the cause below)",
    then: Joi.string().required(),
    otherwise: Joi.optional(),
  }),
  anyRemarks: Joi.string().optional(),
});

module.exports = {
  createCandidateDetails: async (req, res) => {
    try {
      const validateData = await userSchema.validateAsync(req.body);
      console.log(validateData);
      const candidateDetails = await userModel.createCandidateDetails(
        validateData
      );
      if (candidateDetails.error) {
        return res.send({
          error: user.error,
        });
      }
      return res.send({
        message: "Candidate Details Saved Successfully",
        response: candidateDetails.response,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
