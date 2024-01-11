import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const DarkMode = () => {
  const [checked, setChecked] = useState(false);
  const theme = useSelector((state) => state.main?.theme);
  const dispatch = useDispatch();
  return (
    <>
      <label className="relative  items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          onChange={() => {
            setChecked(!checked);
          }}
          className="sr-only peer"
          checked={theme === "dark"}
          onClick={() => dispatch(setTheme())}
        />
        <div className="relative w-8 h-4 bg-gray-200 rounded-full py-[10px] peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:mt-[0.10rem] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 ">
          <p className="text-black z-50   absolute top-0 -mt-[1px] right-[3px] dark:hidden block ">
            <FontAwesomeIcon icon={faMoon} size="xs" />
          </p>
          <p className=" z-50   absolute text-yellow-400  top-0 -mt-[1px] left-[3px] dark:block hidden">
            {" "}
            <FontAwesomeIcon icon={faSun} size="xs" />
          </p>
        </div>
      </label>
    </>
  );
};

export default DarkMode;
