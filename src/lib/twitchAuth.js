// utils/twitchAuth.js
import axios from 'axios';

export async function getTwitchAccessToken() {
  try {
    const response = await axios.post(
      'https://id.twitch.tv/oauth2/token',
      null,
      {
        params: {
          client_id: process.env.TWITCH_CLIENT_ID,
          client_secret: process.env.TWITCH_CLIENT_SECRET,
          grant_type: 'client_credentials',
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    return response.json();
  } catch (error) {
    console.error('Error obtaining Twitch access token:');
    //   // throw error;
  }
};
