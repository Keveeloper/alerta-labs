import AccordionList, { Feature } from "./AccordionList";

type plansTableParameters = {
    title: string;
    price: string;
    description: string;
    features: Feature[]; 
}

const PlansCard = ({ title, price, description, features }: plansTableParameters) => {
  return (
     <div className="bg-black text-white rounded-[1rem] p-5 w-full border border-[#FFFFFF]">
      <div className="h-[180px] flex flex-col justify-around items-center
                      2xl:h-[160px]">
        <h2 className="text-3xl text-center" style={{ fontFamily: 'Bebas Neue'}}>{title}</h2>
        <p className="font-seismic-latin-variable-span text-center mt-1 font-seismic-latin-variable">{description}</p>
        <p className="text-center text-[#00F0FF] font-semibold mt-2">
          {price} <span className="font-seismic-latin-variable-span" >/per month</span>
        </p>
      </div>
      <hr className=" border-gray-600" />

      <ul className="space-y-2 text-sm">
        {/* {features.map((item, index) => (
          <li key={index} className="font-seismic-latin-variable-span text-base flex justify-between font-seismic-latin-variable text-white font-semibold">
            <span style={{maxWidth: '90%'}}>&gt; {item}:</span>
            <span>
                <img src="../icons/Vector350.svg" className="" />
            </span>
          </li>
        ))} */}
        <div className="p-4">
          <AccordionList features={features} />
        </div>
      </ul>
    </div>
  );
};
export default PlansCard;
