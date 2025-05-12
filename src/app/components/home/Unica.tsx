import Image from "next/legacy/image";
import bgUnica from "../../../../public/background-unica.jpg"

export default function Unica() {
  return (
    <div className="flex lg:h-[60vh] h-[80vh] flex-col lg:flex-row relative justify-center gap-10 padding py-10">
      <Image src={bgUnica} alt="alt" layout="fill" objectFit="cover"  className="w-full absolute top-0 lg:h-[60vh] h-[80vh]"/>
      <div className="flex flex-col lg:w-1/2 justify-center lg:items-start items-center">
        <h1 className="xl:text-[120px] lg:text-[100px] md:text-[80px] text-[60px] uppercase text-white font-semibold z-20">
          Unica
        </h1>
        <span className="z-20 xl:text-4xl lg:text-3xl md:text-2xl text-xl text-center lg:text-start text-white font-bold uppercase xl:leading-10 lg:leading-9 md:leading-8 leading-6">
          La nuova finestra <br /> di ponzio
        </span>
      </div>
      <div className="relative shadow-red-400 rounded-3xl shadow-2xl lg:w-1/2 h-full w-full flex justify-center items-center">
      <iframe
        src="https://player.vimeo.com/video/1064584013"
        title="finestra unica"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    </div>
  );
}
