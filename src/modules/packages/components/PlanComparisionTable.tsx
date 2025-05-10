
const plans = ['BASIC', 'MEDIUM', 'PRO', 'ULTRA'];

const sections = [
  {
    title: 'Technical Support',
    items: [
      'Preventive and corrective maintenance',
      '24/7 Technical Support',
      'Performance optimization',
      'Proactive monitoring',
      'Incident resolution',
    ],
    availability: [true, true, true, true],
  },
  {
    title: 'Tracking Implementation',
    items: [
      'Tool integration',
      'Data-driven optimization',
    ],
    availability: [true, true, true, true],
  },
  {
    title: 'API Integrations',
    items: [
      'Connection with business platforms',
      'Workflow automation',
      'Real-time synchronization',
      'Continuous monitoring and support',
    ],
    availability: [false, false, true, true],
  },
  {
    title: 'Custom Developments',
    items: [
      'Tailored functionalities',
      'Advanced customization',
      'Personalized dashboards',
    ],
    availability: [false, false, false, true],
  },
];

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 text-green-400"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20.285 6.709l-11.285 11.291-5.285-5.291 1.414-1.414 3.871 3.877 9.871-9.877z" />
  </svg>
);

const DashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 text-red-500"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M5 11h14v2H5z" />
  </svg>
);

export default function PlanComparisonTable() {
  return (
    <div className="bg-black text-white rounded-[1rem] p-4 mt-6 border border-[#FFFFFF]">
      <div className="overflow-x-auto">
        {/* Scrollable container */}
        <div className="max-h-[500px] overflow-y-auto scrollbar-hide">
          <div className="min-w-[1024px]">
            {/* Header with 2 rows: DESCRIPTION + PLANS */}
            <div className="grid grid-cols-[300px_repeat(4,1fr)] sticky top-0 z-10 bg-black text-sm border-b border-gray-700">
              {/* DESCRIPTION cell (rowspan 2) */}
              <div className="row-span-2 p-4 font-bold border-b border-gray-700">
                DESCRIPTION
              </div>

              {/* PLANS cell (colspan 4) */}
              <div className="col-span-4 p-4 text-center font-bold border-l border-gray-700">
                PLANS
              </div>

              {/* Plan headers (1 row below PLANS) */}
              {plans.map((plan, i) => (
                <div
                  key={i}
                  className="p-4 text-center font-bold border-t border-l border-gray-700"
                >
                  {plan}
                </div>
              ))}
            </div>

            {/* Data rows */}
            {sections.map((section, idx) => (
              <div
                key={idx}
                className="grid grid-cols-[300px_repeat(4,1fr)] border-b border-gray-800 text-sm"
              >
                <div className="p-4 border-r border-gray-800">
                  <div className="font-semibold mb-1">{section.title}</div>
                  <ul className="list-disc list-inside text-gray-400 text-xs space-y-0.5">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                {section.availability.map((isIncluded, j) => (
                  <div
                    key={j}
                    className="flex items-center justify-center border-l border-gray-800"
                  >
                    {isIncluded ? <CheckIcon /> : <DashIcon />}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


