import { useState } from "react";
import QuestionWithDropdown from "./DropDown"; // Adjust the path as needed

const FeedbackSection = () => {
  const [firstQuestionAnswer, setFirstQuestionAnswer] = useState("");
  const [secondQuestionAnswer, setSecondQuestionAnswer] = useState("");
  const [thirdQuestionAnswer, setThirdQuestionAnswer] = useState("");
  const [otherDetails, setOtherDetails] = useState("");

  const handleFirstQuestionChange = (e) => {
    const value = e.target.value;
    setFirstQuestionAnswer(value);
    if (value !== "other") {
      setOtherDetails(""); // Clear the details if not 'other'
    }
  };

  return (
    <div className="">
      {/* First Question */}
      <QuestionWithDropdown
        question="Which of the followings is the reason behind your resignation?
"
        options={[
          { value: "", label: "Please Select" },
          { value: "unsatisfactorySalary", label: "Unsatisfactory Salary" },
          {
            value: "insufficientCareerGrowth",
            label: "Insufficient Career Growth",
          },
          { value: "other", label: "Other (please specify below)" },
        ]}
        value={firstQuestionAnswer}
        onChange={handleFirstQuestionChange}
        id="firstQuestion"
        className="w-[94%]"
      />
      {firstQuestionAnswer === "other" && (
        <div className="flex flex-col mb-4 mt-4">
          <label
            htmlFor="otherDetails"
            className="mb-1 text-sm font-medium text-gray-700"
          >
            Other
          </label>
          <textarea
            id="otherDetails"
            value={otherDetails}
            onChange={(e) => setOtherDetails(e.target.value)}
            className="border border-gray-300 rounded-lg py-2 px-4  h-40 resize-none w-full"
            rows="4"
          />
        </div>
      )}

      {/* Second Question */}
      <QuestionWithDropdown
        question="How did you find the company’s professional working environment?"
        options={[
          { value: "", label: "Please Select" },
          { value: "unfavorable", label: "Unfavorable" },
          { value: "growthOriented", label: "Growth-Oriented" },
        ]}
        value={secondQuestionAnswer}
        onChange={(e) => setSecondQuestionAnswer(e.target.value)}
        id="secondQuestion"
        className="w-[94%]"
      />

      {/* Third Question */}
      <QuestionWithDropdown
        question="What kind of hurdles did you face professionally in the due course of your tenure?"
        options={[
          { value: "", label: "Please Select" },
          {
            value: "lackOfCoordination",
            label: "Lack of Official Coordination",
          },
          { value: "misbehavior", label: "Misbehavior of Staff" },
        ]}
        value={thirdQuestionAnswer}
        onChange={(e) => setThirdQuestionAnswer(e.target.value)}
        id="thirdQuestion"
        className="w-[94%]"
      />
    </div>
  );
};

export default FeedbackSection;
