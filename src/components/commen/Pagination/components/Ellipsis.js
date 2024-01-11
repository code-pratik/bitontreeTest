import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Ellipsis = () => {
  return (
    <p className=" flex items-center justify-center w-8 h-8 text-lg font-semibold dark:text-violet-400">
      <FontAwesomeIcon icon={faEllipsis} />
    </p>
  );
};

export default Ellipsis;
