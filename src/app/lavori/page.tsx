
import Image from "next/image";

import homebg from "../../../public/bgprodotti.png";
import lavoro1 from "../../../public/servizio1.jpg";

import Link from "next/link";
import { lavori } from "../data/lavori";


const Lavori = () => {
  return (
    <div className="font-[family-name:var(--font-plus-jakarta-sans)]">
      <div className="grid grid-rows-[20px_1fr_20px] relative h-[80vh] p-8 pb-20 gap-16 padding">
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
        <div className="absolute top-0 w-full h-[80vh] bg-gradient-to-t from-transparent to-red-950 opacity-50 z-10"></div>
        <div className="flex flex-col gap-4 justify-center items-center w-full h-[80vh]">
          <h1 className="text-white font-bold xl:text-[85px] lg:text-[70px] md:text-[50px] text-[40px] z-20 xl:leading-20 lg:leading-16 leading-10">
            Lavori
          </h1>
          <div className="text-white font-semibold text-lg z-20">
            <Link href="/">Home</Link>
            <span> / Lavori </span>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 items-center gap-10 my-10 z-20 padding">
        {lavori.map((l) => {
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
              <span className="text-white font-bold text-xl z-30 absolute bottom-10 px-5">
                {l.nome}
              </span>
              <div className="absolute top-0 bg-black opacity-35 h-[500px] w-full"></div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Lavori
