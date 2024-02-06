import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import LiveStreamPage from "@/components/streamers-notif/StreamerCard";




const TeamDetails = () => {
  return (
    <div>
      <Head>
        <title>Streamer</title>
        <meta name="description" content="Team Details Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header4" footer="footer1">
            <div className="live-cards">
            <div>
              <h1> Hamid </h1>
            </div>
              <LiveStreamPage streamerName="Damysus"/>
              <LiveStreamPage streamerName="Bazouya"/>
              <LiveStreamPage streamerName="Hakaay"/>
            </div>
        </RootLayout>
      </main>
    </div>
  );
};

export default TeamDetails;
