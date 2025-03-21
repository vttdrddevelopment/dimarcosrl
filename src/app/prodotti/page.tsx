"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import homebg from "../../../public/bgprodotti.png";

import { IoChevronBackCircle, IoChevronForwardCircle } from "react-icons/io5";
import Link from "next/link";

const images = [
  "/servizio1.jpg",
  "/servizio2.jpg",
  "/servizio3.jpg",
  "/servizio4.jpg",
  "/servizio5.jpg",
  "/servizio6.jpg",
  "/servizio1.jpg",
  "/servizio2.jpg",
  "/servizio3.jpg",
];

export default function page() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const nextImage = (e: any) => {
    e.stopPropagation();
    setPhotoIndex((photoIndex + 1) % images.length);
  };

  const prevImage = (e: any) => {
    e.stopPropagation();
    setPhotoIndex((photoIndex + images.length - 1) % images.length);
  };

  return (
    <div className="font-[family-name:var(--font-plus-jakarta-sans)]">
      <div className="grid grid-rows-[20px_1fr_20px] relative h-[80vh] p-8 pb-20 gap-16 padding">
      <Image src={homebg} alt="alt" layout="fill" objectFit="cover" objectPosition="center"  className="w-full absolute top-0 h-[80vh]"/>
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
      <div className="grid xl:grid-cols-3 grid-cols-1 gap-8 padding py-20">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            width={500}
            height={500}
            className="cursor-pointer rounded-lg shadow-lg"
            onClick={() => {
              setPhotoIndex(index);
              setIsOpen(true);
            }}
          />
        ))}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-gradient-to-br from-transparent from-0% to-50% to-black flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            >
              <button
                onClick={prevImage}
                className="absolute left-10 text-white p-2 bg-black bg-opacity-50 rounded-full"
              >
                <IoChevronBackCircle size={40} />
              </button>
              <motion.img
                src={images[photoIndex]}
                alt="Lightbox Image"
                className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl shadow-red-300"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              />
              <button
                onClick={nextImage}
                className="absolute right-10 text-white p-2 bg-black bg-opacity-50 rounded-full"
              >
                <IoChevronForwardCircle size={40} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
