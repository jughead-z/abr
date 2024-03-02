import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faXmark } from "@fortawesome/free-solid-svg-icons";
import StreamNotif from "../../../src/pages/api/StreamerNotif";
import Image from "next/image";
import twitch from "../../../public/assets/imgs/logo/twitch-white.png"

const Switcher = ({ setMode, mode, cursor1, cursor2 }) => {
  const switcherIcon = useRef();
  const switcherItems = useRef();
  const switcherOpen = useRef();
  const switcherClose = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      switcherIcon.current.style.zIndex = "1000";
      switcherItems.current.style.zIndex = "1000";
    }
  }, [setMode]);

  const openSwitcher = () => {
    switcherOpen.current.style.display = "none";
    switcherClose.current.style.display = "flex";
    switcherIcon.current.style.right = "280px";
    switcherItems.current.style.right = "0";
  };
  const closeSwitcher = () => {
    switcherClose.current.style.display = "none";
    switcherOpen.current.style.display = "flex";
    switcherIcon.current.style.right = "0";
    switcherItems.current.style.right = "-280px";
  };

  
  return (
    <>
      <div className="switcher__area">
        <div className="switcher__icon notif_icon" ref={switcherIcon}>
          <button id="switcher_open" ref={switcherOpen} onClick={openSwitcher}>
            <Image src={twitch} width={40} height={25} alt="" />
          </button>
          <button
            id="switcher_close"
            ref={switcherClose}
            onClick={closeSwitcher}
          >
            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
          </button>
        </div>


        {/* Careful, StreamNotif is rendered in client side  */}
        
        {/* <div className="switcher__items" ref={switcherItems}>
          <div className="switcher__item">
            <div className="switch__title-wrap">
              <h2 className="switcher__title">Live now</h2>
            </div>
            <StreamNotif streamerName="Dreamerzlel" twitchLink={"https://www.twitch.tv/dreamerzlel"}/>
            <StreamNotif streamerName="Damysus" twitchLink={"https://www.twitch.tv/dreamerzlel"}/>
            <StreamNotif streamerName="Shake_make" twitchLink={"https://www.twitch.tv/dreamerzlel"}/>
          </div>

        </div> */}
      </div>
    </>
  );
};

export default Switcher;
