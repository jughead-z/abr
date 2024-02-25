import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import LiveStreamPage from "../../src/pages/live-stream/[streamId]";
import Team11 from "../../public/assets/imgs/team/1.jpg";
import Team12 from "../../public/assets/imgs/team/2.jpg";
import Team15 from "../../public/assets/imgs/team/5.jpg";




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
            <section className="about__area-7">
              <div className="container pt-130 pb-110 pbx">
                <div className="row">
                  <div className="col-xxl-12">
                    <div className="sec-title-wrapper">
                      <h2 className="sec-title title-anim">
                        Live stream
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="live-cards">
              <LiveStreamPage streamerName="Dreamerzlel" imgSrc={Team11} twitchLink={"https://www.twitch.tv/dreamerzlel"}/>
              <LiveStreamPage streamerName="Shake_make" imgSrc={Team12} twitchLink={"https://www.twitch.tv/shake_make"}/>
              <LiveStreamPage streamerName="Damysus" imgSrc={Team15} twitchLink={"https://www.twitch.tv/damysus"}/>
            </div>
        </RootLayout>
      </main>
    </div>
  );
};

export default TeamDetails;
