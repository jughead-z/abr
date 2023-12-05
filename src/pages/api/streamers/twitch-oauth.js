export default async function handler(req, res) {
  const { url } = req.query;

  const clientId = process.env.NEXT_PUBLIC_TWITCH_OAUTH_CLIENT_ID;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    const twitchAuthURL = "https://id.twitch.tv/oauth2/authorize";
    const params = new URLSearchParams({
      // eslint-disable-next-line camelcase
      client_id: clientId || "",
      // eslint-disable-next-line camelcase
      redirect_uri: baseUrl + redirect,
      // eslint-disable-next-line camelcase
      response_type: "code",
      scope: "user:read:email+openid",
      claims: JSON.stringify({
        // eslint-disable-next-line camelcase
        id_token: { picture: null },
        // eslint-disable-next-line camelcase
        userinfo: { preferred_username: null, picture: null },
      }),
    });

    if (!response.ok) {
      // If the response is not OK, log the error and send an error response
      console.error("Error from Twitch API:", data);
      res.status(response.status).json({ error: "Error from Twitch API" });
      return;
    }

    res
      .status(200)
      .json({
        URL: `${twitchAuthURL}?${decodeURIComponent(params.toString())}`,
      });
  } catch (error) {
    console.error("Error handling Twitch OAuth:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
