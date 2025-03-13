import React from "react";
import Link from "next/link";
import Image from "next/image";
import team1 from "../../../public/team1.jpg";
import servizio1 from "../../../public/servizio1.jpg";
import servizio2 from "../../../public/servizio2.jpg";
import servizio3 from "../../../public/servizio3.jpg";
import servizio4 from "../../../public/servizio4.jpg";
import servizio5 from "../../../public/servizio5.jpg";
import servizio6 from "../../../public/servizio6.jpg";
import { FaEye, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import {
  IoCheckmarkDoneCircle,
  IoDiamondOutline,
  IoEyeOutline,
} from "react-icons/io5";
import { GiDiceTarget } from "react-icons/gi";
import { CgLayoutGridSmall } from "react-icons/cg";
import { BiSolidGrid } from "react-icons/bi";
import LavoraConNoi from "../components/home/LavoraConNoi";

export default function Servizi() {
  return (
    <div className="font-[family-name:var(--font-plus-jakarta-sans)]">
      <div className="grid grid-rows-[20px_1fr_20px] relative h-[50vh] p-8 pb-20 gap-16 padding chisiamo bg-fixed">
        <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-red-900 to-gray-800 opacity-50 z-10"></div>
        <div className="flex flex-col gap-4 justify-center items-center w-full h-[50vh]">
          <h1 className="text-white font-bold xl:text-[85px] lg:text-[70px] md:text-[50px] text-[40px] z-20 xl:leading-20 lg:leading-16 leading-10">
            Servizi
          </h1>
          <div className="text-white font-semibold text-lg z-20">
            <Link href="/">Home</Link>
            <span> / Servizi </span>
          </div>
        </div>
      </div>
      <div className="grid xl:grid-cols-3 grid-cols-1 gap-8 padding py-20">
        <div className="relative h-[411px] servizio1">
          <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent from-50% to-90% to-black opacity-100 z-20"></div>
          <span className="absolute bottom-2 w-full text-center left-1/2 -translate-1/2 text-xl text-white font-extrabold z-20">Custom Window Installation</span>
        </div>
        <div className="relative h-[411px] servizio2">
          <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent from-50% to-90% to-black opacity-100 z-20"></div>
          <span className="absolute bottom-2 w-full text-center left-1/2 -translate-1/2 text-xl text-white font-extrabold z-20">Custom Window Installation</span>
        </div>
        <div className="relative h-[411px] servizio3">
          <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent from-50% to-90% to-black opacity-100 z-20"></div>
          <span className="absolute bottom-2 w-full text-center left-1/2 -translate-1/2 text-xl text-white font-extrabold z-20">Custom Window Installation</span>
        </div>
        <div className="relative h-[411px] servizio4">
          <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent from-50% to-90% to-black opacity-100 z-20"></div>
          <span className="absolute bottom-2 w-full text-center left-1/2 -translate-1/2 text-xl text-white font-extrabold z-20">Custom Window Installation</span>
        </div>
        <div className="relative h-[411px] servizio5">
          <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent from-50% to-90% to-black opacity-100 z-20"></div>
          <span className="absolute bottom-2 w-full text-center left-1/2 -translate-1/2 text-xl text-white font-extrabold z-20">Custom Window Installation</span>
        </div>
        <div className="relative h-[411px] servizio6">
          <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent from-50% to-90% to-black opacity-100 z-20"></div>
          <span className="absolute bottom-2 w-full text-center left-1/2 -translate-1/2 text-xl text-white font-extrabold z-20">Custom Window Installation</span>
        </div>
      </div>
      <LavoraConNoi/>
    </div>
  );
}
