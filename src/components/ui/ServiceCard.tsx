import React from 'react';
import { ServiceCardProps } from '../../types';
import Button from './Button';
import { Check } from 'lucide-react';

/**
 * ServiceCard Component
 * 
 * A service card component for displaying services, pricing, and features.
 * Perfect for pricing pages and service showcases.
 * 
 * Props:
 * - title: Service title
 * - description: Service description
 * - icon: Optional icon component
 * - price: Optional pricing information
 * - features: Array of features included
 * - buttonText: Call-to-action button text
 * - onClick: Button click handler
 */
const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  price,
  features = [],
  buttonText,
  onClick,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Icon */}
      {icon && (
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
            {icon}
          </div>
        </div>
      )}
      
      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">
        {title}
      </h3>
      
      {/* Price */}
      {price && (
        <div className="text-center mb-4">
          <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            {price}
          </span>
        </div>
      )}
      
      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 text-center mb-6 leading-relaxed">
        {description}
      </p>
      
      {/* Features */}
      {features.length > 0 && (
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
              <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}
      
      {/* Call-to-action button */}
      {buttonText && (
        <div className="text-center">
          <Button
            variant="primary"
            onClick={onClick}
            className="w-full"
          >
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ServiceCard; 