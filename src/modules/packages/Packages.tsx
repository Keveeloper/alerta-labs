import { useEffect, useRef, useState } from "react";
import PlanComparisonTable from "./components/PlanComparisionTable";
import PlansCard from "./components/PlansTable";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router";
const plans = [
{
    title: 'BASIC',
    price: '$300',
    description: 'Maintenance, prevention, and updates for your website.',
    features: [
      'Technical Support',
      'Tracking Implementation',
      'Module Updates and Maintenance',
      'WordPress Plugin Installation and Maintenance',
    ]
  },
  {
    title: 'MEDIUM',
    price: '$500',
    description: 'E-commerce with API integration & advanced data analysis.',
    features: [
      'Technical Support',
      'Tracking Implementation',
      'Module Updates and Maintenance',
      'WordPress Plugin Installation and Maintenance',
      'API Integrations',
      'Landing Page',
      'Web Pages',
      'E-commerce Creation and Maintenance'
    ]
  },
  {
    title: 'PRO',
    price: '$750',
    description: 'Includes user traffic generation, email and form optimization.',
    features: [
      'Technical Support',
      'Tracking Implementation',
      'Module Updates and Maintenance',
      'WordPress Plugin Installation and Maintenance',
      'API Integrations',
      'Landing Page',
      'Web Pages',
      'E-commerce Creation and Maintenance',
      'Email Server and Forms',
      'Traffic Pages'
    ]
  },
  {
    title: 'ULTRA',
    price: '$1000',
    description: 'Adds app maintenance and Search engine optimization',
    features: [
      'Technical Support',
      'Tracking Implementation',
      'Module Updates and Maintenance',
      'WordPress Plugin Installation and Maintenance',
      'API Integrations',
      'Landing Page',
      'Web Pages',
      'E-commerce Creation and Maintenance',
      'Email Server and Forms',
      'Traffic Pages',
      'Mobile App Maintenance',
      'SEO'
    ]
  },
];

const PackagesView = ({ scrollRef }: { scrollRef?: any }) => {
  const PatterRef = useRef<HTMLDivElement>(null);
  const [showheader, setShowHeader] = useState(false);
  const navigate = useNavigate();

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
        src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/47a4e8a6-c2b3-429f-c834-86343375a200/public"
        alt="solar system background"
        className="fixed w-full h-full left-1/2 -translate-x-1/2 object-cover mix-blend-screen"
      />

      {/* Container */}
      <div className="p-[100px] bg-black/80 backdrop-blur">
        <Navbar />
        <img
          loading="lazy"
          src="../icons/x.png"
          alt="close modal"
          onClick={() => navigate(-1)} 
          className="float-right -mt-[25px] -mr-[4px]"
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
              <h2 className="text-[55px] mb-4 text-white uppercase" id="exploreDetail">Explore every detail</h2>
              <h2 className="text-[45px] mb-4 text-white uppercase mt-[-35px]">side by side_</h2>
            </div>
          </div>
          <PlanComparisonTable scrollRef={showheader} />
        </div>
        <Footer isPackages/>
      </div>
    </>
  );
};
export default PackagesView;