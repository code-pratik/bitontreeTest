import React from "react";
import {
  faCircle,
  faEarthAmericas,
  faLocationDot,
  faPerson,
  faPersonDress,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import InfoTags from "../../Tags/InfoTags";
import Skeleton from "react-loading-skeleton";

const CharacterInfoCard = ({
  name,
  image,
  status,
  origin,
  url,
  location,
  gender,
  species,
  type,
  totalEpisode,
  loading,
  ref,
}) => {
  if (loading) {
    return (
      <div
        className="flex flex-col md:flex-row justify-between group hover:shadow-xl transition duration-300 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg overflow-hidden shadow-lg w-full  md:h-[70vh]"
        ref={ref}
      >
        <div className="w-full md:w-1/2 overflow-hidden">
          <Skeleton
            height="100%"
            width="100%"
            highlightColor="#cccccc"
            baseColor="#333333"
          />
        </div>
        <div className="w-full md:w-1/2 p-4 mb-4 md:p-6 flex flex-col gap-8 lg:gap-2">
          <h2 className="text-xl sm:text-4xl lg:text-6xl lg:py-6 font-bold pb-2 pt-6">
            <Skeleton
              width="80%"
              highlightColor="#cccccc"
              baseColor="#333333"
            />
          </h2>
          <div className="flex flex-wrap gap-4 my-auto  lg:gap-10">
            <Skeleton
              height={20}
              className="mr-2 py-4 px-12"
              highlightColor="#cccccc"
              baseColor="#333333"
              borderRadius={50}
            />
            <Skeleton
              height={20}
              className="mr-2 py-4 px-12"
              highlightColor="#cccccc"
              baseColor="#333333"
              borderRadius={50}
            />
            <Skeleton
              height={20}
              className="mr-2 py-4 px-12"
              highlightColor="#cccccc"
              baseColor="#333333"
              borderRadius={50}
            />
            <Skeleton
              height={20}
              className="mr-2 py-4 px-12"
              highlightColor="#cccccc"
              baseColor="#333333"
              borderRadius={50}
            />
            <Skeleton
              height={20}
              className="mr-2 py-4 px-12"
              highlightColor="#cccccc"
              baseColor="#333333"
              borderRadius={50}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row justify-between group hover:shadow-xl transition duration-300 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg overflow-hidden shadow-lg w-full  md:h-[70vh] ">
      <div className="w-full md:w-1/2 overflow-hidden">
        <img
          src={image}
          alt={name}
          className=" w-screen md:w-full md:h-full md:object-cover transform group-hover:scale-110 transition duration-300"
        />
      </div>
      <div className="w-full md:w-1/2 p-4 mb-4 md:p-6 flex flex-col gap-8 lg:gap-2">
        <h2 className="text-xl sm:text-4xl lg:text-6xl lg:py-6 font-bold pb-2 pt-6">
          {name}
        </h2>
        <div className="flex flex-wrap gap-4 my-auto  lg:gap-10">
          <InfoTags
            text={status}
            icon={faCircle}
            textColor={status === "Alive" ? "text-green-500" : "text-red-500"}
            bgColor={status === "Alive" ? "bg-green-100" : "bg-red-100"}
          />
          <InfoTags
            text={origin}
            textColor="text-blue-500"
            bgColor="bg-blue-100"
            icon={faEarthAmericas}
          />
          <InfoTags
            text={location}
            textColor="text-yellow-500"
            bgColor="bg-yellow-100"
            icon={faLocationDot}
          />
          <InfoTags
            text={gender}
            textColor="text-gray-800"
            bgColor="bg-[#E4B6AE]"
            icon={gender === "Male" ? faPerson : faPersonDress}
          />
          <InfoTags
            text={species}
            textColor="text-indigo-600"
            bgColor="bg-indigo-100"
            label="Species"
          />
          {type && (
            <InfoTags
              text={type}
              textColor="text-purple-600"
              bgColor="bg-purple-100"
              label="Type"
            />
          )}
          <InfoTags
            text={totalEpisode}
            textColor="text-gray-800"
            bgColor="bg-gray-100"
            icon={faVideo}
          />
        </div>
      </div>
    </div>
  );
};

export default CharacterInfoCard;
