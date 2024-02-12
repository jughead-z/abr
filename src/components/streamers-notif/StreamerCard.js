// pages/live-stream/[streamId].js
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { getTwitchAccessToken } from './twitch-oauth'; // Adjust the path as needed
import axios from 'axios';

import twt from "../../../public/assets/imgs/logo/twitch.png";

const LiveStreamPage = ({ streamerName, imgSrc,twitchLink }) => {
  const [isLive, setIsLive] = useState(false);
  const [category, setCategory] = useState('');
  const [viewers, setViewers] = useState(0);

  useEffect(() => {
    const checkStreamStatus = async () => {
      try {
        const accessToken = await getTwitchAccessToken();

        const response = await axios.get(
          `https://api.twitch.tv/helix/streams?user_login=${streamerName}`,
          {
            headers: {
              'Client-ID': process.env.TWITCH_CLIENT_ID,
              'Authorization': `Bearer ${accessToken}`,
            },
          }
        );

        const streamData = response.data.data[0]; // Check the 'data' property
        if (streamData) {
          setIsLive(true);
          setCategory(streamData.game_name); 
          setViewers(streamData.viewer_count);
        } else {
          setIsLive(false);
          setCategory('');
          setViewers(0);
        }
      } catch (error) {
        console.error('Error fetching Twitch stream status:', error);
      }
    };

    // Check stream status when the component mounts
    checkStreamStatus();

    // Set up polling every 30 seconds 
    const intervalId = setInterval(checkStreamStatus, 30000);

    // Cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, [streamerName]);

  return (
    <div class="cards">
      <div class="card">
        <div class="card__top">
          <div className={`badge ${isLive ? 'badge--red' : 'badge--gray'} text text--upper badge--live badge--absolute`}>
            {isLive ? 'live' : 'offline'}
          </div>
          <div class="badge badge--gray text text--small badge--viewers badge--absolute">
          {viewers} viewers
        </div>
        <Image
        class={`card__image ${isLive ? 'live-image' : 'offline-image'}`}
        src={imgSrc} 
        alt="Streamer Thumbnail"
        />
      </div>
      <div class="card__body">
        <Image
          class="card__avatar"
          src={twt} 
          alt="channel's avatar"
        />
        <div class="card__desc">
          <p class="text text--large text--semibold category-cl">
            {category}
          </p>
           <Link href={twitchLink}><p class="text text--muted">{streamerName}</p></Link>
          <div class="card__tags">
            <div class="badge badge--white badge--pill text text--small">
              English
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default LiveStreamPage;
