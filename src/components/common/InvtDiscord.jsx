import { useState } from 'react';
import abrlight from "../../../public/assets/imgs/logo/abr-white.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Discord = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };
  
  return (
    <>
      {isVisible && (
        <div className="discord-invite-button">
          <button className="close-button" onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <a href="YOUR_DISCORD_INVITE_LINK" target="_blank" rel="noopener noreferrer">
            <div className="logo-container">
              <Image src={abrlight} alt="" width={30} height={30} />
            </div>
            <span>Join our Discord</span>
          </a>
        </div>
      )}
    </>
  );
};

export default Discord;
