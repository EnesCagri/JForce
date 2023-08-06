import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = ({ label, minDate, placeholder, value, func }) => {
  return (
    <div className="form-group">
      <label className="mb-2 text-lg font-medium text-gray-600" htmlFor={label}>
        {placeholder}
      </label>
      <br></br>
      <DatePicker
        id={label}
        selected={value}
        onChange={(date) => func(date)}
        className="form-control"
        dateFormat="dd/MM/yyyy"
        required
        placeholderText={placeholder}
        maxDate={new Date()}
        minDate={minDate}
        showYearDropdown
        scrollableYearDropdown
      />
    </div>
  );
};

export default CustomDatePicker;
