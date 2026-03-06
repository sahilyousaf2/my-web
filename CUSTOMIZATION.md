# Customization Guide

This guide will help you customize the Chris Tect Solution website to match your brand.

## Brand Colors

### Current Theme
The website currently uses a professional blue-purple gradient theme:
- **Primary**: Blue (`#6366F1`)
- **Secondary**: Purple (`#8B5CF6`)
- **Accent**: Cyan (`#00D9FF`)
- **Background**: Dark (`#0F172A`)

### How to Change Colors

1. **Edit `app/globals.css`**

Find the `:root` section and update the CSS variables:

```css
:root {
  --primary: 217 91% 60%;        /* Primary brand color */
  --secondary: 280 85% 55%;      /* Secondary accent color */
  --accent: 180 100% 50%;        /* Highlight color */
  /* ... other variables ... */
}
```

Color values use HSL format (Hue, Saturation, Lightness). To find your colors:
- Use [HSL Color Picker](https://www.hsltohex.com/)
- Keep saturation 70-100% for vibrant colors
- Keep lightness 40-70% for good contrast

### Color Examples

**Tech/Blue Theme** (Current)
```css
--primary: 217 91% 60%;
--secondary: 280 85% 55%;
--accent: 180 100% 50%;
```

**Green Eco Theme**
```css
--primary: 142 71% 45%;
--secondary: 147 72% 45%;
--accent: 180 100% 50%;
```

**Orange Energy Theme**
```css
--primary: 24 100% 50%;
--secondary: 5 83% 58%;
--accent: 43 100% 50%;
```

**Red Premium Theme**
```css
--primary: 346 100% 55%;
--secondary: 22 100% 52%;
--accent: 30 100% 50%;
```

## Company Branding

### Update Company Name

1. **Header Logo** - `app/components/Header.tsx`
   - Change the "CT" initials and "Chris Tect" text
   - Update the link text

2. **Footer** - `app/components/Footer.tsx`
   - Update company name and description
   - Update contact email and phone
   - Update location

3. **Navigation** - `data/navData.ts`
   - Update menu items if needed

### Example:
```tsx
// Header.tsx
<span className="text-lg font-bold text-white hidden sm:inline">
  Your Company Name
</span>
```

## Homepage Content

### Update Hero Section

Edit `app/page.tsx` - Hero Section:

```tsx
<h1>
  Innovative Digital Solutions for
  <span className="gradient-text ml-2">Your Industry</span>
</h1>
<p>
  Your company description goes here...
</p>
```

### Update Services

Edit the `services` array in `app/page.tsx`:

```typescript
const services = [
  {
    icon: Code2,
    title: 'Your Service 1',
    description: 'Description of your service',
  },
  // Add more services...
];
```

Available icons from Lucide React:
- `Code2` - Web Development
- `Palette` - Design
- `Smartphone` - Mobile
- `Zap` - Performance
- `Cloud` - Cloud Services
- `TrendingUp` - Growth
- And [many more](https://lucide.dev)

### Update Pricing

Edit the `pricing` array in `app/page.tsx`:

```typescript
const pricing = [
  {
    name: 'Starter',
    price: '499',
    description: 'For individuals',
    features: [
      'Feature 1',
      'Feature 2',
      // ...
    ],
  },
  // ...
];
```

### Update Portfolio Projects

Edit the `projects` array in `app/page.tsx`:

```typescript
const projects = [
  {
    title: 'Project Name',
    category: 'Web Development',
    image: '/project-image.jpg',
  },
  // ...
];
```

## About Page

Edit `app/about/page.tsx`:

```tsx
// Update company mission
<p>To [your mission statement]...</p>

// Update company vision
<p>To [your vision statement]...</p>

// Update statistics
const teamStats = [
  { label: 'Your Stat 1', value: '50' },
  { label: 'Your Stat 2', value: '25' },
  // ...
];
```

## Contact Page

Edit `app/contact/page.tsx`:

```tsx
// Update contact details
<p>contact@yourcompany.com</p>
<p>+1 (555) 123-4567</p>
<p>Your City, State ZIP</p>
```

## Portfolio Page

Edit `app/portfolio/page.tsx`:

1. Update categories in `categories` array:
```typescript
const categories = ['All', 'Your Category 1', 'Your Category 2'];
```

2. Add portfolio projects to `portfolioProjects` array

## Typography & Fonts

### Current Fonts
- Using default sans-serif fonts from `next/font/local`
- Geist Sans for body text
- Geist Mono for code

### Change Fonts

In `app/layout.tsx`:

```typescript
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

// In the html element:
className={`${inter.variable} ${poppins.variable}`}
```

Then update `tailwind.config.ts`:
```typescript
fontFamily: {
  sans: ['var(--font-inter)'],
  serif: ['var(--font-poppins)'],
}
```

Popular Google Fonts:
- **Poppins** - Modern, rounded
- **Playfair Display** - Elegant, serif
- **Space Grotesk** - Tech, geometric
- **Quicksand** - Friendly, rounded
- **Sora** - Minimalist, clean

## Logo & Branding

### Add Your Logo

1. Add your logo file to `public/` folder (e.g., `public/logo.png`)

2. Update the logo display in `app/components/Header.tsx`:

```tsx
import Image from 'next/image';

// Replace the CT badge with:
<Image
  src="/logo.png"
  alt="Company Logo"
  width={40}
  height={40}
  className="rounded-lg"
/>
```

3. Update footer logo in `app/components/Footer.tsx` similarly

## SEO & Metadata

Edit `app/layout.tsx` metadata:

```typescript
export const metadata: Metadata = {
  title: "Your Company - Your Tagline",
  description: "Your company description for search engines",
  keywords: "keyword1, keyword2, keyword3",
  authors: [{ name: "Your Company Name" }],
};
```

## Social Links

Update social media links in `app/components/Footer.tsx`:

```tsx
<a href="https://facebook.com/yourpage" target="_blank">
  <Facebook className="w-5 h-5" />
</a>
```

## Adding New Pages

1. Create a new folder in `app/` (e.g., `app/blog/`)
2. Add `page.tsx` inside
3. Update navigation in `data/navData.ts`:

```typescript
{
  name: "Blog",
  link: "/blog"
}
```

4. The page will be automatically available at `/blog`

## Responsive Breakpoints

Tailwind CSS breakpoints used:
- `sm` - 640px
- `md` - 768px
- `lg` - 1024px
- `xl` - 1280px
- `2xl` - 1536px

Example:
```tsx
<div className="text-base md:text-lg lg:text-xl">
  Responsive text sizing
</div>
```

## Animation Customization

Framer Motion variants are used throughout. To adjust:

```tsx
// In any component with Framer Motion
initial={{ opacity: 0, y: 20 }}      // Starting state
animate={{ opacity: 1, y: 0 }}       // Animated state
transition={{ duration: 0.8 }}       // Animation duration
```

- `duration`: Animation length in seconds (e.g., 0.5, 1, 2)
- `delay`: Wait before starting (e.g., 0.1, 0.2)
- `ease`: Animation curve (easeOut, easeIn, easeInOut, linear)

## Dark/Light Mode

The website currently uses dark mode. To add light mode toggle:

1. Install `next-themes`:
   ```bash
   npm install next-themes
   ```

2. Update `app/layout.tsx`:
   ```tsx
   import { ThemeProvider } from 'next-themes'

   <ThemeProvider attribute="class" defaultTheme="dark">
     {children}
   </ThemeProvider>
   ```

3. Add theme toggle in Header

## Form Customization

### Contact Form Fields

Edit `app/contact/page.tsx` to add/remove fields:

```tsx
const [form, setForm] = useState({
  name: '',
  email: '',
  // Add more fields here
});
```

Also update the API route in `app/api/contact/route.ts` to handle new fields.

## Performance Tips

1. **Optimize Images**
   - Use next/image for automatic optimization
   - Keep image sizes under 100KB where possible

2. **Code Splitting**
   - Use dynamic imports for heavy components
   ```tsx
   const Heavy = dynamic(() => import('./Heavy'));
   ```

3. **Bundle Analysis**
   ```bash
   npm run build
   npm run analyze
   ```

## Common Issues

### Colors not updating
- Clear browser cache (Ctrl+Shift+Delete)
- Rebuild the project (npm run build)
- Make sure CSS variables are in the right format

### Animations not smooth
- Check browser performance
- Reduce animation duration
- Use `will-change` CSS property sparingly

### Mobile menu not working
- Check media breakpoints
- Ensure z-index is high enough
- Test on actual mobile device

## Need Help?

Refer to:
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion)
- [Next.js Docs](https://nextjs.org/docs)
- [Lucide Icons](https://lucide.dev)
