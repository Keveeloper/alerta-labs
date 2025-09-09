const CheckIcon = () => (
  <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.285 6.709l-11.285 11.291-5.285-5.291 1.414-1.414 3.871 3.877 9.871-9.877z" />
  </svg>
);

const DashIcon = () => (
  <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
    <path d="M5 11h14v2H5z" />
  </svg>
);

type Section = {
  title: string;
  subtitle: string;
  items: string[];
  availability: boolean[];
};

function PlanComparisonMobile({
  sections,
}: {
  sections: Section[];
}) {
  const addClassToSpans = (html: string): string =>
    html.replace(
      /<span(.*?)>/g,
      `<span$1 class="text-[#00F0FF] font-semibold">`
    );

  return (
    <div className="bg-black text-white rounded-xl border border-white space-y-8" style={{overflow: 'hidden'}}>
        <div className="border-b border-white text-center py-3 text-lg col-span-5 mb-0" style={{ fontFamily: "Bebas Neue" }}>
            DESCRIPTION
        </div>
        <div className="grid grid-cols-4 border-b border-white  mb-6" style={{ fontFamily: "Bebas Neue" }}>
            <div className="text-center border-r border-white p-2">BASIC</div>
            <div className="text-center border-r border-white p-2">MEDIUM</div>
            <div className="text-center border-r border-white p-2">PRO</div>
            <div className="text-center p-2">ULTRA</div>
        </div>
      {sections.map((section, idx) => (
        <div key={idx} className="border-b border-gray-700   font-seismic-latin-variable-span">
            <div className="p-4 pb-6">
                <h3 className="text-xl font-bold mb-1">{section.title}</h3>
                <p className="text-sm text-gray-300 mb-2">{section.subtitle}</p>

                <ul className="list-disc list-inside text-sm space-y-1 pl-2">
                    {section.items.map((item, i) => (
                    <li
                        key={i}
                        className="text-sm"
                        dangerouslySetInnerHTML={{ __html: addClassToSpans(item) }}
                    />
                    ))}
                </ul>
            </div>

          {/* PLAN AVAILABILITY */}
         <div className="flex justify-around items-center mt-4 avaliability-icons text-white">
            {section.availability.map((available, i) => {
                const bgColor = [
                "bg-[#303030]", // BASIC
                "bg-[#242424]", // MEDIUM
                "bg-[#303030]", // PRO
                "bg-[#242424]", // ULTRA
                ][i];

                return (
                <div
                    key={i}
                    className={`flex flex-col items-center text-xs w-full py-2 ${bgColor}`}
                >
                    {available ? <CheckIcon /> : <DashIcon />}
                </div>
                );
            })}
            </div>
        </div>
      ))}
    </div>
  );
};

export default PlanComparisonMobile;
