import type { FAQ } from './services';

export type Industry = {
  slug: string;
  name: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  answer: string;
  challenges: string[];
  approach: string[];
  services: string[];
  faqs: FAQ[];
};

export const industries: Industry[] = [
  {
    slug: 'real-estate',
    name: 'Real Estate',
    icon: 'building',
    metaTitle: 'Real Estate Digital Marketing in Hyderabad – IdeaRevive',
    metaDescription: 'Lead generation for Hyderabad real estate developers, brokers and projects: Google Ads, Meta Ads, landing pages, CRM integration and local SEO.',
    answer: 'IdeaRevive runs real estate digital marketing in Hyderabad for developers, channel partners and brokers, combining Google and Meta lead campaigns, project landing pages, CRM integration and local SEO to deliver site-visit-ready leads.',
    challenges: ['High cost per lead from broad targeting', 'Many unqualified or duplicate enquiries', 'Slow follow-up losing interested buyers', 'RERA and platform advertising compliance'],
    approach: ['Project-specific landing pages with RERA details', 'Qualifying forms and instant WhatsApp follow-up', 'Offline conversion imports of site visits and bookings', 'Location-led SEO for project and micro-market searches'],
    services: ['google-ads-ppc-hyderabad', 'performance-marketing-lead-generation-hyderabad', 'social-media-marketing-hyderabad'],
    faqs: [
      { q: 'How do you reduce cost per lead for real estate projects?', a: 'We narrow targeting to realistic buyer profiles and micro-markets, use qualifying forms, and import site visits and bookings back into Google and Meta so the platforms optimise for buyers instead of browsers.' },
      { q: 'Do real estate ads need RERA details?', a: 'Yes. Advertising for RERA-registered projects should show the registration number and accurate project information. We build landing pages and ad copy with RERA details and platform housing-ad policies in mind.' },
      { q: 'Can you market projects to NRI buyers?', a: 'Yes. We run campaigns in the Gulf, US, UK and other markets with large Indian communities, with time-zone-aware follow-up and virtual site-visit options for buyers abroad.' },
    ],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare & Clinics',
    icon: 'heart',
    metaTitle: 'Healthcare & Clinic Marketing in Hyderabad – IdeaRevive',
    metaDescription: 'Ethical marketing for Hyderabad hospitals, clinics, dentists and diagnostics: local SEO, compliant Google Ads, reputation management and patient content.',
    answer: 'IdeaRevive provides ethical healthcare marketing in Hyderabad for hospitals, clinics, dentists and diagnostic centres, focusing on local SEO, Google Business Profile, compliant Google Ads, reputation management and doctor-reviewed patient education content.',
    challenges: ['Strict advertising policies for medical services', 'Patients choosing by reviews and proximity', 'Need for trustworthy, accurate health content', 'Appointment tracking across calls and walk-ins'],
    approach: ['Google Business Profiles for each location and doctor', 'Doctor-reviewed content with author credentials', 'Policy-compliant search campaigns', 'Call tracking and appointment booking integration'],
    services: ['local-seo-hyderabad', 'content-marketing-hyderabad', 'google-ads-ppc-hyderabad'],
    faqs: [
      { q: 'Is it allowed to advertise medical services on Google?', a: 'Yes, within Google’s healthcare and medicines policies and Indian advertising rules. Some treatments and claims are restricted, so we review every ad and landing page for compliance before launch.' },
      { q: 'How do clinics get more patient reviews ethically?', a: 'Ask every satisfied patient at the right moment with a simple link, make leaving a review easy, and respond professionally to all feedback. We never buy, incentivise or fabricate reviews.' },
      { q: 'Should each doctor have a Google Business Profile?', a: 'Often, yes. Individual practitioner profiles can help patients who search by doctor name, as long as they follow Google’s guidelines and stay consistent with the clinic’s main profile.' },
    ],
  },
  {
    slug: 'education',
    name: 'Education & Coaching',
    icon: 'book',
    metaTitle: 'Education Marketing Agency in Hyderabad – IdeaRevive',
    metaDescription: 'Admissions and enrolment marketing for schools, colleges, coaching centres and training institutes in Hyderabad and across India, measured in enrolments.',
    answer: 'IdeaRevive helps Hyderabad schools, colleges, coaching centres and training institutes increase admissions through course-page SEO, seasonal Google and Meta enquiry campaigns, YouTube content and counselling follow-up workflows.',
    challenges: ['Seasonal, deadline-driven admission cycles', 'Intense competition for the same keywords', 'Parents and students comparing many options', 'Measuring enrolments, not just enquiries'],
    approach: ['Course and programme pages built for search', 'Campaigns timed to batch and admission windows', 'Testimonials and outcome-led content', 'Enquiry-to-enrolment tracking in your CRM'],
    services: ['seo-services-hyderabad', 'performance-marketing-lead-generation-hyderabad', 'social-media-marketing-hyderabad'],
    faqs: [
      { q: 'When should education institutes start admission campaigns?', a: 'Usually six to ten weeks before applications open, with awareness content earlier and the heaviest spend in the final weeks before deadlines, when parents and students are comparing options most actively.' },
      { q: 'How do you track enrolments rather than enquiries?', a: 'We connect forms, calls and WhatsApp to your CRM, mark counselling outcomes and enrolments, and send that data back to ad platforms so campaigns optimise toward students who actually join.' },
      { q: 'Does YouTube work for coaching institutes?', a: 'Yes. Demo classes, topper interviews and exam-strategy videos build trust before enquiry, and YouTube campaigns can retarget viewers when admission windows open.' },
    ],
  },
  {
    slug: 'it-saas',
    name: 'IT, SaaS & B2B',
    icon: 'code',
    metaTitle: 'B2B & SaaS Marketing Agency in Hyderabad – IdeaRevive',
    metaDescription: 'B2B SEO, LinkedIn Ads, content, demand generation and SaaS product development for IT services and software companies in Hyderabad and worldwide.',
    answer: 'IdeaRevive delivers B2B and SaaS marketing for Hyderabad IT services and software companies, including B2B SEO, thought-leadership content, LinkedIn Ads, account-based campaigns and demo-focused landing pages.',
    challenges: ['Long, multi-stakeholder sales cycles', 'Competing globally for niche keywords', 'Proving marketing’s pipeline contribution', 'Explaining complex offerings simply'],
    approach: ['Topic clusters around buyer problems', 'Case studies and comparison pages', 'LinkedIn and Google campaigns for decision-makers', 'Pipeline attribution with your CRM'],
    services: ['seo-services-hyderabad', 'content-marketing-hyderabad', 'performance-marketing-lead-generation-hyderabad', 'saas-product-development-hyderabad'],
    faqs: [
      { q: 'How long does B2B SEO take to generate pipeline?', a: 'Expect early traffic gains in two to four months and meaningful pipeline in six to twelve, because B2B buyers research over long cycles. Comparison and problem-focused pages usually produce demos first.' },
      { q: 'Can you both build and market a SaaS product?', a: 'Yes. IdeaRevive offers SaaS product development as well as marketing, so the product, marketing site, analytics and launch campaigns are planned together by one team.' },
      { q: 'Is LinkedIn advertising worth it for IT services firms?', a: 'For high-value deals, usually yes. LinkedIn costs more per click, but company and job-title targeting reaches decision-makers precisely, and a single closed deal often covers months of spend.' },
    ],
  },
  {
    slug: 'ecommerce-retail',
    name: 'eCommerce & Retail',
    icon: 'cart',
    metaTitle: 'eCommerce & Retail Marketing in Hyderabad – IdeaRevive',
    metaDescription: 'Shopify, D2C and retail growth for brands in India and worldwide: Google Shopping, Performance Max, Meta Ads, product SEO, shopping apps and CRO.',
    answer: 'IdeaRevive has grown eCommerce, D2C and retail brands across India and around the world with Google Shopping and Performance Max, Meta Ads, product and category SEO, shopping apps, email automation and conversion rate optimisation focused on profitable return on ad spend.',
    challenges: ['Rising customer acquisition costs', 'Thin product pages that do not rank', 'Cart abandonment', 'Balancing online sales with store footfall'],
    approach: ['Product feed optimisation for Shopping', 'Category and product page SEO', 'Creative testing on Meta and YouTube', 'Email and WhatsApp retention flows'],
    services: ['ecommerce-marketing-hyderabad', 'google-ads-ppc-hyderabad', 'social-media-marketing-hyderabad', 'mobile-app-development-hyderabad', 'app-install-campaigns-hyderabad'],
    faqs: [
      { q: 'Is ROAS the right metric for eCommerce marketing?', a: 'ROAS is useful but incomplete. We also track contribution margin after ad spend, new-customer share and repeat purchase rate, because a high ROAS on discounted repeat buyers can still lose money.' },
      { q: 'Should an eCommerce brand build a mobile app?', a: 'An app makes sense once you have loyal repeat customers, because it improves retention through push notifications and faster checkout. We build shopping apps and run install campaigns when the numbers support it.' },
      { q: 'How do retail stores benefit from online marketing?', a: 'Local inventory ads, Google Business Profile and store-visit campaigns bring online shoppers into physical stores, while the website captures customers who prefer to buy online.' },
    ],
  },
  {
    slug: 'hospitality',
    name: 'Restaurants & Hospitality',
    icon: 'cup',
    metaTitle: 'Restaurant & Hotel Marketing in Hyderabad – IdeaRevive',
    metaDescription: 'Instagram marketing, local SEO, influencer campaigns and reputation management for restaurants, cafés and hotels in Hyderabad.',
    answer: 'IdeaRevive markets Hyderabad restaurants, cafés, cloud kitchens and hotels through Instagram content, local SEO and Google Maps optimisation, creator collaborations, review management and booking-focused campaigns.',
    challenges: ['Discovery happens on Instagram and Google Maps before a diner ever walks in', 'Reviews drive most decisions between similar restaurants on the same street', 'High competition in Jubilee Hills, Banjara Hills, Gachibowli and Tolichowki', 'Converting followers into covers, takeaway orders and hotel bookings'],
    approach: ['Reels-first content calendars tied to menu and seasonal dishes', 'Menu, photos, hours and posts kept current on Google Business Profile', 'Creator visits and launch events with tracked offers, not vanity posts', 'Direct booking and offer campaigns that skip commission-heavy platforms'],
    services: ['social-media-marketing-hyderabad', 'local-seo-hyderabad', 'branding-creative-design-hyderabad'],
    faqs: [
      { q: 'How do restaurants get discovered on Google Maps?', a: 'A complete Google Business Profile with the right categories, menu, fresh photos, accurate hours and a steady stream of genuine reviews is the biggest factor, followed by local relevance and distance.' },
      { q: 'Do influencer collaborations work for restaurants?', a: 'They work best with local food creators whose followers live nearby. We brief creators clearly, track redemptions with unique offers and focus on visits rather than vanity reach.' },
      { q: 'How can hotels get more direct bookings?', a: 'Strong Google Business Profiles, Google Hotel Ads, brand search campaigns and a fast booking engine with direct-booking perks reduce reliance on commission-based travel platforms.' },
    ],
  },
  {
    slug: 'interior-design',
    name: 'Interior Design',
    icon: 'sofa',
    metaTitle: 'Interior Design Marketing in Hyderabad | IdeaRevive',
    metaDescription: 'Digital marketing for Hyderabad interior designers: Instagram portfolios, Google Ads, local SEO and landing pages that book site visits, not just likes.',
    answer: 'IdeaRevive markets interior designers and interior firms in Hyderabad, turning room photography into project enquiries through Instagram, Google Ads, local SEO and landing pages that show style, budget bands and neighbourhoods rather than a generic mood board.',
    challenges: ['Beautiful feeds that never turn into site visits or drawings', 'Homeowners comparing three firms on Maps before they call', 'Project photos without the locality, ticket size or timeline buyers search for', 'Leads from 1 BHK rentals when you only take villa and 3 BHK work'],
    approach: ['Portfolio pages tagged by room, style and Hyderabad micro-market', 'Instagram and Pinterest that deep-link to a visit form, not a DM black hole', 'Google Ads on interior designer plus locality, with qualifying questions', 'Before-after and review systems that Maps and AI answers can actually cite'],
    services: ['social-media-marketing-hyderabad', 'local-seo-hyderabad', 'google-ads-ppc-hyderabad', 'branding-creative-design-hyderabad'],
    faqs: [
      { q: 'How should an interior designer in Hyderabad get project enquiries online?', a: 'Rank for interior designer plus the areas you actually serve, put real project photos on Google, and run ads that ask for apartment size and budget before the call. Instagram fills the mood; the listing and landing page book the visit.' },
      { q: 'Do interior firms need separate pages for Gachibowli and Jubilee Hills?', a: 'If you take work in both, yes — as sections or pages that name the housing stock. A villa in Kokapet is not a 2 BHK in Kukatpally. Shared citywide copy makes you look interchangeable with every other studio.' },
      { q: 'Is Instagram enough if our interior reel views are already high?', a: 'Views are not drawings. We connect reels to a project enquiry form, retarget viewers, and keep Maps and Google search in the mix so someone who saw a kitchen still finds you a month later when they finally renovate.' },
    ],
  },
  {
    slug: 'landscaping',
    name: 'Landscaping',
    icon: 'leaf',
    metaTitle: 'Landscaping Marketing in Hyderabad | IdeaRevive',
    metaDescription: 'SEO, Google Ads and social campaigns for landscape contractors, garden designers and outdoor firms in Hyderabad villa and society catchments.',
    answer: 'IdeaRevive provides digital marketing for landscaping contractors, garden designers and outdoor firms in Hyderabad, using local SEO, Google Ads and project photography to win villa, farmhouse and society jobs instead of competing only on WhatsApp forwards.',
    challenges: ['Seasonal enquiry spikes around monsoon and festival months', 'Homeowners searching “garden designer near me” with no brand in mind', 'Society AMC work that never shows up on a public website', 'Photos of plants without the plot size, ORR locality or maintenance offer'],
    approach: ['Google Business categories for landscaping and garden design, not generic contractor', 'Project pages for villas, farmhouses, societies and commercial campuses', 'Seasonal ads timed to planting and outdoor-living months', 'WhatsApp quoting from a form that captures plot size and pin code'],
    services: ['local-seo-hyderabad', 'google-ads-ppc-hyderabad', 'social-media-marketing-hyderabad', 'website-design-development-hyderabad'],
    faqs: [
      { q: 'When should Hyderabad landscaping firms advertise?', a: 'Heaviest before monsoon planting and again before winter outdoor parties, with a lighter year-round Maps presence so you still catch the villa that just got keys. Starting ads the week it rains means you are already late.' },
      { q: 'Can landscaping companies rank for villa communities like Kokapet?', a: 'Yes, with pages and pins that name those communities, plus photos of work done there. A citywide “best landscaping Hyderabad” page will not beat a competitor who already owns “landscape designer Kokapet” on Maps.' },
      { q: 'Should we show pricing for garden work online?', a: 'Show starting bands and what changes the quote — plot size, hardscape, maintenance — then finish on WhatsApp. Hidden pricing loses the serious villa owner; a fake “₹999 garden” offer attracts the wrong jobs.' },
    ],
  },
  {
    slug: 'architecture-construction',
    name: 'Architecture & Construction',
    icon: 'ruler',
    metaTitle: 'Architecture Marketing in Hyderabad | IdeaRevive',
    metaDescription: 'Digital marketing for Hyderabad architects, contractors and construction firms: project SEO, Google Ads, websites and lead qualification for site visits.',
    answer: 'IdeaRevive markets architects, civil contractors and construction firms in Hyderabad with project-led SEO, Google Ads, professional websites and qualifying forms so enquiries are plots and drawings, not random “send rate” messages.',
    challenges: ['Being confused with real-estate developers on search and Maps', 'Portfolios trapped in PDFs that Google and clients cannot open on a phone', 'Unqualified rate requests that waste a site engineer’s afternoon', 'No separation between residential, commercial and industrial work online'],
    approach: ['Service pages for architecture, contracting and project types, not one “we build” blob', 'Case studies with locality, built-up area and role — architect vs PMC vs contractor', 'Lead forms that ask for plot status, budget and drawings before the call', 'Google Ads on intent terms, with brand protection on the firm name'],
    services: ['seo-services-hyderabad', 'website-design-development-hyderabad', 'google-ads-ppc-hyderabad', 'content-marketing-hyderabad'],
    faqs: [
      { q: 'How is architecture marketing different from real estate ads?', a: 'Developers sell units. You sell drawings, PMC or a construction contract. We do not run housing-lead campaigns for architects. We rank and advertise for architect, contractor and building-type searches, then qualify plot and budget before a site visit.' },
      { q: 'Do construction firms in Hyderabad still need a website if they live on referrals?', a: 'Referrals now Google you before they forward your number. A slow or missing site kills jobs you never hear about. We keep the site as proof — licences you can state, projects, and a form — while referrals stay the closer.' },
      { q: 'Can you generate commercial fit-out leads, not only house construction?', a: 'Yes, with separate pages and campaigns for office, retail and industrial work. Mixing “house construction Hyderabad” with “office interiors Gachibowli” in one ad group sends the wrong trucks to the wrong meetings.' },
    ],
  },
  {
    slug: 'fitness-wellness',
    name: 'Fitness & Wellness',
    icon: 'dumbbell',
    metaTitle: 'Gym & Fitness Marketing in Hyderabad | IdeaRevive',
    metaDescription: 'Local SEO, Instagram and Google Ads for gyms, yoga studios, pilates and wellness clinics in Hyderabad, built around trial bookings and retained members.',
    answer: 'IdeaRevive runs digital marketing for gyms, yoga studios, pilates and wellness clinics in Hyderabad, filling trial slots and memberships through Google Maps, Instagram, Google Ads and landing pages that convert to a booked session, not a forgotten follow.',
    challenges: ['January spikes and mid-year empty floors if acquisition is only seasonal', 'Members joining the gym two streets closer on Maps', 'Reels that look busy while the trial form still asks for ten fields', 'Trainers posting personally while the studio listing is incomplete'],
    approach: ['Google Business Profiles with classes, photos and a bookable trial action', 'Neighbourhood ads with a two to four kilometre radius, not all of Hyderabad', 'Trial-to-membership tracking so ads optimise for people who stay', 'Class and trainer pages that match how people search, including yoga and pilates'],
    services: ['local-seo-hyderabad', 'social-media-marketing-hyderabad', 'google-ads-ppc-hyderabad', 'performance-marketing-lead-generation-hyderabad'],
    faqs: [
      { q: 'How do Hyderabad gyms get trial bookings from Google instead of walk-ins only?', a: 'A complete Maps listing, a one-tap trial page, and ads aimed at the apartments around you. People searching “gym near Kondapur” will not fill a long membership form. They will book a trial if the pin, photos and time slots are clear.' },
      { q: 'Should boutique studios advertise against big gym chains?', a: 'Not on the word gym alone. We bid on pilates, yoga, reformer, women’s studio and the locality, where chains are weaker. Competing on “gym Hyderabad” is how a 2,000-square-foot studio burns the month’s rent.' },
      { q: 'Do gym reviews actually change membership numbers?', a: 'They decide the Maps tab. We set a simple after-session ask and reply to every genuine review. A 4.8 with recent local reviews usually beats a fancier facility sitting at 3.9 with last year’s photos.' },
    ],
  },
  {
    slug: 'beauty-salons',
    name: 'Beauty & Salons',
    icon: 'scissors',
    metaTitle: 'Salon & Beauty Marketing in Hyderabad | IdeaRevive',
    metaDescription: 'Instagram, Google Maps and booking ads for salons, spas, dermatology-adjacent clinics and beauty brands in Hyderabad. Free IdeaRevive growth audit.',
    answer: 'IdeaRevive markets salons, spas and beauty studios in Hyderabad with Instagram, Google Maps, booking-focused ads and brand work, so chairs fill from search and reels rather than only from the regulars who already have your WhatsApp.',
    challenges: ['Discovery is visual, but bookings still happen on Maps and WhatsApp', 'Stylists leaving and taking the Instagram audience with them', 'Festival calendars that overwhelm a salon with no online waitlist', 'Lookalike reels that do not say price, locality or the service name people type'],
    approach: ['Service menus on Google and the site that match how clients search', 'Instagram that belongs to the salon, with booking links, not only the owner’s phone', 'Campaigns timed to weddings, festivals and bridal seasons in Hyderabad', 'Review and before-after systems that stay within advertising rules for skin claims'],
    services: ['social-media-marketing-hyderabad', 'local-seo-hyderabad', 'branding-creative-design-hyderabad', 'google-ads-ppc-hyderabad'],
    faqs: [
      { q: 'How do Jubilee Hills salons get new clients, not only regulars?', a: 'Maps for “salon near me”, reels that name the service and area, and a booking link that does not require a DM. Regulars already have your number. New clients will not hunt through stories from three months ago.' },
      { q: 'Can we advertise skin treatments the same way as a haircut?', a: 'No. Hair and makeup are straightforward. Anything medical-adjacent has to follow Google and Indian advertising rules. We split those services, drop prohibited claims, and keep the landing page honest about who performs the treatment.' },
      { q: 'Should every stylist have a personal Instagram if the salon has one?', a: 'Personal pages help, but the salon listing, booking link and Google profile must stay with the business. We tag stylists inside the brand account so a resignation does not wipe the only acquisition channel you had.' },
    ],
  },
  {
    slug: 'professional-services',
    name: 'Law, CA & Consulting',
    icon: 'briefcase',
    metaTitle: 'CA & Legal Marketing in Hyderabad | IdeaRevive',
    metaDescription: 'SEO, content and Google Ads for CAs, law firms and consultants in Hyderabad. Ethical lead generation without fake reviews or guaranteed-result claims.',
    answer: 'IdeaRevive provides digital marketing for chartered accountants, law firms and consultants in Hyderabad, using SEO, expert content and tightly targeted Google Ads so professional enquiries arrive with a matter type attached, not a vague “need help”.',
    challenges: ['Advertising rules that forbid guaranteed outcomes and sensational claims', 'Partners who are findable on LinkedIn but invisible on Google for service terms', 'Associate pages that never mention practice areas or Hyderabad localities', 'Lead forms that attract students and job-seekers instead of clients'],
    approach: ['Practice-area pages with author credentials and no outcome promises', 'Google Ads on service-plus-city terms, with query filters for jobs and essays', 'LinkedIn for referral and corporate work, search for intent that already exists', 'Call tracking that partners actually look at, mapped to matter types'],
    services: ['seo-services-hyderabad', 'content-marketing-hyderabad', 'google-ads-ppc-hyderabad', 'website-design-development-hyderabad'],
    faqs: [
      { q: 'Are Google Ads allowed for law firms and CAs in India?', a: 'Search ads are possible when copy stays inside professional advertising rules: no guaranteed results, no misleading titles, no fake scarcity. We review every ad and landing page with you before it goes live, and we drop queries that are clearly not clients.' },
      { q: 'How long does SEO take for a Hyderabad CA firm?', a: 'Service pages such as GST, audit or tax filing in Hyderabad can move in a few months if the site is clean. Competitive litigation or “best lawyer” terms take longer and should not be the only plan. We pair SEO with branded and high-intent search ads.' },
      { q: 'Should every partner have a personal site as well as the firm site?', a: 'A partner bio on the firm domain is usually enough. Separate personal sites split authority unless the partner is truly a public brand. We keep one canonical firm site and strong bios that rank for partner names.' },
    ],
  },
  {
    slug: 'automotive',
    name: 'Automotive',
    icon: 'car',
    metaTitle: 'Automobile Dealer Marketing in Hyderabad | IdeaRevive',
    metaDescription: 'Google Ads, YouTube and local SEO for Hyderabad car dealers, used-car yards and auto workshops: test-drive leads, service bookings and model launches.',
    answer: 'IdeaRevive runs digital marketing for Hyderabad automobile dealers, used-car yards and workshops, generating test-drive and service bookings through Google Ads, YouTube, local SEO and stock or booking pages that the floor team can follow the same day.',
    challenges: ['OEM national campaigns that steal branded searches for the showroom’s own name', 'Stock that changes daily while the website still shows last month’s cars', 'Workshops losing cars to authorised service because Maps is incomplete', 'Leads sitting in a portal while the customer has already booked elsewhere'],
    approach: ['Model and showroom pages the dealer owns, plus brand-name search protection', 'Inventory or service-booking feeds that match what is actually on the floor', 'YouTube and search around launches, with geo on Hyderabad catchments', 'CRM-speed follow-up so a test-drive lead is called while intent is warm'],
    services: ['google-ads-ppc-hyderabad', 'performance-marketing-lead-generation-hyderabad', 'local-seo-hyderabad', 'social-media-marketing-hyderabad'],
    faqs: [
      { q: 'How do Hyderabad car dealers get test drives that are not tyre-kickers?', a: 'Ask for model, timeline and whether they are exchanging, then send the lead to the showroom CRM within minutes. Broad “cars Hyderabad” ads fill the logbook. Qualified forms and fast calling fill the diary.' },
      { q: 'Can a standalone workshop compete with authorised service centres online?', a: 'On specialised jobs and neighbourhood convenience, yes. We rank the workshop for the locality and the work you actually do, keep hours and photos honest, and do not pretend to be the OEM. Maps plus call ads beat a Facebook page nobody searches.' },
      { q: 'Should used-car yards run the same ads as new-car showrooms?', a: 'No. Used stock needs freshness, price bands and finance messages. New cars need model launches and allotment honesty. Sharing one campaign mixes two buying jobs and usually raises cost per visit for both.' },
    ],
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    icon: 'cog',
    metaTitle: 'Manufacturing Marketing in Hyderabad | IdeaRevive',
    metaDescription: 'B2B SEO, product-catalogue websites and Google Ads for Hyderabad manufacturers, fabricators and industrial suppliers who need RFQs, not likes.',
    answer: 'IdeaRevive markets Hyderabad manufacturers, fabricators and industrial suppliers with B2B SEO, specification-led websites and Google Ads, so procurement finds the product, quantity and certifications they need and sends an RFQ instead of a social follow.',
    challenges: ['Websites that look like brochures and rank for the company name only', 'IndiaMART dependence with no owned search presence', 'Export buyers who bounce because there is no spec sheet in English', 'Sales teams who will not follow a web lead because the last twenty were junk'],
    approach: ['Product and capability pages with specs, tolerances and industry applications', 'Google Ads on product terms, filtered for jobs, PDFs and unrelated geographies', 'Enquiry forms that ask for quantity, drawing and delivery location', 'A simple CRM or spreadsheet workflow sales will actually open'],
    services: ['seo-services-hyderabad', 'website-design-development-hyderabad', 'google-ads-ppc-hyderabad', 'content-marketing-hyderabad'],
    faqs: [
      { q: 'Can Hyderabad manufacturers get RFQs from Google instead of only IndiaMART?', a: 'Yes. We build product pages that match how buyers search, run ads on those terms, and keep a short RFQ form. IndiaMART can stay. Search becomes a channel you own, with the phone number and email on a site you control.' },
      { q: 'Is LinkedIn useful for a fabrication unit in Uppal?', a: 'For plant visits and OEM vendor lists, sometimes. For day-to-day RFQs, search and a catalogue site usually win first. We add LinkedIn when the buyer is a named company, not when you just need more drawing enquiries.' },
      { q: 'Do factory photos help, or do they look unprofessional?', a: 'Real shop-floor photos with safety and process in frame help more than stock images of glass offices. Buyers want to see you can make the part. We keep photography honest and skip fake “global corporate” sets.' },
    ],
  },
  {
    slug: 'jewellery-fashion',
    name: 'Jewellery & Fashion',
    icon: 'gem',
    metaTitle: 'Jewellery Marketing in Hyderabad | IdeaRevive',
    metaDescription: 'Instagram, local SEO and catalogue campaigns for Hyderabad jewellery, pearls, boutiques and fashion labels — store visits and WhatsApp quotes, not empty likes.',
    answer: 'IdeaRevive markets Hyderabad jewellery stores, pearl traders, boutiques and fashion labels with Instagram, Google Maps, catalogue pages and ads aimed at store visits and WhatsApp quotes, including Abids, Banjara Hills and Old City wholesale as well as D2C labels.',
    challenges: ['High-ticket buyers who will not checkout online but will Google the shop first', 'Wedding season crushes that a feed of random reels cannot convert', 'Wholesale counters with no English or Urdu listing that out-of-town buyers can find', 'Lookalike gold ads that ignore hallmarking, making charges and locality'],
    approach: ['Maps and catalogue pages that match the board outside, including script where needed', 'Bridal and festival calendars with booked-appointment ads, not generic “gold rate today” spam', 'WhatsApp quote flows for jewellery; shopping ads only where SKUs and returns are ready', 'Creator work with Hyderabad stylists, tracked to visits and codes, not vanity views'],
    services: ['social-media-marketing-hyderabad', 'local-seo-hyderabad', 'ecommerce-marketing-hyderabad', 'branding-creative-design-hyderabad'],
    faqs: [
      { q: 'Will a jewellery store in Abids get online orders or only showroom visits?', a: 'Mostly visits and WhatsApp quotes, which is what you want for gold. We do not pretend checkout replaces the counter. We make sure the serious buyer finds the shop, sees work, and books a visit before they walk into a competitor.' },
      { q: 'How do pearl and bangle traders in the Old City get out-of-state buyers?', a: 'With a catalogue, shipping terms you can stand behind, and search for “pearls Hyderabad” or “bangles Charminar”. Many buyers already search that way. We point those queries at your counter instead of only a marketplace listing.' },
      { q: 'Do fashion boutiques in Banjara Hills need Google Ads as well as Instagram?', a: 'If people search the label or “boutique Banjara Hills”, yes. Instagram is the lookbook. Search and Maps catch the visitor already on the road. We split brand search from generic fashion terms so you are not paying for window shoppers across the city.' },
    ],
  },
  {
    slug: 'home-services',
    name: 'Home Services',
    icon: 'wrench',
    metaTitle: 'Home Services Marketing in Hyderabad | IdeaRevive',
    metaDescription: 'Google Maps, call ads and WhatsApp campaigns for Hyderabad plumbers, painters, AC repair, pest control and interior-adjacent home service firms.',
    answer: 'IdeaRevive markets Hyderabad home-service firms — plumbing, painting, AC repair, pest control, cleaning and similar trades — with Google Maps, call-only ads and WhatsApp booking so the phone rings from the apartment that needs you today, not from a citywide flyer.',
    challenges: ['False shop addresses that Google later suspends', 'Paying for clicks from the other side of the Musi you cannot serve today', 'Crews who never collect reviews after a completed job', 'One Facebook page trying to rank for ten trades and twenty localities'],
    approach: ['Service-area Google profiles set correctly, with no fake storefront pins', 'One landing page per core trade, plus the neighbourhoods you actually cover', 'Call-only and WhatsApp ads with a tight radius and job-type extras', 'A review ask after completed jobs — never gated, never bought'],
    services: ['local-seo-hyderabad', 'google-ads-ppc-hyderabad', 'social-media-marketing-hyderabad', 'website-design-development-hyderabad'],
    faqs: [
      { q: 'Can a plumber or AC technician rank on Google Maps without a shop?', a: 'Yes, as a service-area business. We set the profile that way, build pages for each trade, and collect reviews from finished jobs. A fake shop pin is how listings get suspended. The honest service-area setup is slower and lasts.' },
      { q: 'How tight should ads be for a Manikonda home-service crew?', a: 'Usually a few kilometres around the societies you can reach the same day. Citywide “AC repair Hyderabad” looks cheap until you drive ninety minutes for a ₹800 job. We set radius from your real coverage, then watch cost per call.' },
      { q: 'Should painting, plumbing and interiors share one website?', a: 'Only if it is one company with clear service pages. If they are different crews or brands, separate the listings. A single homepage that says “all home needs” ranks for nothing and confuses Maps.' },
    ],
  },
];

