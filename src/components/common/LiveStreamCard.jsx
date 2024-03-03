// pages/live-stream/[streamId].js
// import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
require("dotenv").config();

import twt from "../../../public/assets/imgs/logo/twitch.png";
import getStreamerStatus from "@/lib/twitchStreamer";

export const LiveStreamCard = async ({ streamerName, imgSrc, twitchLink }) => {
  // const [isLive, setIsLive] = useState(false);
  // const [category, setCategory] = useState('');
  // const [viewers, setViewers] = useState(0);

  // useEffect(() => {
  //   const checkStreamStatus = async () => {

  const data = await getStreamerStatus(streamerName);
  const streamData = data ?? {}; // Check the 'data' property
  console.log(streamData)
  return (
    <div className="cards">
      <div className="card">
        <div className="card__top">
          <div
            className={`badge ${
              true ? "badge--red" : "badge--gray"
            } text text--upper badge--live badge--absolute`}
          >
            {true ? "live" : "offline"}
          </div>
          <div className="badge badge--gray text text--small badge--viewers badge--absolute">
            viewers
          </div>
          <Image
            className={`card__image ${true ? "live-image" : "offline-image"}`}
            src={imgSrc}
            alt="Streamer Thumbnail"
          />
        </div>
        <div className="card__body">
          <Image className="card__avatar" src={twt} alt="channel's avatar" />
          <div className="card__desc">
            <p className="text text--large text--semibold category-cl">category</p>
            <Link href={twitchLink} target="_blank">
              <p className="text text--muted">{streamerName}</p>
            </Link>
            <div className="card__tags">
              <div className="badge badge--white badge--pill text text--small">
                English
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  //     if (streamData) {
  //       setIsLive(true);
  //       setCategory(streamData.game_name);
  //       setViewers(streamData.viewer_count);
  //     } else {
  //       setIsLive(false);
  //       setCategory('');
  //       setViewers(0);
  //     }

  // };

  // Check stream status when the component mounts
  // checkStreamStatus();

  // Set up polling every 30 seconds
  // const intervalId = setInterval(checkStreamStatus, 30000);

  // Cleanup function
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [streamerName]);
};

export default LiveStreamCard;
