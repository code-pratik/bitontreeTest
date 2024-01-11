import React from "react";
import Select from "./Select";
import CommenBtn from "../Btns/CommenBtn.js/CommenBtn";
import {
  filterGenderSelection,
  filterSelectionData,
  filterStatusSelection,
} from "../../../constants/filterConstant";
import { fetchPaginatedCharacterData } from "../../../store";
import { useDispatch } from "react-redux";

const FilterComponent = ({
  filterType,
  filterValue,
  setFilterType,
  setFilterValue,
}) => {
  const dispatch = useDispatch();

  const handleFilter = () => {
    dispatch(
      fetchPaginatedCharacterData({
        page: 1,
        searchType: filterType !== "Character" ? filterType : "name",
        queryValue: filterValue,
      })
    );
  };

  const handleFilterType = (e) => {
    setFilterType(e.target.value);
  };

  const handleFilterValue = (e) => {
    setFilterValue(e.target.value);
  };

  const clearFilter = () => {
    setFilterType("");
    setFilterValue("");
    handleFilter();
  };

  return (
    <div className="flex   flex-col sm:flex-row w-full gap-4 ">
      <Select
        value={filterType}
        action={handleFilterType}
        commenValue="Filter Type"
        optionValue="name"
        selectionInfo={filterSelectionData}
      />
      {filterType === "gender" && (
        <Select
          value={filterValue}
          action={handleFilterValue}
          selectionInfo={filterGenderSelection}
          commenValue="Select gender"
          optionValue="gender"
        />
      )}
      {filterType === "status" && (
        <Select
          value={filterValue}
          action={handleFilterValue}
          selectionInfo={filterStatusSelection}
          optionValue="status"
          commenValue="Select Status"
        />
      )}
      <CommenBtn
        action={clearFilter}
        bgColor="bg-red-500"
        text="Clear Filter"
      />
    </div>
  );
};

export default FilterComponent;
