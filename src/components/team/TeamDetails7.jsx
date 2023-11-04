import { useEffect, useRef } from "react";
import TeamDetails from "../../../public/assets/imgs/team/detail7.jpg";
import Image from "next/image.js";
import animationCharCome from "@/lib/utils/animationCharCome";

const TeamDetails7 = () => {
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
                  Blackpers
                </h2>
                <h3
                  className="team__member-role-7 animation__char_come"
                  ref={charAnim2}
                >
                  Community Manager
                  <span> ABR</span>
                </h3>
                <p>
                At ABR, the vibrant gaming community is expertly managed by their dedicated community manager, who goes by the name BlackPers. With unwavering passion and a deep understanding of the gaming world, BlackPers not only excels in fostering a sense of belonging within the community but also shines brightly as a talented streamer                </p>
                <p>
                Their engaging streams, characterized by skillful gameplay and charismatic commentary, have captivated audiences far and wide. BlackPers' commitment to creating an inclusive and supportive environment within the ABR community, coupled with their entertaining streaming sessions, makes them a beloved figure among gamers and viewers alike.                </p>
              </div>
              <div className="team__member-social">
                <h4 className="work-title">Follow :</h4>
                <ul>
                  <li>
                    <a href="https://www.twitch.tv/blackupers">
                      <span>
                        <i className="fa-brands fa fa-twitch"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/Blackupers">
                      <span>
                        <i className="fa-brands fa-twitter"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/blackperss/">
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

export default TeamDetails7;
