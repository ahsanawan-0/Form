import PropTypes from "prop-types";

const DropDown = ({
  question,
  options,
  value,
  onChange,
  id,
  className = "",
  disabled = false,
  required = false,
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={id} className="mb-2 text-sm font-medium text-black">
        {question}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className={`mt-1 block md:w-1/2 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${className}`}
        disabled={disabled}
        required={required}
      >
        {/* Render each option dynamically */}
        {options.map((option, index) => (
          <option
            key={index}
            value={option.value}
            className="text-gray-500"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

// Adding PropTypes for props validation
DropDown.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

export default DropDown;
