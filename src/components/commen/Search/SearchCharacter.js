import React from "react";
import { useDispatch } from "react-redux";
import { fetchPaginatedCharacterData } from "../../../store";
import CommenBtn from "../Btns/CommenBtn.js/CommenBtn";
import Search from "./Search";
import Select from "../Filter/Select";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchCharacter = ({
  page,
  searchType,
  searchValue,
  setSearchType,
  setSearchValue,
}) => {
  const dispatch = useDispatch();

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handelSearchType = (e) => {
    setSearchType(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(
      fetchPaginatedCharacterData({
        page: page,
        searchType: searchType,
        queryValue: searchValue,
      })
    );
  };

  const handleClear = () => {
    setSearchType("");
    setSearchValue("");
    dispatch(
      fetchPaginatedCharacterData({
        page: page,
        searchType: "",
        queryValue: "",
      })
    );
  };

  return (
    <div className=" w-full flex flex-col gap-2 md:flex md:flex-row  ">
      <form
        onSubmit={handleSearch}
        className="flex flex-col gap-2 md:flex md:flex-row w-full "
      >
        <Search
          searchValue={searchValue}
          action={handleSearchValue}
          placeholderValue="Search based on Selected Type"
        />
        <Select
          value={searchType}
          optionValue="name"
          commenValue="Search Type"
          action={handelSearchType}
          selectionInfo={[{ name: "name" }, { name: "species" }]}
        />

        <div className="flex gap-2">
          <CommenBtn
            text="Search"
            bgColor="bg-purple-500"
            hover="bg-purple-600"
            textColor="text-white"
            action={handleSearch}
            icon={<FontAwesomeIcon icon={faSearch} />}
          />
        </div>
        <CommenBtn
          action={handleClear}
          text="AllData"
          bgColor="bg-gray-300"
          textColor="text-black"
          hover="bg-gray-400"
        />
      </form>
    </div>
  );
};

export default SearchCharacter;
