'use client'
import Link from "next/link";
import { useEffect } from "react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import home from "../../../../public/home.png"

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
      <ParallaxBanner
      layers={[
        { image: '/home.png', speed: -10},
      ]}
      className="aspect-[2/1] h-screen"
    >
      <div className="absolute top-0 w-full h-screen bg-gradient-to-b from-red-900 to-gray-800 opacity-50 z-10 padding"></div>
        <main className="absolute inset-0 flex items-center justify-start">
          <div className="flex flex-col w-3/4 gap-5 padding">
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
    </ParallaxBanner>
    </>
  );
}
