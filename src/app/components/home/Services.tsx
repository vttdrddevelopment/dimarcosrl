import { LiaWindows } from "react-icons/lia";
import background from "../../../../public/background.jpg"
import service1 from "../../../../public/service1.png";

import Image from "next/image";
import { RiCustomerService2Line, RiCustomSize } from "react-icons/ri";
import { LuDoorClosed, LuDoorOpen } from "react-icons/lu";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";

export default function Services() {
  return (
    <div className="w-full py-10 padding flex flex-col justify-center lg:h-screen relative">
      <Image src={background} alt="alt" layout="fill" objectFit="cover"  className="w-full absolute top-0 h-screen"/>
      <div className="absolute top-0 left-0 w-full lg:h-screen h-full bg-gray-300 opacity-65 z-10"></div>
      <div className="flex lg:flex-row flex-col justify-between items-center z-20">
        <div className="flex flex-col gap-4 justify-evenly lg:w-1/2">
          <span className="uppercase font-bold text-primary md:text-base text-sm">
            I nostri servizi
          </span>
          <h1 className="font-bold xl:text-[53px] lg:text-[50px] md:text-[40px] text-[30px] xl:leading-14 lg:leading-12 leading-8">
            Servizi completi per finestre e porte
          </h1>
        </div>
        <span className="md:text-base text-sm lg:w-1/2 mt-6 lg:mt-0">
          Collabora con un'azienda dedita all'eccellenza nelle installazioni di
          finestre e porte, assicurandoti che ogni progetto venga gestito con
          precisione e cura.
        </span>
      </div>
      <div className="grid lg:grid-cols-3 items-center gap-10 mt-20 z-20">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row lg:items-center gap-4 lg:justify-center">
            <RiCustomSize  className="text-primary lg:w-[80px] lg:h-[80px] w-[60px] h-[60px]" />
            <div className="flex flex-col gap-2 w-4/5">
              <span className="lg:text-xl text-xl font-bold">
                Installazione di finestre personalizzate
              </span>
              <span className="lg:text-base text-sm">
                Finestre realizzate da esperti, su misura per le vostre
                esigenze.
              </span>
            </div>
          </div>
          <hr className="my-3 text-gray-400" />
          <div className="flex flex-row lg:items-center gap-4 lg:justify-center">
            <LuDoorOpen  className="text-primary lg:w-[80px] lg:h-[80px] w-[60px] h-[60px]" />
            <div className="flex flex-col gap-2 w-4/5">
              <span className="lg:text-xl text-xl font-bold">
                Installazione e sostituzione porte
              </span>
              <span className="lg:text-base text-sm">
                Porte di alta qualità progettate per garantire sicurezza e
                stile.
              </span>
            </div>
          </div>
          <hr className="my-3 text-gray-400" />
          <div className="flex flex-row lg:items-center gap-4 lg:justify-center">
            <MdOutlineEnergySavingsLeaf  className="text-primary lg:w-[80px] lg:h-[80px] w-[60px] h-[60px]" />
            <div className="flex flex-col gap-2 w-4/5">
              <span className="lg:text-xl text-xl font-bold">
                Soluzioni ad alta efficienza energetica
              </span>
              <span className="lg:text-base text-sm">
                Finestre e porte che aumentano il risparmio energetico, tutto
                l'anno.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <Image src={service1} alt="alt" width={400} height={500} />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row lg:items-center gap-4 lg:justify-center">
            <GiAutoRepair  className="text-primary lg:w-[80px] lg:h-[80px] w-[60px] h-[60px]" />
            <div className="flex flex-col gap-2 w-4/5">
              <span className="lg:text-2xl text-xl font-bold">
                Riparazione di finestre e porte
              </span>
              <span className="lg:text-base text-sm">
                Riparazioni affidabili che garantiscono funzionalità ed estetica
                durature.
              </span>
            </div>
          </div>
          <hr className="my-3 text-gray-400" />
          <div className="flex flex-row lg:items-center gap-4 lg:justify-center">
            <RiCustomerService2Line  className="text-primary lg:w-[80px] lg:h-[80px] w-[60px] h-[60px]" />
            <div className="flex flex-col gap-2 w-4/5">
              <span className="lg:text-2xl text-xl font-bold">
              Servizi di consulenza e progettazione
              </span>
              <span className="lg:text-base text-sm">
              Consulenza personalizzata per adattare lo stile unico della tua casa.
              </span>
            </div>
          </div>
          <hr className="my-3 text-gray-400" />
          <div className="flex flex-row lg:items-center gap-4 lg:justify-center">
            <LuDoorClosed  className="text-primary lg:w-[80px] lg:h-[80px] w-[60px] h-[60px]" />
            <div className="flex flex-col gap-2 w-4/5">
              <span className="lg:text-2xl text-xl font-bold">
              Finestre e porte commerciali
              </span>
              <span className="lg:text-base text-sm">
              Soluzioni durevoli ed efficienti per aziende di tutte le dimensioni.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
