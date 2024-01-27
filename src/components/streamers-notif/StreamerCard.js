// pages/live-stream/[streamId].js
import { useEffect, useState } from 'react';
import { getTwitchAccessToken } from './twitch-oauth'; // Adjust the path as needed
import axios from 'axios';

const LiveStreamPage = ({ streamerName }) => {
  const [isLive, setIsLive] = useState(false);

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
        setIsLive(!!streamData); // If streamData is present, the stream is live
      } catch (error) {
        console.error('Error fetching Twitch stream status:', error);
      }
    };

    // Check stream status when the component mounts
    checkStreamStatus();

    // Set up polling every 30 seconds (adjust as needed)
    const intervalId = setInterval(checkStreamStatus, 30000);

    // Cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, [streamerName]);

  return (
    <div>
      <p style={{ color: isLive ? 'green' : 'black' }}>
        {isLive ? 'The stream is live!' : 'The stream is not live.'}
      </p>
    </div>
  );
};

export default LiveStreamPage;
