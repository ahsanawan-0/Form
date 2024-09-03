import React from "react";
import backgroundImage from "../Assets/background.png";
import FeedbackSection from "../Components/FeedbackSection";
import DateField from "../Components/DateField";
import CandidateDetails from "../Components/CandidateDetails";

const Form = () => {
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
        <h1 className="text-3xl font-bold mb-2">Interview Questionnair</h1>
        <p className="mb-14">
          Your Story, Our Insight: Empowering Success through Interviews
        </p>
        <h2 className="my-14 font-semibold text-xl">Candidate Details:</h2>
        <CandidateDetails />
        <div className="my-9">
          <DateField />
        </div>
        <div className="mt-5">
          <FeedbackSection />
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
                value="yes"
                className="form-radio text-blue-600"
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
                value="no"
                className="form-radio text-red-600"
              />
              <label htmlFor="no-action" className="ml-2">
                No (Please mention the cause below)
              </label>
            </div>
          </div>
          <div className="my-4">
            <p className="mb-2">Cause:</p>
            <textarea
              name="cause"
              id="cause"
              className="w-[94%] h-40 resize-none border-gray-300 rounded-md"
            ></textarea>
          </div>
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
                  value="yes"
                  className="form-radio text-blue-600"
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
                  value="no"
                  className="form-radio text-red-600"
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
              className="w-[94%] h-40 resize-none border-gray-300 rounded-md"
            ></textarea>
          </div>
          <div className="flex justify-center mt-5">
            <button className="px-16 py-2 bg-blue-800 text-white rounded-md mt-7">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
