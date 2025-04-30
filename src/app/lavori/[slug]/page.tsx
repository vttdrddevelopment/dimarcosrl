"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronBackCircle, IoChevronForwardCircle } from "react-icons/io5";
import { lavori, Lavoro } from "../../data/lavori";
import Masonry from 'react-masonry-css';

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [lavoroSelezionato, setlavoroSelezionato] = useState<Lavoro>({
    id: 0,
    nome: "",
    mainImage: "",
    images: []
  } as Lavoro);
  useEffect(() => {
    params.then(res => {
      setlavoroSelezionato(lavori.filter((l) => l.id === parseInt(res.slug))[0]);
    });
  }, [params]); // Aggiungi params come dipendenza per rieseguire l'effetto se cambia

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const nextImage = (e: any) => {
    e.stopPropagation();
    setPhotoIndex((photoIndex + 1) % lavoroSelezionato.images.length);
  };

  const prevImage = (e: any) => {
    e.stopPropagation();
    setPhotoIndex(
      (photoIndex + lavoroSelezionato.images.length - 1) %
        lavoroSelezionato.images.length
    );
  };

  const breakpoints = {
    default: 3,
    1200: 2,
    700: 1
  };

  return (
    <>
      <div className="py-20 padding">
        {lavoroSelezionato.images.length > 0 ? (
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {lavoroSelezionato.images.map((src, index) => (
              <div key={index} className="rounded-2xl">
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  width={500}
                  height={500}
                  className="cursor-pointer rounded-lg shadow-lg mb-4"
                  style={{ display: 'block', width: '100%' }}
                  onClick={() => {
                    setPhotoIndex(index);
                    setIsOpen(true);
                  }}
                />
              </div>
            ))}
          </Masonry>
        ) : (
          <p>Nessuna immagine disponibile per questo lavoro.</p>
        )}
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
                src={lavoroSelezionato.images[photoIndex]}
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
    </>
  );
}