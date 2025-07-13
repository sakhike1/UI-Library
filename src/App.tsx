import React, { useState, useEffect } from 'react';
import { useTheme } from './store/uiStore';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Hero from './components/ui/Hero';
import Button from './components/ui/Button';
import Card from './components/ui/Card';
import Table from './components/ui/Table';
import ContactForm from './components/ui/ContactForm';
import ServiceCard from './components/ui/ServiceCard';
import AboutCard from './components/ui/AboutCard';
import ScrollToTop from './components/ui/ScrollToTop';
import { 
  HeroCentered, 
  HeroSplit, 
  HeroMinimal, 
  HeroBusiness, 
  HeroVideo 
} from './components/ui/HeroVariants';
import {
  ProductCard,
  ProductGrid,
  ShoppingCart,
  ProductGallery,
  CategoryCard,
  NewsletterSignup,
  OrderSummary
} from './components/ui/EcommerceComponents';
import {
  Testimonial,
  TestimonialGrid,
  PricingTable,
  FAQ,
  BlogCard,
  BlogGrid,
  Stats,
  FeatureGrid,
  CTA,
  Modal,
  Breadcrumb
} from './components/ui/WebsiteComponents';
import { NavItem, TableColumn, FormField } from './types';
import { 
  Home, 
  Info, 
  Settings, 
  Users, 
  Mail, 
  Phone, 
  Star, 
  Code, 
  Palette, 
  Smartphone,
  Globe,
  Zap,
  ShoppingBag,
  FileText,
  Award,
  Users as UsersIcon,
  Shield,
  Zap as ZapIcon,
  Download
} from 'lucide-react';

/**
 * Main App Component
 * 
 * This is your comprehensive UI component library website.
 * It showcases all the reusable components you can copy and paste into your projects.
 * 
 * Features:
 * - Complete component showcase
 * - Interactive examples
 * - Code documentation
 * - Dark/light theme support
 * - Responsive design
 * - Zustand state management
 */
