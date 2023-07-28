import React from "react";

const TextInput = ({ label, name, placeholder, value, func, ...extras }) => {
  return (
    <div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          name={name}
          className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
          value={value}
          required
          placeholder=" "
          onChange={(e) => func(e.target.value)}
          {...extras}
        />
        <label
          htmlFor={name}
          className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default TextInput;
