import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";

import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import SuggestionVideoCard from "./SuggestionVideoCard";

const VidoeCard = ({ video }) => {
  return (
    <>
      <Link to={`/video/${video.videoId}`}>
        <div className="flex flex-col mb-8">
          <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
            <img
              src={video?.thumbnails?.[0]?.url}
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
        </div>
      </Link>
    </>
  );
};

export default VidoeCard;
