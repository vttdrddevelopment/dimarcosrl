"use client";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegClock,
  FaTimes,
} from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import { MdMarkEmailUnread } from "react-icons/md";
import logo from "./../../../public/logodimarco.png";
import Image from "next/image";
import Link from "next/link";
import { CiBurger } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { PiWindowsLogoFill } from "react-icons/pi";

export default function Navbar() {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  return (
    <>
      <div className="w-full md:h-[6vh] h-[10vh] bg-black py-2 flex flex-col md:flex-row items-center xl:px-50 px-10 justify-between text-white">
        <div className="flex flex-row justify-end items-center gap-4">
          <div className="flex flex-row items-center gap-2 text-xs md:text-sm">
            <GiPositionMarker size={25} />
            <span>indirizzo</span>
          </div>
          <div className="flex flex-row items-center gap-2 text-xs md:text-sm">
            <MdMarkEmailUnread size={25} />
            <span>email</span>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-4 text-xs md:text-sm">
          Testo da decidere: es. Benvenuti da dimarco srl
        </div>
        <div className="flex flex-row justify-start items-centerxs">
          <div className="flex flex-row items-center gap-2 text-xs md:text-sm">
            <FaRegClock size={25} />
            <span>Lunedì-Venerdì dalle 8:00 alle 18:00</span>
          </div>
        </div>
      </div>
      <div className="w-full h-[12vh] flex flex-row items-center justify-between xl:px-50 px-10">
        <div className=" flex items-center justify-end">
          <Image src={logo} alt="alt" width={200} height={400} />
        </div>
        <div className="hidden xl:flex flex-row justify-center items-center gap-20 text-lg font-semibold">
        <Link href="/">Home</Link>
          <Link href="/chisiamo">Chi Siamo</Link>
          <Link href="/prodotti">Prodotti</Link>
          <Link href="/lavori">Lavori</Link>
          <Link href="/contatti">Contatti</Link>
        </div>
        <div className="hidden xl:flex flex-row justify-start items-center gap-10 text-xl font-semibold">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
        </div>
        <PiWindowsLogoFill
          size={40}
          className="xl:hidden cursor-pointer hover:opacity-70"
          onClick={() => setMobileMenuOpened(true)}
        />
      </div>
      {mobileMenuOpened && (
        <div className="flex flex-col h-screen absolute top-0 w-full xl:hidden bg-primary items-center justify-center gap-10 text-2xl font-semibold z-50">
          <Link href="/" onClick={() => setMobileMenuOpened(false)}>Home</Link>
          <Link href="/chisiamo" onClick={() => setMobileMenuOpened(false)}>Chi Siamo</Link>
          <Link href="/prodotti" onClick={() => setMobileMenuOpened(false)}>Prodotti</Link>
          <Link href="/lavori" onClick={() => setMobileMenuOpened(false)}>Lavori</Link>
          <Link href="/contatti" onClick={() => setMobileMenuOpened(false)}>Contatti</Link>
          <FaTimes
            size={30}
            className="absolute top-3 right-3 hover:cursor-pointer p-1 border border-black rounded"
            onClick={() => setMobileMenuOpened(false)}
          />
          <div className="flex flex-row justify-start items-center gap-10 text-xl font-semibold absolute bottom-20">
          <FaFacebook size={30}/>
          <FaInstagram size={30}/>
          <FaLinkedin size={30}/>
        </div>
        </div>
      )}
    </>
  );
}
