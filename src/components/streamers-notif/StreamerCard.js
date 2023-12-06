// pages/live-stream/[streamId].js

import { useEffect, useState } from 'react';
import axios from 'axios';

const LiveStreamPage = ({ streamId }) => {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const checkStreamStatus = async () => {
      try {
        // Replace 'YOUR_TWITCH_CLIENT_ID' with your Twitch application client ID
        const response = await axios.get(`https://api.twitch.tv/helix/streams?user_login=${streamId}`, {
          headers: {
            'Client-ID': 'tjrrznso340zw35r3bf6iurkqgmdup',
          },
        });

        const streamData = response.data.data[0];
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
  }, [streamId]);

  return (
    <div>
      
      <p style={{ color: isLive ? 'green' : 'black' }}>
        {isLive ? 'The stream is live!' : 'The stream is not live.'}
      </p>
    </div>
  );
};

export default LiveStreamPage;
