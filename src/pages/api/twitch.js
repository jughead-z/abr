// pages/api/streamers/[streamerId].js

export default async function handler(req, res) {
    const { streamerId } = req.query;
  
    try {
      // Make a request to the Twitch API to get the streamer's status
      const response = await fetch(`https://api.twitch.tv/helix/streams?user_login=${streamerId}`, {
        headers: {
          'Client-ID': 'your-twitch-client-id', // Replace with your Twitch client ID
          'Authorization': 'Bearer your-twitch-access-token' // Replace with your Twitch access token
        }
      });
  
      const data = await response.json();
  
      // Check if the streamer is live
      const isLive = data.data.length > 0;
  
      res.status(200).json({ isLive });
    } catch (error) {
      console.error('Error fetching Twitch streamer status:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  