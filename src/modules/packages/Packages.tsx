import PlanComparisonTable from "./components/PlanComparisionTable";
import PlansCard from "./components/PlansTable";
const plans = [
{
    title: 'BASIC',
    price: '$300',
    description: 'starter pack with support',
    features: [
      'Technical Support',
      'Tracking Implementation',
      'Module Updates and Maintenance',
      'WordPress Plugin Installation and Maintenance',
    ]
  },
  {
    title: 'MEDIUM',
    price: '$1000',
    description: 'adds app maintenance and\nSearch engine optimization',
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
    price: '$800',
    description: 'adds e-commerce and analytics',
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
    description: 'adds app maintenance and\nSearch engine optimization',
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

const PackagesView = () => {
    return (
        <div className="p-[100px] bg-black/80 backdrop-blur-[50px]">        
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
            <div className="text-center mt-10">
                <h2 className="text-2xl font-bold mb-4 text-white uppercase">Explore every detail</h2>
                <h2 className="text-2xl font-bold mb-4 text-white uppercase mt-[-15px]">side by side_</h2>
            </div>
            <PlanComparisonTable/>
        </div>
    )
}
export default PackagesView;