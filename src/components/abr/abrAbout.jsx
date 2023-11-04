import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother, ScrollToPlugin } from "@/plugins";
import A1 from "../../../public/assets/imgs/home-7/a1.jpg";
import Video from "../../../public/assets/imgs/home-7/video.jpg";
import Shape4 from "../../../public/assets/imgs/home-7/shape-4.png";
import Shape5 from "../../../public/assets/imgs/home-7/shape-5.png";
import A2 from "../../../public/assets/imgs/home-7/a2.jpg";
import A3 from "../../../public/assets/imgs/home-7/a3.jpg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

const AbrAbout = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        ScrollSmoother.create({
          smooth: 1.35,
          effects: device_width < 1025 ? false : true,
          smoothTouch: false,
          normalizeScroll: false,
          ignoreMobileResize: true,
        });
        gsap.to(".about__img-2 img", {
          scale: 1.15,
          duration: 1,
          scrollTrigger: {
            trigger: ".about__img-2",
            start: "top bottom",
            markers: false,
            scrub: 1,
            end: "bottom center",
          },
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <div className="video__area about__img-2">
        <Image
          priority
          style={{ width: "100%", height: "auto" }}
          src={Video}
          alt="Video Image"
          data-speed="0.2"
        />
      </div>
      <section className="about__area-7">
        <div className="container pt-130 pb-110">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">
                Keeping it Genuine <br />  The ABR Team <br /> 
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="about__left-7">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={A1}
                  alt="Image"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="about__mid-7 text-anim">
                <p>
                In the vibrant and ever-expanding world of online gaming and content creation, 
                the ABR Team stands out as a dynamic collective of talented Moroccan streamers, 
                captivating audiences with their unique personalities,
                 exceptional gaming skills, and genuine passion for entertaining
                </p>
                <p>
                ABR, which stands for Always Be real , is a group of dedicated individuals hailing from different cities.
                United by their shared love for gaming, they have come together to create a powerhouse team that has taken the Moroccan streaming scene by storm.
                </p>
                <Image
                  priority
                  width={155}
                  height={57}
                  src={Shape5}
                  alt="Shape"
                  className="signature"
                />
                <Image
                  priority
                  width={140}
                  height={160}
                  src={A2}
                  alt="Image"
                  className="image-1"
                />
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="about__right-7">
                <Image
                  priority
                  width={220}
                  style={{ height: "auto" }}
                  src={A3}
                  alt="Image"
                  data-speed="0.7"
                />
              </div>
            </div>
          </div>
        </div>

        <Image
          priority
          width={76}
          height={119}
          src={Shape4}
          alt="Shape"
          className="shape-1"
        />
      </section>
    </>
  );
};

export default AbrAbout;
