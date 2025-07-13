import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import Button from './Button';

/**
 * ScrollToTop Component
 * 
 * A scroll-to-top button that appears when the user scrolls down.
 * Demonstrates useEffect for scroll event handling and smooth scrolling.
 * 
 * Features:
 * - Appears when user scrolls down
 * - Smooth scroll to top animation
 * - Responsive design
 * - Accessibility support
 */
const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          variant="primary"
          size="sm"
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 p-0 shadow-lg hover:shadow-xl transition-all duration-300 opacity-100 transform translate-y-0"
          aria-label="Scroll to top"
          style={{
            animation: 'fadeIn 0.3s ease-out'
          }}
        >
          <ChevronUp className="w-5 h-5" />
        </Button>
      )}
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `
      }} />
    </>
  );
};

export default ScrollToTop; 