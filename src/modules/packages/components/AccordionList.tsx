import { useState } from 'react';

export interface Feature {
  title: string;
  content: string;
}

interface AccordionListProps {
  features: Feature[];
}

const AccordionList: React.FC<AccordionListProps> = ({ features }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <ul className="space-y-2 text-sm">
      {features.map((item, index) => (
        <li
          key={index}
          className="text-white font-semibold text-base"
        >
          <div
            className="flex justify-between items-center cursor-pointer font-seismic-latin-variable-span"
            onClick={() => toggleIndex(index)}
          >
            <span className="max-w-[90%]">&gt; {item.title}</span>
            <img
              src="../icons/Vector350.svg"
              alt="Arrow"
              className={`transition-transform duration-200 ${
                openIndex === index ? '' : ''
              }`}
            />
          </div>

          {openIndex === index && (
            <div className="mt-2 pl-4 text-sm text-gray-300" style={{fontFamily:'seismic-latin-variable'}}>
              {item.content}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default AccordionList;
