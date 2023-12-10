// utils/twitchAuth.js
import axios from 'axios';

const TWITCH_CLIENT_ID = 'f5c9mrzzb5db4zvn7yyttqwcmz4wiq';
const TWITCH_API_KEY = 'egiav966kdxcwbcnocisual6i2cur';

export const getTwitchAccessToken = async () => {
  try {
    const response = await axios.post(
      'https://id.twitch.tv/oauth2/token',
      null,
      {
        params: {
          client_id: TWITCH_CLIENT_ID,
          client_secret: TWITCH_API_KEY,
          grant_type: 'client_credentials',
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.error('Error obtaining Twitch access token:', error);
    throw error;
  }
};
