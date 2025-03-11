'use client'
import Link from "next/link";
import { useEffect } from "react";

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
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-start relative min-h-screen p-8 pb-20 gap-16 padding home bg-fixed">
        <div className="absolute top-0 w-full h-screen bg-gradient-to-b from-red-900 to-gray-800 opacity-50 z-10"></div>
        <main className="flex flex-col gap-8 row-start-2 items-start z-20">
          <div className="flex flex-col w-3/4 gap-5">
            <span className="uppercase font-bold z-20 text-white md:text-base text-sm">
              Transform your home today
            </span>
            <h1 className="text-white font-bold xl:text-[85px] lg:text-[70px] md:text-[50px] text-[40px] z-20 xl:leading-20 lg:leading-16 leading-10">
              Premium windows & doors for every home
            </h1>
            <span className="font-semibold z-20 text-white xl:text-xl md:text-base text-sm">
              Discover a wide range of beautifully crafted windows and doors
              that combine modern design with superior functionality.
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
