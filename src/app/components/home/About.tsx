import Image from "next/image";
import about1 from "../../../../public/about1.jpg";
import { PiWindowsLogoFill } from "react-icons/pi";
import { LiaWindows } from "react-icons/lia";

import Link from "next/link";
import { AiOutlineWindows } from "react-icons/ai";

export default function About() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center gap-10 padding py-10">
        <div className="lg:w-1/2 flex justify-center items-center relative pt-10">
          <Image
            src={about1}
            alt="alt"
            width={400}
            height={500}
            className="rounded-t-full z-10"
          />
          <div className="absolute bottom-10 right-20 z-20 gap-2 flex flex-col border-10 border-white rounded-t-full items-center p-10 bg-primary">
            <span className="text-5xl font-bold text-white">70%</span>
            <span className="font-bold text-white text-center">
              Happy <br /> Customer
            </span>
          </div>
          <PiWindowsLogoFill
            size={220}
            className="absolute top-0 left-0 z-0 text-gray-200"
          />
        </div>
        <div className="flex flex-col gap-4 justify-evenly lg:w-1/2">
          <span className="uppercase font-bold text-primary md:text-base text-sm">
            Chi Siamo
          </span>
          <h1 className="font-bold xl:text-[53px] lg:text-[50px] md:text-[40px] text-[30px] xl:leading-14 lg:leading-12 leading-8">
            Expertise in windows & door for every style
          </h1>
          <span className="md:text-base text-sm">
            Partner with a company dedicated to excellence in window and door
            installations, ensuring each project is handled with precision and
            care. Our commitment is to provide installations that not only meet
            but exceed your expectations.
          </span>
          <div className="flex flex-col gap-4">
            <div className="flex lg:flex-row flex-col lg:items-center gap-4 justify-center">
              <LiaWindows size={80} className="text-primary" />
              <div className="flex flex-col gap-2">
                <span className="lg:text-3xl text-2xl font-bold">
                  Our Mission
                </span>
                <span className="lg:text-base text-sm">
                  We aim to transform homes and businesses with high-quality
                  window and door solutions that enhance aesthetics, improve
                  energy efficiency.
                </span>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col lg:items-center gap-4 justify-center">
              <LiaWindows size={80} className="text-primary" />
              <div className="flex flex-col gap-2">
                <span className="lg:text-3xl text-2xl font-bold">
                  Our Vision
                </span>
                <span className="lg:text-base text-sm">
                  We believe in integrity and sustainability. Our focus is on
                  delivering not just products but solutions that improve homes,
                  reduce energy.
                </span>
              </div>
            </div>
            <Link
              href="/chisiamo"
              className="px-3 py-3 w-[150px] text-center bg-primary text-white font-semibold z-20 md:text-base text-sm"
            >
              Scopri Di Più
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:px-50 px-10 lg:py-5">
        <hr />
      </div>
      <div className="grid lg:grid-cols-6 grid-cols-3 gap-10 padding py-10">
        <div className="flex flex-col gap-2 text-center items-center">
          <AiOutlineWindows size={50} className="text-primary" />
          <span className="font-bold lg:text-lg text-sm">
            Energy Saving Technologies
          </span>
        </div>
        <div className="flex flex-col gap-2 text-center items-center">
          <AiOutlineWindows size={50} className="text-primary" />
          <span className="font-bold lg:text-lg text-sm">
            Excellent Sound Insulation
          </span>
        </div>
        <div className="flex flex-col gap-2 text-center items-center">
          <AiOutlineWindows size={50} className="text-primary" />
          <span className="font-bold lg:text-lg text-sm">
            High Light Trans-Mitions
          </span>
        </div>
        <div className="flex flex-col gap-2 text-center items-center">
          <AiOutlineWindows size={50} className="text-primary" />
          <span className="font-bold lg:text-lg text-sm">
            Durability 10 Years Warranty
          </span>
        </div>
        <div className="flex flex-col gap-2 text-center items-center">
          <AiOutlineWindows size={50} className="text-primary" />
          <span className="font-bold lg:text-lg text-sm">
            Eco - Friendly Materials
          </span>
        </div>
        <div className="flex flex-col gap-2 text-center items-center">
          <AiOutlineWindows size={50} className="text-primary" />
          <span className="font-bold lg:text-lg text-sm">
            Modern Thoughtful Design
          </span>
        </div>
      </div>
    </>
  );
}
