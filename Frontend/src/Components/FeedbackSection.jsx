import PropTypes from "prop-types";
import QuestionWithDropdown from "./DropDown"; // Adjust the path as needed

const FeedbackSection = ({
  primaryReasonForLeaving,
  setPrimaryReasonForLeaving,
  otherPrimaryReason,
  setOtherPrimaryReason,
  experienceDescription,
  setExperienceDescription,
  mainIssuesEncountered,
  setMainIssuesEncountered,
}) => {
  const handlePrimaryReasonChange = (e) => {
    const value = e.target.value;
    setPrimaryReasonForLeaving(value);
    if (value !== "Other (please specify below)") {
      setOtherPrimaryReason(""); // Clear the details if not 'Other'
    }
  };

  return (
    <div>
      <QuestionWithDropdown
        question="Which of the followings is the reason behind your resignation?"
        options={[
          { value: "", label: "Please Select" },
          { value: "Unsatisfactory Salary", label: "Unsatisfactory Salary" },
          {
            value: "Insufficient Career Growth",
            label: "Insufficient Career Growth",
          },
          {
            value: "Other (please specify below)",
            label: "Other (please specify below)",
          },
        ]}
        value={primaryReasonForLeaving}
        onChange={handlePrimaryReasonChange}
        id="primaryReasonForLeaving"
        className="w-[94%]"
      />
      {primaryReasonForLeaving === "Other (please specify below)" && (
        <div className="flex flex-col mb-4 mt-4">
          <label
            htmlFor="otherPrimaryReason"
            className="mb-1 text-sm font-medium text-gray-700"
          >
            Other
          </label>
          <textarea
            id="otherPrimaryReason"
            value={otherPrimaryReason}
            onChange={(e) => setOtherPrimaryReason(e.target.value)}
            className="border border-gray-300 rounded-lg py-2 px-4 h-40 resize-none w-full"
            rows="4"
          />
        </div>
      )}

      <QuestionWithDropdown
        question="How did you find the company’s professional working environment?"
        options={[
          { value: "", label: "Please Select" },
          { value: "Unfavorable", label: "Unfavorable" },
          { value: "Growth-Oriented", label: "Growth-Oriented" },
        ]}
        value={experienceDescription}
        onChange={(e) => setExperienceDescription(e.target.value)}
        id="experienceDescription"
        className="w-[94%]"
      />

      <QuestionWithDropdown
        question="What kind of hurdles did you face professionally in the due course of your tenure?"
        options={[
          { value: "", label: "Please Select" },
          {
            value: "Lack of Official Coordination",
            label: "Lack of Official Coordination",
          },
          { value: "Misbehavior of Staff", label: "Misbehavior of Staff" },
        ]}
        value={mainIssuesEncountered}
        onChange={(e) => setMainIssuesEncountered(e.target.value)}
        id="mainIssuesEncountered"
        className="w-[94%]"
      />
    </div>
  );
};

FeedbackSection.propTypes = {
  primaryReasonForLeaving: PropTypes.string.isRequired,
  setPrimaryReasonForLeaving: PropTypes.func.isRequired,
  otherPrimaryReason: PropTypes.string.isRequired,
  setOtherPrimaryReason: PropTypes.func.isRequired,
  experienceDescription: PropTypes.string.isRequired,
  setExperienceDescription: PropTypes.func.isRequired,
  mainIssuesEncountered: PropTypes.string.isRequired,
  setMainIssuesEncountered: PropTypes.func.isRequired,
};

export default FeedbackSection;
