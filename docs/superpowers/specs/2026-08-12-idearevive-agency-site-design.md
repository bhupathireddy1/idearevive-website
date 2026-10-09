# idearevive.com — Agency Website Design Specification

**Date:** 2026-08-12
**Status:** Approved
**Project Type:** Agency / Services Site (Digital Marketing / SEO)
**Primary Goal:** Generate leads / inquiries
**Tech Stack:** Astro (static site generation with content collections)

---

## 1. Project Architecture & Structure

### Astro Project Structure

```
idearevive-website/
├── public/
│   ├── fonts/          (Inter, Cal Sans if self-hosted)
│   └── images/         (logos, og-image, favicons)
├── src/
│   ├── components/     (reusable UI components)
│   │   ├── common/     (Button, Card, Container, Section)
│   │   ├── layout/     (Header, Footer, Navigation)
│   │   ├── home/       (Hero, ServiceGrid, ProofBar, CTASection)
│   │   ├── services/   (ServiceCard, ServiceDetail, ProcessSteps)
│   │   ├── cases/      (CaseStudyCard, CaseStudyGrid, ResultsMetrics)
│   │   └── forms/      (ContactForm, NewsletterForm)
│   ├── layouts/
│   │   ├── BaseLayout.astro      (HTML shell, SEO, fonts)
│   │   ├── PageLayout.astro      (Header + main + Footer)
│   │   └── ServiceLayout.astro   (Sidebar nav for service pages)
│   ├── pages/
│   │   ├── index.astro           (Home page)
│   │   ├── services/
│   │   │   ├── index.astro       (Services overview)
│   │   │   ├── seo.astro         (SEO service detail)
│   │   │   └── [slug].astro      (Dynamic service pages)
│   │   ├── case-studies/
│   │   │   ├── index.astro       (Case studies listing)
│   │   │   └── [slug].astro      (Individual case study)
│   │   ├── about.astro
│   │   └── contact.astro
│   ├── content/        (Content collections - MDX)
│   │   ├── services/   (service-name.mdx)
│   │   └── case-studies/ (case-study-name.mdx)
│   ├── styles/
│   │   └── design-system.css  (existing design system)
│   └── utils/
│       ├── seo.ts           (SEO helpers, JSON-LD)
│       └── constants.ts     (site config, navigation)
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

### Content Collections (MDX)

Services and case studies managed as structured content with frontmatter for:
- SEO metadata (title, description, OG image)
- Schema markup generation
- Easy editing without code changes
- Automatic sitemap generation

---

## 2. Key Pages & Component Composition

### 1. Home Page (`index.astro`)
- **Hero** — Headline, subhead, primary CTA ("Start a Project"), secondary CTA ("View Work"), trust indicators (client logos)
- **ServiceGrid** — 3 service cards (SEO + 2 others) with icon, title, description, "Learn more" link
- **ProofBar** — Horizontal scroll of client logos + key metrics ("120+ projects", "4.9★ avg")
- **CaseStudyPreview** — 3 featured case studies with thumbnail, result metric, "Read case study"
- **CTASection** — Gradient background, headline, single primary CTA

### 2. Services Overview (`/services/`)
- Hero with service category intro
- **ServiceGrid** — All services as cards linking to detail pages
- **ProcessSection** — "How we work" 4-step process
- CTA

### 3. Service Detail Page (`/services/[slug]/`)
- **ServiceHero** — Service-specific headline, outcome promise, starter CTA
- **ServiceDetail** — What's included, deliverables, timeline, investment range
- **ProcessSteps** — Methodology (Discovery → Strategy → Execution → Results)
- **RelatedCaseStudies** — 2-3 relevant case studies
- **FAQAccordion** — Common questions
- CTA

### 4. Case Studies Listing (`/case-studies/`)
- Filterable grid (by industry, service, result type)
- **CaseStudyCard** — Thumbnail, client, services used, key result, tags

### 5. Case Study Detail (`/case-studies/[slug]/`)
- **CaseStudyHero** — Client logo, headline, key metrics (traffic ↑, revenue ↑)
- **ChallengeSection** — The problem
- **SolutionSection** — Approach with screenshots
- **ResultsSection** — Quantified outcomes with charts
- **Testimonial** — Client quote + photo
- **RelatedCaseStudies**

### 6. About Page — Story, values, team bios, philosophy
### 7. Contact Page — Form, calendar embed, FAQ, office info

---

## 3. SEO, Schema & Technical Implementation

### SEO Foundation (built into every page)
- `BaseLayout.astro` injects: title, meta description, canonical, OG/Twitter cards, JSON-LD
- `seo.ts` utilities: `generatePageSEO()`, `generateServiceSchema()`, `generateCaseStudySchema()`, `generateOrganizationSchema()`
- Content collections auto-generate `sitemap.xml`, `robots.txt`

### Schema Markup (JSON-LD)
- **Organization** — Agency name, logo, sameAs (social), contactPoint
- **Service** — Each service page: name, description, provider, areaServed, offers
- **CaseStudy** — Project: name, description, client, datePublished, workPerformed, result
- **WebSite** + **WebPage** — Site-wide + per-page
- **BreadcrumbList** — On all nested pages
- **FAQPage** — On service detail pages

### Performance
- Astro image optimization (`<Image />` component) for all thumbnails/hero images
- Font optimization: self-host Inter + Cal Sans with `font-display: swap`
- CSS: design-system.css inlined in `<head>` (critical), rest via `<link rel="preload">`
- Zero-JS by default; hydrate only interactive components (forms, carousel, filters)

### Forms & Lead Capture
- Contact form → Formspree / Netlify Forms / custom endpoint
- Newsletter → ConvertKit / Beehiiv / Buttondown
- Calendar booking → Cal.com / Calendly embed
- Honeypot + rate limiting for spam protection

### Analytics
- GA4 + Plausible (privacy-friendly dual tracking)
- Event tracking: `cta_click`, `form_submit`, `case_study_view`, `service_inquiry`

---

## 4. Visual Polish & Interactions

### Animations (using existing design-system.css)
- Page entrance: `fade-in-up` stagger on section components (100ms delay each)
- Card hover: Existing `transform: translateY(-4px)` + shadow + gradient overlay
- Button interactions: Primary hover lift + glow, secondary background fill
- Scroll reveal: `IntersectionObserver` triggering `animate-fade-in-up` on sections
- Case study image hover: Subtle scale (1.02) + shadow

### Micro-interactions
- Form inputs: Focus ring (3px brand ring), floating label pattern
- Nav links: Underline slide-in on hover
- Mobile menu: Slide-in panel with stagger animation
- CTA pulse: `pulse-glow` animation on primary buttons (subtle, 3s loop)

### Responsive Breakpoints (from design system)
- Mobile: < 640px (single column, stacked sections)
- Tablet: 640px–1024px (2-col grids, adjusted padding)
- Desktop: > 1024px (full grids, max-width container)
- Wide: > 1536px (larger type scale, generous whitespace)

### Accessibility
- Semantic HTML5 (header, main, section, article, aside, footer)
- WCAG AA contrast (purple on white passes, verify dark mode)
- Focus visible states (2px outline)
- Skip to main content link
- ARIA labels on icon-only buttons
- Reduced motion: `@media (prefers-reduced-motion)` disables animations

### Brand Application
- Purple gradient hero backgrounds, card accents, CTA buttons
- Teal accent for success metrics, amber for warnings, emerald for growth
- Inter for body, Cal Sans for display (fallback: Inter)
- Generous whitespace (space-20/24/32 section padding)

---

## 5. Implementation Phases

### Phase 1: Project Setup & Foundation
- Initialize Astro project with TypeScript
- Configure design-system.css integration
- Set up BaseLayout, PageLayout with SEO utilities
- Configure content collections for services & case studies
- Set up Tailwind (optional) or pure CSS utility classes

### Phase 2: Core Layout Components
- Header, Footer, Navigation (responsive, mobile menu)
- Container, Section, Button, Card common components
- Base typography and spacing utilities

### Phase 3: Home Page
- Hero component with dual CTA
- ServiceGrid component
- ProofBar component
- CaseStudyPreview component
- CTASection component

### Phase 4: Services Section
- Services overview page
- Service detail page template (dynamic routing)
- ServiceCard, ServiceDetail, ProcessSteps components
- FAQAccordion component

### Phase 5: Case Studies Section
- Case studies listing page with filters
- Case study detail page template
- CaseStudyCard, CaseStudyHero, ResultsSection components

### Phase 6: About & Contact Pages
- About page with team bios
- Contact page with form, calendar embed

### Phase 7: SEO, Schema & Performance Polish
- Complete JSON-LD schema implementation
- Image optimization setup
- Font self-hosting
- Analytics integration
- Form endpoints configuration

### Phase 8: Testing & Launch
- Cross-browser testing
- Mobile responsiveness verification
- Lighthouse audit (target: 95+ Performance, 100 Accessibility, 100 SEO)
- Deploy to Vercel/Netlify/Cloudflare Pages

---

## 6. Success Criteria

- **Performance:** Lighthouse Performance ≥ 95, Core Web Vitals all green
- **SEO:** All pages indexable, schema validates in Rich Results Test
- **Accessibility:** WCAG AA compliance, Lighthouse Accessibility ≥ 95
- **Conversion:** Clear CTA hierarchy, form submission tracking functional
- **Maintainability:** Content editable via MDX without code changes

---

## 7. Open Decisions (to resolve during implementation)

1. **Form backend:** Formspree vs Netlify Forms vs custom endpoint
2. **Newsletter provider:** ConvertKit vs Beehiiv vs Buttondown
3. **Calendar booking:** Cal.com vs Calendly
4. **Analytics:** GA4 + Plausible confirmed, verify tracking IDs
5. **Image hosting:** Local public/ vs Cloudinary/ImageKit for optimization
6. **Font hosting:** Self-host vs Google Fonts (self-host preferred for performance)
7. **Deployment target:** Vercel vs Netlify vs Cloudflare Pages

---

*Design approved. Ready for implementation planning via writing-plans skill.*