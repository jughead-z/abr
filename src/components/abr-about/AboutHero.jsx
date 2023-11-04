import { useEffect, useRef } from "react";
import Link from "next/link.js";
import Award from "../../../public/assets/imgs/logo/abr-black.png";
import Image from "next/image.js";
import animationWordCome from "@/lib/utils/animationWordCome";

const AboutHero = () => {
  const wordAnim = useRef();
  useEffect(() => {
    animationWordCome(wordAnim.current);
  }, []);
  return (
    <>
      <section className="hero__about">
        <div className="container g-0 line">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__about-content">
                <h1 className="hero-title animation__word_come" ref={wordAnim}>
                ur agile process is ability to adapt and respond to change.
                 Agile organizations view change as an opportunity, not a threat.
                </h1>
                <div className="hero__about-info">
                  <div className="hero__about-btn">
                    <div className="btn_wrapper">
                      <Link
                        href="/service"
                        className="wc-btn-primary btn-hover btn-item"
                      >
                        <span></span> Contact us <br />
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="hero__about-text title-anim">
                    <p>
                      {
                        "Did you know that the ABR team collectively holds over 100,000 hours of combined streaming experience? That's equivalent to more than 11 years of non-stop streaming!"
                      }
                    </p>
                  </div>
                  <div className="hero__about-award">
                    <Image
                      priority
                      width={126}
                      height={126}
                      src={Award}
                      alt="Best Studio Award"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
