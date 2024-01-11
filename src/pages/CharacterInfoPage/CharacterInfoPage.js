import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CharacterInfoCard from "../../components/commen/Cards/CharacterInfoCard/CharacterInfoCard";
import EpisodeCard from "../../components/commen/Cards/EpisodeCard/EpisodeCard";
import Search from "../../components/commen/Search/Search";
import Skeleton from "react-loading-skeleton";
import EpisodeSkeleton from "../../components/commen/Skeleton/EpisodeSkeleton";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

const CharcterInfo = () => {
  const { id } = useParams();
  const theme = useSelector((state) => state.main?.theme);
  const [characterDetails, setCharacterDetails] = useState({});
  const [episodeDetails, setEpisodeDetails] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [episodeDataCopy, setEpisodeDataCopy] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const themeHighlightColor = theme === "light" ? "#f0f0f0" : "#cccccc";
  const themeBaseColor = theme === "light" ? "#e0e0e0" : "#333333";

  const fetchCharacterDetails = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      setCharacterDetails(response.data);
      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      setError(true);
      return error;
    }
  }, [id]);

  useEffect(() => {
    setEpisodeDetails([]);
    const fetchData = async () => {
      const data = await fetchCharacterDetails();
      data?.episode?.forEach(async (episode) => {
        const episodeData = await axios.get(episode);
        setEpisodeDetails((prevEpisode) => [...prevEpisode, episodeData.data]);
        setEpisodeDataCopy((prevEpisode) => [...prevEpisode, episodeData.data]);
      });
      window.scrollTo(0, 0);
    };

    fetchData();
  }, [id, fetchCharacterDetails]);

  const handelEpisodeSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchValue(searchValue);

    const filteredEpisode = episodeDataCopy.filter((episode) => {
      return episode.name.toLowerCase().includes(searchValue);
    });

    if (searchValue === "") {
      setEpisodeDetails(episodeDataCopy);
    } else {
      setEpisodeDetails(filteredEpisode);
    }
  };

  const { name, image, status, origin, url, location, gender, species, type } =
    characterDetails;

  if (error || !characterDetails || characterDetails.name === "") {
    return navigate("/characters/page/1");
  }

  return (
    <>
      <Helmet>
        <title>CharacterInfo</title>
      </Helmet>
      <div className="flex flex-col items-center px-6 min-[450px]:px-16 py-8 m-h-[92vh] max-w-[1680px] mx-auto">
        <CharacterInfoCard
          name={name}
          image={image}
          status={status}
          origin={origin?.name}
          url={url}
          location={location?.name}
          gender={gender}
          species={species}
          type={type}
          totalEpisode={episodeDetails?.length}
          loading={loading}
        />
        <h2 className="text-xl dark:text-white font-bold mt-6 text-start w-full">
          {loading ? (
            <Skeleton
              width={100}
              height={30}
              highlightColor={themeHighlightColor}
              baseColor={themeBaseColor}
            />
          ) : (
            "Episodes"
          )}
        </h2>
        <div className="flex justify-start w-full pt-4">
          <Search
            searchValue={searchValue}
            action={handelEpisodeSearch}
            placeholderValue="Search Episode"
            loading={loading}
          />
        </div>

        {loading && <EpisodeSkeleton />}
        {episodeDetails?.length !== 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full py-6">
            {episodeDetails?.map(
              ({ name, created, episode, air_date, id, url }) => (
                <EpisodeCard
                  key={id}
                  name={name}
                  created={created}
                  episode={episode}
                  air_date={air_date}
                  id={id}
                  url={url}
                />
              )
            )}
          </div>
        ) : (
          <p className="dark:text-white">No Episodes</p>
        )}
      </div>
    </>
  );
};

export default CharcterInfo;
