import React from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { fetchPaginatedCharacterData } from "../../../../store";

const PaginationBtn = ({
  page,
  btnValue,
  padding,
  disable,
  nextPage,
  searchType,
  searchValue,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelPage = () => {
    if (nextPage - 1 !== page) {
      console.log(searchType, searchValue);
      dispatch(
        fetchPaginatedCharacterData({
          page: page,
          searchType,
          queryValue: searchValue,
        })
      );
      navigate(`/characters/page/${page}`);
    }
  };
  return (
    <button
      className={`flex ${padding}  items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md bg-[#318AEF] text-white border-transparent  dark:bg-gray-900 dark:text-violet-400 dark:border-violet-400`}
      onClick={handelPage}
      disabled={disable}
    >
      {btnValue}
    </button>
  );
};

export default PaginationBtn;
