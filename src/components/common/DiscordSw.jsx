import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FaDiscord } from "react-icons/fa";


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
        <div className="switcher__icon discord_icon" ref={switcherIcon}>
          <button id="switcher_open" ref={switcherOpen} onClick={openSwitcher}>
            <FaDiscord />
          </button>
          <button
            id="switcher_close"
            ref={switcherClose}
            onClick={closeSwitcher}
          >
            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
          </button>
        </div>

        <div className="discord-sw" ref={switcherItems}>
          <div className="switcher__item ds-item">
            <div className="switch__title-wrap">
              <h2 className="switcher__title ds-title">Discord</h2>
            </div>
            <div className="switcher__btn mode-type">
              <a href="https://discord.gg/AmxK9RYkPV" target="_blank"><button className="discord_btn" >
                Join our discord
              </button></a>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Switcher;
