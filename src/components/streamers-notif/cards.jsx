import { useEffect, useRef } from "react";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link.js";
import Image from "next/image.js";
import Team11 from "../../../public/assets/imgs/team/1.jpg";
import Team12 from "../../../public/assets/imgs/team/2.jpg";
import Team15 from "../../../public/assets/imgs/team/5.jpg";


gsap.registerPlugin(ScrollTrigger);

const Cardsnotif = () => {
    useEffect(() => {
      if (typeof window !== "undefined") {
        let device_width = window.innerWidth;
        let tHero = gsap.context(() => {
          gsap.set(".blog__animation .blog__item", { x: 50, opacity: 0 });
  
          if (device_width < 1023) {
            const blogList = gsap.utils.toArray(".blog__animation .blog__item");
            blogList.forEach((item, i) => {
              let blogTl = gsap.timeline({
                scrollTrigger: {
                  trigger: item,
                  start: "top center+=200",
                },
              });
              blogTl.to(item, {
                x: 0,
                opacity: 1,
                ease: "power2.out",
                duration: 1.5,
              });
            });
          } else {
            gsap.to(".blog__animation .blog__item", {
              scrollTrigger: {
                trigger: ".blog__animation .blog__item",
                start: "top center+=300",
                markers: false,
              },
              x: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 2,
              stagger: {
                each: 0.3,
              },
            });
          }
        });
        return () => tHero.revert();
      }
    }, []);
    
  return (
    <>
      <section className="blog__area-7 blog__animation">
        <div className="container g-0 pb-140">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <div className="sec-title-wrapper">
                <h3 className="sec-title title-anim">News insignt</h3>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <article className="blog__item">
                <div className="blog__img-wrapper">
                  <Link href="">
                    <div className="img-box">
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Team11}
                        alt=""
                      />
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Team11}
                        alt=""
                      />
                    </div>
                  </Link>
                </div>
                <h4 className="blog__meta">
                  <Link href="">Grand master</Link> . 02 Nov 2023
                </h4>
                <h5>
                  <Link href="" className="blog__title">
                    Dreamerz reach grand master in flex league of
                  </Link>
                </h5>
                <Link href="" className="blog__btn">
                  Read More{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </article>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <article className="blog__item">
                <div className="blog__img-wrapper">
                  <Link href="">
                    <div className="img-box">
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Team12}
                        alt=""
                      />
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Team12}
                        alt=""
                      />
                    </div>
                  </Link>
                </div>
                <h4 className="blog__meta">
                  <Link href="">University watch party</Link> . 02 May 2023
                </h4>
                <h5>
                  <Link href="" className="blog__title">
                    Shake and dreamerz hosted a watch party
                  </Link>
                </h5>
                <Link href="" className="blog__btn">
                  Read More{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </article>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <article className="blog__item">
                <div className="blog__img-wrapper">
                  <Link href="">
                    <div className="img-box">
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Team15}
                        alt="Blog Thumbnail"
                      />
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Team15}
                        alt="BLog Thumbnail"
                      />
                    </div>
                  </Link>
                </div>
                <h4 className="blog__meta">
                  <Link href="">Valorant playground</Link> . 02 May 2023
                </h4>
                <h5>
                  <Link href="" className="blog__title">
                     
                  </Link>
                </h5>
                <Link href="" className="blog__btn">
                  Watch now{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cardsnotif;
