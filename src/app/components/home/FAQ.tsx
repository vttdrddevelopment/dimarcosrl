import Image from "next/image";
import faq1 from "../../../../public/faq1.jpg";
export default function FAQ() {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-10 padding py-10 bg-primary">
      <div className="lg:w-1/2 flex justify-center items-center relative pt-10">
        <Image
          src={faq1}
          alt="alt"
          width={600}
          height={500}
          className="rounded-t-full z-10"
        />
      </div>
      <div className="flex flex-col justify-evenly lg:w-1/2">
        <span className="uppercase font-bold text-white md:text-base text-sm">
          FREQUENTLY ASKED QUESTIONS
        </span>
        <h1 className="font-bold xl:text-[53px] text-white lg:text-[50px] md:text-[40px] text-[30px] xl:leading-14 lg:leading-12 leading-8">
          Answers to your most asked questions
        </h1>
        <div className="collapse collapse-plus text-white border-b rounded-[0px] border-base-300">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title lg:text-2xl font-semibold">
            1. What types of windows do you offer?
          </div>
          <div className="collapse-content text-sm">
          We offer a wide variety of windows, including double-hung, casement, sliding, bay, and custom-designed windows.
          </div>
        </div>
        <div className="collapse collapse-plus text-white border-b rounded-[0px] border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title lg:text-2xl font-semibold">
          2. How long does window installation take?
          </div>
          <div className="collapse-content text-sm">
          We offer a wide variety of windows, including double-hung, casement, sliding, bay, and custom-designed windows.
          </div>
        </div>
        <div className="collapse collapse-plus text-white border-b rounded-[0px] border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title lg:text-2xl font-semibold">
          3. Are your windows energy-efficient?
          </div>
          <div className="collapse-content text-sm">
          We offer a wide variety of windows, including double-hung, casement, sliding, bay, and custom-designed windows.
          </div>
        </div>
        <div className="collapse collapse-plus text-white border-b rounded-[0px] border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title lg:text-2xl font-semibold">
          4. Do you offer custom window and door sizes?
          </div>
          <div className="collapse-content text-sm">
          We offer a wide variety of windows, including double-hung, casement, sliding, bay, and custom-designed windows.
          </div>
        </div>
        <div className="collapse collapse-plus text-white border-b rounded-[0px] border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title lg:text-2xl font-semibold">
          5. How do I maintain my windows and doors?
          </div>
          <div className="collapse-content text-sm">
          We offer a wide variety of windows, including double-hung, casement, sliding, bay, and custom-designed windows.
          </div>
        </div>
      </div>
    </div>
  );
}
