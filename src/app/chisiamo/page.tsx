import React from "react";
import Link from "next/link";
import Image from "next/image";
import giuseppe from "../../../public/team/giuseppe.jpeg";
import loris from "../../../public/team/loris.jpeg";
import maurizio from "../../../public/team/maurizio.jpeg";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone } from "react-icons/fa";

import homebg from "../../../public/chisiamobg.jpg"
import LavoraConNoi from "@/app/components/home/LavoraConNoi";
import { MdEmail } from "react-icons/md";

export default function ChiSiamo() {
  return (
    <div className="font-[family-name:var(--font-plus-jakarta-sans)]">
      <div className="grid grid-rows-[20px_1fr_20px] relative h-[80vh] p-8 pb-20 gap-16 padding chisiamo">
      <Image
        src={homebg}
        alt="alt"
        className="w-full absolute top-0 h-[80vh]"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center"
        }} />
        <div className="absolute top-0 w-full h-[80vh] bg-gradient-to-b from-transparency to-red-950 opacity-50 z-10"></div>
        <div className="flex flex-col gap-4 justify-center items-center w-full h-[50vh]">
          <h1 className="text-white font-bold xl:text-[85px] lg:text-[70px] md:text-[50px] text-[40px] z-20 xl:leading-20 lg:leading-16 leading-10">
            Chi Siamo
          </h1>
          <div className="text-white font-semibold text-lg z-20">
            <Link href="/">Home</Link>
            <span> / Chi Siamo </span>
          </div>
        </div>
      </div>
      <div className="w-full py-10 padding flex flex-col justify-center">
        <div className="flex lg:flex-row flex-col justify-between items-center z-20">
          <div className="flex flex-col gap-4 justify-evenly lg:w-1/2">
            <span className="uppercase font-bold text-primary md:text-base text-sm">
              Il nostro team
            </span>
            <h1 className="font-bold xl:text-[53px] lg:text-[50px] md:text-[40px] text-[30px] xl:leading-14 lg:leading-12 leading-8">
              Incontra gli esperti
            </h1>
          </div>
          {/* <span className="md:text-base text-sm lg:w-1/2 mt-6 lg:mt-0">
            Partner with a company dedicated to excellence in window and door
            installations, ensuring each project is handled with precision and
            care.
          </span> */}
        </div>
      </div>
      <div className="grid xl:grid-cols-3 grid-cols-1 gap-4 padding pb-20">
        <div className="flex flex-col gap-3 items-center">
          <Image
            src={maurizio}
            alt="alt"
            width={400}
            height={400}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <span className="font-extrabold text-xl">Maurizio Di Marco</span>
          <span>Amministratore Delegato</span>
          <div className="flex flex-row gap-6">
            <div className="p-3 rounded-full bg-gray-200 hover:bg-primary text-primary hover:text-gray-200 hover:cursor-pointer">
              <Link href="tel:0872927687" className="hover:underline">
                <FaPhone size={20} />
              </Link>
            </div>
            <div className="p-3 rounded-full bg-gray-200 hover:bg-primary text-primary hover:text-gray-200 hover:cursor-pointer">
              <Link
                href="mailto:info@dimarcoinfissi.it"
                className="hover:underline"
              >
                <MdEmail size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <Image
            src={giuseppe}
            alt="alt"
            width={400}
            height={400}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <span className="font-extrabold text-xl">Giuseppe Scarci</span>
          <span>Responsabile commerciale</span>
          <div className="flex flex-row gap-6">
            <div className="p-3 rounded-full bg-gray-200 hover:bg-primary text-primary hover:text-gray-200 hover:cursor-pointer">
              <Link href="tel:0872927687" className="hover:underline">
                <FaPhone size={20} />
              </Link>
            </div>
            <div className="p-3 rounded-full bg-gray-200 hover:bg-primary text-primary hover:text-gray-200 hover:cursor-pointer">
              <Link
                href="mailto:info@dimarcoinfissi.it"
                className="hover:underline"
              >
                <MdEmail size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <Image
            src={loris}
            alt="alt"
            width={400}
            height={400}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <span className="font-extrabold text-xl">Loris Zacchigna</span>
          <span>Responsabile tecnico</span>
          <div className="flex flex-row gap-6">
            <div className="p-3 rounded-full bg-gray-200 hover:bg-primary text-primary hover:text-gray-200 hover:cursor-pointer">
              <Link href="tel:0872927687" className="hover:underline">
                <FaPhone size={20} />
              </Link>
            </div>
            <div className="p-3 rounded-full bg-gray-200 hover:bg-primary text-primary hover:text-gray-200 hover:cursor-pointer">
              <Link
                href="mailto:info@dimarcoinfissi.it"
                className="hover:underline"
              >
                <MdEmail size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <LavoraConNoi/>
      {/* <div className="padding relative h-screen">
        <Image
          src={tabbg}
          alt="alt"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0"
        />
     <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-transparent to-red-950 opacity-70 z-10 padding"></div>
     <div className="w-full flex flex-row justify-center lg:w-3/4 absolute text-black font-bold bg-white/75 lg:rounded-2xl bg-opacity-10 p-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 gap-4 z-20">
        <div className="tabs tabs-border rounded bg-transparent w-full relative z-20">
          <label className="tab w-1/3 flex xl:flex-row flex-col items-center">
            <input type="radio" name="my_tabs_4" />
            <GiDiceTarget size={20} className="xl:mr-2" />
            <span className="xl:text-base text-xs font-extrabold">
              Missione
            </span>
          </label>
          <div className="tab-content xl:p-10 p-5">
            <div className="flex xl:flex-row flex-col items-center gap-10">
              <div className="flex flex-col gap-4">
                <span className="xl:text-base text-xs">
                  La nostra missione è quella di trasformare i settori della
                  fabbrica e dell'industria attraverso pratiche sostenibili,
                  innovazione e tecnologia avanzata, promuovendo una crescita
                  che vada a vantaggio sia dell'azienda che dell'ambiente.
                </span>
                <div className="flex flex-row items-center gap-4 justify-start">
                  <IoCheckmarkDoneCircle
                    size={20}
                    className="text-primary w-fit"
                  />
                  <span className="xl:text-base text-xs w-fit">
                    Produzione sostenibile
                  </span>
                </div>
                <div className="flex flex-row items-center gap-4 justify-start">
                  <IoCheckmarkDoneCircle
                    size={20}
                    className="text-primary w-fit"
                  />
                  <span className="xl:text-base text-xs w-fit">
                    Integrazione tecnologica avanzata
                  </span>
                </div>
                <div className="flex flex-row items-center gap-4 justify-start">
                  <IoCheckmarkDoneCircle
                    size={20}
                    className="text-primary w-fit"
                  />
                  <span className="xl:text-base text-xs w-fit">
                    Responsabilità ambientale della comunità
                  </span>
                </div>
                <div className="flex flex-row items-center gap-4 justify-start">
                  <IoCheckmarkDoneCircle
                    size={20}
                    className="text-primary w-fit"
                  />
                  <span className="xl:text-base text-xs w-fit">
                    Crescita guidata dall'innovazione
                  </span>
                </div>
              </div>
              <Image src={chisiamo2} alt="alt" width={585} height={500} />
            </div>
          </div>

          <label className="tab w-1/3 flex xl:flex-row flex-col items-center">
            <input type="radio" name="my_tabs_4" defaultChecked />
            <BiSolidGrid size={20} className="xl:mr-2" />
            <span className="xl:text-base text-xs font-extrabold">Visione</span>
          </label>
          <div className="tab-content p-10">
            <div className="flex xl:flex-row flex-col items-center gap-10">
              <div className="flex flex-col gap-4">
                <span className="xl:text-base text-xs">
                  La nostra visione è quella di trasformare i settori della
                  fabbrica e dell'industria attraverso pratiche sostenibili,
                  innovazione e tecnologie avanzate, promuovendo una crescita
                  che avvantaggi sia l'azienda che l'ambiente.
                </span>
                <div className="flex flex-row items-center gap-4 justify-start">
                  <IoCheckmarkDoneCircle
                    size={20}
                    className="text-primary w-fit"
                  />
                  <span className="xl:text-base text-xs w-fit">
                    Produzione sostenibile
                  </span>
                </div>
                <div className="flex flex-row items-center gap-4 justify-start">
                  <IoCheckmarkDoneCircle
                    size={20}
                    className="text-primary w-fit"
                  />
                  <span className="xl:text-base text-xs w-fit">
                    Integrazione tecnologica avanzata
                  </span>
                </div>
                <div className="flex flex-row items-center gap-4 justify-start">
                  <IoCheckmarkDoneCircle
                    size={20}
                    className="text-primary w-fit"
                  />
                  <span className="xl:text-base text-xs w-fit">
                    Responsabilità ambientale della comunità
                  </span>
                </div>
                <div className="flex flex-row items-center gap-4 justify-start">
                  <IoCheckmarkDoneCircle
                    size={20}
                    className="text-primary w-fit"
                  />
                  <span className="xl:text-base text-xs w-fit">
                    Crescita guidata dall'innovazione
                  </span>
                </div>
              </div>
              <Image src={chisiamo3} alt="alt" width={585} height={500} />
            </div>
          </div>

          <label className="tab w-1/3 flex xl:flex-row flex-col items-center">
            <input type="radio" name="my_tabs_4" />
            <IoDiamondOutline size={20} className="xl:mr-2" />
            <span className="xl:text-base text-xs font-extrabold">
              Our Value
            </span>
          </label>
          <div className="tab-content p-10">
            <div className="flex xl:flex-row flex-col items-center gap-10">
              <div className="flex flex-col gap-4">
                <span className="xl:text-base text-xs">
                Il nostro valore è quello di trasformare i settori della
                  fabbrica e dell'industria attraverso pratiche sostenibili,
                  innovazione e tecnologie avanzate, promuovendo una crescita
                  che avvantaggi sia l'azienda che l'ambiente.
                </span>
                <div className="flex flex-row items-center gap-4 justify-start">
                  <IoCheckmarkDoneCircle
                    size={20}
                    className="text-primary w-fit"
                  />
                  <span className="xl:text-base text-xs w-fit">
                    Produzione sostenibile
                  </span>
                </div>
                <div className="flex flex-row items-center gap-4 justify-start">
                  <IoCheckmarkDoneCircle
                    size={20}
                    className="text-primary w-fit"
                  />
                  <span className="xl:text-base text-xs w-fit">
                    Integrazione tecnologica avanzata
                  </span>
                </div>
                <div className="flex flex-row items-center gap-4 justify-start">
                  <IoCheckmarkDoneCircle
                    size={20}
                    className="text-primary w-fit"
                  />
                  <span className="xl:text-base text-xs w-fit">
                    Responsabilità ambientale della comunità
                  </span>
                </div>
                <div className="flex flex-row items-center gap-4 justify-start">
                  <IoCheckmarkDoneCircle
                    size={20}
                    className="text-primary w-fit"
                  />
                  <span className="xl:text-base text-xs w-fit">
                    Crescita guidata dall'innovazione
                  </span>
                </div>
              </div>
              <Image src={chisiamo2} alt="alt" width={585} height={500} />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
