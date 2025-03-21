import Image from "next/image";
import faq1 from "../../../../public/faq2.png";
import background from "../../../../public/background.jpg";
export default function FAQ() {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-10 padding py-10 h-full relative">
      <Image src={background} alt="alt" layout="fill" objectFit="cover"  className="w-full absolute top-0 h-full"/>
      <div className="absolute top-0 left-0 w-full h-full bg-gray-300 opacity-65 z-10"></div>
      <div className="lg:w-1/2 flex justify-center items-center relative pt-10">
        <Image
          src={faq1}
          alt="alt"
          width={600}
          height={500}
          className="rounded-t-full z-10 shadow-2xl shadow-red-950"
        />
      </div>
      <div className="flex flex-col justify-evenly lg:w-1/2 z-20">
        <span className="uppercase font-bold text-black md:text-base text-sm">
          DOMANDE FREQUENTI
        </span>
        <h1 className="font-bold xl:text-[53px] text-black lg:text-[50px] md:text-[40px] text-[30px] xl:leading-14 lg:leading-12 leading-8">
        Risposte alle tue domande più frequenti
        </h1>
        <div className="collapse collapse-plus text-black border-b rounded-[0px] border-base-300">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title lg:text-2xl font-semibold">
            1. Che tipi di finestre offrite?
          </div>
          <div className="collapse-content text-sm">
          We offer a wide variety of windows, including double-hung, casement, sliding, bay, and custom-designed windows.
          </div>
        </div>
        <div className="collapse collapse-plus text-black border-b rounded-[0px] border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title lg:text-2xl font-semibold">
          2. Quanto tempo richiede l'installazione delle finestre?
          </div>
          <div className="collapse-content text-sm">
          We offer a wide variety of windows, including double-hung, casement, sliding, bay, and custom-designed windows.
          </div>
        </div>
        <div className="collapse collapse-plus text-black border-b rounded-[0px] border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title lg:text-2xl font-semibold">
          3. Le vostre finestre sono a risparmio energetico?
          </div>
          <div className="collapse-content text-sm">
          We offer a wide variety of windows, including double-hung, casement, sliding, bay, and custom-designed windows.
          </div>
        </div>
        <div className="collapse collapse-plus text-black border-b rounded-[0px] border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title lg:text-2xl font-semibold">
          4. Offrite dimensioni personalizzate per finestre e porte?
          </div>
          <div className="collapse-content text-sm">
          We offer a wide variety of windows, including double-hung, casement, sliding, bay, and custom-designed windows.
          </div>
        </div>
        <div className="collapse collapse-plus text-black border-b rounded-[0px] border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title lg:text-2xl font-semibold">
          5. Che tipo di manutenzione è richiesta per le mie finestre e porte?
          </div>
          <div className="collapse-content text-sm">
          We offer a wide variety of windows, including double-hung, casement, sliding, bay, and custom-designed windows.
          </div>
        </div>
      </div>
    </div>
  );
}
