import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Image from "next/image";
import Blog11 from "../../../public/assets/imgs/blog/1/1.jpg";
import Blog12 from "../../../public/assets/imgs/blog/1/2.jpg";
import Blog13 from "../../../public/assets/imgs/blog/1/3.jpg";

import animationCharCome from "@/lib/utils/animationCharCome";

gsap.registerPlugin(ScrollTrigger);

const Blog1 = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
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
      <section className="blog__area-6 blog__animation">
        <div className="container g-0 line pt-110 pb-110">
          <span className="line-3"></span>
          <div className="row pb-130">
            <div className="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  We always <br />
                  think
                </h2>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
              <div className="blog__text">
                <p>
                Stay connected to the pulse of ABR, where passion meets precision. 
                Level up your knowledge, engage with the community, and be part of the winning game.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="row reset-grid">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
            <article className="blog__item">
                <div className="blog__img-wrapper">
                  <Link href="">
                    <div className="img-box">
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog11}
                        alt=""
                      />
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog11}
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
                        src={Blog12}
                        alt=""
                      />
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog12}
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
                        src={Blog13}
                        alt="Blog Thumbnail"
                      />
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog13}
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
                    Damysus announce valorant playground 
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog1;
