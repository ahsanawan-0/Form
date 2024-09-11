import React from "react";

const TextAreas = ({

    actionTaken,
    setActionTaken,
    cause,
    setCause,
    compensationCollected,
    setCompensationCollected,
    anyRemarks,
    setAnyRemarks
}
) => {
  // Handler for radio button change
  const handleActionChange = (event) => {
    setActionTaken(event.target.value);
  };
  return (
    <div>
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
              maxlength="250"
              onChange={(e) => setCause(e.target.value)}
              className="w-[100%] h-40  p-2 resize-none border-gray-300 rounded-md"
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
            maxlength="250"

            value={anyRemarks}
            onChange={(e) => setAnyRemarks(e.target.value)}
            className="w-[100%] h-40  p-2 resize-none border-gray-300 rounded-md"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default TextAreas;
