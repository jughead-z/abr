import { useEffect, useRef } from "react";
import TeamDetails from "../../../public/assets/imgs/team/detail3.jpg";
import Image from "next/image.js";
import animationCharCome from "@/lib/utils/animationCharCome";

const TeamDetails3 = () => {
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
                  Devious
                </h2>
                <h3
                  className="team__member-role-7 animation__char_come"
                  ref={charAnim2}
                >
                  Founder
                  <span> ABR</span>
                </h3>
                <p>
                Greetings, fellow gamers and enthusiasts! I am Devious, a moniker that captures the mischievous and adventurous spirit that fuels my passion for gaming and content creation. Allow me to take you on a journey through the digital realms where entertainment knows no bounds.

                </p>
                <p>
                Driven by an entrepreneurial spirit and a commitment to building a vibrant gaming community, I founded ABR Team—a collective of talented Moroccan streamers who share the same fervor for gaming. Together, we aim to deliver captivating content, foster inclusivity, and leave a lasting impact on the gaming landscape.

                </p>
              </div>
              <div className="team__member-social">
                <h4 className="work-title">Follow :</h4>
                <ul>
                  <li>
                    <a href="https://twitch.tv/devioussss">
                      <span>
                        <i className="fa-brands fa fa-twitch"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/Devioussss3">
                      <span>
                        <i className="fa-brands fa-twitter"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/deviouuss/">
                      <span>
                        <i className="fa-brands fa-instagram"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@deviousomg22">
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

export default TeamDetails3;
