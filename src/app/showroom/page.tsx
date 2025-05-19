"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import homebg from "../../../public/showroom/showroom17.jpeg";

import { IoChevronBackCircle, IoChevronForwardCircle } from "react-icons/io5";
import Link from "next/link";
import Masonry from "react-masonry-css";

const images = [
  "/showroom/showroom2.jpeg",
  "/showroom/showroom3.jpeg",
  "/showroom/showroom4.jpeg",
  "/showroom/showroom5.jpeg",
  "/showroom/showroom6.jpeg",
  "/showroom/showroom7.jpeg",
  "/showroom/showroom8.jpeg",
  "/showroom/showroom9.jpeg",
  "/showroom/showroom10.jpeg",
  "/showroom/showroom11.jpeg",
  "/showroom/showroom12.jpeg",
  "/showroom/showroom13.jpeg",
  "/showroom/showroom14.jpeg",
  "/showroom/showroom15.jpeg",
  "/showroom/showroom23.jpeg",
  "/showroom/showroom17.jpeg",
  "/showroom/showroom18.jpeg",
  "/showroom/showroom19.jpeg",
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

  const breakpoints = {
    default: 3,
    1200: 2,
    700: 1,
  };

  return (
    <div className="font-[family-name:var(--font-plus-jakarta-sans)]">
      <div className="grid grid-rows-[20px_1fr_20px] relative h-[80vh] p-8 pb-20 gap-16 padding">
        <Image
          src={homebg}
          alt="alt"
          className="w-full absolute top-0 h-[80vh]"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center"
          }} />
        <div className="absolute top-0 w-full h-[80vh] bg-gradient-to-t from-transparent to-red-950 opacity-50 z-10"></div>
        <div className="flex flex-col gap-4 justify-center items-center w-full h-[80vh]">
          <h1 className="text-white font-bold xl:text-[85px] lg:text-[70px] md:text-[50px] text-[40px] z-20 xl:leading-20 lg:leading-16 leading-10">
            Show Room
          </h1>
          <div className="text-white font-semibold text-lg z-20">
            <Link href="/">Home</Link>
            <span> / Show Room </span>
          </div>
        </div>
      </div>
      <div className="padding py-20">
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images.map((src, index) => (
            <div key={index} className="rounded-2xl">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={500}
                height={500}
                className="cursor-pointer rounded-lg shadow-lg mb-4"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
                style={{
                  display: "block",
                  width: "100%",
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </div>
          ))}
        </Masonry>
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
