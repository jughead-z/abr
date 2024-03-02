import axios from 'axios';
import { getTwitchAccessToken } from './twitchAuth';


export default async function getStreamerStatus(streamerName) {
    const accessToken = await getTwitchAccessToken();

    try {
        const response = await axios.get(
            `https://api.twitch.tv/helix/streams?user_login=${streamerName}`,
            {
                headers: {
                    "Client-ID": process.env.TWITCH_CLIENT_ID,
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return response.json()
    } catch (e) {
        console.log("Twitch Streamer error")
    }
}