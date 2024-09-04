import React, { useState } from "react";
import backgroundImage from "../Assets/background.png";
import FeedbackSection from "../Components/FeedbackSection";
import DateField from "../Components/DateField";
import CandidateDetails from "../Components/CandidateDetails";
import TextAreas from "../Components/TextAreas";

const Form = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#F1FBFD] overflow-hidden">
      <div
        className="absolute sm:inset-0 sm:w-full  md:inset-0 right-0 top-0  w-[400px] sm:h-auto h-full bg-contain   bg-no-repeat md:bg-right"
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

        {/* Candidate Details Component */}
        <CandidateDetails />

        {/* DateField Component */}
        <div className="mt-10">
          <DateField />
        </div>
        {/* Feedback Section */}
        <div className="mt-5">
          <FeedbackSection />
        </div>
        {/* textares */}
        <div>
          <TextAreas />
        </div>
        <div className="flex justify-center mt-5">
          <button className="px-16 py-2 bg-blue-800 text-white rounded-md mt-7">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
