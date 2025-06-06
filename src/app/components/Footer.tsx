import Link from "next/link";
import Image from "next/image";

import logobianco from "../../../public/logobianco.png";
import finestra from "../../../public/finsestra.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneVolume,
  FaWhatsapp,
} from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";
import { PiWindowsLogoFill } from "react-icons/pi";

export default function Footer() {
  return (
    <div className="w-full bg-gradient-to-t from-black to-red-950 py-10 padding flex flex-col justify-center font-[family-name:var(--font-plus-jakarta-sans)]">
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
      <hr className="mt-10 text-gray-600" />
      <div className="grid lg:grid-cols-4 lg:gap-20 gap-10 mt-10">
        <div className="flex flex-col gap-4 lg:items-start items-center">
          <Image
            src={logobianco}
            alt="alt"
            width={200}
            height={300}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
          <span className="text-white text-lg">
            Dal 1970, qualità e attenzione per offrirti il meglio
          </span>
          <div className="flex flex-row justify-start items-center gap-10 text-xl font-semibold">
            <Link href="https://www.facebook.com/dimarcoinfissi" target="blank">
              <FaFacebook color="white" />
            </Link>
            <Link href="https://www.instagram.com/dimarcosrl/" target="blank">
              <FaInstagram color="white" />
            </Link>
            <Link href="https://wa.me/+393271226348" target="blank">
              <FaWhatsapp color="white" />
            </Link>
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
              <Link
                href="mailto:info@dimarcoinfissi.it"
                className="hover:underline"
              >
                info@dimarcoinfissi.it
              </Link>
            </div>
            <div className="flex flex-row items-center gap-2">
              <FaPhoneVolume size={25} />
              <Link href="tel:+390872927687" className="hover:underline">
                0872 982669
              </Link>
            </div>
            <div className="flex flex-row items-center gap-2">
              <GiPositionMarker size={25} />
              <Link
                className="hover:underline"
                href="https://maps.app.goo.gl/8GcaRzc337HLzfiBA"
                target="blank"
              >
                Via Selva Piana, 57, 66043 Casoli CH
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <PiWindowsLogoFill size={250} className="text-white" />
        </div>
      </div>
      <hr className="my-10 text-gray-600" />
      <div className="flex flex-col gap-2 justify-center items-center w-full text-white">
        <span>Copyright © {new Date().getFullYear()} All Rights Reserved </span>
        <div className="flex flex-row gap-2">
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>-
          <Link href="/coockie-policy" className="hover:underline">Coockie Policy</Link>
        </div>
      </div>
    </div>
  );
}
