import { useEffect, useRef } from "react";
import PlanComparisonTable from "./components/PlanComparisionTable";
import PlansCard from "./components/PlansTable";
const plans = [
{
    title: 'BASIC',
    price: '$300',
    description: 'maintenance, prevention, and updates for your website.',
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
    description: 'includes user traffic generation, email and form optimization.',
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
    description: 'adds app maintenance and Search engine optimization',
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

const PackagesView = ({ scrollRef }: { scrollRef?:any}) => {
    return (
      <div className="p-[100px] bg-black/80">
        <div className="">        
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
            <div className="text-center mt-10" style={{ fontFamily: 'Bebas Neue'}}>
                <h2 className="text-[55px] mb-4 text-white uppercase">Explore every detail</h2>
                <h2 className="text-[45px] mb-4 text-white uppercase mt-[-35px]">side by side_</h2>
            </div>
        </div>
          <PlanComparisonTable scrollRef={scrollRef} />
      </div>
    )
}
export default PackagesView;