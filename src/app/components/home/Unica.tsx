export default function Unica() {
  return (
    <div className="flex h-[60vh] flex-col lg:flex-row justify-center gap-10 padding py-10 bg-fixed bg-primary unica">
      <div className="flex flex-col w-1/2 justify-center">
        <h1 className="text-[120px] uppercase text-white font-semibold">
          Unica
        </h1>
        <span className="text-4xl text-white font-bold uppercase leading-10">
          La nuova finestra <br /> di ponzio
        </span>
      </div>
      <div className="relative lg:w-1/2 flex justify-center items-center">
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
