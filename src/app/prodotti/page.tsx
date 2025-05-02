"use client";

import React, { useState } from "react";
import Image from "next/image";

import infissiAlluminio from "../../../public/prodotti/infissiAlluminiopng.jpg";
import infissiAlluminioScorrevoli from "../../../public/prodotti/infissiAlluminioScorrevoli.png";
import infissiPVC from "../../../public/prodotti/infissiPVC.png";
import persiane from "../../../public/prodotti/persiane.png";
import tapparelle from "../../../public/prodotti/tapparelle.jpg";
import scuri from "../../../public/prodotti/scuri.png";
import frangisole from "../../../public/prodotti/frangisole.jpg";
import portoni from "../../../public/prodotti/portoni.png";
import sezionali from "../../../public/prodotti/sezionali.jpg";
import basculanti from "../../../public/prodotti/basculanti.jpg";
import serrande from "../../../public/prodotti/serrande.jpg";
import homebg from "../../../public/prodotti/sezionali3.jpg";

import Link from "next/link";

export default function page() {
  return (
    <div className="font-[family-name:var(--font-plus-jakarta-sans)]">
      <div className="grid grid-rows-[20px_1fr_20px] relative h-[80vh] p-8 pb-20 gap-16 padding">
        <Image
          src={homebg}
          alt="alt"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="w-full absolute top-0 h-[80vh]"
        />
        <div className="absolute top-0 w-full h-[80vh] bg-gradient-to-t from-transparent to-red-950 opacity-50 z-10"></div>
        <div className="flex flex-col gap-4 justify-center items-center w-full h-[80vh]">
          <h1 className="text-white font-bold xl:text-[85px] lg:text-[70px] md:text-[50px] text-[40px] z-20 xl:leading-20 lg:leading-16 leading-10">
            Prodotti
          </h1>
          <div className="text-white font-semibold text-lg z-20">
            <Link href="/">Home</Link>
            <span> / Prodotti </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center padding py-20 lg:text-start text-center">
        <h1 className="w-full font-bold xl:text-[85px] lg:text-[70px] md:text-[50px] text-[40px] z-20 xl:leading-20 lg:leading-16 leading-10 lg:mb-25 mb-10 uppercase text-center">
          Infissi
        </h1>
        <div className="flex lg:flex-row flex-col items-center justify-between gap-10">
          <div className="flex flex-col gap-5">
            <h3 className="font-bold xl:text-[53px] lg:text-[50px] md:text-[40px] text-[30px] xl:leading-14 lg:leading-12 leading-8 capitalize">
              Infissi in alluminio a taglio termico
            </h3>
            <span className="md:text-base text-sm">
              Gli infissi a taglio termico garantiscono un eccellente isolamento
              termico grazie alle barre in poliammide, riducendo il passaggio di
              calore e freddo tra l’interno e l’esterno. Questo offre maggiore
              comfort e un notevole risparmio energetico. I valori termici vanno
              da un minimo di 2.00 a un massimo di 1,00 U (W/m²K), variabili in
              base alla zona climatica e alla progettazione. Personalizzabili
              con materiali di alta qualità, come acciaio inox verniciato o
              cromo satinato, gli infissi sono realizzati con precisione
              artigianale e attrezzature moderne, rispettando le normative di
              sicurezza e certificazione CE.
            </span>
          </div>
          <Image
            src={infissiAlluminio}
            alt="infissi alluminio"
            width={600}
            height={600}
            className="rounded-xl shadow-2xl shadow-red-300"
          />
        </div>
        <div className="flex lg:flex-row flex-col items-center justify-between gap-10 mt-20">
          <Image
            src={infissiAlluminioScorrevoli}
            alt="infissi alluminio scorrevoli"
            width={600}
            height={600}
            className="rounded-xl shadow-2xl shadow-red-300 lg:flex hidden"
          />
          <div className="flex flex-col gap-5">
            <h3 className="font-bold xl:text-[53px] lg:text-[50px] md:text-[40px] text-[30px] xl:leading-14 lg:leading-12 leading-8 capitalize">
              Infissi scorrevoli in alluminio
            </h3>
            <span className="md:text-base text-sm">
              Eleganza, luce e design minimal. Grandi vetrate con finiture
              personalizzabili, dai toni naturali a quelli metallici. Offriamo
              soluzioni con eccellenti performance termiche e acustiche, per un
              risparmio energetico e maggiore comfort abitativo. Gli scorrevoli
              in alluminio trasformano ogni spazio, dando nuova vita a ambienti
              neutri o datati. Sostituire vecchi infissi con scorrevoli Ponzio è
              la chiave per un impatto visivo e ambientale positivo.
            </span>
          </div>
          <Image
            src={infissiAlluminioScorrevoli}
            alt="infissi alluminio scorrevoli"
            width={600}
            height={600}
            className="rounded-xl shadow-2xl shadow-red-300 lg:hidden flex mb-10"
          />
        </div>
        <div className="flex lg:flex-row flex-col items-center justify-between gap-10">
          <div className="flex flex-col gap-5">
            <h3 className="font-bold xl:text-[53px] lg:text-[50px] md:text-[40px] text-[30px] xl:leading-14 lg:leading-12 leading-8 capitalize">
              Infissi in PVC
            </h3>
            <span className="md:text-base text-sm">
              Tecnica e design in perfetta armonia, con modelli, versioni e
              colori adattabili a ogni stile architettonico. La finestra Living
              MD, con profilo a 7 camere isolanti e 3 guarnizioni, offre
              prestazioni eccellenti per il massimo comfort abitativo, così come
              quella CT70, che invece è a 5 camere e con un telaio leggermente
              più sottile. Certificate da istituti indipendenti, garantiscono
              alti standard di permeabilità all'aria, tenuta all'acqua,
              resistenza al vento, isolamento termico e acustico, e sicurezza.
              Ogni infisso è conforme alle normative CE, assicurando qualità e
              affidabilità.
            </span>
          </div>
          <Image
            src={infissiPVC}
            alt="infissi pvc"
            width={600}
            height={600}
            className="rounded-xl shadow-2xl shadow-red-300"
          />
        </div>
        <div className="w-full flex flex-col gap-20">
          <h1 className="w-full font-bold xl:text-[85px] lg:text-[70px] md:text-[50px] text-[40px] z-20 xl:leading-20 lg:leading-16 leading-10 lg:mt-25 mt-16 uppercase text-center">
            Sistemi Oscuranti
          </h1>
          <span className="w-full text-center md:text-base text-sm">
            Ricerca stilistica moderna, prestazioni termiche, acustiche e di
            sicurezza al top. Offriamo persiane a lamelle fisse o orientabili,
            frangisole manuali e motorizzati, tapparelle coibentate e scuri in
            alluminio a taglio termico, tutti personalizzabili per adattarsi
            perfettamente al tuo stile architettonico. Le nostre soluzioni
            proteggono dalla luce e dal calore, garantendo sicurezza contro le
            intrusioni. Con materiali innovativi e cura artigianale, assicuriamo
            eleganza, resistenza e praticità, il tutto in una gamma di colori
            durevoli e a bassa manutenzione. Una scelta intelligente per comfort
            e stile abitativo.
          </span>
          <div className="flex lg:flex-row flex-col items-center gap-1s0 justify-between">
            <h3 className="font-bold xl:text-[53px] lg:text-[50px] md:text-[40px] text-[30px] xl:leading-14 lg:leading-12 leading-8 capitalize lg:mb-0 mb-10">
              Persiane
            </h3>
            <Image
              src={persiane}
              alt="persiane"
              width={900}
              height={600}
              className="rounded-xl shadow-2xl shadow-red-300"
            />
          </div>
          <div className="flex lg:flex-row flex-col items-center gap-10 justify-between">
            <Image
              src={tapparelle}
              alt="tapparelle"
              width={900}
              height={600}
              className="rounded-xl shadow-2xl shadow-red-300 lg:flex hidden"
            />
            <h3 className="font-bold xl:text-[53px] lg:text-[50px] md:text-[40px] text-[30px] xl:leading-14 lg:leading-12 leading-8 capitalize">
              Tapparelle Coibentate
            </h3>
            <Image
              src={tapparelle}
              alt="tapparelle"
              width={900}
              height={600}
              className="rounded-xl shadow-2xl shadow-red-300 lg:hidden flex"
            />
          </div>
          <div className="flex lg:flex-row flex-col items-center gap-10 justify-between">
            <h3 className="font-bold xl:text-[53px] lg:text-[50px] md:text-[40px] text-[30px] xl:leading-14 lg:leading-12 leading-8 capitalize">
              Scuri In Alluminio
            </h3>
            <Image
              src={scuri}
              alt="scuri"
              width={900}
              height={400}
              className="rounded-xl shadow-2xl shadow-red-300"
            />
          </div>
          <div className="flex lg:flex-row flex-col items-center gap-10 justify-between">
            <Image
              src={frangisole}
              alt="frangisole"
              width={900}
              height={400}
              className="rounded-xl shadow-2xl shadow-red-300 lg:flex hidden"
            />
            <h3 className="font-bold xl:text-[53px] lg:text-[50px] md:text-[40px] text-[30px] xl:leading-14 lg:leading-12 leading-8 capitalize">
              Frangisole e Zanzariere
            </h3>
            <Image
              src={frangisole}
              alt="frangisole"
              width={900}
              height={400}
              className="rounded-xl shadow-2xl shadow-red-300 lg:hidden flex"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-20">
          <h1 className="w-full font-bold xl:text-[85px] lg:text-[70px] md:text-[50px] text-[40px] z-20 xl:leading-20 lg:leading-16 leading-10 mt-25 uppercase text-center">
            Sitsemi Di Chiusura per garage
          </h1>
          <span className="w-full text-center md:text-base text-sm">
            Offriamo porte basculanti, sezionali e serrande adatte a spazi di
            ogni dimensione e conformazione. Le sezionali, con pannelli
            divisibili, permettono di ottimizzare lo spazio, mentre le serrande
            Rollmatic, versatili e compatte, si adattano a diverse strutture
            architettoniche. Oltre alle chiusure residenziali, proponiamo
            sistemi industriali progettati per resistere a cicli produttivi
            intensi e garantire efficienza. Tutti i portoni sono
            personalizzabili, anche con pannelli coibentati, per ottenere
            comfort termico e accedere alle agevolazioni fiscali sul risparmio
            energetico.
          </span>
          <div className="flex lg:flex-row flex-col items-center gap-1s0 justify-between">
            <h3 className="font-bold xl:text-[53px] lg:text-[50px] md:text-[40px] text-[30px] xl:leading-14 lg:leading-12 leading-8 capitalize lg:mb-0 mb-10">
              sezionali
            </h3>
            <Image
              src={sezionali}
              alt="sezionali"
              width={900}
              height={600}
              className="rounded-xl shadow-2xl shadow-red-300"
            />
          </div>
          <div className="flex lg:flex-row flex-col items-center gap-10 justify-between">
            <Image
              src={basculanti}
              alt="basculanti"
              width={900}
              height={600}
              className="rounded-xl shadow-2xl shadow-red-300 lg:flex hidden"
            />
            <h3 className="font-bold xl:text-[53px] lg:text-[50px] md:text-[40px] text-[30px] xl:leading-14 lg:leading-12 leading-8 capitalize">
              basculanti
            </h3>
            <Image
              src={basculanti}
              alt="basculanti"
              width={900}
              height={600}
              className="rounded-xl shadow-2xl shadow-red-300 lg:hidden flex"
            />
          </div>
          <div className="flex lg:flex-row flex-col items-center gap-10 justify-between">
            <h3 className="font-bold xl:text-[53px] lg:text-[50px] md:text-[40px] text-[30px] xl:leading-14 lg:leading-12 leading-8 capitalize">
              serrande
            </h3>
            <Image
              src={serrande}
              alt="serrande"
              width={900}
              height={400}
              className="rounded-xl shadow-2xl shadow-red-300"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-20">
          <h1 className="w-full font-bold xl:text-[85px] lg:text-[70px] md:text-[50px] text-[40px] z-20 xl:leading-20 lg:leading-16 leading-10 mt-25 uppercase text-center">
            PORTONI
          </h1>
          <div className="flex lg:flex-row flex-col items-center gap-1s0 justify-between">
            <div className="flex flex-col gap-10">
              <h3 className="font-bold xl:text-[53px] lg:text-[50px] md:text-[40px] text-[30px] xl:leading-14 lg:leading-12 leading-8 capitalize">
                Portoni e blindati in alluminio coibendato
              </h3>
              <span className="w-full md:text-base text-sm lg:mb-0 mb-10">
                Le nostre porte di ingresso in alluminio offrono massima
                sicurezza, tecnologia avanzata, isolamento termico eccellente e
                risparmio energetico, il tutto in un’estetica moderna e
                personalizzabile. Disponibili in un’ampia gamma di pannelli,
                colori e soluzioni per adattarsi ad ogni stile. Realizzate con
                materiali di altissima qualità e curate nei minimi dettagli,
                combinano prestazioni superiori a un look unico e originale.
                Ideali per chi cerca robustezza, eleganza e comfort abitativo,
                oltre che massima sicurezza.
              </span>
            </div>
            <Image
              src={portoni}
              alt="portoni"
              width={500}
              height={600}
              className="rounded-xl shadow-2xl shadow-red-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
