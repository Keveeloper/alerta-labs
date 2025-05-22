import { useEffect, useRef, useState } from "react";
import { useModalStore } from "../../../store/useModalStore";

const plans = ['BASIC', 'MEDIUM', 'PRO', 'ULTRA'];

const sections = [
  {
    title: 'Technical Support',
    subtitle:'We ensure your web platform is always operational and optimized.',
    items: [
      '<span>Preventive and corrective maintenance:</span> We detect and resolve issues before they impact users.',
      "<span>24/7 technical support:</span> We're always available to resolve incidents quickly and effectively.",
      '<span>Performance optimization:</span>  We enhance speed, functionality, and user experience.',
      '<span>Proactive monitoring:</span> We supervise performance in real-time to anticipate failures.',
      '<span>Incident resolution:</span> We fix loading errors, compatibility issues, and other technical problems.',
    ],
    availability: [true, true, true, true],
  },
  {
    title: 'Tracking Implementation',
    subtitle:'We configure tools to analyze and optimize your platform’s performance.',
    items: [
      '<span>Tool integration:</span> We implement Google Analytics, Facebook Pixel, and Google Merchant to track user behavior.',
      '<span>Data-driven optimization:</span> We set up tracking technologies to turn data into growth strategies.',
    ],
    availability: [true, true, true, true],
  },
  {
    title: 'Module Updates and Maintenance:',
    subtitle:'Implementing new features and optimizing existing ones.',
    items: [
      '<span>Module updates:</span> Keeping your components always up to date to improve performance and compatibility.',
      '<span>Ongoing maintenance:</span> Review and fix issues before they affect the user experience.',
      '<span>Customization and enhancements:</span> Adapt and expand functionalities according to your business needs.',
    ],
    availability:  [true, true, true, true],
  },
  {
    title: 'WordPress Plugin Installation and Maintenance:',
    subtitle:'Optimizing and ensuring the proper functionality of your website.',
    items: [
      '<span>Technical maintenance:</span> Guarantee stability, security, and updates for the core, PHP, and plugins.',
      '<span>Monitoring and backup:</span> Setting up automatic backups and continuous monitoring to prevent failures.',
      '<span>Testing environment:</span> Implementing secure development environments to test and fix errors without risks.',
      '<span>Secure updates:</span> Optimizing the core, plugins, and themes for stable performance.',
      '<span>Optimized performance:</span> Cleaning databases and replacing heavy plugins with efficient code.',
      '<span>Advanced protection:</span> Identifying and resolving vulnerabilities to strengthen site security.',
      '<span>Design and customization:</span> Creating dynamic elements and enhancing the website’s visual structure.',
      '<span>Seamless migrations:</span> We transfer your site between servers or domains without affecting its operation.'
    ],
    availability:  [true, true, true, true],
  },
  {
    title: 'API Integrations:',
    subtitle:'Connect your platform with any compatible system to optimize operations.',
    items: [
      '<span>Connection with business platforms:</span> Integrating ERPs, CRMs, online stores, and analytics tools to centralize processes.',
      '<span>Workflow automation:</span> Reducing manual tasks through integrations with SAP, Salesforce, Shopify, Vtex, and more.',
      '<span>Real-time synchronization:</span> Keeping data updated and consistent, from inventory to sales orders.',
      '<span>Continuous monitoring and support:</span> Ensuring optimal performance of integrations in the long term.',
    ],
    availability:  [false, true, true, true],
  },
  {
    title: 'Landing Page:',
    subtitle:'Creation and maintenance of optimized static pages to sell your products or services.',
    items: [
      '<span>Conversion-focused design:</span> Developing strategic Landing Pages to capture leads, generate sales, or promote services.',
      '<span>Complete customization:</span> We tailor each page to your visual identity, business objectives, and target audience.',
    ],
    availability:  [false, true, true, true],
  },
  {
    title: 'Web Pages:',
    subtitle:'Development and implementation of websites and online stores in WordPress tailored to your business.',
    items: [
      '<span>Development and customization:</span> Creating dynamic stores and websites optimized for mobile devices and conversion.',
      '<span>Optimized user experience:</span> Designing intuitive structures with smooth navigation and modern aesthetics.',
      '<span>Dynamic visual style:</span> Attractive interfaces with animations and transitions using PHP, CSS, HTML, Ajax, and JavaScript.',
      '<span>Mobile optimization:</span> We ensure a 100% responsive design for any screen size.',
      '<span>Complete setup:</span> Organize categories, payment methods, taxes, shipping, and integrations with social media and analytics tools.',
      '<span>Testing and security:</span> Implementing testing environments and security measures before launch.',
    ],
    availability: [false, true, true, true],
  },
  {
    title: 'E-commerce Creation and Maintenance:',
    subtitle:'Develop and optimize online stores using leading platforms.',
    items: [
      '<span>Design and development:</span> Creating customized stores tailored to your brand and products.',
      '<span>Platform integration:</span> Implementing Shopify, WooCommerce, Magento, VTEX, and more.',
      '<span>Mobile optimization:</span> Designing responsive e-commerce sites for a seamless experience on any device.',
      '<span>Custom development:</span> Building stores from scratch with personalized code for tailored solutions.',
    ],
    availability:  [false, true, true, true],
  },
  {
    title: 'Email Server and Forms:',
    subtitle:'Configuration and integration of email marketing platforms and corporate email systems.',
    items: [
      '<span>Automated email marketing:</span> Implementing tools like Mailchimp to manage and optimize campaigns.',
      '<span>Corporate emails:</span> Setting up personalized email accounts with your domain for a professional image.',
      '<span>Optimized forms:</span> Designing functional and attractive forms to capture key customer data.',
      '<span>SMTP server configuration:</span> Implementing email servers to ensure secure and efficient email delivery.',
    ],
    availability:  [false, false, true, true],
  },
  {
    title: 'Traffic Pages:',
    subtitle:'We centralize your links in a single site to optimize the user experience.',
    items: [
      '<span>Design and implementation:</span> Creating pages that direct users to multiple platforms from a single link.',
      '<span>Ready-to-use solutions:</span> We configure tools like Linktree for fast and efficient integration.',
      '<span>Custom development:</span> Building traffic pages with tailored code for greater flexibility and control.',
    ],
    availability: [false, false, true, true],
  },
  {
    title: 'Mobile App Maintenance:',
    subtitle:'Optimizing and updating apps for Android and iOS.',
    items: [
      '<span>Compatibility updates:</span> Adapting your app to the latest iOS and Android versions.',
      '<span>Bug fixes:</span> Resolving bugs and issues that affect performance.',
      '<span>Cross-platform support:</span> We ensure optimal functionality across different devices and screen sizes.',
    ],
    availability: [false, false, false, true],
  },
  {
    title: 'SEO:',
    subtitle:'Optimizing your website to improve its search engine ranking.',
    items: [
      '<span>SEO audit:</span> Analyzing your site to identify and fix issues that affect its visibility.',
      '<span>Speed optimization:</span> Improving loading times for a better user experience and Google compliance.',
      '<span>Mobile compatibility:</span> Ensuring a responsive design optimized for mobile devices.',
      '<span>Optimized content:</span> We adjust text, images, and videos following SEO best practices.'
    ],
    availability: [false, false, false, true],
  },
];

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 text-green-400"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20.285 6.709l-11.285 11.291-5.285-5.291 1.414-1.414 3.871 3.877 9.871-9.877z" />
  </svg>
);

const DashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 text-red-500"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M5 11h14v2H5z" />
  </svg>
);

export default function PlanComparisonTable({
  scrollRef,
}: {
  scrollRef?: boolean;
}) {
  const [isFixed, setIsFixed] = useState(false);
  //const showheader = useModalStore((state) => state.showheader);

  useEffect(() => {
    console.log('showheader', scrollRef);
    if(scrollRef){
      setIsFixed(scrollRef);
    }else{
      setIsFixed(false);
    }
  }, [scrollRef]);

  const categorySelectorRef = useRef<HTMLDivElement>(null);

  function addClassToSpans(html: string): string {
    return html.replace(/<span(.*?)>/g, `<span$1 class="font-seismic-latin-variable-span text-[#00F0FF]" style="font-weight: 600;">`);
  }

  return (
    <div className="bg-black text-white rounded-[1rem] p-4 mt-6 border border-[#FFFFFF] relative">
      {/* Sticky header shown only when scrolling */}
      {isFixed && (
        <div className="sticky top-[-15px]  z-50 bg-black shadow-lg ">
          <TableHeader columnWidth={600}/>
        </div>
      )}


      <div className="overflow-x-auto" >
        <div className="overflow-y-auto scrollbar-hide" ref={categorySelectorRef}>
          <div className="min-w-[1024px]">
            {/* Original header (non-fixed) */}
            <div>
              <TableHeader columnWidth={600}/>
            </div>

            {/* Table body */}
            {sections.map((section, idx) => (
              <div
                key={idx}
                className="grid grid-cols-[600px_repeat(4,1fr)] border-b border-gray-800 text-sm"
              >
                <div className="font-seismic-latin-variable-span p-4 border-r border-gray-800">
                  <div className="font-seismic-latin-variable-span font-semibold text-xl mb-1 font-seismic-latin-variable">{section.title}</div>
                  <div className=" font-seismic-latin-variable-span text-[16px] *:mb-1 text-white-400 font-seismic-latin-variable">{section.subtitle}</div>
                  <ul className="list-disc list-inside text-white-400 text-xs space-y-0.5 ml-4 font-seismic-latin-variable">
                    {section.items.map((item, i) => (
                      <li className="font-seismic-latin-variable-span text-base" key={i} dangerouslySetInnerHTML={{ __html: addClassToSpans(item) }}></li>
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

interface TableHeaderProps {
  columnWidth: number; 
}
const TableHeader: React.FC<TableHeaderProps> = ({ columnWidth }) => {

  const gridTemplate = `grid-cols-[${columnWidth}px_repeat(4,1fr)]`;

  return(
    <div className={`grid ${gridTemplate} sticky top-0 z-10 bg-black text-sm border-b border-gray-600`} style={{ fontFamily: 'Bebas Neue' }}>
      <div className="row-span-2 p-4 border-b border-gray-700 text-[35px] text-center">
        DESCRIPTION
      </div>
      <div className="col-span-4 text-center border-l border-gray-700 text-[30px]">
        PLANS
      </div>
      {plans.map((plan, i) => (
        <div
          key={i}
          className="p-4 text-2xl text-center border-t border-l border-gray-700"
        >
          {plan}
        </div>
      ))}
    </div>
  )
}



