import React from "react";

const DropDownInput = ({ label, name, value, func, options }) => {
  return (
    <div>
      <div className="form-group">
        <label
          className="block mb-2 text-lg font-medium text-gray-600 "
          htmlFor={name}
        >
          {label}
        </label>
        <select
          id={name}
          className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
          value={value}
          required
          onChange={(e) => func(e.target.value)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropDownInput;
