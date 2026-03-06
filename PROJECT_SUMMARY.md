# Chris Tect Solution - Modern Business Website

A fully responsive, modern SaaS-style business website for Chris Tect Solution with glassmorphism design, smooth animations, and Google Sheets integration.

## Features Implemented

### Design System
- **Color Palette**: Professional blue-purple gradient theme with cyan accents
- **Components**: Glassmorphism cards with backdrop blur effects
- **Animations**: Smooth Framer Motion transitions throughout
- **Responsive**: Mobile-first design with Tailwind CSS

### Pages
1. **Homepage** (`/`)
   - Hero section with CTA buttons
   - 6 service cards (Web Development, UI/UX Design, Mobile Apps, AI Solutions, Cloud Solutions, Digital Marketing)
   - Why Choose Us section with 4 feature cards
   - 3-tier pricing section (Basic, Professional, Enterprise)
   - Recent projects showcase (3 featured projects)
   - Call-to-action section

2. **About Page** (`/about`)
   - Company overview
   - Mission & Vision statements
   - Core values (Excellence, Collaboration, Innovation, Integrity)
   - Team statistics

3. **Portfolio Page** (`/portfolio`)
   - Filterable project grid (by category)
   - 6 project cards with hover effects
   - Category filter buttons
   - Call-to-action to start a project

4. **Contact Page** (`/contact`)
   - Contact form (Name, Email, Company, Message)
   - Contact information section
   - Modern form styling with validation
   - Google Sheets integration for form submission

### Components Created
- **ServiceCard**: For displaying services with icons and descriptions
- **PricingCard**: For pricing tiers with feature lists
- **ProjectCard**: For portfolio projects with hover effects
- **FeatureCard**: For feature listings with icons

### Navigation
- **Sticky Header**: Glassmorphic navbar with company branding
  - Logo + Company name
  - Navigation links (Home, About, Services, Portfolio, Pricing, Contact)
  - Mobile hamburger menu
  - CTA button

- **Footer**: Comprehensive footer with
  - Company info
  - Quick links
  - Services listing
  - Contact information
  - Social media links

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Toast Notifications**: React Toastify
- **Form Integration**: Google Sheets via Google Apps Script

## Getting Started

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.local.example .env.local
   ```

4. Configure Google Sheets integration (see `GOOGLE_SHEETS_SETUP.md`)

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm run start
```

## Environment Variables

```env
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/d/{SCRIPT_ID}/userweb?v=1
```

See `GOOGLE_SHEETS_SETUP.md` for detailed setup instructions.

## File Structure

```
app/
├── page.tsx                 # Homepage
├── about/
│   └── page.tsx            # About page
├── portfolio/
│   └── page.tsx            # Portfolio page
├── contact/
│   └── page.tsx            # Contact page
├── api/
│   └── contact/
│       └── route.ts        # Contact form API endpoint
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer component
│   ├── ServiceCard.tsx     # Service card component
│   ├── PricingCard.tsx     # Pricing card component
│   ├── ProjectCard.tsx     # Project card component
│   └── FeatureCard.tsx     # Feature card component
├── layout.tsx              # Root layout
└── globals.css             # Global styles & design tokens

data/
└── navData.ts              # Navigation data

public/
└── (images and assets)
```

## Design System

### Color Tokens
- **Primary**: `#6366F1` (Blue - brand color)
- **Secondary**: `#8B5CF6` (Purple - accent)
- **Accent**: `#00D9FF` (Cyan - highlight)
- **Background**: Dark theme with gradients

### Typography
- **Headings**: Bold sans-serif fonts
- **Body**: Regular sans-serif for readability
- **Spacing**: Tailwind spacing scale

### Components
- Cards use glassmorphism effect
- Hover states with elevation and color transitions
- Smooth animations with Framer Motion
- Responsive grid layouts

## Customization

### Update Company Information
Edit the following files to customize:
- `data/navData.ts` - Navigation menu
- `app/components/Header.tsx` - Header branding
- `app/components/Footer.tsx` - Footer content
- `app/about/page.tsx` - About page content
- `app/page.tsx` - Service and pricing details

### Change Colors
Update the CSS variables in `app/globals.css`:
```css
:root {
  --primary: 217 91% 60%;      /* Change brand color */
  --secondary: 280 85% 55%;    /* Change accent color */
  --accent: 180 100% 50%;      /* Change highlight color */
}
```

### Add New Pages
1. Create a new folder in `app/`
2. Add `page.tsx` file
3. Update navigation in `data/navData.ts`

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables in project settings
5. Deploy

### Deploy Elsewhere

Make sure to:
1. Set up environment variables
2. Run `npm run build`
3. Serve the `.next` directory

## Performance Optimizations

- Lazy loading with Framer Motion's viewport detection
- Image optimization ready (update ProjectCard to use Next.js Image component)
- CSS-in-JS with Tailwind for minimal bundle
- Server-side rendering for SEO

## SEO

- Meta tags configured in `layout.tsx`
- Open Graph tags for social sharing
- Semantic HTML structure
- Mobile-responsive design for better rankings

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-responsive on all screen sizes
- Touch-friendly interactive elements

## License

MIT License - feel free to use this as a template for your projects

## Support

For issues or questions:
1. Check the documentation files
2. Review the component code for examples
3. Consult Tailwind CSS and Framer Motion documentation

## Future Enhancements

- Blog/News section
- Team member profiles
- Client testimonials carousel
- Advanced analytics integration
- Multi-language support
- Dark/Light theme toggle