/** The numbers we report for each industry, and why each one matters more than vanity metrics. */
export const industryMetrics: Record<string, { metric: string; why: string }[]> = {
  'real-estate': [
    { metric: 'Cost per site visit', why: 'Site visits predict bookings far better than raw lead volume.' },
    { metric: 'Lead-to-visit rate', why: 'Shows whether targeting and follow-up speed are working.' },
    { metric: 'Cost per booking', why: 'The figure that decides whether a campaign paid for itself.' },
    { metric: 'Duplicate and junk lead share', why: 'Keeps the sales team focused on real buyers.' },
  ],
  healthcare: [
    { metric: 'Booked appointments', why: 'Calls and forms only matter when they become consultations.' },
    { metric: 'Map pack visibility by area', why: 'Most patients choose providers close to home.' },
    { metric: 'Review rating and volume', why: 'Reviews are often the deciding factor between clinics.' },
    { metric: 'Cost per new patient', why: 'Lets you compare channels on the outcome that matters.' },
  ],
  education: [
    { metric: 'Cost per enrolment', why: 'Enquiries are cheap; enrolled students are the real result.' },
    { metric: 'Enquiry-to-counselling rate', why: 'Reveals how fast and how well follow-up happens.' },
    { metric: 'Course page rankings', why: 'Organic visibility lowers cost per enrolment every cycle.' },
    { metric: 'Admission-window share of voice', why: 'Shows whether you are visible when students decide.' },
  ],
  'it-saas': [
    { metric: 'Qualified pipeline value', why: 'B2B success is measured in pipeline, not form fills.' },
    { metric: 'Demo and trial sign-ups', why: 'The clearest signal of buying intent from marketing.' },
    { metric: 'Customer acquisition cost', why: 'Keeps growth efficient as budgets scale.' },
    { metric: 'Activation rate', why: 'For SaaS, sign-ups only count once users reach first value.' },
  ],
  'ecommerce-retail': [
    { metric: 'Contribution margin after ads', why: 'Shows whether revenue growth is actually profitable.' },
    { metric: 'New-customer ROAS', why: 'Separates real growth from re-buying existing customers.' },
    { metric: 'Repeat purchase rate', why: 'Retention is where eCommerce profit compounds.' },
    { metric: 'App installs to first order', why: 'For shopping apps, installs only matter once people buy.' },
  ],
  hospitality: [
    { metric: 'Direct bookings and covers', why: 'The outcome that pays the bills, not followers.' },
    { metric: 'Maps actions', why: 'Calls, directions and website taps from Google Maps.' },
    { metric: 'Review rating trend', why: 'Ratings strongly influence where people choose to eat and stay.' },
    { metric: 'Commission saved', why: 'Every direct booking avoids aggregator and OTA fees.' },
  ],
  'interior-design': [
    { metric: 'Qualified project enquiries', why: 'Mood-board likes do not pay for drawings; site visits do.' },
    { metric: 'Cost per booked visit', why: 'Shows whether ads are reaching homeowners ready to start.' },
    { metric: 'Enquiry-to-retainer rate', why: 'Filters 1 BHK tyre-kickers from villa and 3 BHK work.' },
    { metric: 'Maps calls by locality', why: 'Tells you which neighbourhoods actually convert.' },
  ],
  landscaping: [
    { metric: 'Quoted jobs from digital', why: 'A form fill is worthless until a site measurement is booked.' },
    { metric: 'Cost per qualified plot lead', why: 'Keeps monsoon spend honest against villa ticket sizes.' },
    { metric: 'Repeat / AMC share', why: 'Maintenance contracts are where landscaping profit compounds.' },
    { metric: 'Map pack in target communities', why: 'Villa clusters search locally, not citywide.' },
  ],
  'architecture-construction': [
    { metric: 'Qualified plot or drawing leads', why: 'Rate-only messages waste engineers; drawings do not.' },
    { metric: 'Cost per site visit', why: 'The first real sales event for a contractor or architect.' },
    { metric: 'Lead-to-proposal rate', why: 'Shows whether targeting matches the work you actually take.' },
    { metric: 'Branded search share', why: 'Stops competitors bidding on the firm name.' },
  ],
  'fitness-wellness': [
    { metric: 'Booked trials', why: 'Walk-by curiosity is not a diary slot.' },
    { metric: 'Trial-to-membership rate', why: 'The number that decides whether ads were worth it.' },
    { metric: '90-day retained members', why: 'January joiners who leave in March are a loss.' },
    { metric: 'Maps actions in radius', why: 'Gyms win or lose inside a few kilometres.' },
  ],
  'beauty-salons': [
    { metric: 'Booked appointments', why: 'DMs are not chairs filled.' },
    { metric: 'New vs returning clients', why: 'Tells you whether the salon is growing or only recycling regulars.' },
    { metric: 'Bridal and festival occupancy', why: 'Peak weeks should be waitlisted, not guessed.' },
    { metric: 'Review volume and rating', why: 'Walk-in beauty is still decided on Maps.' },
  ],
  'professional-services': [
    { metric: 'Qualified matter enquiries', why: 'Students and job-seekers are not clients.' },
    { metric: 'Cost per consulted lead', why: 'The first conversation with a real matter attached.' },
    { metric: 'Practice-area rankings', why: 'GST, audit or a named dispute type beats “best CA”.' },
    { metric: 'Partner-name search clicks', why: 'Referrals now verify the firm before they call.' },
  ],
  automotive: [
    { metric: 'Booked test drives', why: 'Brochure downloads do not move metal.' },
    { metric: 'Cost per showroom visit', why: 'The figure the GM actually cares about.' },
    { metric: 'Lead-to-booking speed', why: 'Slow follow-up loses the customer to the next dealer.' },
    { metric: 'Service bookings from Maps', why: 'Workshops live or die on the local pack.' },
  ],
  manufacturing: [
    { metric: 'RFQs with quantity', why: 'A “send catalogue” mail is not a buying signal.' },
    { metric: 'Cost per sales-accepted lead', why: 'Stops marketing celebrating junk the plant will ignore.' },
    { metric: 'Product-term rankings', why: 'Owned search reduces IndiaMART rent.' },
    { metric: 'Export vs domestic enquiry mix', why: 'Tells you whether spec pages are doing their job.' },
  ],
  'jewellery-fashion': [
    { metric: 'Store visits and WhatsApp quotes', why: 'Gold does not checkout like a T-shirt.' },
    { metric: 'Bridal appointment bookings', why: 'Wedding weeks should be calendared, not chaotic.' },
    { metric: 'Cost per showroom visit', why: 'Keeps Instagram spend tied to the counter.' },
    { metric: 'Maps actions on the market street', why: 'Abids and Old City buyers still navigate by pin.' },
  ],
  'home-services': [
    { metric: 'Calls and WhatsApp jobs booked', why: 'The only conversion a crew can take today.' },
    { metric: 'Cost per in-radius job', why: 'Citywide clicks that need a ninety-minute drive are a loss.' },
    { metric: 'Review velocity', why: 'Home services die on Maps if reviews go quiet.' },
    { metric: 'Repeat and AMC rate', why: 'AC and pest contracts beat one-off panic calls.' },
  ],
};

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);

export const industryGroups = [
  {
    title: 'Place & property',
    slugs: ['interior-design', 'landscaping', 'architecture-construction', 'real-estate', 'home-services'],
  },
  {
    title: 'Health, learning & local life',
    slugs: ['healthcare', 'education', 'hospitality', 'fitness-wellness', 'beauty-salons', 'jewellery-fashion'],
  },
  {
    title: 'Commerce & industry',
    slugs: ['ecommerce-retail', 'it-saas', 'professional-services', 'automotive', 'manufacturing'],
  },
] as const;

export function industriesIn(slugs: readonly string[]) {
  return slugs.map((slug) => getIndustry(slug)).filter((i): i is Industry => Boolean(i));
}
