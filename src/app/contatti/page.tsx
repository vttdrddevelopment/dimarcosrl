"use client";
import Link from "next/link";
import Image from "next/image";

import homebg from "../../../public/bgprodotti.png";
import contatti1 from "../../../public/contatti1.jpg";
import contatti2 from "../../../public/contatti2.jpg";
import contatti3 from "../../../public/contatti3.jpg";
import FAQ from "../components/home/FAQ";
import { useState } from "react";
import { ImSpinner } from "react-icons/im";
import { div } from "framer-motion/client";

export default function page() {
  const [nome, setnome] = useState("");
  const [cognome, setcognome] = useState("");
  const [mail, setmail] = useState("");
  const [telefono, settelefono] = useState("");
  const [text, settext] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailInviata, setEmailInviata] = useState(false);

  const inviaEmail = async () => {
    setLoading(true);
    try {
      let data = {
        nome: nome,
        cognome: cognome,
        mail: mail,
        telefono: telefono,
        text: text,
      };
      fetch('/api/contatti/sendEmail', {
          method: 'POST',
          headers: {
              'Accept': 'application/json, text/plain, *!/!*',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      }).then(res => {
        setLoading(false);
        setEmailInviata(true)
      })

      setTimeout(() => {
        setEmailInviata(false)
      }, 4000);
      setnome("");
      setcognome("");
      setmail("");
      settelefono("");
      settext("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="font-[family-name:var(--font-plus-jakarta-sans)] relative">
        <div className="grid grid-rows-[20px_1fr_20px] relative h-[80vh] p-8 pb-20 gap-16 padding">
          <Image
            src={homebg}
            alt="alt"
            className="w-full absolute top-0 h-[80vh]"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
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
            <Image
              src={contatti1}
              alt="alt"
              width={400}
              height={400}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
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
            <Image
              src={contatti2}
              alt="alt"
              width={400}
              height={400}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <span className="font-extrabold text-xl">Email: </span>
            <Link
              href="mailto:info@dimarcoinfissi.it"
              className="hover:underline"
            >
              info@dimarcoinfissi.it
            </Link>
          </div>
          <div className="flex flex-col gap-3 items-start">
            <Image
              src={contatti3}
              alt="alt"
              width={400}
              height={400}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <span className="font-extrabold text-xl">Telefono: </span>
            <Link href="tel:0872927687" className="hover:underline">
              0872 982669
            </Link>
          </div>
        </div>
        <div className="xl:relative w-full xl:h-[90vh] pb-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5918.703259525847!2d14.304169!3d42.121355!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1330f97eaf4732fd%3A0x1d18aae22aa2e2a3!2sDi%20Marco%20Srl!5e0!3m2!1sen!2sit!4v1747488867486!5m2!1sen!2sit"
            width="600"
            height="450"
            className="w-full xl:h-[90vh] h-[60vh] xl:absolute xl:top-0"
            loading="lazy"
          ></iframe>
          <div className="xl:absolute border border-primary rounded shadow-2xl flex flex-col gap-4 items-center xl:bottom-1/2 xl:px-10 xl:py-20 py-10 xl:translate-y-1/2 xl:right-20 bg-white lg:w-1/3 h-[70vh]">
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
                  value={nome}
                  onChange={(e) => setnome(e.currentTarget.value)}
                />
                <input
                  type="text"
                  name="cognome"
                  id="cognome"
                  placeholder="Cognome"
                  className="border border-gray-200 p-3 text-black font-semibold"
                  value={cognome}
                  onChange={(e) => setcognome(e.currentTarget.value)}
                />
              </div>
              <div className="flex xl:flex-row flex-col xl:gap-10 gap-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="border border-gray-200 p-3 text-black font-semibold"
                  value={mail}
                  onChange={(e) => setmail(e.currentTarget.value)}
                />
                <input
                  type="tel"
                  name="telefono"
                  id="telefono"
                  placeholder="Telefono"
                  className="border border-gray-200 p-3 text-black font-semibold"
                  value={telefono}
                  onChange={(e) => settelefono(e.currentTarget.value)}
                />
              </div>

              <textarea
                id="messaggio"
                name="messaggio"
                placeholder="Messaggio"
                className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none resize-none min-h-[120px]"
                value={text}
                onChange={(e) => settext(e.currentTarget.value)}
              />
              <button
                className="px-3 py-3 bg-primary hover:cursor-pointer hover:opacity-80 flex flex-row justify-center items-center gap-4 text-white font-semibold z-20 md:text-base text-sm"
                onClick={() => {
                  inviaEmail();
                }}
              >
                <span>Invia</span>
                {loading && (
                  <ImSpinner className="w-8 h-8 text-white animate-spin" />
                )}
              </button>
              {emailInviata &&
                <div role="alert" className="alert alert-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Email Inviata</span>
              </div>
              }
              
            </div>
          </div>
        </div>
        <FAQ />
      </div>
    </>
  );
}
