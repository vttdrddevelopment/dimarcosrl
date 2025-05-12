import Image from "next/image";
import about1 from "../../../../public/about1.jpg";
import { PiWindowsLogoFill } from "react-icons/pi";
import { LiaWindows } from "react-icons/lia";

import Link from "next/link";
import { AiOutlineWindows } from "react-icons/ai";
import { GoGoal } from "react-icons/go";
import { GrObjectGroup } from "react-icons/gr";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { BsSoundwave } from "react-icons/bs";
import { HiOutlineHomeModern, HiOutlineLightBulb } from "react-icons/hi2";
import { TiTime } from "react-icons/ti";
import { GiEcology } from "react-icons/gi";
import { ImCoinEuro } from "react-icons/im";
import { FaLock } from "react-icons/fa";
import { CiLock } from "react-icons/ci";

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
            className="rounded-t-full z-10 shadow-2xl shadow-red-950"
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
            L’eccellenza dell’artigianato per infissi su misura
          </h1>
          <span className="md:text-base text-sm">
            Ogni nostro infisso nasce dall’esperienza e dalla passione dei
            nostri artigiani. Realizziamo serramenti su misura, combinando
            tradizione e innovazione per garantire qualità, resistenza e design
            unico. Ogni dettaglio è curato con precisione per offrirti soluzioni
            che durano nel tempo.
          </span>
          <div className="flex flex-col gap-4">
            <div className="flex lg:flex-row flex-col lg:items-center gap-4 justify-center">
              <GoGoal className="text-primary lg:w-[85px] lg:h-[85px] w-[60px] h-[60px]" />
              <div className="flex flex-col gap-2 w-full">
                <span className="lg:text-3xl text-2xl font-bold">
                  La nostra missione
                </span>
                <span className="lg:text-base text-sm">
                  Dal 1970 realizziamo infissi, serramenti e strutture
                  metalliche con la cura e la qualità dell’artigianato, unendo
                  esperienza, innovazione e personalizzazione. Ogni prodotto è
                  pensato per rispondere alle esigenze dei clienti. Garantiamo
                  qualità, efficienza e durata nel tempo. Seguiamo i nostri
                  clienti in ogni fase, dalla scelta iniziale fino
                  all’assistenza post-vendita, per un servizio completo e
                  affidabile.
                </span>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col lg:items-center gap-4 justify-center">
              <GrObjectGroup className="text-primary lg:w-[80px] lg:h-[80px] w-[60px] h-[60px]" />
              <div className="flex flex-col gap-2 w-full">
                <span className="lg:text-3xl text-2xl font-bold">
                  La nostra visione
                </span>
                <span className="lg:text-base text-sm">
                  Vogliamo essere un punto di riferimento nel settore,
                  riconosciuti per l’eccellenza artigianale e la capacità di
                  offrire soluzioni per ogni contesto. Miriamo a innovare
                  continuamente i nostri processi produttivi, con l’obiettivo di
                  combinare qualità, efficienza e sostenibilità. Crediamo in un
                  rapporto di fiducia con il cliente: la nostra attenzione va
                  oltre il prodotto.
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
          <MdOutlineEnergySavingsLeaf size={50} className="text-primary" />
          <span className="font-bold lg:text-lg text-sm">
            Risparmio energetico
          </span>
        </div>
        <div className="flex flex-col gap-2 text-center items-center">
          <BsSoundwave size={50} className="text-primary" />
          <span className="font-bold lg:text-lg text-sm">
            Ottimo isolamento acustico
          </span>
        </div>
        <div className="flex flex-col gap-2 text-center items-center">
          <CiLock size={50} className="text-primary" />
          <span className="font-bold lg:text-lg text-sm">
            Antieffrazione
          </span>
        </div>
        <div className="flex flex-col gap-2 text-center items-center">
          <TiTime size={50} className="text-primary" />
          <span className="font-bold lg:text-lg text-sm">
            Garanzia
          </span>
        </div>
        <div className="flex flex-col gap-2 text-center items-center">
          <GiEcology size={50} className="text-primary" />
          <span className="font-bold lg:text-lg text-sm">
            Materiali ecosostenibili
          </span>
        </div>
        <div className="flex flex-col gap-2 text-center items-center">
          <ImCoinEuro size={50} className="text-primary" />
          <span className="font-bold lg:text-lg text-sm">
            Possibilità di finanziamento
          </span>
        </div>
      </div>
    </>
  );
}
