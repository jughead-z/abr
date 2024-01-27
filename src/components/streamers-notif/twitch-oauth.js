// utils/twitchAuth.js
import axios from 'axios';

export const getTwitchAccessToken = async () => {
  try {
    const response = await axios.post(
      'https://id.twitch.tv/oauth2/token',
      null,
      {
        params: {
          client_id: 'f9p7rcrtgmg3mm8w8g2ps5h1l02x07',
          client_secret: '2palp8p8xsai9tyykty8fzy4lczno6',
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
