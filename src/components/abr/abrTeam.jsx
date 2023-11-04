import { useEffect, useRef } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const AbrTeam = () => {
  const teamItemContent = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const team_item_7 = teamItemContent.current.children;

      function teamImageAnimation(event, team_item_7) {
        const contentBox = team_item_7.getBoundingClientRect();
        const dx = event.clientX - contentBox.x;
        const dy = event.clientY - contentBox.y;
        team_item_7.children[0].children[3].style.transform = `translate(${dx}px, ${dy}px)`;
      }
      for (let i = 0; i < team_item_7.length; i++) {
        team_item_7[i].addEventListener("mousemove", (event) => {
          setInterval(teamImageAnimation(event, team_item_7[i]), 1000);
        });
      }
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom_3", { y: 30, opacity: 0 });

        if (device_width < 1023) {
          const fadeArray = gsap.utils.toArray(".fade_bottom_3");
          fadeArray.forEach((item, i) => {
            let fadeTl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: "top center+=200",
              },
            });
            fadeTl.to(item, {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
            });
          });
        } else {
          gsap.to(".fade_bottom_3", {
            scrollTrigger: {
              trigger: ".fade_bottom_3",
              start: "top center+=300",
              markers: false,
            },
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1,
            stagger: {
              each: 0.2,
            },
          });
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="team__area-7">
        <h2 className="team__title-7 title-anim">Team</h2>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-text pb-100 text-anim">
                <p>
                 ABR team is here to create an exceptional and outstanding streaming experience for your audience.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="team__items-7" ref={teamItemContent}>
                <Link href="/drmz">
                  <div className="team__item-7 fade_bottom_3">
                    <div className="team__name-wrap-7">
                      <p className="tm-serial">01</p>

                      <h3 className="tm-name">Dreamerz</h3>
                    </div>
                    <h4 className="tm-role">
                      Founder <br /> Content creator
                    </h4>
                    <div className="tm-link">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <div
                      className="team__hover-7"
                      style={{ backgroundImage: "url(assets/imgs/team/1.jpg)" }}
                    ></div>
                  </div>
                </Link>

                <Link href="/shake">
                  <div className="team__item-7 fade_bottom_3">
                    <div className="team__name-wrap-7">
                      <p className="tm-serial">02</p>

                      <h3 className="tm-name">Shake </h3>
                    </div>
                    <h4 className="tm-role">
                      Founder <br /> Content creator
                    </h4>
                    <div className="tm-link">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <div
                      className="team__hover-7"
                      style={{ backgroundImage: "url(assets/imgs/team/2.jpg)" }}
                    ></div>
                  </div>
                </Link>

                <Link href="/devious">
                  <div className="team__item-7 fade_bottom_3">
                    <div className="team__name-wrap-7">
                      <p className="tm-serial">03</p>
                      <h3 className="tm-name">Devious </h3>
                    </div>
                    <h4 className="tm-role">
                    Founder <br /> Content creator
                    </h4>
                    <div className="tm-link">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <div
                      className="team__hover-7"
                      style={{ backgroundImage: "url(assets/imgs/team/3.jpg)" }}
                    ></div>
                  </div>
                </Link>
                <Link href="/alectrona">
                  <div className="team__item-7 fade_bottom_3">
                    <div className="team__name-wrap-7">
                      <p className="tm-serial">04</p>
                      <h3 className="tm-name">Alectrona</h3>
                    </div>
                    <h4 className="tm-role">
                      Vice Founder<br /> 
                    </h4>
                    <div className="tm-link">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <div
                      className="team__hover-7"
                      style={{ backgroundImage: "url(assets/imgs/team/4.jpg)" }}
                    ></div>
                  </div>
                </Link>
                <Link href="/damysus">
                  <div className="team__item-7 fade_bottom_3">
                    <div className="team__name-wrap-7">
                      <p className="tm-serial">05</p>
                      <h3 className="tm-name">Damysus</h3>
                    </div>
                    <h4 className="tm-role">
                      Content <br /> creator
                    </h4>
                    <div className="tm-link">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <div
                      className="team__hover-7"
                      style={{ backgroundImage: "url(assets/imgs/team/5.jpg)" }}
                    ></div>
                  </div>
                </Link>
                <Link href="/akashi">
                  <div className="team__item-7 fade_bottom_3">
                    <div className="team__name-wrap-7">
                      <p className="tm-serial">06</p>
                      <h3 className="tm-name">Akashi</h3>
                    </div>
                    <h4 className="tm-role">
                      Content <br /> Creator
                    </h4>
                    <div className="tm-link">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <div
                      className="team__hover-7"
                      style={{ backgroundImage: "url(assets/imgs/team/6.jpg)" }}
                    ></div>
                  </div>
                </Link>
                <Link href="/blackpers">
                  <div className="team__item-7 fade_bottom_3">
                    <div className="team__name-wrap-7">
                      <p className="tm-serial">07</p>
                      <h3 className="tm-name">Blackpers</h3>
                    </div>
                    <h4 className="tm-role">
                      Community <br /> manager
                    </h4>
                    <div className="tm-link">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <div
                      className="team__hover-7"
                      style={{ backgroundImage: "url(assets/imgs/team/7.jpg)" }}
                    ></div>
                  </div>
                </Link>
                <div className="team7__img-wrap">
                  <div className="team7__img"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AbrTeam;
