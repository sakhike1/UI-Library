import React, { useState, useEffect } from 'react';
import { NavItem } from '../../types';
import { useTheme, useToggleTheme, useSidebar, useToggleSidebar } from '../../store/uiStore';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';

/**
 * Navigation Component
 * 
 * A responsive navigation bar with mobile menu, theme toggle, and dropdown support.
 * Demonstrates React hooks (useState, useEffect) and responsive design.
 * 
 * Features:
 * - Responsive design with mobile hamburger menu
 * - Theme toggle (light/dark mode)
 * - Dropdown menus
 * - Smooth animations
 * - Zustand state management integration
 * - Smooth scrolling to sections
 */
interface NavigationProps {
  items: NavItem[];
  logo?: React.ReactNode;
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({
  items,
  logo,
  className = '',
}) => {
  // Local state for mobile menu and dropdowns
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // Zustand state
  const theme = useTheme();
  const toggleTheme = useToggleTheme();
  const sidebarOpen = useSidebar();
  const toggleSidebar = useToggleSidebar();
  
  // Smooth scroll function
  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      // Close mobile menu after clicking
      setIsMobileMenuOpen(false);
      setActiveDropdown(null);
    }
  };
  
  // Close mobile menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest('.dropdown')) {
        setActiveDropdown(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);
  
  // Navigation item with dropdown support
  const renderNavItem = (item: NavItem) => {
    const hasDropdown = item.children && item.children.length > 0;
    
    return (
      <div key={item.href} className="relative dropdown">
        {hasDropdown ? (
          <button
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300`}
            onClick={() => setActiveDropdown(activeDropdown === item.href ? null : item.href)}
          >
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {item.label}
            <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${
              activeDropdown === item.href ? 'rotate-180' : ''
            }`} />
          </button>
        ) : (
          <button
            className="flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
            onClick={() => scrollToSection(item.href)}
          >
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {item.label}
          </button>
        )}
        
        {hasDropdown && activeDropdown === item.href && (
          <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-700">
            {item.children?.map((child) => (
              <button
                key={child.href}
                onClick={() => scrollToSection(child.href)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {child.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  return (
    <nav className={`bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            {logo && <div className="flex-shrink-0">{logo}</div>}
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {items.map(renderNavItem)}
          </div>
          
          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            {items.map((item) => (
              <div key={item.href}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                >
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.label}
                </button>
                {/* Mobile dropdown items */}
                {item.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <button
                        key={child.href}
                        onClick={() => scrollToSection(child.href)}
                        className="block w-full text-left px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;