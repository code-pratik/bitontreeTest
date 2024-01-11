import React from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";

const CharacterListSkeleton = () => {
  const theme = useSelector((state) => state.main?.theme);
  const themeHighlightColor = theme === "light" ? "#f0f0f0" : "#cccccc";
  const themeBaseColor = theme === "light" ? "#e0e0e0" : "#333333";
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {Array(10)
          .fill(0)
          .map((item, index) => (
            <Skeleton
              width={250}
              height={300}
              highlightColor={themeHighlightColor}
              baseColor={themeBaseColor}
            />
          ))}
      </div>
    </>
  );
};

export default CharacterListSkeleton;
