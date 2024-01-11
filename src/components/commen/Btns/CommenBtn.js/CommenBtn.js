import React from "react";

const CommenBtn = ({
  action,
  bgColor,
  textColor = "text-white",
  text,
  hover,
  icon,
}) => {
  return (
    <button
      type="submit"
      onClick={action}
      className={`md:ml-4 w-fit  px-4 py-2 rounded-lg flex gap-2  items-center  ${bgColor}  ${textColor} hover:${hover} focus:outline-none`}
    >
      {icon}
      {text}
    </button>
  );
};

export default CommenBtn;
