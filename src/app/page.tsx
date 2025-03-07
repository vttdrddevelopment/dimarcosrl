import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";
import Banner from "./components/home/Banner";
import About from "./components/home/About";
import Services from "./components/home/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <About />
        <Services />
      </main>
      <Footer />
    </>
  );
}
