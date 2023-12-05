import { useState, useEffect } from 'react';

const StreamerCard = ({ streamerId }) => {
  const [isLive, setIsLive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStreamerStatus = async () => {
      try {
        const response = await fetch(`/api/streamers/${streamerId}`);
        const data = await response.json();

        setIsLive(data.isLive);
      } catch (error) {
        console.error('Error fetching streamer status:', error);
        setError('Error fetching streamer status');
      } finally {
        setIsLoading(false);
      }
    };

    fetchStreamerStatus();
  }, [streamerId]);

  return (
    <div style={{ backgroundColor: isLive ? 'red' : 'green' }}>
      {/* Other content of the streamer card */}
      <h3>{streamerId}</h3>
      {isLoading && <p>Loading...</p>}
      {!isLoading && !error && <p>{isLive ? 'Live Now' : 'Offline'}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default StreamerCard;
