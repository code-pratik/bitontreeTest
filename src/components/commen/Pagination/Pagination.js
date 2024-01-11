import React from "react";
import PaginationBtn from "../Btns/PaginationBtn/PaginationBtn";
import Ellipsis from "./components/Ellipsis";

const Pagination = ({ pages, nextPage, prevPage, searchValue, searchType }) => {
  const paginationBtns = [];
  const visiblePagesBtns = 10;

  let startPage = nextPage - 1;
  let endPage = nextPage + visiblePagesBtns - 2;

  if (endPage > pages) {
    endPage = pages;
    startPage = Math.max(endPage - visiblePagesBtns + 1, 1);
  }

  if (nextPage > 5 && pages > 10) {
    startPage = nextPage - 5;
    endPage = nextPage + 4;

    if (endPage > pages) {
      endPage = pages;
      startPage = Math.max(endPage - 9, 1);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    paginationBtns.push(
      <PaginationBtn
        key={i}
        page={i}
        btnValue={i}
        nextPage={nextPage}
        searchType={searchType}
        searchValue={searchValue}
      />
    );
  }

  return (
    <div className="flex flex-wrap gap-2 items-center justify-center py-4">
      {pages && (
        <PaginationBtn
          key="prev"
          page={prevPage}
          searchType={searchType}
          searchValue={searchValue}
          btnValue="Prev"
          padding="px-6"
          disable={nextPage === 2}
        />
      )}
      {startPage > 1 && <Ellipsis />}
      {paginationBtns}
      {endPage < pages && <Ellipsis />}

      {pages && (
        <PaginationBtn
          key="next"
          page={nextPage}
          btnValue="Next"
          padding="px-6"
          searchType={searchType}
          searchValue={searchValue}
          disable={nextPage > pages}
        />
      )}
    </div>
  );
};

export default Pagination;
