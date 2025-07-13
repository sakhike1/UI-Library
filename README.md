# UI Component Library

A comprehensive React UI component library built with TypeScript, Tailwind CSS, and Zustand state management. This is your go-to reference for building modern web applications quickly and efficiently.

## 🚀 Features

- **Complete UI Components**: Buttons, Cards, Tables, Forms, Navigation, Hero sections, and more
- **TypeScript Support**: Full type safety and IntelliSense
- **Tailwind CSS**: Modern, utility-first CSS framework
- **Zustand State Management**: Lightweight and powerful state management
- **Dark/Light Theme**: Built-in theme switching
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG compliant components
- **Copy & Paste Ready**: All components are ready to use in your projects

## 🛠️ Tech Stack

- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Zustand** - Lightweight state management
- **Lucide React** - Beautiful icons
- **Vite** - Fast build tool

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd reach-crash

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🎯 Quick Start

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Open your browser** and navigate to `http://localhost:5173`

3. **Explore the components** and copy the ones you need for your project

## 📚 Component Documentation

### 🎨 UI Components

#### Button Component
```tsx
import Button from './components/ui/Button';

// Basic usage
<Button variant="primary" onClick={() => console.log('clicked')}>
  Click me
</Button>

// All variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

#### Card Component
```tsx
import Card from './components/ui/Card';

<Card shadow="md" hover>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

#### Hero Component
```tsx
import Hero from './components/ui/Hero';

<Hero
  title="Your Amazing Title"
  subtitle="Your subtitle here"
  description="Detailed description of your product or service"
  primaryButton={{
    text: "Get Started",
    onClick: () => console.log('primary clicked')
  }}
  secondaryButton={{
    text: "Learn More",
    onClick: () => console.log('secondary clicked')
  }}
/>
```

#### Table Component
```tsx
import Table from './components/ui/Table';

const columns = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { 
    key: 'status', 
    label: 'Status',
    render: (value) => <span className="badge">{value}</span>
  }
];

const data = [
  { name: 'John Doe', email: 'john@example.com', status: 'Active' },
  { name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' }
];

<Table columns={columns} data={data} sortable />
```

#### Contact Form Component
```tsx
import ContactForm from './components/ui/ContactForm';

const fields = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'message', label: 'Message', type: 'textarea', required: true }
];

<ContactForm
  fields={fields}
  onSubmit={(data) => console.log('Form data:', data)}
  submitText="Send Message"
/>
```

#### Service Card Component
```tsx
import ServiceCard from './components/ui/ServiceCard';
import { Globe } from 'lucide-react';

<ServiceCard
  title="Web Development"
  description="Custom web applications"
  icon={<Globe />}
  price="$2,500+"
  features={['React', 'Node.js', 'Database Design']}
  buttonText="Get Started"
  onClick={() => console.log('Service selected')}
/>
```

### 🧭 Layout Components

#### Navigation Component
```tsx
import Navigation from './components/layout/Navigation';

const navItems = [
  { label: 'Home', href: '#home', icon: <Home /> },
  { 
    label: 'Services', 
    href: '#services',
    children: [
      { label: 'Web Dev', href: '#web' },
      { label: 'Mobile', href: '#mobile' }
    ]
  }
];

<Navigation items={navItems} logo={<YourLogo />} />
```

#### Footer Component
```tsx
import Footer from './components/layout/Footer';

<Footer />
```

## 🔄 React Hooks Explained

### useState Hook
```tsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

**What it does**: Manages local component state
**When to use**: For component-specific data that changes over time

### useEffect Hook
```tsx
import { useEffect, useState } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    // Fetch user data when component mounts or userId changes
    fetchUser(userId).then(setUser);
  }, [userId]); // Dependency array
  
  return <div>{user?.name}</div>;
}
```

**What it does**: Handles side effects (API calls, subscriptions, DOM manipulation)
**When to use**: For data fetching, subscriptions, or DOM updates

### useMemo Hook
```tsx
import { useMemo } from 'react';

