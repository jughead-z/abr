import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import Team1 from "../../../public/assets/imgs/team/1.jpg";
import Team2 from "../../../public/assets/imgs/team/2.jpg";
import Team3 from "../../../public/assets/imgs/team/3.jpg";
import hehe from "../../../public/assets/imgs/team/4.jpg";
import hoho from "../../../public/assets/imgs/team/5.jpg";
import hihi from "../../../public/assets/imgs/team/6.jpg";
import haha from "../../../public/assets/imgs/team/7.jpg";


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import Link from "next/link";
import Image from "next/image";

const AboutTeam = () => {
  if (typeof window !== "undefined") {
    document.addEventListener("mousemove", mousemoveHandler);
  }
  function mousemoveHandler(e) {
    let team_cursor = document.getElementById("team_cursor");
    try {
      const target = e.target;
      let tHero = gsap.context(() => {
        let tl = gsap.timeline({
          defaults: {
            x: e.clientX,
            y: e.clientY,
          },
        });
        let t2 = gsap.timeline({
          defaults: {
            x: e.clientX,
            y: e.clientY,
          },
        });

        // Team Page Team Cursor
        if (target.closest(".team__slider")) {
          tl.to(
            team_cursor,
            {
              opacity: 1,
              ease: "power4.out",
            },
            "-=0.3"
          );
        } else {
          t2.to(
            team_cursor,
            {
              opacity: 0,
              ease: "power4.out",
            },
            "-=0.3"
          );
        }
      });
      return () => tHero.revert();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <section className="team__area pt-140 pb-140">
        <div className="sec-title-wrapper">
          <h2 className="sec-sub-title title-anim">Our Team</h2>
          <h3 className="sec-title title-anim">Only the best</h3>
        </div>

        <div className="team__slider">
          <Swiper
            modules={[FreeMode]}
            spaceBetween={30}
            slidesPerView={1}
            freeMode={true}
            loop={true}
            speed={2000}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <div className="team__slide">
                <Link href="/drmz">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team1}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Dreamerz</h4>
                    <h5 className="team__member-role">Founder</h5>
                  </div>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                <Link href="/shake">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team2}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Shake</h4>
                    <h5 className="team__member-role">Founder</h5>
                  </div>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                <Link href="/devious">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team3}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Devious</h4>
                    <h5 className="team__member-role">Founder</h5>
                  </div>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                <Link href="/alectrona">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={hehe}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Alectrona</h4>
                    <h5 className="team__member-role">Vice Founder</h5>
                  </div>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                <Link href="/damysus">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={hoho}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Damysus</h4>
                    <h5 className="team__member-role">Content Creator</h5>
                  </div>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                <Link href="/akashi">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={hihi}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Akashi</h4>
                    <h5 className="team__member-role">Content Creator</h5>
                  </div>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                <Link href="/blackpers">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={haha}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name">Blackpers</h4>
                    <h5 className="team__member-role">Communtiy manager</h5>
                  </div>
                </Link>
              </div>
            </SwiperSlide>


        

          </Swiper>
        </div>
      </section>
    </>
  );
};

export default AboutTeam;
