import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-start relative min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] home">
        <div className="absolute top-0 w-full h-screen bg-red-950 opacity-60 z-10"></div>
        <main className="flex flex-col gap-8 row-start-2 items-start px-20">
          <div className="flex flex-col w-2/3 gap-5">
            <span className="uppercase font-bold z-20 text-white">Transform your home today</span>
            <h1 className="text-white font-bold text-[90px] z-20 leading-20">Premium windows & doors for every home</h1>
            <span className="font-semibold z-20 text-white text-xl">Discover a wide range of beautifully crafted windows and doors that combine modern design with superior functionality.</span>
            <div className="flex flex-row items-center gap-10">
              <Link href="/contatti" className="px-6 py-4 bg-primary text-white font-semibold z-20">Contattaci</Link>
              <Link href="/lavori" className="px-6 py-4 bg-white text-primary font-semibold z-20">Scopri Di Più</Link>
            </div>
          </div>
        </main>
      </div>
      <Footer/>
    </>
  );
}
