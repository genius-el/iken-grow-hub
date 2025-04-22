
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface OfferCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const OfferCard = ({ icon, title, description, features, isPopular = false }: OfferCardProps) => {
  return (
    <div className={`relative bg-white rounded-xl ${isPopular ? 'ring-2 ring-iken shadow-lg' : 'border border-gray-200 shadow-sm'} p-6 transition-all duration-300 hover:shadow-md`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-iken text-white text-sm font-medium py-1 px-4 rounded-full">
          Most Popular
        </div>
      )}
      <div className="w-12 h-12 bg-iken-light rounded-full flex items-center justify-center text-iken mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <svg
              className="w-5 h-5 text-iken mr-2 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
      <Button className={`w-full ${isPopular ? 'bg-iken hover:bg-iken-dark' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
        Join Now
      </Button>
    </div>
  );
};

export default OfferCard;
