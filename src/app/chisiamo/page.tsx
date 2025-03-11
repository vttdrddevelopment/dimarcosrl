import React from "react";
import Link from "next/link";
import Image from "next/image";
import team1 from "../../../public/team1.jpg";
import chisiamo2 from "../../../public/chisiamo2.jpg";
import chisiamo3 from "../../../public/chisiamo3.jpg";
import { FaEye, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import {
  IoCheckmarkDoneCircle,
  IoDiamondOutline,
  IoEyeOutline,
} from "react-icons/io5";
import { GiDiceTarget } from "react-icons/gi";
import { CgLayoutGridSmall } from "react-icons/cg";
import { BiSolidGrid } from "react-icons/bi";
import LavoraConNoi from "../components/home/LavoraConNoi";

export default function ChiSiamo() {
  return (
    <div className="font-[family-name:var(--font-plus-jakarta-sans)]">
      <div className="grid grid-rows-[20px_1fr_20px] relative h-[50vh] p-8 pb-20 gap-16 padding chisiamo bg-fixed">
        <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-red-900 to-gray-800 opacity-50 z-10"></div>
        <div className="flex flex-col gap-4 justify-center items-center w-full h-[50vh]">
          <h1 className="text-white font-bold xl:text-[85px] lg:text-[70px] md:text-[50px] text-[40px] z-20 xl:leading-20 lg:leading-16 leading-10">
            Chi Siamo
          </h1>
          <div className="text-white font-semibold text-lg z-20">
            <Link href="/">Home</Link>
            <span> / Chi Siamo </span>
          </div>
        </div>
      </div>
      <div className="w-full py-10 padding flex flex-col justify-center">
        <div className="flex lg:flex-row flex-col justify-between items-center z-20">
          <div className="flex flex-col gap-4 justify-evenly lg:w-1/2">
            <span className="uppercase font-bold text-primary md:text-base text-sm">
              Il nostro team
            </span>
            <h1 className="font-bold xl:text-[53px] lg:text-[50px] md:text-[40px] text-[30px] xl:leading-14 lg:leading-12 leading-8">
              Incontra gli esperti
            </h1>
          </div>
          <span className="md:text-base text-sm lg:w-1/2 mt-6 lg:mt-0">
            Partner with a company dedicated to excellence in window and door
            installations, ensuring each project is handled with precision and
            care.
          </span>
        </div>
      </div>
      <div className="grid xl:grid-cols-3 grid-cols-1 gap-4 padding pb-20">
        <div className="flex flex-col gap-3 items-center">
          <Image src={team1} alt="alt" width={400} height={400} />
          <span className="font-extrabold text-xl">Giuseppe Scarci</span>
          <span>Responsabile commerciale</span>
          <div className="flex flex-row gap-6">
            <div className="p-3 rounded-full bg-gray-200 hover:bg-primary text-primary hover:text-gray-200 hover:cursor-pointer">
              <FaFacebookF size={20} />
            </div>
            <div className="p-3 rounded-full bg-gray-200 hover:bg-primary text-primary hover:text-gray-200 hover:cursor-pointer">
              <FaInstagram size={20} />
            </div>
            <div className="p-3 rounded-full bg-gray-200 hover:bg-primary text-primary hover:text-gray-200 hover:cursor-pointer">
              <FaLinkedinIn size={20} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <Image src={team1} alt="alt" width={400} height={400} />
          <span className="font-extrabold text-xl">Giuseppe Scarci</span>
          <span>Responsabile commerciale</span>
          <div className="flex flex-row gap-6">
            <div className="p-3 rounded-full bg-gray-200 hover:bg-primary text-primary hover:text-gray-200 hover:cursor-pointer">
              <FaFacebookF size={20} />
            </div>
            <div className="p-3 rounded-full bg-gray-200 hover:bg-primary text-primary hover:text-gray-200 hover:cursor-pointer">
              <FaInstagram size={20} />
            </div>
            <div className="p-3 rounded-full bg-gray-200 hover:bg-primary text-primary hover:text-gray-200 hover:cursor-pointer">
              <FaLinkedinIn size={20} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <Image src={team1} alt="alt" width={400} height={400} />
          <span className="font-extrabold text-xl">Giuseppe Scarci</span>
          <span>Responsabile commerciale</span>
          <div className="flex flex-row gap-6">
            <div className="p-3 rounded-full bg-gray-200 hover:bg-primary text-primary hover:text-gray-200 hover:cursor-pointer">
              <FaFacebookF size={20} />
            </div>
            <div className="p-3 rounded-full bg-gray-200 hover:bg-primary text-primary hover:text-gray-200 hover:cursor-pointer">
              <FaInstagram size={20} />
            </div>
            <div className="p-3 rounded-full bg-gray-200 hover:bg-primary text-primary hover:text-gray-200 hover:cursor-pointer">
              <FaLinkedinIn size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative chisiamo1 h-[50vh] z-10 bg-fixed bg-cover ">
        <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-red-900 to-gray-800 opacity-50 z-10"></div>
      </div>
      {/* name of each tab group should be unique */}
      <div className="w-full flex flex-row justify-center padding">
        <div className="tabs tabs-border rounded bg-gradient-to-b from-white to-gray-300 w-full mt-[-200px] relative z-20">
          <label className="tab w-1/3 flex xl:flex-row flex-col items-center">
            <input type="radio" name="my_tabs_4" />
            <GiDiceTarget size={20} className="xl:mr-2" />
            <span className="xl:text-base text-xs font-extrabold">Our Mission</span>
          </label>
          <div className="tab-content xl:p-10 p-5">
            <div className="flex xl:flex-row flex-col items-center gap-10">
              <div className="flex flex-col gap-4">
                <span className="xl:text-base text-xs">
                  Our mission is to transform the factory and industry sectors
                  through sustainable practices, innovation, and advanced
                  technology, fostering growth that benefits both business and
                  the environment.
                </span>
                <div className="flex flex-row items-center gap-4 justify-start">
                  <IoCheckmarkDoneCircle size={20} className="text-primary w-fit" />
                  <span className="xl:text-base text-xs w-fit">
                  Sustainable Manufacturing Practices
                  </span>
                </div>
                <div className="flex flex-row items-center gap-4 justify-start">
                  <IoCheckmarkDoneCircle size={20} className="text-primary w-fit" />
                  <span className="xl:text-base text-xs w-fit">
                  Advanced Technology Integration
                  </span>
                </div>
                <div className="flex flex-row items-center gap-4 justify-start">
                  <IoCheckmarkDoneCircle size={20} className="text-primary w-fit" />
                  <span className="xl:text-base text-xs w-fit">
                  Community Environmental Responsibility
                  </span>
                </div>
                <div className="flex flex-row items-center gap-4 justify-start">
                  <IoCheckmarkDoneCircle size={20} className="text-primary w-fit" />
                  <span className="xl:text-base text-xs w-fit">
                  Innovation-Driven Growth
                  </span>
                </div>
              </div>
              <Image src={chisiamo2} alt="alt" width={585} height={500} />
            </div>
          </div>

          <label className="tab w-1/3 flex xl:flex-row flex-col items-center">
            <input type="radio" name="my_tabs_4" defaultChecked />
            <BiSolidGrid size={20} className="xl:mr-2" />
            <span className="xl:text-base text-xs font-extrabold">Our Vision</span>
          </label>
          <div className="tab-content p-10">
            <div className="flex xl:flex-row flex-col items-center gap-10">
              <div className="flex flex-col gap-4">
                <span className="xl:text-base text-xs">
                  Our mission is to transform the factory and industry sectors
                  through sustainable practices, innovation, and advanced
                  technology, fostering growth that benefits both business and
                  the environment.
                </span>
                <div className="flex flex-row items-center gap-4 justify-start">
                  <IoCheckmarkDoneCircle size={20} className="text-primary w-fit" />
                  <span className="xl:text-base text-xs w-fit">
                  Sustainable Manufacturing Practices
                  </span>
                </div>
                <div className="flex flex-row items-center gap-4 justify-start">
                  <IoCheckmarkDoneCircle size={20} className="text-primary w-fit" />
                  <span className="xl:text-base text-xs w-fit">
                  Advanced Technology Integration
                  </span>
                </div>
                <div className="flex flex-row items-center gap-4 justify-start">
                  <IoCheckmarkDoneCircle size={20} className="text-primary w-fit" />
                  <span className="xl:text-base text-xs w-fit">
                  Community Environmental Responsibility
                  </span>
                </div>
                <div className="flex flex-row items-center gap-4 justify-start">
                  <IoCheckmarkDoneCircle size={20} className="text-primary w-fit" />
                  <span className="xl:text-base text-xs w-fit">
                  Innovation-Driven Growth
                  </span>
                </div>
              </div>
              <Image src={chisiamo3} alt="alt" width={585} height={500} />
            </div>
          </div>

          <label className="tab w-1/3 flex xl:flex-row flex-col items-center">
            <input type="radio" name="my_tabs_4" />
            <IoDiamondOutline size={20} className="xl:mr-2" />
            <span className="xl:text-base text-xs font-extrabold">Our Value</span>
          </label>
          <div className="tab-content p-10">
            <div className="flex xl:flex-row flex-col items-center gap-10">
              <div className="flex flex-col gap-4">
                <span className="xl:text-base text-xs">
                  Our mission is to transform the factory and industry sectors
                  through sustainable practices, innovation, and advanced
                  technology, fostering growth that benefits both business and
                  the environment.
                </span>
                <div className="flex flex-row items-center gap-4 justify-start">
                  <IoCheckmarkDoneCircle size={20} className="text-primary w-fit" />
                  <span className="xl:text-base text-xs w-fit">
                  Sustainable Manufacturing Practices
                  </span>
                </div>
                <div className="flex flex-row items-center gap-4 justify-start">
                  <IoCheckmarkDoneCircle size={20} className="text-primary w-fit" />
                  <span className="xl:text-base text-xs w-fit">
                  Advanced Technology Integration
                  </span>
                </div>
                <div className="flex flex-row items-center gap-4 justify-start">
                  <IoCheckmarkDoneCircle size={20} className="text-primary w-fit" />
                  <span className="xl:text-base text-xs w-fit">
                  Community Environmental Responsibility
                  </span>
                </div>
                <div className="flex flex-row items-center gap-4 justify-start">
                  <IoCheckmarkDoneCircle size={20} className="text-primary w-fit" />
                  <span className="xl:text-base text-xs w-fit">
                  Innovation-Driven Growth
                  </span>
                </div>
              </div>
              <Image src={chisiamo2} alt="alt" width={585} height={500} />
            </div>
          </div>
        </div>
      </div>
      <LavoraConNoi/>
    </div>
  );
}
