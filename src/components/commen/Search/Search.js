import React from "react";
import Skeleton from "react-loading-skeleton";

const Search = ({ searchValue, action, placeholderValue, loading }) => {
  return loading ? (
    <Skeleton
      width={250}
      height={30}
      highlightColor="#cccccc"
      baseColor="#333333"
    />
  ) : (
    <input
      type="search"
      value={searchValue}
      onChange={action}
      placeholder={placeholderValue}
      className="md:w-64  h-10 px-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-purple-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white     placeholder:text-xs sm:placeholder:text-sm"
    />
  );
};

export default Search;
