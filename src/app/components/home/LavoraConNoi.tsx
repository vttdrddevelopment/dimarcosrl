import Image from "next/image";
import Link from "next/link";
import lavoraconnoi1 from "../../../../public/lavoraconnoi2.png";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

export default function LavoraConNoi() {
  return (
    // <div className="flex flex-col lg:flex-row justify-center gap-10 padding py-20">
    <div className="padding relative h-screen">
      
        <Image
          src={lavoraconnoi1}
          alt="alt"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0"
        />
     <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-transparent to-red-950 opacity-70 z-10 padding"></div>
      <div className="absolute text-white bg-black/60 shadow-2xl shadow-white lg:rounded-2xl bg-opacity-10 p-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col gap-4 justify-evenly lg:w-1/2 w-full z-20">
        <span className="uppercase font-bold text-primary md:text-base text-sm">
          Lavora con noi
        </span>
        <h1 className="font-bold xl:text-[53px] text-white lg:text-[50px] md:text-[40px] text-[30px] xl:leading-14 lg:leading-12 leading-8">
          Perché siamo la scelta giusta per la tua casa
        </h1>
        <span className="md:text-base text-sm">
          Collabora con un'azienda dedita all'eccellenza nelle installazioni di
          finestre e porte, assicurandoti che ogni progetto venga gestito con
          precisione e cura.
        </span>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2">
            <div className="flex flex-row items-center gap-4 justify-start">
              <IoCheckmarkDoneCircle size={25} className="text-primary" />
              <span className="md:text-base text-sm">Qualità senza pari</span>
            </div>
            <div className="flex flex-row items-center gap-4 justify-start">
              <IoCheckmarkDoneCircle size={25} className="text-primary" />
              <span className="md:text-base text-sm">Artigianato esperto</span>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-row items-center gap-4 justify-start">
              <IoCheckmarkDoneCircle size={25} className="text-primary" />
              <span className="md:text-base text-sm">
                Soluzioni personalizzate
              </span>
            </div>
            <div className="flex flex-row items-center gap-4 justify-start">
              <IoCheckmarkDoneCircle size={25} className="text-primary" />
              <span className="md:text-base text-sm">
                Efficienza energetica
              </span>
            </div>
          </div>
        </div>
        <Link
          href="/lavori"
          className="px-3 py-3 w-[150px] bg-primary text-white font-semibold z-20 md:text-base text-sm text-center"
        >
          Scopri Di Più
        </Link>
        <div className="grid grid-cols-3 md:gap-10 gap-4">
          <div className="flex flex-col w-full border-r-2 border-gray-300">
            <span className="md:text-xl font-bold">98%</span>
            <span className="md:text-base text-sm">Clineti contenti</span>
          </div>
          <div className="flex flex-col w-full border-r-2 border-gray-300">
            <span className="md:text-xl font-bold">1,500+</span>
            <span className="md:text-base text-sm">Soluzioni fornite</span>
          </div>
          <div className="flex flex-col w-full">
            <span className="md:text-xl font-bold">30+</span>
            <span className="md:text-base text-sm">Anni di esperienza</span>
          </div>
        </div>
      </div>
    </div>
  );
}
