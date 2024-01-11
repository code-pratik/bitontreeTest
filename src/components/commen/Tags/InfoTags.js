import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoTags = ({ textColor, bgColor, icon, text, label }) => {
  return (
    <div
      className={`text-lg ${bgColor} ${textColor} w-fit px-3 py-1 md:px-4 md:py-2 rounded-full md:text-sm lg:text-lg`}
    >
      {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
      {label && <span className="font-semibold">{label}:</span>}
      <span className="font-semibold">{text}</span>
    </div>
  );
};

export default InfoTags;
