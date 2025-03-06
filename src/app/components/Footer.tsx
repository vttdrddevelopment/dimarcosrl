import Link from "next/link";
import Image from "next/image";

import logobianco from "../../../public/logobianco.png";
import finestra from "../../../public/finsestra.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneVolume } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";
import { PiWindowsLogoFill } from "react-icons/pi";

export default function Footer() {
  return (
    <div className="w-full bg-black py-10 px-70 flex flex-col justify-center">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-white text-[45px] font-bold w-1/3 leading-10">
          Let's made your custom product!
        </h2>
        <Link
          href="/contatti"
          className="px-6 py-4 bg-white text-primary font-semibold z-20"
        >
          Contattaci
        </Link>
      </div>
      <hr className="mt-10 text-white" />
      <div className="grid grid-cols-4 gap-20 mt-10">
        <div className="flex flex-col gap-4">
          <Image src={logobianco} alt="alt" width={200} height={300} />
          <span className="text-white text-lg">
            Windows to the World, Doors to Your Dreams.
          </span>
          <div className="flex flex-row justify-start items-center gap-10 text-xl font-semibold">
            <FaFacebook className="text-white" size={25} />
            <FaInstagram className="text-white" size={25} />
            <FaLinkedin className="text-white" size={25} />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <span className="text-white font-bold text-2xl">Menù</span>
          <div className="flex flex-col gap-1 text-lg text-white">
            <Link href="/">Home</Link>
            <Link href="/chisiamo">Chi Siamo</Link>
            <Link href="/prodotti">Prodotti</Link>
            <Link href="/lavori">Lavori</Link>
            <Link href="/contatti">Contatti</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-white font-bold text-2xl">Contattaci</span>
          <div className="flex flex-col gap-8 text-lg text-white">
            <div className="flex flex-row items-center gap-2">
              <MdMarkEmailUnread size={25} />
              <span>email@dimarcosrl.it</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <FaPhoneVolume size={25} />
              <span>+39 0983729717</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <GiPositionMarker size={25} />
              <span>email@dimarcosrl.it</span>
            </div>
          </div>
        </div>
        <PiWindowsLogoFill size={250} className="text-white"/>
      </div>
      <hr className="my-10 text-white" />
      <div className="flex flex-row justify-center items-center w-full text-white">
        <span>Copyright © {new Date().getFullYear()} All Rights Reserved.</span>
      </div>
    </div>
  );
}
