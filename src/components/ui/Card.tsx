import React from 'react';
import { CardProps } from '../../types';

/**
 * Card Component
 * 
 * A flexible card component with configurable shadows and hover effects.
 * Perfect for displaying content in a contained format.
 * 
 * Props:
 * - children: Card content
 * - className: Additional CSS classes
 * - shadow: Shadow intensity (sm, md, lg, xl)
 * - hover: Whether to show hover effects
 */
const Card: React.FC<CardProps> = ({
  children,
  className = '',
  shadow = 'md',
  hover = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  // Shadow classes
  const shadowClasses = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };
  
  // Hover effects
  const hoverClasses = hover ? 'hover:shadow-lg hover:-translate-y-1 transition-all duration-300' : '';
  
  // Base card classes
  const baseClasses = 'bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6';
  
  // Combine all classes
  const cardClasses = `${baseClasses} ${shadowClasses[shadow]} ${hoverClasses} ${className}`;
  
  return (
    <div 
      className={cardClasses}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

export default Card; 