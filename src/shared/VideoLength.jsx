import React from "react";
import moment from "moment";

const VideoLength = ({ time }) => {
  const duration = moment.duration(time, "seconds");
  const videoLengthInSeconds = moment
    .utc(duration.asMilliseconds())
    .format("H:mm:ss");

  return (
    <span className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
      {videoLengthInSeconds}
    </span>
  );
};

export default VideoLength;
