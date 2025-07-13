import React, { useState } from 'react';
import { Star, Quote, Calendar, User, ArrowRight, ChevronDown, ChevronUp, Check, X } from 'lucide-react';
import Button from './Button';
import Card from './Card';

/**
 * Website Components
 * 
 * Essential components for building complete websites.
 * Includes testimonials, pricing, FAQ, blog, and more.
 */

// Testimonial Component
interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({
  name,
  role,
  company,
  content,
  rating,
  avatar,
}) => {
  return (
    <Card className="relative">
      <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-200 dark:text-blue-800" />
      
      <div className="mb-4">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
        "{content}"
      </p>
      
      <div className="flex items-center">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">{name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {role} at {company}
          </p>
        </div>
      </div>
    </Card>
  );
};

// Testimonial Grid
interface TestimonialGridProps {
  testimonials: TestimonialProps[];
}

export const TestimonialGrid: React.FC<TestimonialGridProps> = ({ testimonials }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <Testimonial key={index} {...testimonial} />
      ))}
    </div>
  );
};

// Pricing Table Component
interface PricingTier {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  onClick: () => void;
}

interface PricingTableProps {
  tiers: PricingTier[];
}

export const PricingTable: React.FC<PricingTableProps> = ({ tiers }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {tiers.map((tier, index) => (
        <Card
          key={index}
          className={`relative ${tier.isPopular ? 'ring-2 ring-blue-500 scale-105' : ''}`}
          hover
        >
          {tier.isPopular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
          )}
          
          <div className="text-center p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {tier.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {tier.description}
            </p>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">
                ${tier.price}
              </span>
              <span className="text-gray-600 dark:text-gray-400">/{tier.period}</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              {tier.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button
              variant={tier.isPopular ? 'primary' : 'outline'}
              className="w-full"
              onClick={tier.onClick}
            >
              {tier.buttonText}
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

// FAQ Component
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  description?: string;
}

export const FAQ: React.FC<FAQProps> = ({
  items,
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about our services",
}) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <Card key={index} className="overflow-hidden">
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.question}
              </h3>
              {openItems.includes(index) ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {openItems.includes(index) && (
              <div className="px-6 pb-6">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

// Blog Card Component
interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
  onClick: () => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  author,
  date,
  image,
  category,
  readTime,
  onClick,
}) => {
  return (
    <Card className="cursor-pointer overflow-hidden" hover onClick={onClick}>
      <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
          <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
            {category}
          </span>
          <span>{readTime}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <User className="w-4 h-4 text-gray-400 mr-2" />
            <span className="text-sm text-gray-600 dark:text-gray-400">{author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 text-gray-400 mr-2" />
            <span className="text-sm text-gray-600 dark:text-gray-400">{date}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

// Blog Grid
interface BlogGridProps {
  posts: BlogCardProps[];
}

export const BlogGrid: React.FC<BlogGridProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <BlogCard key={index} {...post} />
      ))}
    </div>
  );
};

// Stats Component
interface StatItem {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface StatsProps {
  stats: StatItem[];
  title?: string;
  description?: string;
}

export const Stats: React.FC<StatsProps> = ({
  stats,
  title = "Our Impact",
  description = "Numbers that tell our story",
}) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-blue-100">{description}</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {stat.icon && (
                <div className="w-12 h-12 mx-auto mb-4 text-blue-200">
                  {stat.icon}
                </div>
              )}
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Feature Grid Component
interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureGridProps {
  features: Feature[];
  title?: string;
  description?: string;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  features,
  title = "Why Choose Us",
  description = "Discover what makes us different",
}) => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center" hover>
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

// Call to Action Component
interface CTAProps {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    onClick: () => void;
  };
  secondaryButton?: {
    text: string;
    onClick: () => void;
  };
  backgroundImage?: string;
}

export const CTA: React.FC<CTAProps> = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  backgroundImage,
}) => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="secondary"
            size="lg"
            onClick={primaryButton.onClick}
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            {primaryButton.text}
          </Button>
          
          {secondaryButton && (
            <Button
              variant="outline"
              size="lg"
              onClick={secondaryButton.onClick}
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              {secondaryButton.text}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

// Modal Component
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={onClose}
      />
      
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className={`bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full ${sizeClasses[size]} max-h-[90vh] overflow-y-auto`}>
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

// Breadcrumb Component
interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && (
            <span className="mx-2 text-gray-400">/</span>
          )}
          
          {item.href ? (
            <a
              href={item.href}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span className="text-gray-900 dark:text-white font-medium">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}; 