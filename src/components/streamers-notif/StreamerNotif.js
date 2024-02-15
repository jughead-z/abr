// pages/live-stream/[streamId].js
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { getTwitchAccessToken } from './twitch-oauth'; // Adjust the path as needed
import axios from 'axios';

import { FaCircle } from "react-icons/fa";
import twt from "../../../public/assets/imgs/logo/twitch.png";

const StreamNotif = ({ streamerName, imgSrc,twitchLink }) => {
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
    <div className='live-notif'>
      <div className={`notif ${isLive ? 'badge--red' : 'badge--gray'} text text--upper badge--live badge--absolute`}>
        <FaCircle className={isLive ? 'live-circle' : 'offline-circle'} />
      </div>
      <Link href={twitchLink}><p class="text text--muted">{streamerName}</p></Link>
    </div>
  );
};

export default StreamNotif;
