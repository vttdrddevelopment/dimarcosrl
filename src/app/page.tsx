import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";
import Banner from "./components/home/Banner";
import About from "./components/home/About";
import Services from "./components/home/Services";
import LavoraConNoi from "./components/home/LavoraConNoi";
import Galleria from "./components/home/Galleria";
import FAQ from "./components/home/FAQ";
import Unica from "./components/home/Unica";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <About />
        <Services />
        <LavoraConNoi/>
        <Unica/>
        <Galleria/>
        <FAQ/>
      </main>
      <Footer />
    </>
  );
}
