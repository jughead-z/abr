// utils/twitchAuth.js
import axios from 'axios';

export const getTwitchAccessToken = async () => {
  try {
    const response = await axios.post(
      'https://id.twitch.tv/oauth2/token',
      null,
      {
        params: {
          client_id: 'f5c9mrzzb5db4zvn7yyttqwcmz4wiq',
          client_secret: 'zvzxmh8oqj04aohm6jyc5rzripvsrf',
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
