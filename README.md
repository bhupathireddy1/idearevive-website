# idearevive.com

Marketing website for IdeaRevive, a digital marketing agency in Hyderabad. Built with [Astro](https://astro.build) as a fully static site, optimised for SEO, local SEO, answer engines (AEO) and AI search (GEO / LLMO).

## Commands

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs static site to dist/
npm run preview   # serve the built site
```

## Where content lives

| What | File |
| --- | --- |
| Business facts (phone, address, socials, booking link, form endpoint) | `src/data/site.ts` |
| Services (8 pages) | `src/data/services.ts` |
| Hyderabad location pages (9 pages) | `src/data/locations.ts` |
| Industry pages (6 pages) | `src/data/industries.ts` |
| Blog articles | `src/data/posts.ts` |
| Case studies (add real, approved ones only) | `src/data/caseStudies.ts` |
| Pricing tiers | `src/pages/pricing.astro` |
| Team members (rendered + Person schema) | `src/pages/about.astro` |

Adding an entry to any data file automatically creates its page, sitemap entry, JSON-LD and `llms.txt` line.

## Before launch

1. Fill in `src/data/site.ts`: `phone`, `whatsapp`, `address.street`, `address.postalCode`, `geo`, `foundingYear`, `social.*`, `googleBusinessProfile`, `bookingUrl`.
2. Set `formEndpoint` (e.g. a Formspree URL). Until then, forms open the visitor's email client addressed to `email`.
3. Add analytics (GA4 / Google Tag Manager) in `src/layouts/BaseLayout.astro`. CTA clicks and form submits already call `gtag` if present.
4. Add real case studies, testimonials and team bios — never placeholder or invented ones.
5. Deploy `dist/` to Cloudflare Pages, Netlify or Vercel, then submit `https://idearevive.com/sitemap-index.xml` in Google Search Console and Bing Webmaster Tools.
6. Keep NAP (name, address, phone) identical on the site, Google Business Profile and directories.

## SEO / AI-search features

- Unique title, description, canonical, Open Graph and Twitter tags on every page
- JSON-LD graph: Organization + ProfessionalService, WebSite, WebPage, BreadcrumbList, Service, FAQPage, BlogPosting
- Answer-first summaries and FAQ sections on every service, location and article page
- `robots.txt` allowing search and AI crawlers, auto-generated `sitemap-index.xml` and `llms.txt`
- Self-hosted Inter font, CSS inlined, near-zero JavaScript, light/dark mode, reduced-motion support
