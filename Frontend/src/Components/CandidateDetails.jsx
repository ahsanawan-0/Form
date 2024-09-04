import PropTypes from "prop-types";
import InputField from "./InputField"; // Assuming you have InputField in the same directory

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
          id="candidateName"
          name="candidateName"
          placeholder="Enter candidate name"
          value={candidateName}
          onChange={(e) => setCandidateName(e.target.value)}
          className="w-[95%] mt-1"
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
          id="department"
          name="department"
          placeholder="Enter department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="md:w-[93%]  w-[94%] mt-1"
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
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          className="md:w-[97%] w-[94%] mt-1"
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
