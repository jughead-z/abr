import { useEffect, useRef } from "react";
import TeamDetails from "../../../public/assets/imgs/team/detail5.jpg";
import Image from "next/image.js";
import animationCharCome from "@/lib/utils/animationCharCome";

const TeamDetails5 = () => {
  const charAnim = useRef();
  const charAnim2 = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
    animationCharCome(charAnim2.current);
  }, []);
  return (
    <>
      <section className="team__detail">
        <div className="container line pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 offset-lg-0 offset-md-2">
              <div className="team__member-img">
                <Image
                  priority
                  style={{ width: "100%", height: "102%" }}
                  src={TeamDetails}
                  alt="Team Member Picture"
                  data-speed="0.5"
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <div className="sec-title-wrapper pt-120">
                <h2
                  className="team__member-name-7 animation__char_come"
                  ref={charAnim}
                >
                  Damysus
                </h2>
                <h3
                  className="team__member-role-7 animation__char_come"
                  ref={charAnim2}
                >
                  Content Creator
                  <span> ABR</span>
                </h3>
                <p>
                Damysus the Giant is an immersive Twitch streamer known for his larger-than-life personality and love for the cyberpunk aesthetic and synthwave music. With a deep passion for the futuristic and neon-infused style, Damysus creates a captivating streaming experience for his viewers.
                </p>
                <p>
                Damysus streams are a delightful blend of gaming, music, and cyberpunk culture. He often explores a variety of MMORPG (Massively Multiplayer Online Role-Playing Game) titles, immersing himself in vast virtual worlds and taking his audience along for the adventure. His in-depth knowledge of MMORPGs, combined with his engaging commentary, allows viewers to gain valuable insights into the games he plays.
                </p>
              </div>
              <div className="team__member-social">
                <h4 className="work-title">Follow :</h4>
                <ul>
                  <li>
                    <a href="https://www.twitch.tv/damysus">
                      <span>
                        <i className="fa-brands fa fa-twitch"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/DamysusG">
                      <span>
                        <i className="fa-brands fa-twitter"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/damysus/">
                      <span>
                        <i className="fa-brands fa-instagram"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@DamysusG">
                    <span>
                        <i className="fa-brands fa-youtube"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamDetails5;