const App: React.FC = () => {
  const theme = useTheme();
  const [activeSection, setActiveSection] = useState('hero');
  const [currentHeroVariant, setCurrentHeroVariant] = useState('centered');
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Navigation items with smooth scrolling
  const navItems: NavItem[] = [
    { label: 'Home', href: '#hero', icon: <Home className="w-4 h-4" /> },
    { 
      label: 'Components', 
      href: '#components',
      icon: <Code className="w-4 h-4" />,
      children: [
        { label: 'Hero Sections', href: '#hero-variants' },
        { label: 'E-commerce', href: '#ecommerce' },
        { label: 'Website', href: '#website' },
        { label: 'Buttons', href: '#buttons' },
        { label: 'Cards', href: '#cards' },
        { label: 'Tables', href: '#tables' },
        { label: 'Forms', href: '#forms' },
      ]
    },
    { label: 'About', href: '#about', icon: <Info className="w-4 h-4" /> },
    { label: 'Services', href: '#services', icon: <Settings className="w-4 h-4" /> },
    { label: 'Contact', href: '#contact', icon: <Mail className="w-4 h-4" /> },
  ];

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setActiveSection(sectionId.replace('#', ''));
    }
  };

  // Hero section data
  const heroData = {
    title: "Your Complete UI Component Library",
    subtitle: "Build Faster, Design Better",
    description: "A comprehensive collection of reusable React components with TypeScript, Tailwind CSS, and Zustand state management. Copy, paste, and customize for your next project.",
    primaryButton: {
      text: 'Explore Components',
      onClick: () => scrollToSection('components')
    },
    secondaryButton: {
      text: 'View Documentation',
      onClick: () => window.open('https://github.com/your-repo', '_blank')
    }
  };

  // Hero variants
  const heroVariants = [
    { id: 'centered', name: 'Centered', component: HeroCentered },
    { id: 'split', name: 'Split Layout', component: HeroSplit },
    { id: 'minimal', name: 'Minimal', component: HeroMinimal },
    { id: 'business', name: 'Business', component: HeroBusiness },
    { id: 'video', name: 'Video Background', component: HeroVideo },
  ];

  // Sample product data
  const sampleProducts = [
    {
      id: '1',
      name: 'Wireless Bluetooth Headphones',
      price: 99.99,
      originalPrice: 129.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      rating: 4.5,
      reviewCount: 128,
      isNew: true,
      isSale: false,
      discount: 0,
    },
    {
      id: '2',
      name: 'Smart Watch Series 5',
      price: 299.99,
      originalPrice: 399.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
      rating: 4.8,
      reviewCount: 256,
      isNew: false,
      isSale: true,
      discount: 25,
    },
    {
      id: '3',
      name: 'Premium Coffee Maker',
      price: 199.99,
      originalPrice: 199.99,
      image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400',
      rating: 4.3,
      reviewCount: 89,
      isNew: false,
      isSale: false,
      discount: 0,
    },
    {
      id: '4',
      name: 'Laptop Stand Pro',
      price: 79.99,
      originalPrice: 99.99,
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400',
      rating: 4.6,
      reviewCount: 156,
      isNew: false,
      isSale: true,
      discount: 20,
    },
  ];

  // Sample testimonials
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart',
      content: 'This UI library has saved us countless hours of development time. The components are beautifully designed and highly customizable.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100',
    },
    {
      name: 'Mike Chen',
      role: 'Lead Developer',
      company: 'InnovateCorp',
      content: 'The quality and attention to detail in these components is outstanding. They work perfectly out of the box.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    },
    {
      name: 'Emily Davis',
      role: 'Designer',
      company: 'CreativeStudio',
      content: 'Finally, a component library that understands modern design principles. The dark mode support is excellent.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    },
  ];

  // Sample pricing tiers
  const pricingTiers = [
    {
      name: 'Starter',
      price: 29,
      period: 'month',
      description: 'Perfect for small projects',
      features: ['Up to 10 components', 'Basic support', 'Documentation', 'Updates'],
      buttonText: 'Get Started',
      onClick: () => alert('Starter plan selected'),
    },
    {
      name: 'Professional',
      price: 99,
      period: 'month',
      description: 'Ideal for growing teams',
      features: ['Unlimited components', 'Priority support', 'Custom themes', 'Advanced features'],
      isPopular: true,
      buttonText: 'Get Started',
      onClick: () => alert('Professional plan selected'),
    },
    {
      name: 'Enterprise',
      price: 299,
      period: 'month',
      description: 'For large organizations',
      features: ['Everything in Pro', 'Dedicated support', 'Custom development', 'SLA guarantee'],
      buttonText: 'Contact Sales',
      onClick: () => alert('Enterprise plan selected'),
    },
  ];

  // Sample FAQ items
  const faqItems = [
    {
      question: 'How do I get started with the UI library?',
      answer: 'Simply copy the component code from our examples and paste it into your project. All components are ready to use with minimal setup required.',
    },
    {
      question: 'Do you support TypeScript?',
      answer: 'Yes! All components are built with TypeScript and include full type definitions for better development experience.',
    },
    {
      question: 'Can I customize the components?',
      answer: 'Absolutely! All components are highly customizable through props and CSS classes. You can easily modify colors, spacing, and behavior.',
    },
    {
      question: 'Is there a dark mode?',
      answer: 'Yes, all components support both light and dark modes. The theme switching is handled automatically through our Zustand store.',
    },
  ];

  // Sample blog posts
  const blogPosts = [
    {
      title: 'Building Modern Web Applications with React',
      excerpt: 'Learn the best practices for building scalable and maintainable React applications using modern tools and techniques.',
      author: 'John Smith',
      date: 'Dec 15, 2024',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400',
      category: 'Development',
      readTime: '5 min read',
      onClick: () => alert('Blog post clicked'),
    },
    {
      title: 'The Future of UI Design Systems',
      excerpt: 'Explore how design systems are evolving and what trends are shaping the future of user interface design.',
      author: 'Jane Doe',
      date: 'Dec 12, 2024',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400',
      category: 'Design',
      readTime: '7 min read',
      onClick: () => alert('Blog post clicked'),
    },
    {
      title: 'Optimizing Performance in React Apps',
      excerpt: 'Discover techniques and strategies for improving the performance of your React applications.',
      author: 'Mike Wilson',
      date: 'Dec 10, 2024',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400',
      category: 'Performance',
      readTime: '6 min read',
      onClick: () => alert('Blog post clicked'),
    },
  ];

  // Sample stats
  const stats = [
    { value: '50+', label: 'Components', icon: <Code className="w-8 h-8" /> },
    { value: '10K+', label: 'Downloads', icon: <Download className="w-8 h-8" /> },
    { value: '500+', label: 'Projects', icon: <Globe className="w-8 h-8" /> },
    { value: '2K+', label: 'Developers', icon: <UsersIcon className="w-8 h-8" /> },
  ];

  // Sample features
  const features = [
    {
      title: 'TypeScript Support',
      description: 'Full TypeScript support with comprehensive type definitions for better development experience.',
      icon: <Code className="w-8 h-8" />,
    },
    {
      title: 'Responsive Design',
      description: 'All components are mobile-first and work perfectly on all screen sizes.',
      icon: <Smartphone className="w-8 h-8" />,
    },
    {
      title: 'Dark Mode',
      description: 'Built-in dark mode support with automatic theme switching.',
      icon: <Palette className="w-8 h-8" />,
    },
    {
      title: 'Accessibility',
      description: 'WCAG compliant components with proper ARIA labels and keyboard navigation.',
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: 'Performance',
      description: 'Optimized components with minimal bundle size and fast rendering.',
      icon: <ZapIcon className="w-8 h-8" />,
    },
    {
      title: 'Customizable',
      description: 'Highly customizable components that adapt to your brand and design system.',
      icon: <Award className="w-8 h-8" />,
    },
  ];

  // Table data and columns
  const tableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Developer', status: 'Active' },
  ];

  const tableColumns: TableColumn[] = [
    { key: 'id', label: 'ID', sortable: true },
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'role', label: 'Role', sortable: true },
    { 
      key: 'status', 
      label: 'Status', 
      sortable: true,
      render: (value) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          value === 'Active' 
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
        }`}>
          {value}
        </span>
      )
    },
  ];

  // Form fields
  const contactFields: FormField[] = [
    { name: 'name', label: 'Name', type: 'text', required: true, placeholder: 'Enter your name' },
    { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'Enter your email' },
    { 
      name: 'subject', 
      label: 'Subject', 
      type: 'select', 
      required: true,
      options: [
        { value: 'general', label: 'General Inquiry' },
        { value: 'support', label: 'Technical Support' },
        { value: 'billing', label: 'Billing Question' },
        { value: 'other', label: 'Other' },
      ]
    },
    { name: 'message', label: 'Message', type: 'textarea', required: true, placeholder: 'Enter your message' },
  ];

  // Services data
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies',
      icon: <Globe className="w-8 h-8" />,
      price: '$2,500+',
      features: ['React/Next.js', 'Node.js Backend', 'Database Design', 'API Integration'],
      buttonText: 'Get Started',
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications',
      icon: <Smartphone className="w-8 h-8" />,
      price: '$3,000+',
      features: ['React Native', 'iOS Development', 'Android Development', 'App Store Publishing'],
      buttonText: 'Learn More',
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interface design',
      icon: <Palette className="w-8 h-8" />,
      price: '$1,500+',
      features: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems'],
      buttonText: 'View Portfolio',
    },
  ];

  // Cart handlers
  const handleAddToCart = (productId: string) => {
    const product = sampleProducts.find(p => p.id === productId);
    if (product) {
      setCartItems(prev => {
        const existing = prev.find(item => item.id === productId);
        if (existing) {
          return prev.map(item => 
            item.id === productId 
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [...prev, { ...product, quantity: 1 }];
      });
      setIsCartOpen(true);
    }
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== productId));
    } else {
      setCartItems(prev => 
        prev.map(item => 
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  // Apply theme to document
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'components', 'services', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Render current hero variant
  const renderHeroVariant = () => {
    const variant = heroVariants.find(v => v.id === currentHeroVariant);
    if (!variant) return null;

    const HeroComponent = variant.component;
    
    if (variant.id === 'split') {
      return <HeroComponent {...heroData} imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80" />;
    }
    
    if (variant.id === 'video') {
      return <HeroComponent {...heroData} videoUrl="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" />;
    }
    
    return <HeroComponent {...heroData} />;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <Navigation 
        items={navItems}
        logo={<div className="text-xl font-bold text-blue-600 dark:text-blue-400">UI Library</div>}
      />

      {/* Hero Section */}
      <section id="hero">
        {renderHeroVariant()}
      </section>

      {/* Hero Variants Showcase */}
      <section id="hero-variants" className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Hero Section Variants
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Choose from different hero section styles for your projects
            </p>
          </div>

          {/* Hero Variant Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {heroVariants.map((variant) => (
              <Button
                key={variant.id}
                variant={currentHeroVariant === variant.id ? 'primary' : 'outline'}
                onClick={() => setCurrentHeroVariant(variant.id)}
                className="min-w-[140px]"
              >
                {variant.name}
              </Button>
            ))}
          </div>

          {/* Hero Variant Preview */}
          <Card className="mb-8">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {heroVariants.find(v => v.id === currentHeroVariant)?.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Click the buttons above to see different hero section styles
              </p>
            </div>
            
            {/* Code snippet */}
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-sm">
              <pre className="text-gray-800 dark:text-gray-200 overflow-x-auto">
                <code>{`import { ${heroVariants.find(v => v.id === currentHeroVariant)?.name.replace(/\s+/g, '')} } from './components/ui/HeroVariants';

