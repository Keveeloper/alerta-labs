type plansTableParameters = {
    title: string;
    price: string;
    description: string;
    features: string[]; 
}

const PlansCard = ({ title, price, description, features }: plansTableParameters) => {
  return (
     <div className="bg-black text-white rounded-[1rem] p-6 w-full border border-[#FFFFFF]">
      <h2 className="text-2xl font-bold text-center">{title}</h2>
      <p className="text-sm text-center mt-1">{description}</p>
      <p className="text-center text-cyan-400 font-semibold mt-2">
        {price} <span className="text-white">/per month</span>
      </p>
      <hr className="my-4 border-gray-600" />

      <ul className="space-y-2 text-sm">
        {features.map((item, index) => (
          <li key={index} className="flex justify-between">
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
