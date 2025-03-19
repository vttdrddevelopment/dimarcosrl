import Image from "next/image";
import about1 from "../../../../public/about1.jpg";
import { PiWindowsLogoFill } from "react-icons/pi";
import { LiaWindows } from "react-icons/lia";

import Link from "next/link";
import { AiOutlineWindows } from "react-icons/ai";

export default function About() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center gap-10 padding py-10">
        <div className="lg:w-1/2 flex justify-center items-center relative pt-10">
          <Image
            src={about1}
            alt="alt"
            width={400}
            height={500}
            className="rounded-t-full z-10"
          />
          <div className="absolute bottom-10 right-20 z-20 gap-2 flex flex-col border-10 border-white rounded-t-full items-center p-10 bg-primary">
            <span className="text-5xl font-bold text-white">98%</span>
            <span className="font-bold text-white text-center">
              Clienti <br /> Contenti
            </span>
          </div>
          <PiWindowsLogoFill
            size={220}
            className="absolute top-0 left-0 z-0 text-gray-200"
          />
        </div>
        <div className="flex flex-col gap-4 justify-evenly lg:w-1/2">
          <span className="uppercase font-bold text-primary md:text-base text-sm">
            Chi Siamo
          </span>
          <h1 className="font-bold xl:text-[53px] lg:text-[50px] md:text-[40px] text-[30px] xl:leading-14 lg:leading-12 leading-8">
            Competenza in finestre e porte per ogni stile
          </h1>
          <span className="md:text-base text-sm">
            Collabora con un'azienda dedita all'eccellenza nelle installazioni
            di finestre e porte, assicurandoti che ogni progetto venga gestito
            con precisione e cura. Il nostro impegno è quello di fornire
            installazioni che non solo soddisfino ma superino le tue
            aspettative.
          </span>
          <div className="flex flex-col gap-4">
            <div className="flex lg:flex-row flex-col lg:items-center gap-4 justify-center">
              <LiaWindows size={80} className="text-primary" />
              <div className="flex flex-col gap-2">
                <span className="lg:text-3xl text-2xl font-bold">
                  La nostra missione
                </span>
                <span className="lg:text-base text-sm">
                  Miriamo a trasformare case e aziende con soluzioni di porte e
                  finestre di alta qualità che migliorino l'estetica e
                  migliorino l'efficienza energetica.
                </span>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col lg:items-center gap-4 justify-center">
              <LiaWindows size={80} className="text-primary" />
              <div className="flex flex-col gap-2">
                <span className="lg:text-3xl text-2xl font-bold">
                  La nostra visione
                </span>
                <span className="lg:text-base text-sm">
                  Crediamo nell'integrità e nella sostenibilità. Il nostro
                  obiettivo è fornire non solo prodotti, ma soluzioni che
                  migliorino le case e riducano il dispendio di energia.
                </span>
              </div>
            </div>
            <Link
              href="/chisiamo"
              className="px-3 py-3 w-[150px] text-center bg-primary text-white font-semibold z-20 md:text-base text-sm"
            >
              Scopri Di Più
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:px-50 px-10 lg:py-5">
        <hr />
      </div>
      <div className="grid lg:grid-cols-6 grid-cols-3 gap-10 padding py-10">
        <div className="flex flex-col gap-2 text-center items-center">
          <AiOutlineWindows size={50} className="text-primary" />
          <span className="font-bold lg:text-lg text-sm">
            Risparmio energetico
          </span>
        </div>
        <div className="flex flex-col gap-2 text-center items-center">
          <AiOutlineWindows size={50} className="text-primary" />
          <span className="font-bold lg:text-lg text-sm">
            Ottimo isolamento acustico
          </span>
        </div>
        <div className="flex flex-col gap-2 text-center items-center">
          <AiOutlineWindows size={50} className="text-primary" />
          <span className="font-bold lg:text-lg text-sm">
            Elevata trasmissione della luce
          </span>
        </div>
        <div className="flex flex-col gap-2 text-center items-center">
          <AiOutlineWindows size={50} className="text-primary" />
          <span className="font-bold lg:text-lg text-sm">
            Durata 10 anni di garanzia
          </span>
        </div>
        <div className="flex flex-col gap-2 text-center items-center">
          <AiOutlineWindows size={50} className="text-primary" />
          <span className="font-bold lg:text-lg text-sm">
            Materiali ecologici
          </span>
        </div>
        <div className="flex flex-col gap-2 text-center items-center">
          <AiOutlineWindows size={50} className="text-primary" />
          <span className="font-bold lg:text-lg text-sm">
            Design moderno e ponderato
          </span>
        </div>
      </div>
    </>
  );
}