<${heroVariants.find(v => v.id === currentHeroVariant)?.name.replace(/\s+/g, '')}
  title="${heroData.title}"
  subtitle="${heroData.subtitle}"
  description="${heroData.description}"
  primaryButton={{
    text: "${heroData.primaryButton.text}",
    onClick: () => console.log('clicked')
  }}
  secondaryButton={{
    text: "${heroData.secondaryButton.text}",
    onClick: () => console.log('clicked')
  }}
/>`}</code>
              </pre>
            </div>
          </Card>
        </div>
      </section>

      {/* E-commerce Components */}
      <section id="ecommerce" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              E-commerce Components
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Complete components for building online stores
            </p>
          </div>

          {/* Product Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Product Grid
            </h3>
            <ProductGrid
              products={sampleProducts}
              onAddToCart={handleAddToCart}
              onAddToWishlist={(id) => alert(`Added ${id} to wishlist`)}
              onQuickView={(id) => alert(`Quick view ${id}`)}
            />
          </div>

          {/* Product Gallery */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Product Gallery
            </h3>
            <Card>
              <ProductGallery
                images={[
                  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600',
                  'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600',
                  'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600',
                  'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600',
                ]}
                productName="Wireless Bluetooth Headphones"
              />
            </Card>
          </div>

          {/* Category Cards */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Category Cards
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <CategoryCard
                name="Electronics"
                image="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400"
                productCount={156}
                onClick={() => alert('Electronics category clicked')}
              />
              <CategoryCard
                name="Fashion"
                image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400"
                productCount={89}
                onClick={() => alert('Fashion category clicked')}
              />
              <CategoryCard
                name="Home & Garden"
                image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400"
                productCount={234}
                onClick={() => alert('Home & Garden category clicked')}
              />
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Newsletter Signup
            </h3>
            <NewsletterSignup
              onSubmit={(email) => alert(`Subscribed: ${email}`)}
            />
          </div>

          {/* Order Summary */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Order Summary
            </h3>
            <div className="max-w-md">
              <OrderSummary
                subtotal={299.97}
                shipping={9.99}
                tax={24.00}
                discount={50.00}
                total={283.96}
                onCheckout={() => alert('Proceeding to checkout')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Website Components */}
      <section id="website" className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Website Components
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Essential components for building complete websites
            </p>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Testimonials
            </h3>
            <TestimonialGrid testimonials={testimonials} />
          </div>

          {/* Pricing Table */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Pricing Table
            </h3>
            <PricingTable tiers={pricingTiers} />
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              FAQ Section
            </h3>
            <FAQ items={faqItems} />
          </div>

          {/* Blog Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Blog Grid
            </h3>
            <BlogGrid posts={blogPosts} />
          </div>

          {/* Stats */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Stats Section
            </h3>
            <Stats stats={stats} />
          </div>

          {/* Feature Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Feature Grid
            </h3>
            <FeatureGrid features={features} />
          </div>

          {/* CTA Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Call to Action
            </h3>
            <CTA
              title="Ready to Get Started?"
              description="Join thousands of developers who are already building amazing applications with our UI library."
              primaryButton={{
                text: 'Get Started Now',
                onClick: () => alert('Get Started clicked'),
              }}
              secondaryButton={{
                text: 'View Documentation',
                onClick: () => alert('Documentation clicked'),
              }}
            />
          </div>
        </div>
      </section>

      {/* Components Showcase */}
      <section id="components" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              UI Components
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Ready-to-use components for your next project
            </p>
          </div>

          {/* Buttons Section */}
          <div id="buttons" className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Buttons
            </h3>
            <Card className="mb-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Variants</h4>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="danger">Danger</Button>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Sizes</h4>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">States</h4>
                  <div className="flex flex-wrap gap-4">
                    <Button>Normal</Button>
                    <Button disabled>Disabled</Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Cards Section */}
          <div id="cards" className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Cards
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card shadow="sm" hover>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Basic Card</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  A simple card with hover effects and customizable shadows.
                </p>
              </Card>
              <Card shadow="md" hover>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Medium Shadow</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Card with medium shadow and hover animation.
                </p>
              </Card>
              <Card shadow="lg" hover>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Large Shadow</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Card with large shadow for emphasis.
                </p>
              </Card>
            </div>
          </div>

          {/* Tables Section */}
          <div id="tables" className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Tables
            </h3>
            <Card>
              <Table 
                columns={tableColumns} 
                data={tableData}
                className="w-full"
              />
            </Card>
          </div>

          {/* Forms Section */}
          <div id="forms" className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Forms
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Contact Form</h4>
                <ContactForm
                  fields={contactFields}
                  onSubmit={(data) => {
                    console.log('Form submitted:', data);
                    alert('Form submitted! Check console for data.');
                  }}
                  submitText="Send Message"
                />
              </Card>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Form Features</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Multiple field types (text, email, select, textarea)</li>
                  <li>• Real-time validation</li>
                  <li>• Error handling and display</li>
                  <li>• Responsive design</li>
                  <li>• Accessibility support</li>
                  <li>• Custom validation functions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Professional services to help your business grow
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                onClick={() => alert(`Clicked on ${service.title}`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              About Us
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Learn more about our team and mission
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AboutCard
              title="Our Mission"
              content="We're dedicated to creating high-quality, reusable UI components that help developers build better applications faster. Our components are built with modern technologies and best practices."
              stats={[
                { label: 'Components', value: '50+' },
                { label: 'Downloads', value: '10K+' },
                { label: 'Projects', value: '500+' },
                { label: 'Developers', value: '2K+' },
              ]}
            />
            <AboutCard
              title="Our Team"
              content="A passionate team of developers and designers working together to create the best developer experience possible. We believe in open source and community-driven development."
              stats={[
                { label: 'Team Members', value: '8' },
                { label: 'Years Experience', value: '15+' },
                { label: 'Technologies', value: '20+' },
                { label: 'Awards', value: '5' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Ready to start your next project? Let's talk!
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card>
              <ContactForm
                fields={contactFields}
                onSubmit={(data) => {
                  console.log('Contact form submitted:', data);
                  alert('Thank you for your message! We\'ll get back to you soon.');
                }}
                submitText="Send Message"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Shopping Cart */}
      <ShoppingCart
        items={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* Modal Example */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Example Modal"
        size="md"
      >
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          This is an example modal component. You can put any content here.
        </p>
        <div className="flex gap-4">
          <Button onClick={() => setIsModalOpen(false)}>Close</Button>
          <Button variant="primary">Save Changes</Button>
        </div>
      </Modal>

      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
};

export default App; 