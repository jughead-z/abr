import { useEffect, useRef } from "react";
import TeamDetails from "../../../public/assets/imgs/team/detail.jpg";
import Image from "next/image.js";
import animationCharCome from "@/lib/utils/animationCharCome";

const TeamDetails1 = () => {
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
                  Dreamerz
                </h2>
                <h3
                  className="team__member-role-7 animation__char_come"
                  ref={charAnim2}
                >
                  Founder
                  <span> ABR</span>
                </h3>
                <p>
                Mehdi Farah, better known as Dremerz, 
                is a popular Twitch streamer known for his engaging and entertaining content.With a passion for gaming,
                 Dremerz has built a loyal community of viewers who tune in regularly to watch him play a variety of video games.

.
                </p>
                <p>
                Dremerz is known for his charismatic personality and witty sense of humor, 
                which adds an extra layer of enjoyment to his streams. 
                Whether he's exploring open-world adventures, engaging in intense multiplayer battles, or showcasing new releases, 
                Dremerz's streams are filled with energy and excitement.
                </p>
              </div>
              <div className="team__member-social">
                <h4 className="work-title">Follow :</h4>
                <ul>
                  <li>
                    <a href="https://www.twitch.tv/dreamerzlel">
                      <span>
                        <i className="fa-brands fa fa-twitch"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/dreamerzlel">
                      <span>
                        <i className="fa-brands fa-twitter"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/mehdi.farah/">
                      <span>
                        <i className="fa-brands fa-instagram"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@Hopsyfrfr">
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

export default TeamDetails1;
