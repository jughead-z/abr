import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import StreamerCard from "@/components/streamers-notif/StreamerCard";


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
            <div style={{marginTop:'200px'}}>
                <h1>Live Streamers</h1>
                <StreamerCard streamerName="sssmina"/>
                <StreamerCard streamerName="shake_make"/>
                
            </div>
        </RootLayout>
      </main>
    </div>
  );
};

export default TeamDetails;
