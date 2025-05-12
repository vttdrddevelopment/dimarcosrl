import Image from "next/image";


import areaponzio from "../../../../public/areaPonzio.png";
import bettio from "../../../../public/partner/bettio.png";
import hormann from "../../../../public/partner/hormann.png";
import metra from "../../../../public/partner/metra.png";
import rintal from "../../../../public/partner/rintal.png";
import schuco from "../../../../public/partner/schuco.png";
import velux from "../../../../public/partner/velux.png";
import { lavori } from "@/app/data/lavori";
import Link from "next/link";

export default function Galleria() {
  return (
    <div className="w-full py-10 padding flex flex-col justify-center relative">
      <div className="flex lg:flex-row flex-col justify-between items-center z-20">
        <div className="flex flex-col gap-4 justify-evenly lg:w-1/2">
          <span className="uppercase font-bold text-primary md:text-base text-sm">
            I nostri lavori
          </span>
          <h1 className="font-bold xl:text-[53px] lg:text-[50px] md:text-[40px] text-[30px] xl:leading-14 lg:leading-12 leading-8">
            Scopri i nostri lavori
          </h1>
        </div>
        {/* <span className="md:text-base text-sm lg:w-1/2 mt-6 lg:mt-0">
          Esplora la nostra galleria di progetti completati di finestre e porte
          per vedere la qualità artigianale e l'attenzione ai dettagli che
          apportiamo a ogni installazione.
        </span> */}
      </div>
      <div className="grid lg:grid-cols-3 items-center gap-10 my-10 z-20">
        {lavori.filter(l => l.homePage).map((l) => {
          return (
            <Link
              href={`/lavori/${l.id}`}
              className="h-[500px] relative hover:opacity-90 hover:cursor-pointer"
              key={l.id}
            >
              <Image
                src={l.mainImage}
                alt="alt"
                className="w-full absolute top-0 h-[500px]"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover"
                }} />
              <span className="text-white font-bold text-xl z-30 absolute bottom-10 left-10">
                {l.nome}
              </span>
              <div className="absolute top-0 bg-black opacity-35 h-[500px] w-full"></div>
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col gap-10 items-center mt-10 w-full z-10">
        <h1 className="font-bold xl:text-[53px] lg:text-[50px] md:text-[40px] text-[30px] xl:leading-14 lg:leading-12 leading-8">
          I nostri partners
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-20 gap-10 items-center">
          <Image
            src={areaponzio}
            alt="alt"
            width={300}
            height={300}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <Image
            src={hormann}
            alt="alt"
            width={300}
            height={300}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <Image
            src={schuco}
            alt="alt"
            width={300}
            height={300}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <Image
            src={bettio}
            alt="alt"
            width={300}
            height={300}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-20 gap-10 items-center justify-evenly">
          <Image
            src={velux}
            alt="alt"
            width={300}
            height={300}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <Image
            src={metra}
            alt="alt"
            width={200}
            height={200}
            className="mx-auto"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <Image
            src={rintal}
            alt="alt"
            width={300}
            height={300}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </div>
      </div>
    </div>
  );
}
