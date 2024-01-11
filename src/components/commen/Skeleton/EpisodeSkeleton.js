import React from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";

const EpisodeSkeleton = () => {
  const theme = useSelector((state) => state.main?.theme);
  const themeHighlightColor = theme === "light" ? "#f0f0f0" : "#cccccc";
  const themeBaseColor = theme === "light" ? "#e0e0e0" : "#333333";
  return (
    <div className="flex gap-6 flex-wrap mt-4">
      {Array(5)
        .fill(0)
        .map((item, index) => (
          <Skeleton
            height={250}
            key={index}
            width={240}
            highlightColor={themeHighlightColor}
            baseColor={themeBaseColor}
          />
        ))}
    </div>
  );
};

export default EpisodeSkeleton;
