import Image from "next/image";
import faq1 from "../../../../public/faq2.png";
import background from "../../../../public/background.jpg";
export default function FAQ() {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-10 padding py-10 h-full relative">
      <Image
        src={background}
        alt="alt"
        className="w-full absolute top-0 h-full"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover"
        }} />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-300 opacity-65 z-10"></div>
      <div className="lg:w-1/2 flex justify-center items-center relative pt-10">
        <Image
          src={faq1}
          alt="alt"
          width={600}
          height={500}
          className="rounded-t-full z-10 shadow-2xl shadow-red-950"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
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
            1. I vostri infissi sono certificati e rispettano le normative
            vigenti?
          </div>
          <div className="collapse-content text-sm">
            Sì, tutti i nostri infissi sono dotati di Marcatura CE, conforme
            alla norma UNI EN 14351-1, che garantisce il rispetto dei requisiti
            europei in termini di sicurezza e prestazioni. Inoltre, forniamo la
            Certificazione Energetica, attestando l'efficienza termica dei
            nostri prodotti, fondamentale per accedere alle detrazioni fiscali.
            Offriamo anche certificazioni specifiche, come quelle per
            l'isolamento acustico e la resistenza all'effrazione, per assicurare
            la massima qualità e sicurezza.
          </div>
        </div>
        <div className="collapse collapse-plus text-black border-b rounded-[0px] border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title lg:text-2xl font-semibold">
            2. Effettuate anche rimozione e smaltimento dei vecchi infissi?
          </div>
          <div className="collapse-content text-sm">
            Sì, su richiesta, ci occupiamo della rimozione e dello smaltimento
            in conformità alle normative ambientali vigenti.
          </div>
        </div>
        <div className="collapse collapse-plus text-black border-b rounded-[0px] border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title lg:text-2xl font-semibold">
            3. Come posso richiedere un preventivo personalizzato?
          </div>
          <div className="collapse-content text-sm">
            Puoi contattarci via email, telefono o venire direttamente in
            showroom per una consulenza senza impegno e per vedere da vicino i
            nostri prodotti.
          </div>
        </div>
        <div className="collapse collapse-plus text-black border-b rounded-[0px] border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title lg:text-2xl font-semibold">
            4. Quali sono le detrazioni fiscali vigenti a cui posso accedere?
          </div>
          <div className="collapse-content text-sm">
            È possibile, fino alla fine dell’anno, usufruire di incentivi come
            l’Ecobonus o il Bonus Casa, a seconda della tipologia di intervento.
          </div>
        </div>
        <div className="collapse collapse-plus text-black border-b rounded-[0px] border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title lg:text-2xl font-semibold">
            5. Quali sono i tempi di produzione e installazione degli infissi?
          </div>
          <div className="collapse-content text-sm">
            I tempi variano in base al tipo di infisso e al progetto, ma in
            genere la consegna avviene entro 4-6 settimane dall’ordine.
          </div>
        </div>
      </div>
    </div>
  );
}
