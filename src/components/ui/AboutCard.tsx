import React from 'react';
import { AboutCardProps } from '../../types';

/**
 * AboutCard Component
 * 
 * An about card component for displaying company/personal information with statistics.
 * Perfect for about pages and team member profiles.
 * 
 * Props:
 * - title: Card title
 * - content: Main content text
 * - image: Optional image URL
 * - stats: Array of statistics to display
 * - className: Additional CSS classes
 */
const AboutCard: React.FC<AboutCardProps> = ({
  title,
  content,
  image,
  stats = [],
  className = '',
}) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden ${className}`}>
      {/* Image */}
      {image && (
        <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h3>
        
        {/* Content */}
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          {content}
        </p>
        
        {/* Stats */}
        {stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutCard; 