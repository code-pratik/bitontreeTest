import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";

const EpisodeCard = ({ name, created, episode, air_date, id, url }) => {
  return (
    <div className="bg-gradient-to-br from-purple-200 to-purple-400 dark:from-gray-700 dark:to-black text-gray-800 dark:text-white rounded-lg shadow-lg p-6 max-w-lg h-full flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-semibold mb-4">{name}</h2>
        <p className="text-sm mb-2">
          <span className="font-semibold">Episode:</span> {episode}
        </p>
        <p className="text-sm mb-2">
          <span className="font-semibold">Air Date:</span> {air_date}
        </p>
        <p className="text-sm mb-4">
          <span className="font-semibold">Created:</span>{" "}
          {moment(created).format("MMMM Do YYYY, h:mm a")}
        </p>
      </div>
      <div>
        <Link className="bg-purple-500 hover:bg-purple-600 text-white text-sm font-semibold py-2 px-4 rounded-lg  duration-300 inline-block">
          Watch Episode
        </Link>
      </div>
    </div>
  );
};

export default EpisodeCard;
