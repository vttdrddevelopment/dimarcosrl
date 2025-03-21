import Link from "next/link";
import Image from "next/image";

import logobianco from "../../../public/logobianco.png";
import finestra from "../../../public/finsestra.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneVolume,
} from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";
import { PiWindowsLogoFill } from "react-icons/pi";

export default function Footer() {
  return (
    <div className="w-full bg-black py-10 padding flex flex-col justify-center font-[family-name:var(--font-plus-jakarta-sans)]">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-white xl:text-[45px] md:text-[40px] text-[20px] font-extrabold xl:leading-10 leading-5">
          Richiedi un preventivo gratuito!
        </h2>
        <Link
          href="/contatti"
          className="px-6 md:py-4 py-2 bg-white text-primary font-semibold z-20"
        >
          Contattaci
        </Link>
      </div>
      <hr className="mt-10 text-gray-900" />
      <div className="grid lg:grid-cols-4 lg:gap-20 gap-10 mt-10">
        <div className="flex flex-col gap-4 lg:items-start items-center">
          <Image src={logobianco} alt="alt" width={200} height={300} />
          <span className="text-white text-lg">
            Dal 1970, qualità e attenzione per offrirti il meglio
          </span>
          <div className="flex flex-row justify-start items-center gap-10 text-xl font-semibold">
            <FaFacebook className="text-white" size={25} />
            <FaInstagram className="text-white" size={25} />
            <FaLinkedin className="text-white" size={25} />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <span className="text-white font-bold text-2xl">Menù</span>
          <div className="flex flex-col gap-1 text-lg text-white text-center">
            <Link href="/">Home</Link>
            <Link href="/chisiamo">Chi Siamo</Link>
            <Link href="/prodotti">Prodotti</Link>
            <Link href="/showroom">Show Room</Link>
            <Link href="/lavori">Lavori</Link>
            <Link href="/contatti">Contatti</Link>
          </div>
        </div>
        <div className="flex flex-col lg:items-start items-center gap-4">
          <span className="text-white font-bold text-2xl">Contattaci</span>
          <div className="flex flex-col lg:gap-8 gap-4 text-lg text-white">
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
        <div className="flex justify-center">
          <PiWindowsLogoFill size={250} className="text-white" />
        </div>
      </div>
      <hr className="my-10 text-gray-900" />
      <div className="flex flex-row justify-center items-center w-full text-white">
        <span>Copyright © {new Date().getFullYear()} All Rights Reserved.</span>
      </div>
    </div>
  );
}
