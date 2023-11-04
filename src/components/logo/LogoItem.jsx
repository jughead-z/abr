import Link from "next/link";
import abrlight from "../../../public/assets/imgs/logo/abr-white.png";
import abrblack from "../../../public/assets/imgs/logo/abr-black.png";
import Image from "next/image";

export default function LogoItem() {
  return (
    <>
      <div className="header__logo-2">
        <Link href={"/alwaysbereal"} className="logo-dark">
          <Image
            priority
            width={70}
            height={50}
            src={abrblack}
            alt="Site Logo"
          />
        </Link>
        <Link href={"/digital-marketing"} className="logo-light">
          <Image
            priority
            width={70}
            height={50}
            src={abrlight}
            alt="Site Logo"
          />
        </Link>
      </div>
    </>
  );
}
