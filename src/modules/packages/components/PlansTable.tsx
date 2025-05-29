type plansTableParameters = {
    title: string;
    price: string;
    description: string;
    features: string[]; 
}

const PlansCard = ({ title, price, description, features }: plansTableParameters) => {
  return (
     <div className="bg-black text-white rounded-[1rem] p-6 w-full border border-[#FFFFFF]">
      <h2 className="text-3xl text-center" style={{ fontFamily: 'Bebas Neue'}}>{title}</h2>
      <p className="font-seismic-latin-variable-span text-center mt-1 font-seismic-latin-variable">{description}</p>
      <p className="text-center text-[#00F0FF] font-semibold mt-2">
        {price} <span className="font-seismic-latin-variable-span" >/per month</span>
      </p>
      <hr className="my-4 border-gray-600" />

      <ul className="space-y-2 text-sm">
        {features.map((item, index) => (
          <li key={index} className="font-seismic-latin-variable-span text-base flex justify-between font-seismic-latin-variable text-white font-semibold">
            <span>&gt; {item}:</span>
            <span>
                <img src="../icons/Vector350.svg" className="" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PlansCard;
