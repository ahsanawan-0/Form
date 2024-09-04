import { useState, useEffect } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import backgroundImage from "../Assets/background.png";
import FeedbackSection from "../Components/FeedbackSection";
import DateField from "../Components/DateField";
import CandidateDetails from "../Components/CandidateDetails";

const Form = () => {
  // State to track form field values
  const [candidateName, setCandidateName] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [primaryReasonForLeaving, setPrimaryReasonForLeaving] = useState("");
  const [otherPrimaryReason, setOtherPrimaryReason] = useState("");
  const [experienceDescription, setExperienceDescription] = useState("");
  const [mainIssuesEncountered, setMainIssuesEncountered] = useState("");
  const [actionTaken, setActionTaken] = useState("");
  const [cause, setCause] = useState("");
  const [compensationCollected, setCompensationCollected] = useState("");
  const [anyRemarks, setAnyRemarks] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  // Validation function to check if all required fields are filled
  const validateForm = () => {
    if (
      candidateName &&
      department &&
      designation &&
      startDate &&
      endDate &&
      primaryReasonForLeaving &&
      (primaryReasonForLeaving !== "Other (please specify below)" ||
        otherPrimaryReason) &&
      experienceDescription &&
      mainIssuesEncountered &&
      actionTaken &&
      (actionTaken !== "No" || cause) &&
      compensationCollected
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  // Use useEffect to run validation whenever any form field changes
  useEffect(() => {
    validateForm();
  }, [
    candidateName,
    department,
    designation,
    startDate,
    endDate,
    primaryReasonForLeaving,
    otherPrimaryReason,
    experienceDescription,
    mainIssuesEncountered,
    actionTaken,
    cause,
    compensationCollected,
  ]);

  // Handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isFormValid) {
      alert("Please fill out all required fields.");
      return;
    }

    // Create form data object
    const formData = {
      candidateName,
      department,
      designation,
      dateStarted: startDate,
      dateExited: endDate,
      primaryReasonForLeaving,
      otherPrimaryReason:
        primaryReasonForLeaving === "Other (please specify below)"
          ? otherPrimaryReason
          : undefined,
      experienceDescription,
      mainIssuesEncountered,
      firstRadioQuestion: actionTaken,
      secondRadioQuestion: compensationCollected,
      cause: actionTaken === "No" ? cause : undefined,
      anyRemarks,
    };

    // Log form data to check
    console.log("Form Data:", formData);

    try {
      const response = await axios.post(
        "http://localhost:3000/create/CreateCandidateDetails",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Response:", response.data);

      if (response.status === 200) {
        alert("Form submitted successfully!");

        // Clear form fields by resetting state variables
        setCandidateName("");
        setDepartment("");
        setDesignation("");
        setStartDate("");
        setEndDate("");
        setPrimaryReasonForLeaving("");
        setOtherPrimaryReason("");
        setExperienceDescription("");
        setMainIssuesEncountered("");
        setActionTaken("");
        setCause("");
        setCompensationCollected("");
        setAnyRemarks("");
      } else {
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error(
        "Error submitting the form:",
        error.response ? error.response.data : error.message
      );
      alert("Failed to submit the form. Please try again.");
    }
  };

  // Handler for radio button change
  const handleActionChange = (event) => {
    setActionTaken(event.target.value);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#F1FBFD]">
      <div
        className="absolute inset-0 w-full bg-no-repeat md:bg-right"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div className="relative bg-opacity-80 p-8 mt-4 max-w-3xl w-full">
        <h1 className="text-3xl font-bold mb-2">Interview Questionnaire</h1>
        <p className="mb-14">
          Your Story, Our Insight: Empowering Success through Interviews
        </p>
        <h2 className="my-14 font-semibold text-xl">Candidate Details:</h2>
        <CandidateDetails
          candidateName={candidateName}
          setCandidateName={setCandidateName}
          department={department}
          setDepartment={setDepartment}
          designation={designation}
          setDesignation={setDesignation}
        />
        <div className="my-9">
          <DateField
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
        </div>
        <div className="mt-5">
          <FeedbackSection
            primaryReasonForLeaving={primaryReasonForLeaving}
            setPrimaryReasonForLeaving={setPrimaryReasonForLeaving}
            otherPrimaryReason={otherPrimaryReason}
            setOtherPrimaryReason={setOtherPrimaryReason}
            experienceDescription={experienceDescription}
            setExperienceDescription={setExperienceDescription}
            mainIssuesEncountered={mainIssuesEncountered}
            setMainIssuesEncountered={setMainIssuesEncountered}
          />
        </div>
        <div className="mt-8">
          <p className="mb-4 font-semibold">
            Did the concerned department take any course of action against your
            reported complaints?
          </p>
          <div className="p-4">
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="yes-action"
                name="action"
                value="Yes"
                className="form-radio text-blue-600"
                checked={actionTaken === "Yes"}
                onChange={handleActionChange}
              />
              <label htmlFor="yes-action" className="ml-2">
                Yes
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="no-action"
                name="action"
                value="No"
                className="form-radio text-red-600"
                checked={actionTaken === "No"}
                onChange={handleActionChange}
              />
              <label htmlFor="no-action" className="ml-2">
                No (Please mention the cause below)
              </label>
            </div>
          </div>
          {actionTaken === "No" && (
            <div className="my-4">
              <p className="mb-2">Cause:</p>
              <textarea
                name="cause"
                id="cause"
                value={cause}
                onChange={(e) => setCause(e.target.value)}
                className="w-[94%] h-40 resize-none border-gray-300 rounded-md"
              ></textarea>
            </div>
          )}
          <div className="my-4">
            <p className="mb-4 font-semibold">
              Have you collected your total compensation and this month’s salary
              from the accounts department?
            </p>
            <div className="p-4">
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="yes-compensation"
                  name="compensation"
                  value="Yes"
                  className="form-radio text-blue-600"
                  checked={compensationCollected === "Yes"}
                  onChange={(e) => setCompensationCollected(e.target.value)}
                />
                <label htmlFor="yes-compensation" className="ml-2">
                  Yes
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="no-compensation"
                  name="compensation"
                  value="No"
                  className="form-radio text-red-600"
                  checked={compensationCollected === "No"}
                  onChange={(e) => setCompensationCollected(e.target.value)}
                />
                <label htmlFor="no-compensation" className="ml-2">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="my-4">
            <p className="mb-2">Any Remarks:</p>
            <textarea
              name="remarks"
              id="remarks"
              value={anyRemarks}
              onChange={(e) => setAnyRemarks(e.target.value)}
              className="w-[94%] h-40 resize-none border-gray-300 rounded-md"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              className={`mt-8 w-1/3 py-2 px-4 font-bold text-white rounded ${
                isFormValid
                  ? "bg-[#20264b] hover:bg-[#434fa1]"
                  : " bg-[#343D6D] cursor-not-allowed"
              }`}
              onClick={handleSubmit}
              disabled={!isFormValid}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
