import React from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";

const SkeletonInfoCard = () => {
  const theme = useSelector((state) => state.main?.theme);
  const themeHighlightColor = theme === "light" ? "#f0f0f0" : "#cccccc";
  const themeBaseColor = theme === "light" ? "#e0e0e0" : "#333333";
  return (
    <div className="flex flex-col md:flex-row justify-between group hover:shadow-xl transition duration-300 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg overflow-hidden shadow-lg w-full  md:h-[70vh]">
      <div className="w-full  md:w-1/2 overflow-hidden">
        <Skeleton
          height="100%"
          width="100%"
          className="py-36"
          highlightColor={themeHighlightColor}
          baseColor={themeBaseColor}
        />
      </div>
      <div className="w-full md:w-1/2 p-4 mb-4 md:p-6 flex flex-col gap-8 lg:gap-2">
        <h2 className="text-xl sm:text-4xl lg:text-6xl lg:py-6 font-bold pb-2 pt-6">
          <Skeleton
            width="80%"
            highlightColor={themeHighlightColor}
            baseColor={themeBaseColor}
          />
        </h2>
        <div className="flex flex-wrap gap-4 my-auto  lg:gap-10">
          {Array(6)
            .fill(0)
            .map((item, index) => (
              <Skeleton
                height={20}
                className="mr-2 py-4 px-12"
                highlightColor={themeHighlightColor}
                baseColor={themeBaseColor}
                borderRadius={50}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonInfoCard;
