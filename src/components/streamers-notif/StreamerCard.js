// components/StreamerCard.js

import { useState, useEffect } from 'react';

const StreamerCard = ({ streamerId }) => {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const fetchStreamerStatus = async () => {
      try {
        const response = await fetch(`/api/streamers/${streamerId}`);
        const data = await response.json();

        setIsLive(data.isLive);
      } catch (error) {
        console.error('Error fetching streamer status:', error);
      }
    };

    fetchStreamerStatus();
  }, [streamerId]);

  return (
    <div style={{ backgroundColor: isLive ? 'red' : 'green' }}>
      {/* Other content of the streamer card */}
      <h3>{streamerId}</h3>
      <p>{isLive ? 'Live Now' : 'Offline'}</p>
    </div>
  );
};

export default StreamerCard;
