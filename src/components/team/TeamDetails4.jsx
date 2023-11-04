import { useEffect, useRef } from "react";
import TeamDetails from "../../../public/assets/imgs/team/detail4.jpg";
import Image from "next/image.js";
import animationCharCome from "@/lib/utils/animationCharCome";

const TeamDetails4 = () => {
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
                  Alectrona
                </h2>
                <h3
                  className="team__member-role-7 animation__char_come"
                  ref={charAnim2}
                >
                  Vice Founder
                  <span> ABR</span>
                </h3>
                <p>
                Mr. Alectrona is a prominent Twitch streamer and the Vice President of Team ABR , a renowned esports organization. With a passion for gaming and a deep understanding of the industry, Mr. Alectrona has established himself as a respected figure in both the streaming and esports worlds.
                </p>
                <p>
                Mr. Alectrona  commitment to his craft and his dedication to the gaming community have garnered him a loyal following and the respect of his peers. His passion for gaming, combined with his leadership role within Team ABR, positions him as an influential figure in the streaming and esports landscape.
                </p>
              </div>
              <div className="team__member-social">
                <h4 className="work-title">Follow :</h4>
                <ul>
                  <li>
                    <a href="https://www.twitch.tv/mralectrona">
                      <span>
                        <i className="fa-brands fa fa-twitch"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/mralectrona">
                      <span>
                        <i className="fa-brands fa-twitter"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/mralectrona/">
                      <span>
                        <i className="fa-brands fa-instagram"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
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

export default TeamDetails4;
