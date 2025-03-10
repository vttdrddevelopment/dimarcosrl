export default function Unica() {
  return (
    <div className="flex lg:h-[60vh] h-[80vh] flex-col lg:flex-row justify-center gap-10 padding py-10 bg-fixed bg-primary unica">
      <div className="flex flex-col lg:w-1/2 justify-center lg:items-start items-center">
        <h1 className="text-[120px] uppercase text-white font-semibold">
          Unica
        </h1>
        <span className="text-4xl text-center lg:text-start text-white font-bold uppercase leading-10">
          La nuova finestra <br /> di ponzio
        </span>
      </div>
      <div className="relative lg:w-1/2 h-full w-full flex justify-center items-center">
      <iframe
        src="https://player.vimeo.com/video/1064270242"
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
