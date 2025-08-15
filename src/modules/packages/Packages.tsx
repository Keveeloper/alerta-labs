import { useEffect, useRef, useState } from "react";
import PlanComparisonTable from "./components/PlanComparisionTable";
import PlansCard from "./components/PlansTable";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router";
import './Packages.css';
import PlanComparisonMobile from "./components/PlanComparisionMobile";
import { useIsMobile } from "../shared/hooks/useIsMobile";

const plans = [
  {
    title: 'BASIC',
    price: '$300',
    description: 'Maintenance, prevention, and updates for your website.',
    features: [
      { title: 'Technical Support', content: 'We ensure your web platform is always operational and optimized.' },
      { title: 'Tracking Implementation', content: 'We configure tools to analyze and optimize your platform’s performance.' },
      { title: 'Module Updates and Maintenance', content: 'Implementing new features and optimizing existing ones.' },
      { title: 'WordPress Plugin Installation and Maintenance', content: 'Optimizing and ensuring the proper functionality of your website.' },
    ]
  },
  {
    title: 'MEDIUM',
    price: '$500',
    description: 'E-commerce with API integration & advanced data analysis.',
    features: [
      { title: 'Technical Support', content: 'We ensure your web platform is always operational and optimized.' },
      { title: 'Tracking Implementation', content: 'We configure tools to analyze and optimize your platform’s performance.' },
      { title: 'Module Updates and Maintenance', content: 'Implementing new features and optimizing existing ones.' },
      { title: 'WordPress Plugin Installation and Maintenance', content: 'Optimizing and ensuring the proper functionality of your website.' },
      { title: 'API Integrations', content: 'Connect your platform with any compatible system to optimize operations.' },
      { title: 'Landing Page', content: 'Creation and maintenance of optimized static pages to sell your products or services.' },
      { title: 'Web Pages', content: 'Development and implementation of websites and online stores in WordPress tailored to your business.' },
      { title: 'E-commerce Creation and Maintenance', content: 'Develop and optimize online stores using leading platforms.' },
    ]
  },
  {
    title: 'PRO',
    price: '$750',
    description: 'Includes user traffic generation, email and form optimization.',
    features: [
      { title: 'Technical Support', content: 'We ensure your web platform is always operational and optimized.' },
      { title: 'Tracking Implementation', content: 'We configure tools to analyze and optimize your platform’s performance.' },
      { title: 'Module Updates and Maintenance', content: 'Implementing new features and optimizing existing ones.' },
      { title: 'WordPress Plugin Installation and Maintenance', content: 'Optimizing and ensuring the proper functionality of your website.' },
      { title: 'API Integrations', content: 'Connect your platform with any compatible system to optimize operations.' },
      { title: 'Landing Page', content: 'Creation and maintenance of optimized static pages to sell your products or services.' },
      { title: 'Web Pages', content: 'Development and implementation of websites and online stores in WordPress tailored to your business.' },
      { title: 'E-commerce Creation and Maintenance', content: 'Develop and optimize online stores using leading platforms.' },
      { title: 'Email Server and Forms', content: 'Configuration and integration of email marketing platforms and corporate email systems.' },
      { title: 'Traffic Pages', content: 'We centralize your links in a single site to optimize the user experience.' },
    ]
  },
  {
    title: 'ULTRA',
    price: '$1000',
    description: 'Adds app maintenance and Search Engine Optimization',
    features: [
      { title: 'Technical Support', content: 'We ensure your web platform is always operational and optimized.' },
      { title: 'Tracking Implementation', content: 'We configure tools to analyze and optimize your platform’s performance.' },
      { title: 'Module Updates and Maintenance', content: 'Implementing new features and optimizing existing ones.' },
      { title: 'WordPress Plugin Installation and Maintenance', content: 'Optimizing and ensuring the proper functionality of your website.' },
      { title: 'API Integrations', content: 'Connect your platform with any compatible system to optimize operations.' },
      { title: 'Landing Page', content: 'Creation and maintenance of optimized static pages to sell your products or services.' },
      { title: 'Web Pages', content: 'Development and implementation of websites and online stores in WordPress tailored to your business.' },
      { title: 'E-commerce Creation and Maintenance', content: 'Develop and optimize online stores using leading platforms.' },
      { title: 'Email Server and Forms', content: 'Configuration and integration of email marketing platforms and corporate email systems.' },
      { title: 'Traffic Pages', content: 'We centralize your links in a single site to optimize the user experience.' },
      { title: 'Mobile App Maintenance', content: 'Optimizing and updating apps for Android and iOS.' },
      { title: 'SEO', content: 'Optimizing your website to improve its search engine ranking.' },
    ]
  },
];

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

const PackagesView = () => {
  const PatterRef = useRef<HTMLDivElement>(null);
  const [showheader, setShowHeader] = useState(false);
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  useEffect(() => {
    const container = PatterRef.current;

    const handleScroll = () => {
      if (container) {
        const top = container.scrollTop;
        if(top >= 850){
          setShowHeader(true);
        }else{
          setShowHeader(false);
        }
        console.log('Scroll Top:', top);
      }
    };

    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <>
      {/* Background image */}
      <img
        loading="lazy"
        src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/67101712-efc2-4dcf-3bea-0fbafde64f00/public"
        alt="solar system background"
        className="fixed w-full h-full left-1/2 -translate-x-1/2 object-cover mix-blend-screen"
      />

      {/* Container */}
      <div className="w-full h-full p-[100px] bg-black/80 backdrop-blur custom-container">
        <Navbar />
        <img
          loading="lazy"
          src="../icons/x.png"
          alt="close modal"
          onClick={() => navigate(-1)} 
          className="float-right -mt-[25px] -mr-[4px] cursor-pointer"
        />
        <div className="custom-scroll h-full max-h-[75vh] overflow-y-scroll p-[15px]" ref={PatterRef}>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {plans.map((plan, idx) => (
                <PlansCard
                  key={idx}
                  title={plan.title}
                  price={plan.price}
                  description={plan.description}
                  features={plan.features}
                />
              ))}
            </div>
            <div className="text-center mt-10" style={{ fontFamily: 'Bebas Neue' }}>
              <h2 className="text-[55px] mb-4 text-white uppercase custom-h2" id="exploreDetail">Explore every detail</h2>
              <h2 className="text-[45px] mb-4 text-white uppercase mt-[-35px] custom-h2">side by side_</h2>
            </div>
          </div>
          {isMobile ? (
            <PlanComparisonMobile sections={sections} />
          ) :(
             <PlanComparisonTable scrollRef={showheader} />
          )}
        </div>
        <Footer isPackages/>
      </div>
    </>
  );
};
export default PackagesView;