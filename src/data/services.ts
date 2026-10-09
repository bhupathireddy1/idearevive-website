export type FAQ = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  card: string;
  answer: string;
  intro: string;
  included: { title: string; text: string }[];
  deliverables: string[];
  timeline: string;
  bestFor: string[];
  faqs: FAQ[];
};

export const services: Service[] = [
  {
    slug: 'seo-services-hyderabad',
    name: 'SEO Services',
    shortName: 'SEO',
    icon: 'search',
    metaTitle: 'SEO Services in Hyderabad | SEO Company – IdeaRevive',
    metaDescription:
      'Technical SEO, on-page optimisation, content and link earning for Hyderabad businesses. Get a free SEO audit from IdeaRevive and a clear 90-day roadmap.',
    h1: 'SEO Services in Hyderabad',
    card: 'Rank for the searches your buyers actually make, with technical fixes, content and authority building.',
    answer:
      'IdeaRevive provides SEO services in Hyderabad covering technical SEO audits, keyword research, on-page optimisation, content strategy and ethical link earning. We focus on rankings for commercial keywords that bring enquiries, and report on organic leads — not just traffic.',
    intro:
      'Search engine optimisation compounds. Each page that ranks keeps working without paying for every click. Our SEO programmes start with a full audit, then prioritise the fixes and content that move revenue first.',
    included: [
      { title: 'Technical SEO audit', text: 'Crawlability, indexation, Core Web Vitals, site architecture, canonicals, redirects and structured data.' },
      { title: 'Keyword & intent mapping', text: 'One primary keyword per page, mapped to buyer intent so pages do not compete with each other.' },
      { title: 'On-page optimisation', text: 'Titles, meta descriptions, headings, internal links, image optimisation and schema markup.' },
      { title: 'Content strategy', text: 'Service pages, comparison pages and helpful guides that answer real customer questions.' },
      { title: 'Authority building', text: 'Digital PR, partnerships, local citations and earned links — no paid link schemes.' },
      { title: 'AI search visibility', text: 'Entity clarity, citable answers and structured data so AI assistants can understand and reference you.' },
    ],
    deliverables: ['Technical audit with prioritised fix list', 'Keyword map for every page', 'Monthly content and optimisation sprints', 'Monthly report: rankings, organic leads, next actions'],
    timeline: 'Technical improvements show in 4–8 weeks; competitive keyword gains usually take 3–6 months.',
    bestFor: ['Service businesses with high-value enquiries', 'B2B and SaaS companies', 'eCommerce stores', 'Clinics, real estate and education'],
    faqs: [
      { q: 'How long does SEO take to show results in Hyderabad?', a: 'Technical fixes and quick wins can show within 4–8 weeks. Ranking for competitive Hyderabad keywords typically takes 3–6 months, depending on your site’s current authority, competition and how quickly recommendations are implemented.' },
      { q: 'How much do SEO services cost in Hyderabad?', a: 'SEO pricing depends on scope, competition and the number of pages involved. IdeaRevive offers monthly retainers sized to your goals; we share a fixed quote after a free audit so you know exactly what is included.' },
      { q: 'Do you guarantee first-page rankings?', a: 'No ethical agency can guarantee rankings because Google’s algorithm is outside anyone’s control. We commit to a transparent plan, measurable activity and reporting tied to leads and revenue.' },
      { q: 'Do you optimise for AI search like ChatGPT and Google AI Overviews?', a: 'Yes. Our SEO work includes generative engine optimisation: clear entity information, concise answer blocks, FAQs, structured data and trustworthy proof that AI systems can understand and cite.' },
    ],
  },
  {
    slug: 'local-seo-hyderabad',
    name: 'Local SEO',
    shortName: 'Local SEO',
    icon: 'pin',
    metaTitle: 'Local SEO Services in Hyderabad | Google Maps – IdeaRevive',
    metaDescription:
      'Get found on Google Maps and “near me” searches in Hyderabad. Google Business Profile optimisation, local citations, reviews and location pages by IdeaRevive.',
    h1: 'Local SEO Services in Hyderabad',
    card: 'Show up on Google Maps and “near me” searches across Hyderabad neighbourhoods.',
    answer:
      'Local SEO helps your business appear in Google Maps and the local pack when people in Hyderabad search for services near them. IdeaRevive optimises your Google Business Profile, builds consistent citations, improves review generation and creates useful location pages.',
    intro:
      'For clinics, restaurants, salons, real estate offices and service businesses, the map pack is often the most valuable real estate on Google. We make sure you show up there — accurately and consistently.',
    included: [
      { title: 'Google Business Profile optimisation', text: 'Categories, services, products, photos, posts, Q&A and attributes set up properly.' },
      { title: 'NAP consistency', text: 'Your name, address and phone number made identical across directories and your website.' },
      { title: 'Local citations', text: 'Listings on relevant Indian and industry directories, cleaned of duplicates.' },
      { title: 'Review strategy', text: 'A simple, policy-compliant process to request and respond to genuine customer reviews.' },
      { title: 'Location pages', text: 'Helpful pages for the areas you serve, with real local detail — not duplicated templates.' },
      { title: 'LocalBusiness schema', text: 'Structured data describing your business, hours, location and service area.' },
    ],
    deliverables: ['Google Business Profile audit and optimisation', 'Citation audit and clean-up', 'Review request templates and workflow', 'Monthly local ranking grid report'],
    timeline: 'Profile improvements can lift visibility within 2–6 weeks; map pack gains in competitive areas take 2–4 months.',
    bestFor: ['Clinics and hospitals', 'Restaurants and cafés', 'Real estate offices', 'Home services and retail stores'],
    faqs: [
      { q: 'What is local SEO?', a: 'Local SEO is the process of improving your visibility in location-based searches, such as “dentist in Kondapur” or “digital marketing agency near me”. It mainly involves your Google Business Profile, reviews, citations and locally relevant website content.' },
      { q: 'Can you rank my business in multiple Hyderabad areas?', a: 'Map pack rankings are strongly tied to your physical location. We improve visibility around your address and build genuine location pages for other areas you serve, without creating fake addresses — which violates Google’s guidelines.' },
      { q: 'Do reviews really affect local rankings?', a: 'Yes. The quantity, quality, recency of reviews and how you respond to them are recognised local ranking factors and also strongly influence whether searchers choose you.' },
    ],
  },
  {
    slug: 'google-ads-ppc-hyderabad',
    name: 'Google Ads & PPC',
    shortName: 'Google Ads',
    icon: 'target',
    metaTitle: 'Google Ads Agency in Hyderabad | PPC Management – IdeaRevive',
    metaDescription:
      'Search, Performance Max, Display and YouTube campaigns managed for qualified leads and lower cost per acquisition. PPC management in Hyderabad by IdeaRevive.',
    h1: 'Google Ads & PPC Management in Hyderabad',
    card: 'Paid search and Performance Max campaigns built around cost per lead, not clicks.',
    answer:
      'IdeaRevive manages Google Ads campaigns for Hyderabad businesses — Search, Performance Max, Display, YouTube and remarketing. We set up accurate conversion tracking first, then optimise bids, keywords, ads and landing pages to lower your cost per qualified lead.',
    intro:
      'Pay-per-click advertising is the fastest way to reach people who are ready to buy. It is also the fastest way to waste budget if tracking and targeting are not right. We fix the foundations before scaling spend.',
    included: [
      { title: 'Conversion tracking', text: 'GA4, Google Tag Manager and enhanced conversions so every lead and sale is measured.' },
      { title: 'Campaign structure', text: 'Tightly themed campaigns, negative keywords and match-type strategy.' },
      { title: 'Ad copy & assets', text: 'Responsive search ads, sitelinks, callouts and images tested continuously.' },
      { title: 'Performance Max & YouTube', text: 'Asset groups, audience signals and video ads where they fit your goals.' },
      { title: 'Landing page optimisation', text: 'Message match, faster pages and clearer forms to raise conversion rate.' },
      { title: 'Weekly optimisation', text: 'Search term reviews, bid adjustments and budget reallocation every week.' },
    ],
    deliverables: ['Account audit or fresh build', 'Conversion tracking setup', 'Weekly optimisation log', 'Monthly report: spend, leads, cost per lead, revenue'],
    timeline: 'Campaigns can generate leads within days of launch; performance usually stabilises after 4–6 weeks of data.',
    bestFor: ['Businesses needing leads quickly', 'Product launches and seasonal offers', 'eCommerce stores', 'High-intent local services'],
    faqs: [
      { q: 'What budget do I need for Google Ads in Hyderabad?', a: 'It depends on your industry’s cost per click and how many leads you need. We estimate a realistic starting budget during the free audit using keyword planner data for your services and locations.' },
      { q: 'Is your management fee separate from ad spend?', a: 'Yes. Ad spend is paid directly to Google from your own account, which you always own. Our management fee is separate and agreed upfront.' },
      { q: 'Who owns the Google Ads account?', a: 'You do. We work inside your account with manager access, so all data and history stay with your business if you ever change agencies.' },
    ],
  },
  {
    slug: 'social-media-marketing-hyderabad',
    name: 'Social Media Marketing',
    shortName: 'Social Media',
    icon: 'share',
    metaTitle: 'Social Media Marketing Agency in Hyderabad – IdeaRevive',
    metaDescription:
      'Instagram, Facebook, LinkedIn and YouTube strategy, content and paid social campaigns for Hyderabad brands. Social media marketing that drives enquiries.',
    h1: 'Social Media Marketing Agency in Hyderabad',
    card: 'Strategy, content and paid social on Instagram, Facebook, LinkedIn and YouTube.',
    answer:
      'IdeaRevive plans, creates and manages social media for Hyderabad brands across Instagram, Facebook, LinkedIn and YouTube. We combine organic content that builds trust with Meta and LinkedIn ad campaigns that generate measurable leads and sales.',
    intro:
      'Social media works when content is made for the platform and the audience — and when paid campaigns are tracked back to real outcomes. We handle both, so your brand stays consistent and your budget stays accountable.',
    included: [
      { title: 'Social strategy', text: 'Audience research, content pillars, platform selection and a posting rhythm you can sustain.' },
      { title: 'Content creation', text: 'Reels, carousels, short-form video scripts, graphics and captions in your brand voice.' },
      { title: 'Community management', text: 'Timely replies to comments and messages so interest turns into conversations.' },
      { title: 'Meta Ads', text: 'Lead generation, traffic and sales campaigns on Facebook and Instagram with pixel and Conversions API.' },
      { title: 'LinkedIn Ads', text: 'B2B targeting by role, company and industry for decision-maker reach.' },
      { title: 'Influencer collaborations', text: 'Finding and briefing relevant Hyderabad creators where it suits the brand.' },
    ],
    deliverables: ['Monthly content calendar', 'Designed posts and reels', 'Paid campaign management', 'Monthly report: reach, engagement, leads, cost per result'],
    timeline: 'Paid social can produce leads in the first weeks; organic audience growth builds over 3–6 months.',
    bestFor: ['Consumer brands and retail', 'Restaurants, fashion and lifestyle', 'Real estate launches', 'B2B thought leadership on LinkedIn'],
    faqs: [
      { q: 'Which social media platform is best for my business?', a: 'It depends on where your customers spend time. Consumer brands usually prioritise Instagram and Facebook, B2B companies prioritise LinkedIn, and YouTube suits businesses with educational or demonstration content.' },
      { q: 'How many posts per month do you create?', a: 'Plans are tailored, but a typical package includes 12–20 posts and reels per month across your chosen platforms. Quality and consistency matter more than volume.' },
      { q: 'Do you shoot photos and videos?', a: 'We can plan shoots in Hyderabad and also create content from your existing assets, product photos and short-form video recorded on your team’s phones with our scripts.' },
    ],
  },
  {
    slug: 'content-marketing-hyderabad',
    name: 'Content Marketing',
    shortName: 'Content',
    icon: 'pen',
    metaTitle: 'Content Marketing Agency in Hyderabad – IdeaRevive',
    metaDescription:
      'SEO blogs, service pages, case studies, email and thought-leadership content written for people and search engines. Content marketing services in Hyderabad.',
    h1: 'Content Marketing Services in Hyderabad',
    card: 'Helpful, expert content that ranks, gets cited by AI assistants and converts readers.',
    answer:
      'IdeaRevive creates content marketing programmes for Hyderabad businesses — SEO articles, service and landing pages, case studies, email newsletters and LinkedIn thought leadership. Every piece is planned around a search intent or customer question and written to be accurate, original and easy to cite.',
    intro:
      'Search engines and AI assistants reward content that demonstrates genuine experience and expertise. We interview your team, capture what you know, and turn it into content your competitors cannot copy.',
    included: [
      { title: 'Content strategy', text: 'Topic clusters mapped to your services, customer questions and funnel stages.' },
      { title: 'SEO articles & guides', text: 'In-depth, well-structured articles with clear answers, examples and sources.' },
      { title: 'Website copywriting', text: 'Home, service and landing page copy focused on clarity and conversion.' },
      { title: 'Case studies', text: 'Problem, approach and results stories built from real client data.' },
      { title: 'Email marketing', text: 'Newsletters and nurture sequences that keep leads warm.' },
      { title: 'Content refreshes', text: 'Updating older pages so they stay accurate and keep ranking.' },
    ],
    deliverables: ['Content strategy and calendar', 'Researched, edited articles each month', 'On-page SEO for every piece', 'Performance review and refresh plan'],
    timeline: 'New articles typically begin ranking in 2–4 months; topic clusters build authority over 6–12 months.',
    bestFor: ['B2B and SaaS', 'Healthcare and education', 'Professional services', 'Brands investing in long-term organic growth'],
    faqs: [
      { q: 'Do you use AI to write content?', a: 'We use AI tools for research and drafting efficiency, but every piece is shaped by subject-matter input from your team and edited by a human for accuracy, originality and brand voice.' },
      { q: 'How long should a blog post be?', a: 'As long as it needs to be to fully answer the question better than existing results. Some answers need 600 words; competitive guides may need 2,000 or more.' },
      { q: 'Can you write content for regulated industries?', a: 'Yes. For healthcare, finance and legal topics we work with your qualified experts for review and include author credentials, which also strengthens E-E-A-T signals.' },
    ],
  },
  {
    slug: 'website-design-development-hyderabad',
    name: 'Website Design & Development',
    shortName: 'Web Design',
    icon: 'code',
    metaTitle: 'Website Design Company in Hyderabad – IdeaRevive',
    metaDescription:
      'Fast, mobile-first, SEO-ready websites and landing pages built to convert. Website design and development in Hyderabad by IdeaRevive.',
    h1: 'Website Design & Development in Hyderabad',
    card: 'Fast, mobile-first websites and landing pages engineered for SEO and conversions.',
    answer:
      'IdeaRevive designs and builds fast, mobile-first, SEO-ready websites for Hyderabad businesses. Every site includes clean semantic code, Core Web Vitals optimisation, structured data, analytics and conversion-focused page layouts, so it is ready to rank and generate leads from launch day.',
    intro:
      'Your website is your hardest-working salesperson. We design around what your visitors need to decide, then build it to load quickly on any phone and to be easily understood by search engines and AI assistants.',
    included: [
      { title: 'UX & conversion design', text: 'Clear page structure, strong calls to action and trust signals where decisions are made.' },
      { title: 'Mobile-first build', text: 'Responsive layouts tested on real devices and Indian network conditions.' },
      { title: 'Performance', text: 'Optimised images, fonts and scripts for strong Core Web Vitals scores.' },
      { title: 'Technical SEO built in', text: 'Semantic HTML, metadata, sitemaps, canonical URLs and JSON-LD schema.' },
      { title: 'Accessibility', text: 'Keyboard navigation, readable contrast and descriptive labels.' },
      { title: 'Analytics & tracking', text: 'GA4, Tag Manager, Search Console and form conversion tracking set up.' },
    ],
    deliverables: ['Sitemap and wireframes', 'Visual design for key templates', 'Built, tested and launched website', 'Training and handover documentation'],
    timeline: 'Landing pages take 1–2 weeks; full business websites typically take 4–8 weeks.',
    bestFor: ['New businesses and rebrands', 'Sites that are slow or not generating leads', 'Campaign landing pages', 'eCommerce storefronts'],
    faqs: [
      { q: 'How much does a website cost in Hyderabad?', a: 'Costs vary with the number of pages, features and integrations. A focused landing page costs far less than a multi-page site with a CMS or eCommerce. We provide a fixed-scope quote after a short discovery call.' },
      { q: 'Which platform do you build on?', a: 'We choose the platform that suits your needs — WordPress, Shopify, Webflow or modern frameworks like Astro and Next.js for maximum speed. You own the site and all its content.' },
      { q: 'Will my new website be SEO friendly?', a: 'Yes. Technical SEO, schema markup, performance optimisation and redirect planning for existing pages are part of every build, so you do not lose rankings when relaunching.' },
    ],
  },
  {
    slug: 'branding-creative-design-hyderabad',
    name: 'Branding & Creative Design',
    shortName: 'Branding',
    icon: 'spark',
    metaTitle: 'Branding Agency in Hyderabad | Brand Identity – IdeaRevive',
    metaDescription:
      'Brand strategy, logo design, visual identity and marketing creatives for Hyderabad businesses. Build a brand people remember with IdeaRevive.',
    h1: 'Branding & Creative Design in Hyderabad',
    card: 'Brand strategy, identity and creatives that make you recognisable and trusted.',
    answer:
      'IdeaRevive helps Hyderabad businesses build distinctive brands through brand strategy, positioning, logo and visual identity design, brand guidelines and marketing creatives for digital ads, social media and print.',
    intro:
      'A clear brand makes every other channel work harder — ads get more clicks, content gets remembered and sales conversations get easier. We start with positioning, then design the system that expresses it.',
    included: [
      { title: 'Brand strategy', text: 'Positioning, audience, value proposition, messaging and tone of voice.' },
      { title: 'Logo & identity', text: 'Logo suite, colour palette, typography and visual language.' },
      { title: 'Brand guidelines', text: 'A practical guide so every team and vendor applies the brand consistently.' },
      { title: 'Marketing creatives', text: 'Ad creatives, social templates, brochures, presentations and packaging.' },
      { title: 'Naming & taglines', text: 'Name and tagline exploration with availability checks.' },
      { title: 'Rebrand rollout', text: 'Planning the transition across website, social profiles and listings.' },
    ],
    deliverables: ['Brand strategy document', 'Logo files in all formats', 'Brand guidelines', 'Starter template kit for social and ads'],
    timeline: 'Brand identity projects typically take 3–6 weeks from discovery to final files.',
    bestFor: ['Start-ups launching in Hyderabad', 'Businesses outgrowing their current look', 'Mergers and new product lines', 'Founders building a personal brand'],
    faqs: [
      { q: 'What is included in a branding package?', a: 'Typically brand strategy, logo design, colour and typography system, and brand guidelines. Larger packages add marketing collateral, templates and website design.' },
      { q: 'How many logo concepts will I see?', a: 'We usually present two to three strategically distinct directions, then refine the chosen one through structured feedback rounds.' },
      { q: 'Does branding affect SEO?', a: 'Indirectly, yes. A memorable brand earns more branded searches, mentions and links, and consistent brand information helps search engines and AI assistants recognise your business as a distinct entity.' },
    ],
  },
  {
    slug: 'performance-marketing-lead-generation-hyderabad',
    name: 'Performance Marketing & Lead Generation',
    shortName: 'Lead Generation',
    icon: 'chart',
    metaTitle: 'Performance Marketing Agency in Hyderabad – IdeaRevive',
    metaDescription:
      'Full-funnel performance marketing across Google, Meta and LinkedIn with landing pages, tracking and CRM integration. Lead generation in Hyderabad.',
    h1: 'Performance Marketing & Lead Generation in Hyderabad',
    card: 'Full-funnel campaigns, landing pages and tracking built around cost per qualified lead.',
    answer:
      'IdeaRevive runs full-funnel performance marketing for Hyderabad businesses, combining Google Ads, Meta Ads, LinkedIn Ads, landing pages, marketing automation and CRM integration. Success is measured by qualified leads, cost per acquisition and revenue — not impressions.',
    intro:
      'Performance marketing connects every part of the funnel: the ad, the landing page, the follow-up and the sale. We build that system end-to-end and improve the weakest link each month.',
    included: [
      { title: 'Funnel strategy', text: 'Offer, audience, channel mix and budget plan built from your sales targets.' },
      { title: 'Multi-channel campaigns', text: 'Google, Meta and LinkedIn campaigns working together with shared audiences.' },
      { title: 'Landing pages', text: 'Dedicated, fast pages for each campaign, tested for conversion rate.' },
      { title: 'Tracking & attribution', text: 'GA4, server-side events, UTM structure and offline conversion imports.' },
      { title: 'CRM & automation', text: 'Leads routed to your CRM, WhatsApp or email with instant follow-up.' },
      { title: 'Lead quality loop', text: 'Sales feedback fed back to ad platforms to optimise for real customers.' },
    ],
    deliverables: ['Funnel and media plan', 'Landing pages and tracking', 'Campaign management across channels', 'Weekly lead reports and monthly strategy reviews'],
    timeline: 'First leads usually arrive within the first two weeks; cost per lead improves over 6–12 weeks of optimisation.',
    bestFor: ['Real estate developers', 'Education and coaching', 'Healthcare and clinics', 'B2B services with long sales cycles'],
    faqs: [
      { q: 'What is performance marketing?', a: 'Performance marketing is advertising where success is measured by specific actions — leads, sales, sign-ups — and budgets are optimised continuously toward the lowest cost per result.' },
      { q: 'How do you improve lead quality?', a: 'We qualify leads with better forms and offers, feed sales outcomes back to Google and Meta as conversion signals, and exclude audiences and keywords that bring poor-fit enquiries.' },
      { q: 'Can you integrate leads with my CRM?', a: 'Yes. We connect forms and ad platforms to CRMs such as Zoho, HubSpot, Salesforce or LeadSquared, as well as WhatsApp and email notifications.' },
    ],
  },
  {
    slug: 'ecommerce-marketing-hyderabad',
    name: 'eCommerce Marketing',
    shortName: 'eCommerce marketing',
    icon: 'cart',
    metaTitle: 'eCommerce Marketing Agency in Hyderabad – IdeaRevive',
    metaDescription:
      'eCommerce marketing for D2C and online brands in India and abroad: Google Shopping, Meta catalogue ads, Amazon, Shopify SEO and retention for profitable growth.',
    h1: 'eCommerce Marketing Agency in Hyderabad',
    card: 'Shopping ads, catalogue campaigns, marketplace growth and retention for online stores in India and abroad.',
    answer:
      'IdeaRevive is an eCommerce marketing agency in Hyderabad that has worked with online brands across India and international markets. We grow profitable revenue with Google Shopping and Performance Max, Meta catalogue ads, marketplace advertising, eCommerce SEO and email and WhatsApp retention.',
    intro:
      'eCommerce growth is a margin game. We plan around contribution margin and repeat purchase rate, not just ROAS, so the revenue you add is revenue you keep.',
    included: [
      { title: 'Product feed management', text: 'Clean, enriched Merchant Center and Meta catalogue feeds with titles and attributes that match how shoppers search.' },
      { title: 'Shopping & Performance Max', text: 'Campaigns segmented by margin and best-sellers so budget flows to profitable products.' },
      { title: 'Meta & Instagram catalogue ads', text: 'Prospecting, dynamic retargeting and creative testing built around your product range.' },
      { title: 'Marketplace advertising', text: 'Amazon and Flipkart sponsored ads, listing optimisation and brand store set-up.' },
      { title: 'eCommerce SEO', text: 'Category and product page optimisation, faceted navigation control and product schema.' },
      { title: 'Retention & CRO', text: 'Email, SMS and WhatsApp flows, cart recovery and checkout improvements that raise lifetime value.' },
    ],
    deliverables: ['Feed and tracking audit', 'Margin-based campaign structure', 'Monthly creative testing plan', 'Revenue, ROAS and contribution margin reporting'],
    timeline: 'Feed and campaign fixes often lift results within 2–4 weeks; SEO and retention gains build over 3–6 months.',
    bestFor: ['D2C brands on Shopify or WooCommerce', 'Marketplace sellers on Amazon and Flipkart', 'Brands selling internationally', 'Retailers launching online'],
    faqs: [
      { q: 'Do you work with eCommerce brands outside India?', a: 'Yes. Over 10+ years we have worked with eCommerce brands in India and in international markets, running region-specific Shopping, Meta and marketplace campaigns with local currency, shipping and tax settings.' },
      { q: 'Which eCommerce platforms do you support?', a: 'We work with Shopify, WooCommerce, Magento and custom storefronts, plus marketplaces such as Amazon and Flipkart. Tracking and feeds are set up for whichever platform you use.' },
      { q: 'How do you measure eCommerce marketing success?', a: 'We report revenue, ROAS, new versus returning customers and contribution margin after ad spend, so you can see whether growth is actually profitable rather than just bigger.' },
    ],
  },
  {
    slug: 'saas-product-development-hyderabad',
    name: 'SaaS Product Development',
    shortName: 'SaaS development',
    icon: 'layers',
    metaTitle: 'SaaS Product Development Company in Hyderabad – IdeaRevive',
    metaDescription:
      'SaaS product development in Hyderabad: product discovery, UX design, MVP builds, scalable web apps, billing, analytics and go-to-market under one team.',
    h1: 'SaaS Product Development in Hyderabad',
    card: 'From idea to launched product: discovery, UX, MVP builds and the marketing to find your first customers.',
    answer:
      'IdeaRevive builds SaaS products for founders and companies in Hyderabad and worldwide, covering product discovery, UX and UI design, MVP development, subscription billing, analytics and launch marketing. Because we also run growth, the product is built to acquire and convert users from day one.',
    intro:
      'Most SaaS products fail on distribution, not code. We design and build the product with sign-up flows, onboarding, analytics and SEO-ready marketing pages in place, so launch is the start of growth rather than a guess.',
    included: [
      { title: 'Product discovery', text: 'User interviews, competitor review, feature prioritisation and a scoped MVP roadmap.' },
      { title: 'UX & UI design', text: 'Clickable prototypes and a design system that keeps the product consistent as it grows.' },
      { title: 'MVP development', text: 'Secure, scalable web applications built with modern frameworks and cloud infrastructure.' },
      { title: 'Billing & accounts', text: 'Subscriptions, trials, plans and payments through Stripe, Razorpay or similar providers.' },
      { title: 'Product analytics', text: 'Event tracking for activation, retention and churn so decisions are based on real usage.' },
      { title: 'Go-to-market', text: 'Marketing site, SEO, launch campaigns and onboarding emails to win your first paying users.' },
    ],
    deliverables: ['Product requirements and MVP scope', 'Design prototype and design system', 'Production-ready application and documentation', 'Launch marketing plan and analytics dashboard'],
    timeline: 'Discovery takes 2–3 weeks; a focused MVP typically ships in 8–14 weeks depending on scope.',
    bestFor: ['Founders validating a new SaaS idea', 'Companies turning an internal tool into a product', 'Agencies and consultancies productising a service', 'Funded start-ups that need to ship fast'],
    faqs: [
      { q: 'How much does it cost to build a SaaS MVP?', a: 'Cost depends on features, integrations and compliance needs. After a short discovery phase we provide a fixed-scope quote for the MVP, broken down by feature, so you can trade scope against budget before development starts.' },
      { q: 'Do you help market the SaaS product after launch?', a: 'Yes. That is our main difference from a pure development shop. We run SEO, content, paid acquisition and onboarding optimisation so the product finds and keeps paying users after launch.' },
      { q: 'Who owns the code and intellectual property?', a: 'You do. The source code, designs, cloud accounts and documentation are transferred to you, and repositories are set up in your organisation from the start.' },
    ],
  },
  {
    slug: 'mobile-app-development-hyderabad',
    name: 'Mobile App Development',
    shortName: 'mobile app development',
    icon: 'phone',
    metaTitle: 'Mobile App Development Company in Hyderabad – IdeaRevive',
    metaDescription:
      'iOS and Android app development in Hyderabad: UX design, cross-platform builds, backend APIs, store launch and growth marketing for start-ups and brands.',
    h1: 'Mobile App Development in Hyderabad',
    card: 'iOS and Android apps designed, built and launched, with the analytics and marketing to grow installs.',
    answer:
      'IdeaRevive designs and builds mobile apps for iOS and Android, from UX and cross-platform development to backend APIs, App Store and Google Play launch, and post-launch growth. Teams in Hyderabad and abroad use us when they want one partner for building the app and getting it installed.',
    intro:
      'An app is only valuable if people install it, open it again and pay. We build with onboarding, push notifications, deep links and analytics designed in, then support you with store optimisation and install campaigns.',
    included: [
      { title: 'App strategy & UX', text: 'User journeys, wireframes and prototypes tested before a line of code is written.' },
      { title: 'Cross-platform & native builds', text: 'Flutter or React Native for speed, native Swift or Kotlin where performance demands it.' },
      { title: 'Backend & APIs', text: 'Authentication, databases, payments and admin panels built to scale with your user base.' },
      { title: 'Analytics & attribution', text: 'Firebase, MMP integration and event tracking so you know which channels bring retained users.' },
      { title: 'Store launch', text: 'App Store and Google Play listings, review guidelines, screenshots and release management.' },
      { title: 'Maintenance & releases', text: 'OS updates, crash monitoring, performance tuning and a regular feature release cycle.' },
    ],
    deliverables: ['Product scope and clickable prototype', 'iOS and Android apps with source code', 'Backend, admin panel and documentation', 'Store listings and analytics set-up'],
    timeline: 'A focused first release typically takes 10–16 weeks, including design, development, testing and store review.',
    bestFor: ['Start-ups launching a consumer or marketplace app', 'eCommerce brands adding a shopping app', 'Service businesses adding booking or loyalty apps', 'Enterprises building internal field apps'],
    faqs: [
      { q: 'Should I build a native or cross-platform app?', a: 'Cross-platform frameworks such as Flutter and React Native suit most business apps and reduce cost and time to market. Native development is worth it for heavy graphics, complex device features or very high performance needs. We recommend one after scoping.' },
      { q: 'How long does mobile app development take?', a: 'A focused first version usually takes 10–16 weeks from design to store approval. Larger apps with many integrations take longer, and we release in stages so you can learn from real users sooner.' },
      { q: 'Do you publish the app on the App Store and Google Play?', a: 'Yes. We prepare listings, screenshots and privacy details, handle store review and publish under your own developer accounts, so you keep full ownership of the app and its reviews.' },
    ],
  },
  {
    slug: 'app-install-campaigns-hyderabad',
    name: 'App Install Campaigns & ASO',
    shortName: 'app install campaigns',
    icon: 'target',
    metaTitle: 'App Install Campaigns & ASO in Hyderabad – IdeaRevive',
    metaDescription:
      'Grow mobile app installs with Google App Campaigns, Meta app ads, Apple Search Ads and app store optimisation. Built for retained, paying users.',
    h1: 'App Install Campaigns & ASO in Hyderabad',
    card: 'Google App Campaigns, Meta and Apple Search Ads plus store optimisation, tuned for retained users.',
    answer:
      'IdeaRevive runs mobile app install campaigns and app store optimisation (ASO) for apps in India and worldwide. We combine Google App Campaigns, Meta app ads, Apple Search Ads and store listing optimisation, and optimise toward in-app actions such as sign-ups and purchases rather than raw installs.',
    intro:
      'Cheap installs are easy to buy and expensive to keep. We connect ad platforms to your MMP and in-app events so budgets chase users who register, return and pay.',
    included: [
      { title: 'Google App Campaigns', text: 'Install and in-app action campaigns across Search, Play, YouTube and Display.' },
      { title: 'Meta & Apple Search Ads', text: 'Meta Advantage+ app campaigns and Apple Search Ads keyword campaigns for iOS.' },
      { title: 'App store optimisation', text: 'Keyword research, titles, descriptions, screenshots and preview videos for both stores.' },
      { title: 'MMP & event set-up', text: 'AppsFlyer, Adjust or Branch integration with SKAN and privacy-compliant event mapping.' },
      { title: 'Creative testing', text: 'Video and playable-style creatives tested weekly against cost per retained user.' },
      { title: 'Ratings & reviews', text: 'In-app review prompts and response workflows that lift store conversion rate.' },
    ],
    deliverables: ['Store listing and ASO audit', 'Attribution and event mapping', 'Channel plan with target cost per action', 'Weekly install, retention and ROAS reporting'],
    timeline: 'Campaigns exit the learning phase in 1–3 weeks; ASO ranking gains typically appear within 4–8 weeks.',
    bestFor: ['Consumer apps launching in India', 'Fintech, edtech and health apps', 'eCommerce and marketplace apps', 'Apps expanding to new countries'],
    faqs: [
      { q: 'What is app store optimisation (ASO)?', a: 'App store optimisation is the process of improving an app’s visibility and conversion rate in the App Store and Google Play through keywords, titles, screenshots, videos, ratings and reviews, so more people find and install the app without paid ads.' },
      { q: 'How much does an app install cost in India?', a: 'Cost per install varies widely by category, platform and country, and Android installs are generally cheaper than iOS. We focus on cost per registered or paying user, because that is the number that decides whether campaigns are profitable.' },
      { q: 'Do you need an MMP to run app install campaigns?', a: 'For serious budgets, yes. A mobile measurement partner such as AppsFlyer, Adjust or Branch attributes installs and in-app events across channels, which lets ad platforms optimise for valuable users.' },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
