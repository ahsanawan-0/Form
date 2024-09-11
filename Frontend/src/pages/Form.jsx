import { useState, useEffect } from "react";
import axios from "axios";
import backgroundImage from "../Assets/background.png";
import FeedbackSection from "../Components/FeedbackSection";
import DateField from "../Components/DateField";
import CandidateDetails from "../Components/CandidateDetails";
import moment from "moment-timezone";
import TextAreas from "../Components/TextAreas";
import { toast } from "react-toastify"; // Import toast and container
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast notifications
import MyLoader from "../Components/MyLoader";

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
  const [loading, setLoading] = useState(false); // Loader state

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

    setLoading(true); // Start loading

    // const convertToUTCStartOfDay = (date) => {
    //   if (!date) return null;
    //   return moment(date).startOf("day").utc().format();
    // };

    const convertToUTCEndOfDay = (date) => {
      if (!date) return null;
      return moment(date).endOf("day").utc().format();
    };

    const formData = {
      candidateName,
      department,
      designation,
      dateStarted: startDate,
      dateExited: convertToUTCEndOfDay(endDate),
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

    try {
      const response = await axios.post(
        "http://localhost:3000/create/CreateCandidateDetails",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        toast.success("Form submitted successfully!");
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
        toast.error("Form submission failed. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to submit the form. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  if (loading) {
    return <MyLoader />;
  }

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-[#F1FBFD]">
      <div
        className="fixed md:w-[50%] md:h-[100vh] h-[300px] right-0 top-0  w-[300px] hidden md:block md:bg-contain  bg-no-repeat md:bg-right"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: "fixed",
        }}
      ></div>

<img src={backgroundImage} className="md:hidden block absolute top-0 right-0 w-[300px]" alt="" />

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
          <TextAreas
            actionTaken={actionTaken}
            setActionTaken={setActionTaken}
            cause={cause}
            setCause={setCause}
            compensationCollected={compensationCollected}
            setCompensationCollected={setCompensationCollected}
            anyRemarks={anyRemarks}
            setAnyRemarks={setAnyRemarks}
          />
          <div className="flex justify-center">
            <button
              className={`mt-8 w-1/3 py-2 px-4 font-bold text-white rounded ${
                isFormValid
                  ? "bg-[#20264b] hover:bg-[#20264b]"
                  : " bg-[#582aff25] "
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
