import Image from "next/image";
import Link from "next/link";

import Author from "../../../public/assets/imgs/blog/detail/author.png";
import Detail1 from "../../../public/assets/imgs/blog/detail/1.jpg";
import Detail2 from "../../../public/assets/imgs/blog/detail/2.jpg";
import Detail3 from "../../../public/assets/imgs/blog/detail/3.jpg";
import { useEffect, useRef } from "react";
import animationWordCome from "@/lib/utils/animationWordCome";

const BlogDetails1 = () => {
  const wordAnim = useRef();
  const wordAnim2 = useRef();
  useEffect(() => {
    animationWordCome(wordAnim.current);
    animationWordCome(wordAnim2.current);
  }, []);
  return (
    <>
      <section className="blog__detail">
        <div className="container g-0 line pt-140">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
              <div className="blog__detail-top">
                <h3
                  className="blog__detail-title animation__word_come"
                  ref={wordAnim2}
                >
                  Lorem ipsum
                </h3>
                <div className="blog__detail-metalist">
                  <div className="blog__detail-meta">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Author}
                      alt="Author Picture"
                    />
                    <p>
                      Ghayerha <span>7Dini</span>
                    </p>
                  </div>
                  <div className="blog__detail-meta">
                    <p>
                      Viewed <span>3 min read</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="blog__detail-thumb">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={Detail1}
                  alt="Blog Thumbnail"
                  data-speed="0.5"
                />
              </div>
            </div>
            <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
              <div className="blog__detail-content">
                <p>
                  TOTO EGT HAMID{" "}
                </p>
                <p>
                  SANTANA SIF O KATANA
                </p>
                <Image
                  priority
                  width={850}
                  style={{ height: "auto" }}
                  src={Detail2}
                  alt="Blog Image"
                />
                <h2>JavaScript</h2>
                <p>
                  We love to bring designs to life as a developer, and I aim to
                  do this using whatever front end tools are necessary. My
                  preferred tools are more modern javascript libraries like
                  React.js but I like to use whatever is best for the websites
                  needs. There are several reasons why a business would consider
                  a rebrand and it doesn’t necessarily mean the business has
                  been unsuccessful.
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails1;
