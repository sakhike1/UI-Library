import React from 'react';
import { HeroProps } from '../../types';
import Button from './Button';

/**
 * Hero Component
 * 
 * A hero section component with title, subtitle, description, and call-to-action buttons.
 * Perfect for landing pages and main content sections.
 * 
 * Props:
 * - title: Main headline
 * - subtitle: Secondary headline
 * - description: Supporting text
 * - primaryButton: Main call-to-action button
 * - secondaryButton: Secondary call-to-action button
 * - backgroundImage: Optional background image URL
 */
const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
  backgroundImage,
}) => {
  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {};

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white"
      style={backgroundStyle}
    >
      {/* Background overlay */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      )}
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg md:text-xl text-blue-200 mb-4 font-medium">
            {subtitle}
          </p>
        )}
        
        {/* Main title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        
        {/* Description */}
        {description && (
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
        
        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {primaryButton && (
            <Button
              variant="primary"
              size="lg"
              onClick={primaryButton.onClick}
              className="w-full sm:w-auto"
            >
              {primaryButton.text}
            </Button>
          )}
          
          {secondaryButton && (
            <Button
              variant="outline"
              size="lg"
              onClick={secondaryButton.onClick}
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-gray-900"
            >
              {secondaryButton.text}
            </Button>
          )}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 