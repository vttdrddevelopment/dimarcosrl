import { LiaWindows } from "react-icons/lia";
import service1 from "../../../../public/service1.png";

import Image from "next/image";

export default function Services() {
  return (
    <div className="w-full py-10 padding flex flex-col justify-center lg:h-screen services relative">
      <div className="absolute top-0 left-0 w-full lg:h-screen h-full bg-gray-300 opacity-65 z-10"></div>
      <div className="flex lg:flex-row flex-col justify-between items-center z-20">
        <div className="flex flex-col gap-4 justify-evenly lg:w-1/2">
          <span className="uppercase font-bold text-primary md:text-base text-sm">
            I nostri servizi
          </span>
          <h1 className="font-bold xl:text-[53px] lg:text-[50px] md:text-[40px] text-[30px] xl:leading-14 lg:leading-12 leading-8">
            Comprehensive window & door services
          </h1>
        </div>
        <span className="md:text-base text-sm lg:w-1/2 mt-6 lg:mt-0">
          Partner with a company dedicated to excellence in window and door
          installations, ensuring each project is handled with precision and
          care.
        </span>
      </div>
      <div className="grid lg:grid-cols-3 items-center gap-10 mt-20 z-20">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row lg:items-center gap-4 lg:justify-center">
            <LiaWindows size={80} className="text-primary" />
            <div className="flex flex-col gap-2 w-4/5">
              <span className="lg:text-xl text-xl font-bold">
                Custom Window Installation
              </span>
              <span className="lg:text-base text-sm">
                Expertly crafted windows tailored to your specific needs.
              </span>
            </div>
          </div>
          <hr className="my-3 text-gray-400" />
          <div className="flex flex-row lg:items-center gap-4 lg:justify-center">
            <LiaWindows size={80} className="text-primary" />
            <div className="flex flex-col gap-2 w-4/5">
              <span className="lg:text-xl text-xl font-bold">
                Door Installation & Replacement
              </span>
              <span className="lg:text-base text-sm">
                High-quality doors designed for security and style.
              </span>
            </div>
          </div>
          <hr className="my-3 text-gray-400" />
          <div className="flex flex-row lg:items-center gap-4 lg:justify-center">
            <LiaWindows size={80} className="text-primary" />
            <div className="flex flex-col gap-2 w-4/5">
              <span className="lg:text-xl text-xl font-bold">
                Energy-Efficient Solutions
              </span>
              <span className="lg:text-base text-sm">
                Windows and doors that enhance energy savings, year-round.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <Image src={service1} alt="alt" width={400} height={500} />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row lg:items-center gap-4 lg:justify-center">
            <LiaWindows size={80} className="text-primary" />
            <div className="flex flex-col gap-2 w-4/5">
              <span className="lg:text-2xl text-xl font-bold">
              Window & Door Repair
              </span>
              <span className="lg:text-base text-sm">
              Reliable repairs ensuring long-lasting functionality and aesthetics.
              </span>
            </div>
          </div>
          <hr className="my-3 text-gray-400" />
          <div className="flex flex-row lg:items-center gap-4 lg:justify-center">
            <LiaWindows size={80} className="text-primary" />
            <div className="flex flex-col gap-2 w-4/5">
              <span className="lg:text-2xl text-xl font-bold">
              Consultation & Design Services
              </span>
              <span className="lg:text-base text-sm">
              Personalized guidance to match your home's unique style.
              </span>
            </div>
          </div>
          <hr className="my-3 text-gray-400" />
          <div className="flex flex-row lg:items-center gap-4 lg:justify-center">
            <LiaWindows size={80} className="text-primary" />
            <div className="flex flex-col gap-2 w-4/5">
              <span className="lg:text-2xl text-xl font-bold">
              Commercial Windows & Doors
              </span>
              <span className="lg:text-base text-sm">
              Commercial Windows & Doors
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
