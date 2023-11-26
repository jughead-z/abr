// StreamerCard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StreamerCard = ({ streamerName }) => {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const checkStreamerStatus = async () => {
      try {
        const response = await axios.get(
          `https://api.twitch.tv/helix/streams?user_login=${streamerName}`,
          {
            headers: {
              'Client-ID': 'mjzb5n4up0i1pnzrof7q91jv227gsr',
            },
          }
        );
  
        const streamData = response.data.data[0];
        setIsLive(!!streamData);
      } catch (error) {
        if (error.response) {
          console.error('Error response from Twitch API:', error.response.data);
          console.error('Status code:', error.response.status);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received from Twitch API:', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error setting up Twitch API request:', error.message);
        }
      }
    };
  
    checkStreamerStatus();
    const interval = setInterval(checkStreamerStatus, 60000);
  
    return () => clearInterval(interval);
  }, [streamerName]);
  

  return (
    <div className={`streamer-card ${isLive ? 'live' : ''}`}>
      <p>{streamerName}</p>
      {isLive && <p>Live Now!</p>}
    </div>
  );
};

export default StreamerCard;
