import { LiaWindows } from "react-icons/lia";
import background from "../../../../public/background.jpg";
import service1 from "../../../../public/sezioneFinestra.png";

import Image from "next/image";
import { RiCustomerService2Line, RiCustomSize } from "react-icons/ri";
import { LuDoorClosed, LuDoorOpen } from "react-icons/lu";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { IoLockClosedOutline } from "react-icons/io5";
import { CgViewComfortable } from "react-icons/cg";

export default function Services() {
  return (
    <div className="w-full py-10 padding flex flex-col justify-center lg:h-screen relative">
      <Image
        src={background}
        alt="alt"
        className="w-full absolute top-0 h-screen"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover"
        }} />
      <div className="absolute top-0 left-0 w-full lg:h-screen h-full bg-gray-300 opacity-65 z-10"></div>
      <div className="flex lg:flex-row flex-col justify-between items-center z-20">
        <div className="flex flex-col gap-4 justify-evenly lg:w-1/2">
          <span className="uppercase font-bold text-primary md:text-base text-sm">
            I nostri servizi
          </span>
          <h1 className="font-bold xl:text-[53px] lg:text-[50px] md:text-[40px] text-[30px] xl:leading-14 lg:leading-12 leading-8">
            Soluzioni su misura per ogni esigenza
          </h1>
        </div>
        <span className="md:text-base text-sm lg:w-1/2 mt-6 lg:mt-0">
          Con oltre 50 anni di esperienza nel settore, Di Marco Srl offre una
          gamma completa di servizi per soddisfare le diverse necessità dei
          clienti
        </span>
      </div>
      <div className="grid lg:grid-cols-3 items-center gap-10 mt-20 z-20">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row lg:items-center gap-4 lg:justify-center">
            <RiCustomSize className="text-primary lg:w-[80px] lg:h-[80px] w-[60px] h-[60px]" />
            <div className="flex flex-col gap-2 w-4/5">
              <span className="lg:text-xl text-xl font-bold">
                Produzione e installazione di infissi
              </span>
              <span className="lg:text-base text-sm">
                realizziamo serramenti in alluminio e PVC, disponibili in varie
                finiture, inclusi colori standard ed effetto legno, garantendo
                isolamento termico e acustico di alta qualità.
              </span>
            </div>
          </div>
          <hr className="my-3 text-gray-400" />
          <div className="flex flex-row lg:items-center gap-4 lg:justify-center">
            <IoLockClosedOutline className="text-primary lg:w-[80px] lg:h-[80px] w-[60px] h-[60px]" />
            <div className="flex flex-col gap-2 w-4/5">
              <span className="lg:text-xl text-xl font-bold">
                Sistemi di sicurezza
              </span>
              <span className="lg:text-base text-sm">
                forniamo e installiamo tapparelle antiscasso, motorizzate e
                manuali, oltre a porte blindate e inferriate per una protezione
                completa della tua abitazione.
              </span>
            </div>
          </div>
          <hr className="my-3 text-gray-400" />
          <div className="flex flex-row lg:items-center gap-4 lg:justify-center">
            <CgViewComfortable className="text-primary lg:w-[80px] lg:h-[80px] w-[60px] h-[60px]" />
            <div className="flex flex-col gap-2 w-4/5">
              <span className="lg:text-xl text-xl font-bold">
                Accessori per il comfort
              </span>
              <span className="lg:text-base text-sm">
                offriamo zanzariere, tende da sole, pergole bioclimatiche,
                vetrate per migliorare il benessere all'interno e all’esterno
                dei tuoi ambienti.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <Image
            src={service1}
            alt="alt"
            width={400}
            height={500}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row lg:items-center gap-4 lg:justify-center">
            <GiAutoRepair className="text-primary lg:w-[80px] lg:h-[80px] w-[60px] h-[60px]" />
            <div className="flex flex-col gap-2 w-4/5">
              <span className="lg:text-2xl text-xl font-bold">
                Riparazione e manutenzione
              </span>
              <span className="lg:text-base text-sm">
                eseguiamo interventi rapidi e professionali per risolvere tutti
                i tuoi problemi legati agli infissi
              </span>
            </div>
          </div>
          <hr className="my-3 text-gray-400" />
          <div className="flex flex-row lg:items-center gap-4 lg:justify-center">
            <RiCustomerService2Line className="text-primary lg:w-[80px] lg:h-[80px] w-[60px] h-[60px]" />
            <div className="flex flex-col gap-2 w-4/5">
              <span className="lg:text-2xl text-xl font-bold">
                Consulenza e assistenza
              </span>
              <span className="lg:text-base text-sm">
                il nostro team di esperti è a disposizione per consigliarti
                nella scelta dei prodotti più adatti e per fornirti supporto
                tecnico durante tutte le fasi del progetto.
              </span>
            </div>
          </div>
          <hr className="my-3 text-gray-400" />
          <div className="flex flex-row lg:items-center gap-4 lg:justify-center">
            <LuDoorClosed className="text-primary lg:w-[80px] lg:h-[80px] w-[60px] h-[60px]" />
            <div className="flex flex-col gap-2 w-4/5">
              <span className="lg:text-2xl text-xl font-bold">
                Finestre e porte industriali
              </span>
              <span className="lg:text-base text-sm">
                soluzioni durevoli ed efficienti per aziende di tutte le
                dimensioni
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
