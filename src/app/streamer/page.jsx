import LiveStreamCard from "@/components/common/LiveStreamCard";
import React from "react";
import Team11 from "../../../public/assets/imgs/team/1.jpg";
import Team12 from "../../../public/assets/imgs/team/2.jpg";
import Team15 from "../../../public/assets/imgs/team/5.jpg";

export default function TeamDetails() {
  return (
    <div>
      <main>
        <section className="about__area-7">
          <div className="container pt-130 pb-110 pbx">
            <div className="row">
              <div className="col-xxl-12">
                <div className="sec-title-wrapper">
                  <h2 className="sec-title title-anim">Live stream</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="live-cards">
          <LiveStreamCard
            streamerName="Dreamerzlel"
            imgSrc={Team11}
            twitchLink="https://www.twitch.tv/dreamerzlel"
          />
          <LiveStreamCard
            streamerName="Shake_make"
            imgSrc={Team12}
            twitchLink={"https://www.twitch.tv/shake_make"}
          />
          <LiveStreamCard
            streamerName="Damysus"
            imgSrc={Team15}
            twitchLink={"https://www.twitch.tv/damysus"}
          />
        </div>
      </main>
    </div>
  );
}
