"use client";
import Link from "next/link";
import Image from "next/image";
import home from "../../../../public/home2.png";

export default function Banner() {
  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const parallaxElements = document.querySelectorAll(".parallax");
  //       parallaxElements.forEach((element) => {
  //         let scrollPosition = window.pageYOffset;
  //         (element as HTMLElement).style.transform = `translateY(${scrollPosition * -0.5}px)`;
  //       });
  //     };

  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-start relative min-h-screen p-8 pb-20 gap-16 padding">
        <Image
          src={home}
          alt="alt"
          className="w-full absolute top-0 h-screen"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "bottom"
          }} />
        <div className="absolute top-0 w-full h-screen bg-gradient-to-b from-0% to-60% from-transparent to-red-950 opacity-50 z-10 padding"></div>
        <main className="absolute inset-0 flex items-center justify-start">
          <div className="flex flex-col w-full gap-5 padding">
            <h1 className="text-white font-bold xl:text-[85px] lg:text-[70px] md:text-[50px] text-[40px] z-20 xl:leading-20 lg:leading-16 leading-10">
              Dal 1970: qualità e attenzione per offrirti il meglio
            </h1>
            <span className="font-semibold z-20 text-white xl:text-xl md:text-base text-sm">
              Funzionalità e design senza compromessi per abitazioni, uffici,
              edilizia pubblica e strutture industriali
            </span>
            <div className="flex flex-row items-center gap-10">
              <Link
                href="/contatti"
                className="px-3 py-3 bg-primary text-white font-semibold z-20 md:text-base text-sm"
              >
                Contattaci
              </Link>
              <Link
                href="/lavori"
                className="px-3 py-3 bg-white text-primary font-semibold z-20 md:text-base text-sm"
              >
                Scopri Di Più
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
