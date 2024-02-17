import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, SplitText, chroma } from "@/plugins";
import Link from "next/link.js";
import SiteLogoWhite from "../../../public/assets/imgs/logo/abr-white.png";
import Image from "next/image.js";

gsap.registerPlugin(ScrollTrigger);

export default function Footer1() {
  const menuAnim = useRef();
  useEffect(() => {
    if (menuAnim.current) {
      menuAnimation();
    }
  }, []);
  const menuAnimation = () => {
    let rootParent = menuAnim.current.children;
    for (let i = 0; i < rootParent.length; i++) {
      let firstParent = rootParent[i].children;
      let arr = firstParent[0].textContent.split("")
      let spanData = ''
      for (let j = 0; j < arr.length; j++) {
        if(arr[j] == ' ') {
          spanData += `<span style='width:6px;'>${arr[j]}</span>`;
        } else {
          spanData += `<span>${arr[j]}</span>`;
        }
      }
      let result = '<div class="menu-text">' + spanData + '</div>';
      firstParent[0].innerHTML = result
    }
  };

  
  return (
    <>
      <footer className="footer__area-3">
        <div className="footer__top-3">
          <div className="footer__top-wrapper-3">
            <div className="footer__logo-3 pt-120">
              <Image
                priority
                style={{ width: "auto", height: "auto" }}
                src={SiteLogoWhite}
                alt="Footer Logo"
              />
              <p>
              ABR, which stands for Always Be real , is a group of dedicated individuals hailing from different cities
              </p>
            </div>
            <div className="footer__social-3">
              <ul>
                <li>
                  <a href="https://www.facebook.com/alwaysberealtv" target="_blank">facebook</a>
                </li>
                <li>
                  <a href="https://twitter.com/alwaysberealtv" target="_blank">Twitter</a>
                </li>
                <li>
                  <a href="https://www.twitch.tv/alwaysberealtv" target="_blank">Twitch</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/alwaysberealtv" target="_blank">Instagram</a>
                </li>
              </ul>
            </div>
            <div className="footer__contact-3">
              <Link className="end" href="/contact">
                Let’s talk
              </Link>
            </div>
          </div>
        </div>

        <div className="footer__btm-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4">
                <div className="footer__copyright-3">
                  <p>
                    © 2023  | All rights reserved by{" "}
                    <a href="https://github.com/jughead-z/" target="_blank">
                      Criss_xx
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-8">
                <div className="footer__nav-2">
                  <ul className="footer-menu-2 menu-anim" ref={menuAnim}>
                    <li>
                      <Link href="/about">about us</Link>
                    </li>
                    <li>
                      <Link href="/contact">contact</Link>
                    </li>
                    <li>
                      <Link href="/team">Team</Link>
                    </li>
                    <li>
                      <Link href="">Blog</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
