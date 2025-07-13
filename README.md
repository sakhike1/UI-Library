# UI Component Library

A comprehensive React UI component library built with TypeScript, Tailwind CSS, and Zustand state management.

## 🚀 Features

- **Complete UI Components**: Buttons, Cards, Tables, Forms, Navigation, Hero sections
- **TypeScript Support**: Full type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Zustand State Management**: Lightweight state management
- **Dark/Light Theme**: Built-in theme switching
- **Responsive Design**: Mobile-first approach
- **Copy & Paste Ready**: All components ready to use

## 🛠️ Tech Stack

- React 19, TypeScript, Tailwind CSS, Zustand, Lucide React, Vite

## 📦 Quick Start

```bash
git clone <your-repo-url>
cd reach-crash
npm install
npm run dev
```

## 📚 Component Examples

### Button
```tsx
import Button from './components/ui/Button';

<Button variant="primary" onClick={() => console.log('clicked')}>
  Click me
</Button>
```

### Card
```tsx
import Card from './components/ui/Card';

<Card shadow="md" hover>
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

### Hero
```tsx
import Hero from './components/ui/Hero';

<Hero
  title="Your Title"
  description="Description here"
  primaryButton={{
    text: "Get Started",
    onClick: () => console.log('clicked')
  }}
/>
```

### Table
```tsx
import Table from './components/ui/Table';

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' }
];

const data = [
  { name: 'John Doe', email: 'john@example.com' }
];

<Table columns={columns} data={data} />
```

### Contact Form
```tsx
import ContactForm from './components/ui/ContactForm';

const fields = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true }
];

<ContactForm
  fields={fields}
  onSubmit={(data) => console.log(data)}
/>
```

## 🗃️ Zustand Store

```tsx
// store/uiStore.ts
import { create } from 'zustand';

interface UIStore {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  theme: 'dark',
  toggleTheme: () => set((state) => ({ 
    theme: state.theme === 'light' ? 'dark' : 'light' 
  })),
}));

// Usage
const { theme, toggleTheme } = useUIStore();
```

## 🎨 Tailwind CSS

```css
/* Common classes */
p-4          /* padding: 1rem */
text-blue-600 /* color: #2563eb */
bg-gray-100   /* background: #f3f4f6 */
dark:bg-gray-900 /* dark mode */
```

## 📱 Responsive Design

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Responsive grid */}
</div>
```

## 📦 Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview build
npm run lint     # Run ESLint
```

## 📄 License

MIT License

---

**Happy coding! 🎉**