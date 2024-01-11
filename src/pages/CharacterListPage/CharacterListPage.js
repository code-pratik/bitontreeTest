import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPaginatedCharacterData } from "../../store";
import { useNavigate, useParams } from "react-router-dom";
import CharacterCard from "../../components/commen/Cards/CharacterCard/CharcterCard";
import SearchCharacter from "../../components/commen/Search/SearchCharacter";
import Pagination from "../../components/commen/Pagination/Pagination";
import FilterComponent from "../../components/commen/Filter/ChracterFilter";
import CharacterListSkeleton from "../../components/commen/Skeleton/CharacterListSkeleton";
import { Helmet } from "react-helmet";

const CharacterListPage = () => {
  const { charactersInfo, pages, nextPage, prevPage } = useSelector(
    (state) => state.main
  );
  const { page } = useParams();
  const [searchValue, setSearchValue] = useState("");
  const [searchType, setSearchType] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const pageNumber = +page || 1;
    if (pageNumber > pages || pageNumber <= 0) {
      navigate("/characters/page/1");
    } else {
      setLoading(true);
      dispatch(
        fetchPaginatedCharacterData({
          page: pageNumber,
          searchType: searchType !== "" ? searchType.trim() : filterType.trim(),
          queryValue:
            searchValue !== "" ? searchValue.trim() : filterValue.trim(),
        })
      ).then(() => setLoading(false));
    }
  }, [page, filterValue, pages]);

  return (
    <>
      <Helmet>
        <title>CharactersList</title>
      </Helmet>
      <div className="flex flex-col items-center px-10">
        <div className="w-full bg-white dark:bg-gray-800 border-2 p-3 mt-4 mb-4 rounded-md">
          <p className="dark:text-white pb-2">Search Characters</p>
          <SearchCharacter
            page={nextPage - 1}
            searchValue={searchValue}
            searchType={searchType}
            setSearchValue={setSearchValue}
            setSearchType={setSearchType}
          />
        </div>

        <div className="w-full bg-white dark:bg-gray-800 border-2 p-3 mt-4 mb-4 rounded-md">
          <p className="dark:text-white pb-2">Filter Characters</p>
          <FilterComponent
            setFilterType={setFilterType}
            setFilterValue={setFilterValue}
            filterType={filterType}
            filterValue={filterValue}
          />
        </div>
        {loading ? (
          <CharacterListSkeleton />
        ) : charactersInfo?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {charactersInfo.map(
              ({ id, name, image, location, episode, type }) => (
                <CharacterCard
                  key={id}
                  name={name}
                  image={image}
                  location={location.name}
                  totalEpisode={episode?.length}
                  type={type}
                  id={id}
                />
              )
            )}
          </div>
        ) : (
          <p className="text-2xl mt-8 font-semibold text-gray-600">
            No characters found.
          </p>
        )}
        <Pagination
          pages={pages}
          nextPage={nextPage}
          prevPage={prevPage}
          searchValue={searchValue}
          searchType={searchType}
        />
      </div>
    </>
  );
};

export default CharacterListPage;
