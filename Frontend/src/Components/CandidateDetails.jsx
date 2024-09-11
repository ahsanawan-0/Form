import PropTypes from "prop-types";
import InputField from "./InputField";

const CandidateDetails = ({
  candidateName,
  setCandidateName,
  department,
  setDepartment,
  designation,
  setDesignation,
}) => {
  return (
    <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div>
        <label
          htmlFor="candidateName"
          className="block text-sm font-medium text-black"
        >
          Name of the Candidate
        </label>
        <InputField
          type="text"
          maxLength="25"
          name="candidateName"
          placeholder="Enter candidate name"
          value={candidateName}
          onChange={(e) => setCandidateName(e.target.value)}
          className=" w-[100%] mt-1 shadow-md"
        />
      </div>

      <div>
        <label
          htmlFor="department"
          className="block text-sm font-medium text-black"
        >
          Department
        </label>
        <InputField
          type="text"
          name="department"
          placeholder="Enter department"
          maxlength="25"
          value={department}
          maxLength="20"
          onChange={(e) => setDepartment(e.target.value)}
          className=" w-[100%] mt-1 shadow-md"
        />
      </div>

      <div className="md:col-span-2 mt-5">
        <label
          htmlFor="designation"
          className="block text-sm font-medium text-black"
        >
          Designation
        </label>
        <InputField
          type="text"
          id="designation"
          name="designation"
          placeholder="Enter designation"
          maxLength="50"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          className=" w-[100%]  mt-1 shadow-md"
        />
      </div>
    </form>
  );
};

CandidateDetails.propTypes = {
  candidateName: PropTypes.string.isRequired,
  setCandidateName: PropTypes.func.isRequired,
  department: PropTypes.string.isRequired,
  setDepartment: PropTypes.func.isRequired,
  designation: PropTypes.string.isRequired,
  setDesignation: PropTypes.func.isRequired,
};

export default CandidateDetails;