function ExpensiveCalculation({ numbers }) {
  const sum = useMemo(() => {
    return numbers.reduce((acc, num) => acc + num, 0);
  }, [numbers]); // Only recalculate when numbers change
  
  return <div>Sum: {sum}</div>;
}
```

**What it does**: Memoizes expensive calculations
**When to use**: For expensive computations that depend on specific values

### useCallback Hook
```tsx
import { useCallback } from 'react';

function ParentComponent() {
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []); // Empty dependency array = never changes
  
  return <ChildComponent onClick={handleClick} />;
}
```

**What it does**: Memoizes functions to prevent unnecessary re-renders
**When to use**: When passing functions to child components

## 🗃️ Zustand State Management

### Store Setup
```tsx
// store/uiStore.ts
import { create } from 'zustand';

interface UIStore {
  theme: 'light' | 'dark';
  sidebarOpen: boolean;
  toggleTheme: () => void;
  toggleSidebar: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  theme: 'dark',
  sidebarOpen: false,
  toggleTheme: () => set((state) => ({ 
    theme: state.theme === 'light' ? 'dark' : 'light' 
  })),
  toggleSidebar: () => set((state) => ({ 
    sidebarOpen: !state.sidebarOpen 
  })),
}));
```

### Using the Store
```tsx
import { useUIStore } from './store/uiStore';

function ThemeToggle() {
  const { theme, toggleTheme } = useUIStore();
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}
```

### Custom Hooks for Store Slices
```tsx
// Custom hooks for specific state
export const useTheme = () => useUIStore((state) => state.theme);
export const useToggleTheme = () => useUIStore((state) => state.toggleTheme);
```

## 🎨 Tailwind CSS Classes

### Common Utility Classes
```css
/* Spacing */
p-4          /* padding: 1rem */
m-2          /* margin: 0.5rem */
space-x-4    /* gap between children */

/* Colors */
text-blue-600    /* color: #2563eb */
bg-gray-100      /* background-color: #f3f4f6 */
border-red-500   /* border-color: #ef4444 */

/* Typography */
text-lg          /* font-size: 1.125rem */
font-bold        /* font-weight: 700 */
text-center      /* text-align: center */

/* Layout */
flex             /* display: flex */
grid             /* display: grid */
hidden           /* display: none */

/* Responsive */
md:flex          /* flex on medium screens and up */
lg:hidden        /* hidden on large screens and up */
```

### Dark Mode
```css
/* Dark mode classes */
dark:bg-gray-900     /* dark background */
dark:text-white      /* dark text */
dark:border-gray-700 /* dark border */
```

## 📱 Responsive Design

### Breakpoints
- `sm`: 640px and up
- `md`: 768px and up
- `lg`: 1024px and up
- `xl`: 1280px and up
- `2xl`: 1536px and up

### Example
```tsx
<div className="
  grid 
  grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-3 
  gap-4
">
  {/* Responsive grid */}
</div>
```

## ♿ Accessibility

All components include:
- Proper ARIA labels
- Keyboard navigation
- Screen reader support
- Focus management
- Color contrast compliance

## 🚀 Performance Tips

1. **Use React.memo** for expensive components
2. **Implement useMemo** for expensive calculations
3. **Use useCallback** for function props
4. **Lazy load** components when possible
5. **Optimize images** and assets

## 📝 TypeScript Best Practices

### Interface Definitions
```tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
}
```

### Generic Types
```tsx
interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
}
```

## 🔧 Customization

### Theme Customization
```tsx
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      }
    }
  }
}
```

### Component Customization
```tsx
// Extend component props
interface CustomButtonProps extends ButtonProps {
  customProp?: string;
}
```

## 📦 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - feel free to use this in your projects!

## 🆘 Support

If you have questions or need help:
1. Check the component documentation above
2. Look at the example implementations in the code
3. Open an issue on GitHub

---

**Happy coding! 🎉**

This UI library is designed to make your development process faster and more enjoyable. Copy the components you need, customize them to your brand, and build amazing applications!
#   U I - L i b r a r y  
 