import Image from "next/image";
import Link from "next/link";
import lavoraconnoi1 from "../../../../public/lavoraconnoi1.png";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

export default function LavoraConNoi() {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-10 padding py-20">
      <div className="lg:w-1/2 flex justify-center items-center relative pt-10 pb-10">
        <Image src={lavoraconnoi1} alt="alt" width={560} height={500} />
        {/* <div className="bg-primary xl:w-[459px] w-[380px] rounded-tl-[100px] xl:h-[484px] h-[280px] rounded-br-[100px]"></div>
          <Image
            src={lavoraconnoi1}
            alt="alt"
            width={317}
            height={500}
            className="rounded-t-full w-2/3 lg:w-[250px] xl:w-[310px] z-20 absolute top-[-10px] right-8 border-4 border-white"
          />
          <Image
            src={lavoraconnoi2}
            alt="alt"
            width={317}
            height={500}
            className="rounded-t-full w-2/3 lg:w-[250px] xl:w-[310px] z-10 absolute bottom-[-10px] xl:left-20 left-0 border-4 border-white"
          /> */}

        {/* <Image
            src={about1}
            alt="alt"
            width={400}
            height={500}
            className="rounded-t-full z-10"
          />
          <div className="absolute bottom-10 right-20 z-20 gap-2 flex flex-col border-10 border-white rounded-t-full items-center p-10 bg-primary">
            <span className="text-5xl font-bold text-white">70%</span>
            <span className="font-bold text-white text-center">
              Happy <br /> Customer
            </span>
          </div>
          <PiWindowsLogoFill
            size={220}
            className="absolute top-0 left-0 z-0 text-gray-200"
          /> */}
      </div>
      <div className="flex flex-col gap-4 justify-evenly lg:w-1/2">
        <span className="uppercase font-bold text-primary md:text-base text-sm">
          Lavora con noi
        </span>
        <h1 className="font-bold xl:text-[53px] lg:text-[50px] md:text-[40px] text-[30px] xl:leading-14 lg:leading-12 leading-8">
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
