import React, { useState } from "react";

const TextAreas = () => {
  // State to track the selected options and cause/remarks
  const [actionTaken, setActionTaken] = useState("");
  const [cause, setCause] = useState("");
  const [compensationCollected, setCompensationCollected] = useState("");
  const [remarks, setRemarks] = useState("");

  // Handlers for radio button and textarea changes
  const handleActionChange = (event) => {
    setActionTaken(event.target.value);
  };

  const handleCauseChange = (event) => {
    setCause(event.target.value);
  };

  const handleCompensationChange = (event) => {
    setCompensationCollected(event.target.value);
  };

  const handleRemarksChange = (event) => {
    setRemarks(event.target.value);
  };

  return (
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
            checked={actionTaken === "yes"}
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
            value="no"
            className="form-radio text-red-600"
            checked={actionTaken === "no"}
            onChange={handleActionChange}
          />
          <label htmlFor="no-action" className="ml-2">
            No (Please mention the cause below)
          </label>
        </div>
      </div>

      {actionTaken === "no" && (
        <div className="my-4">
          <p className="mb-2">Cause:</p>
          <textarea
            name="cause"
            id="cause"
            value={cause}
            onChange={handleCauseChange}
            className="w-full h-40 resize-none border-gray-300 rounded-md"
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
              value="yes"
              className="form-radio text-blue-600"
              checked={compensationCollected === "yes"}
              onChange={handleCompensationChange}
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
              checked={compensationCollected === "no"}
              onChange={handleCompensationChange}
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
          value={remarks}
          onChange={handleRemarksChange}
          className="w-full h-40 resize-none border-gray-300 rounded-md"
        ></textarea>
      </div>
    </div>
  );
};

export default TextAreas;
