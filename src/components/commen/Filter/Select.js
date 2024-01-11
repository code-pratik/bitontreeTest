import React from "react";

const Select = ({ value, action, selectionInfo, commenValue, optionValue }) => {
  return (
    <select
      value={value}
      onChange={action}
      className="p-2  border border-gray-300 rounded focus:outline-none focus:border-purple-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white "
    >
      <option value="">{commenValue}</option>
      {selectionInfo.map((item, index) => (
        <option
          key={index}
          value={item[optionValue]}
          className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
        >
          {item[optionValue]}
        </option>
      ))}
    </select>
  );
};

export default Select;
