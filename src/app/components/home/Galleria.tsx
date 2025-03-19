import Image from "next/image";

import lavoro1 from "../../../../public/galleria1.jpg";
import lavoro2 from "../../../../public/galleria2.jpg";
import lavoro3 from "../../../../public/galleria3.jpg";

import areaponzio from "../../../../public/areaPonzio.png";

export default function Galleria() {
  return (
    <div className="w-full py-10 bg-gray-200 padding flex flex-col justify-center relative">
      <div className="flex lg:flex-row flex-col justify-between items-center z-20">
        <div className="flex flex-col gap-4 justify-evenly lg:w-1/2">
          <span className="uppercase font-bold text-primary md:text-base text-sm">
            I nostri lavori
          </span>
          <h1 className="font-bold xl:text-[53px] lg:text-[50px] md:text-[40px] text-[30px] xl:leading-14 lg:leading-12 leading-8">
            Scopri i nostri lavori
          </h1>
        </div>
        <span className="md:text-base text-sm lg:w-1/2 mt-6 lg:mt-0">
          Esplora la nostra galleria di progetti completati di finestre e porte
          per vedere la qualità artigianale e l'attenzione ai dettagli che
          apportiamo a ogni installazione.
        </span>
      </div>
      <div className="grid lg:grid-cols-3 items-center gap-10 mt-10 z-20">
        <div className="h-[500px] relative">
        <Image src={lavoro1} alt="alt" layout="fill" objectFit="cover"  className="w-full absolute top-0 h-[500px]"/>
          <span className="text-white font-bold text-xl z-30 absolute bottom-10 left-10">
            Elegant Bay Window <br /> Upgrade
          </span>
          <div className="absolute top-0 bg-black opacity-35 h-[500px] w-full"></div>
        </div>
        <div className="h-[500px] relative">
        <Image src={lavoro2} alt="alt" layout="fill" objectFit="cover"  className="w-full absolute top-0 h-[500px]"/>
          <span className="text-white font-bold text-xl z-30 absolute bottom-10 left-10">
            Modern Sliding Window <br /> Installation
          </span>
          <div className="absolute top-0 bg-black opacity-35 h-[500px] w-full"></div>
        </div>
        <div className="h-[500px] relative">
        <Image src={lavoro3} alt="alt" layout="fill" objectFit="cover"  className="w-full absolute top-0 h-[500px]"/>
          <span className="text-white font-bold text-xl z-30 absolute bottom-10 left-10">
            Energy-Efficient Window <br /> Replacement
          </span>
          <div className="absolute top-0 bg-black opacity-35 h-[500px] w-full"></div>
        </div>
      </div>
      <div className="flex flex-col gap-10 items-center mt-10 w-full z-10">
        <h1 className="font-bold xl:text-[53px] lg:text-[50px] md:text-[40px] text-[30px] xl:leading-14 lg:leading-12 leading-8">
          Lavoriamo con i migliori brands
        </h1>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-10">
          <Image src={areaponzio} alt="alt" width={300} height={300} />
          <Image src={areaponzio} alt="alt" width={300} height={300} />
          <Image src={areaponzio} alt="alt" width={300} height={300} />
          <Image src={areaponzio} alt="alt" width={300} height={300} />
        </div>
      </div>
    </div>
  );
}
