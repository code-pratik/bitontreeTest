import React from "react";
import { useNavigate } from "react-router-dom";

const CharacterCard = ({ id, image, name, type, totalEpisode, location }) => {
  const navigate = useNavigate();
  return (
    <div
      className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg hover:backdrop-blur-xl transition duration-300 cursor-pointer"
      onClick={() => navigate(`/characters/${id}`)}
    >
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-[19rem]  object-cover"
        />
        <div className="absolute bottom-0 left-0  bg-gradient-to-t from-black p-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300  flex flex-col justify-end  w-full h-full  ">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-sm font-semibold">{type}</p>
          <p className="text-sm font-semibold">Episodes: {totalEpisode}</p>
          <p className="text-sm font-semibold">Location: {location}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
