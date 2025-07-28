import { useIsMobile } from "../../shared/hooks/useIsMobile";
import AccordionList, { Feature } from "./AccordionList";
import { useState } from "react";

type plansTableParameters = {
  title: string;
  price: string;
  description: string;
  features: Feature[];
};

const PlansCard = ({
  title,
  price,
  description,
  features,
}: plansTableParameters) => {
  const isMobile = useIsMobile();
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <div className="bg-black text-white rounded-[1rem] p-6 w-full border border-[#FFFFFF]">
      <h2 className="text-3xl text-center" style={{ fontFamily: "Bebas Neue" }}>
        {title}
      </h2>
      <p className="font-seismic-latin-variable-span text-center mt-1 font-seismic-latin-variable">
        {description}
      </p>
      <p className="text-center text-[#00F0FF] font-semibold mt-2">
        {price}{" "}
        <span className="font-seismic-latin-variable-span">/per month</span>
      </p>
      <hr className="my-4 border-[#FFFFFF]" />

      {isMobile ? (
        <div className="flex flex-col items-center">
          {showFeatures && (
            <div className="p-4 w-full">
              <AccordionList features={features} />
            </div>
          )}

          <a
            onClick={() => setShowFeatures((prev) => !prev)}
            className="mt-4 w-full text-center px-5 py-2 text-white text-2xl rounded-2xl border border-white cursor-pointer font-[Exan] hover:bg-white/20"
          >
            {showFeatures ? "HIDE FEATURES" : "SHOW FEATURES"}
          </a>
        </div>
      ) : (
        <ul className="space-y-2 text-sm">
          <div className="p-4">
            <AccordionList features={features} />
          </div>
        </ul>
      )}
    </div>
  );
};

export default PlansCard;
