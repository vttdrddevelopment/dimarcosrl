"use client"
import Banner from "./components/home/Banner";
import About from "./components/home/About";
import Services from "./components/home/Services";
import LavoraConNoi from "./components/home/LavoraConNoi";
import Galleria from "./components/home/Galleria";
import FAQ from "./components/home/FAQ";
import Unica from "./components/home/Unica";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <ParallaxProvider>
      <main className="font-[family-name:var(--font-plus-jakarta-sans)]">
        <Banner />
        <About />
        <Services />
        <LavoraConNoi/>
        <Unica/>
        <Galleria/>
        <FAQ/>
      </main>
    </ParallaxProvider>
  );
}
