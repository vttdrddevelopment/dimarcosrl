import Link from "next/link";
import Image from "next/legacy/image";

import homebg from "../../../public/bgprodotti.png";
import contatti1 from "../../../public/contatti1.jpg";
import contatti2 from "../../../public/contatti2.jpg";
import contatti3 from "../../../public/contatti3.jpg";
import FAQ from "../components/home/FAQ";

export default function page() {
  return (
    <div className="font-[family-name:var(--font-plus-jakarta-sans)]">
      <div className="grid grid-rows-[20px_1fr_20px] relative h-[80vh] p-8 pb-20 gap-16 padding">
      <Image src={homebg} alt="alt" layout="fill" objectFit="cover" objectPosition="center"  className="w-full absolute top-0 h-[80vh]"/>
      <div className="absolute top-0 w-full h-[80vh] bg-gradient-to-t from-transparent to-red-950 opacity-50 z-10"></div>
        <div className="flex flex-col gap-4 justify-center items-center w-full h-[80vh]">
          <h1 className="text-white font-bold xl:text-[85px] lg:text-[70px] md:text-[50px] text-[40px] z-20 xl:leading-20 lg:leading-16 leading-10">
            Contatti
          </h1>
          <div className="text-white font-semibold text-lg z-20">
            <Link href="/">Home</Link>
            <span> / Contatti </span>
          </div>
        </div>
      </div>
      <div className="w-full py-10 padding flex flex-col gap-4 justify-center items-center">
        <span className="uppercase font-bold text-primary md:text-base text-sm">
          contattaci
        </span>
        <h1 className="font-bold text-center xl:text-[53px] lg:text-[50px] md:text-[40px] text-[30px] xl:leading-14 lg:leading-12 leading-8">
          Felici di rispondere alle tue domande
        </h1>
      </div>
      <div className="grid xl:grid-cols-3 grid-cols-1 gap-10 padding pb-20">
        <div className="flex flex-col gap-3 items-start justify-center">
          <Image src={contatti1} alt="alt" width={400} height={400} />
          <span className="font-extrabold text-xl">Indirizzo: </span>
          <Link
            className="hover:underline"
            href="https://maps.app.goo.gl/8GcaRzc337HLzfiBA"
            target="blank"
          >
            Di Marco Srl, Via Selva Piana, 57, 66043 <br /> Casoli CH
          </Link>
        </div>
        <div className="flex flex-col gap-3 items-start">
          <Image src={contatti2} alt="alt" width={400} height={400} />
          <span className="font-extrabold text-xl">Email: </span>
          <Link href="mailto:info@dimarcosrl.it" className="hover:underline">
            info@dimarcosrl.it
          </Link>
          <Link href="mailto:info@dimarcosrl.it" className="hover:underline">
            info@dimarcosrl.it
          </Link>
        </div>
        <div className="flex flex-col gap-3 items-start">
          <Image src={contatti3} alt="alt" width={400} height={400} />
          <span className="font-extrabold text-xl">Telefono: </span>
          <Link href="tel:0872927687" className="hover:underline">
            +39 0872 92 76 87
          </Link>
          <Link href="tel:3297875231" className="hover:underline">
            +39 329 78 75 231
          </Link>
        </div>
      </div>
      <div className="xl:relative w-full xl:h-[90vh] pb-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d47349.63158281101!2d14.26296909345377!3d42.1213476310926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x1330f97eaf4732fd%3A0x1d18aae22aa2e2a3!2sVia%20Selva%20Piana%2C%2057%2C%2066043%20Casoli%20CH!3m2!1d42.121355!2d14.3041685!5e0!3m2!1sen!2sit!4v1742375839748!5m2!1sen!2sit"
          loading="lazy"
          className="w-full xl:h-[90vh] h-[60vh] xl:absolute xl:top-0"
          title="mappa"
        ></iframe>
        <div className="xl:absolute flex flex-col gap-4 items-center xl:bottom-1/2 xl:px-10 xl:py-20 py-10 xl:translate-y-1/2 xl:right-20 bg-white lg:w-1/3 h-[70vh]">
          <span className="uppercase font-bold text-primary md:text-base text-sm">
            contattaci
          </span>
          <h1 className="font-bold text-center xl:text-[53px] lg:text-[50px] md:text-[40px] text-[30px] xl:leading-14 lg:leading-12 leading-8">
            Inviaci una mail
          </h1>
          <div className="flex flex-col gap-6 mt-6 xl:w-full w-3/4">
            <div className="flex xl:flex-row flex-col xl:gap-10 gap-2">
              <input
                type="text"
                name="nome"
                id="nome"
                placeholder="Nome"
                className="border border-gray-200 p-3 text-black font-semibold"
              />
              <input
                type="text"
                name="cognome"
                id="cognome"
                placeholder="Cognome"
                className="border border-gray-200 p-3 text-black font-semibold"
              />
            </div>
            <div className="flex xl:flex-row flex-col xl:gap-10 gap-2">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="border border-gray-200 p-3 text-black font-semibold"
              />
              <input
                type="tel"
                name="telefono"
                id="telefono"
                placeholder="Telefono"
                className="border border-gray-200 p-3 text-black font-semibold"
              />
            </div>

            <textarea
              id="messaggio"
              name="messaggio"
              placeholder="Messaggio"
              className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none resize-none min-h-[120px]"
            />
            <button className="px-3 py-3 bg-primary text-white font-semibold z-20 md:text-base text-sm">
              Invia
            </button>
          </div>
        </div>
      </div>
      <FAQ />
    </div>
  );
}
