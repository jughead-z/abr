// pages/api/streamers/[streamerId].js
export default async function handler(req, res) {
    const { streamerId } = req.query;
  
    try {
      const response = await fetch(`https://api.twitch.tv/helix/streams?user_login=${streamerId}`, {
        headers: {
          'Client-ID': process.env.TWITCH_OAUTH_CLIENT_ID,
          'Authorization': process.env.TWITCH_CLIENT_SECRET,
        }
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        // If the response is not OK, log the error and send an error response
        console.error('Error from Twitch API:', data);
        res.status(response.status).json({ error: 'Error from Twitch API' });
        return;
      }
  
      // Check if the 'data' property exists and has a 'length' property
      const isLive = data && data.data && Array.isArray(data.data) && data.data.length > 0;
  
      res.status(200).json({ isLive });
    } catch (error) {
      console.error('Error fetching Twitch streamer status:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  