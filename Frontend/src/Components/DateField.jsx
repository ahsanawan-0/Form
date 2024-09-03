import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment-timezone';
import { AiOutlineWarning } from 'react-icons/ai';
import { TbCalendarCheck } from 'react-icons/tb';

const DateField = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [errors, setErrors] = useState({ startDate: '', endDate: '' });
  const [isDateStartedValid, setIsDateStartedValid] = useState(true);
  const [isDateExitedValid, setIsDateExitedValid] = useState(true);

  const dateStartedRef = useRef(null);
  const dateExitedRef = useRef(null);

  const userTimeZone = moment.tz.guess();

  const validateDates = (startDate, endDate) => {
    const errors = {};
    let isStartDateValid = true;
    let isEndDateValid = true;

    if (!startDate) {
      errors.startDate = 'Start date is required.';
      isStartDateValid = false;
    } else if (moment(startDate).isBefore(moment().startOf('day'))) {
      errors.startDate = 'Start date cannot be in the past.';
      isStartDateValid = false;
    }

    if (!endDate) {
      errors.endDate = 'End date is required.';
      isEndDateValid = false;
    } else if (moment(endDate).isBefore(moment(startDate))) {
      errors.endDate = 'End date cannot be before the start date.';
      isEndDateValid = false;
    }

    setIsDateStartedValid(isStartDateValid);
    setIsDateExitedValid(isEndDateValid);
    return errors;
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
    const updatedErrors = validateDates(date, endDate);
    setErrors(updatedErrors);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    const updatedErrors = validateDates(startDate, date);
    setErrors(updatedErrors);
  };

  const handleDateInputChange = (event, setDate, setValidity) => {
    const inputValue = event.target.value;
    const isValidDate = moment(inputValue, 'MM-DD-YYYY', true).isValid();
    
    if (isValidDate) {
        const date = moment.tz(inputValue, 'MM-DD-YYYY', userTimeZone).toDate();
        setDate(date);
        const updatedErrors = validateDates(startDate, endDate);
        setErrors(updatedErrors);
    } else {
        setValidity(false);
    }
  };
  
  return (
      <div className="max-w-3xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div className={`col-span-1 ${!isDateStartedValid ? "bg-red-100 p-2 rounded" : ""}`}>
          <label className="block  font-semibold mb-2">Date Started</label>
          <div className="relative">
            <DatePicker
              selected={startDate}
              onChange={handleStartDateChange}
              onChangeRaw={(e) => handleDateInputChange(e, setStartDate, setIsDateStartedValid)}
              startDate={startDate}
              endDate={endDate}
              selectsStart
              minDate={moment.tz(new Date(), userTimeZone).toDate()}
              maxDate={moment.tz('2024-12-31', userTimeZone).toDate()}
              placeholderText="MM-DD-YYYY"
              dateFormat="MM-dd-yyyy"
              className={`md:w-80 w-72  px-4 py-2 border placeholder-blue-400 uppercase ${!isDateStartedValid ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
              ref={dateStartedRef}
            />
            <TbCalendarCheck
              className="absolute  top-1/2 right-10  text-xl transform -translate-y-1/2 text-black cursor-pointer"
              onClick={() => dateStartedRef.current.setFocus()} // Focus the DatePicker input when icon is clicked
              />
          </div>
          {!isDateStartedValid && (
              <div className="mt-1 text-red-600 text-sm flex items-center">
              <AiOutlineWarning className="mr-1" />
              <span>This date is not valid. Ensure the year is four digits, the date format is MM-DD-YYYY, and the date is not in the past.</span>
                </div>
          )}

        </div>









        <div className={`col-span-1 ${!isDateExitedValid ? "bg-red-100 p-2 rounded" : ""}`}>
          <label className="block font-semibold mb-2">Date of Exiting</label>
          <div className="relative">
            <DatePicker
              selected={endDate}
              onChange={handleEndDateChange}
              onChangeRaw={(e) => handleDateInputChange(e, setEndDate, setIsDateExitedValid)}
              startDate={startDate}
              endDate={endDate}
              selectsEnd
              minDate={startDate || moment.tz(new Date(), userTimeZone).toDate()}
              maxDate={moment.tz('2024-12-31', userTimeZone).toDate()}
              placeholderText="MM-DD-YYYY"
              dateFormat="MM-dd-yyyy"
              className={`md:w-80 w-72  px-4 py-2 border placeholder-blue-400 uppercase ${!isDateExitedValid ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
              ref={dateExitedRef}
              disabled={!startDate}
            />
            <TbCalendarCheck
              className="absolute top-1/2 right-10  text-xl  transform -translate-y-1/2 text-black cursor-pointer"
              onClick={() => dateExitedRef.current.setFocus()} // Focus the DatePicker input when icon is clicked
            />
          </div>
          {!isDateExitedValid && (
            <div className="mt-1 text-red-600 text-sm flex items-center">
              <AiOutlineWarning className="mr-1" />
              <span>This date is not valid. Ensure the date is after the "Date Started" and in the correct format.</span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default DateField;
