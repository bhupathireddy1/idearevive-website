import type { FAQ } from './services';

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'table'; head: string[]; rows: string[][] };

export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  published: string;
  updated: string;
  author: string;
  readingMinutes: number;
  category: string;
  tldr: string;
  body: Block[];
  faqs: FAQ[];
  /** Service slugs that put the guide into practice. */
  services: string[];
};

export const allPosts: Post[] = [
  {
    slug: 'how-to-choose-digital-marketing-agency-hyderabad',
    title: 'How to Choose a Digital Marketing Agency in Hyderabad: A 10-Point Checklist',
    metaTitle: 'How to Choose a Digital Marketing Agency in Hyderabad',
    description: 'A practical checklist for Hyderabad businesses comparing digital marketing agencies: questions to ask, red flags to avoid and how to judge proposals.',
    published: '2026-10-01',
    updated: '2026-10-01',
    author: 'Bhupathi Reddy',
    readingMinutes: 7,
    category: 'Strategy',
    tldr: 'Choose an agency that asks about your revenue goals before your budget, shows verifiable work, gives you ownership of every account, reports on leads and sales rather than vanity metrics, and never promises guaranteed rankings.',
    body: [
      { type: 'p', text: 'Hyderabad has hundreds of digital marketing agencies, from freelancers to large networks. Choosing the wrong partner usually costs months of budget and momentum. Use this checklist to compare agencies on what actually predicts results.' },
      { type: 'p', text: 'This guide comes from running client accounts, and from sitting on the other side of the table when businesses replace an agency that did not work out. The same warning signs come up again and again.' },
      { type: 'h2', text: 'What should be on your agency checklist?' },
      { type: 'ol', items: [
        'They ask about your business goals, margins and sales process before quoting.',
        'They show case studies with a baseline, time frame and measurable outcome — and let you speak to a client.',
        'You own your website, domain, Google Ads, Analytics and social accounts.',
        'They explain exactly who will work on your account and their experience.',
        'Reporting focuses on leads, cost per lead and revenue, not just impressions and followers.',
        'Their own website is fast, clear and ranks for relevant searches.',
        'They are honest about timelines — SEO is a 3–6 month investment, not a 2-week fix.',
        'Contracts have clear deliverables and reasonable notice periods.',
        'They set up conversion tracking before spending your ad budget.',
        'They never guarantee “#1 on Google” — nobody controls Google’s algorithm.',
      ] },
      { type: 'h2', text: 'Which red flags should you avoid?' },
      { type: 'ul', items: [
        'Guaranteed rankings or a fixed number of leads without understanding your market.',
        'Large packages of cheap backlinks or “1,000 directory submissions”.',
        'Refusing to give you admin access to your own accounts.',
        'Reports full of metrics that never connect to enquiries or sales.',
      ] },
      { type: 'h2', text: 'Should you hire an agency, a freelancer or an in-house team?' },
      { type: 'table', head: ['Option', 'Best for', 'Watch out for'], rows: [
        ['Freelancer', 'Single-channel needs on a small budget', 'Limited capacity and single point of failure'],
        ['Agency', 'Multi-channel growth with strategy and specialists', 'Junior staff on your account after the sales pitch'],
        ['In-house team', 'Large, steady marketing budgets', 'Hiring cost and keeping skills current'],
      ] },
      { type: 'h2', text: 'What should you ask in the first call?' },
      { type: 'ul', items: [
        'What would you do in the first 90 days for a business like ours?',
        'How will we measure success, and how often will we review it?',
        'What do you need from our team to make this work?',
        'What happens to our accounts and content if we part ways?',
      ] },
      { type: 'h2', text: 'How do you compare two agency proposals fairly?' },
      { type: 'p', text: 'Put the proposals side by side and ignore the headline price for a moment. Check what each one will actually deliver in the first 90 days, who does the work, how tracking will be set up, and which numbers you will be shown every month. A cheaper proposal that skips tracking usually ends up costing more, because nobody can tell which spend is working.' },
      { type: 'p', text: 'A good agency will welcome these questions. If you want an honest assessment of where your marketing stands today, IdeaRevive offers a free growth audit with no obligation.' },
    ],
    faqs: [
      { q: 'How much does a digital marketing agency in Hyderabad charge?', a: 'Fees vary widely by scope and channels. Small single-channel retainers cost far less than multi-channel programmes with content and ad management. Always compare what is included, not just the monthly figure.' },
      { q: 'How long should I give an agency to show results?', a: 'Paid campaigns should show measurable leads within the first month. SEO and content usually need 3–6 months. Agree on leading indicators to review monthly in the meantime.' },
      { q: 'Should I sign a long contract with a new agency?', a: 'Prefer a short initial term, such as three months, with clear deliverables and a reasonable notice period. A confident agency will earn the renewal with results instead of locking you in.' },
    ],
    services: ['seo-services-hyderabad', 'google-ads-ppc-hyderabad', 'performance-marketing-lead-generation-hyderabad'],
  },
  {
    slug: 'what-is-geo-aeo-llmo',
    title: 'SEO vs AEO vs GEO vs LLMO, Explained for Hyderabad Businesses',
    metaTitle: 'SEO vs AEO vs GEO vs LLMO Explained for Hyderabad',
    description: 'Plain-English definitions of SEO, AEO, GEO, AIO and LLMO, and practical steps to get cited by ChatGPT, Gemini and Google AI Overviews.',
    published: '2026-10-03',
    updated: '2026-10-03',
    author: 'Bhupathi Reddy',
    readingMinutes: 8,
    category: 'AI Search',
    tldr: 'SEO earns rankings in search results; AEO earns direct answers and featured snippets; GEO, AIO and LLMO earn mentions and citations inside AI-generated answers. All of them reward the same foundation: clear entity information, genuinely helpful content, structured data and trustworthy proof.',
    body: [
      { type: 'p', text: 'People now discover businesses through Google results, voice assistants, Google AI Overviews and chat assistants like ChatGPT, Gemini, Perplexity and Copilot. Each channel has spawned its own acronym. Here is what they mean and what to actually do.' },
      { type: 'h2', text: 'What do SEO, AEO, GEO, AIO and LLMO mean?' },
      { type: 'table', head: ['Term', 'Stands for', 'Goal'], rows: [
        ['SEO', 'Search Engine Optimisation', 'Rank pages in traditional search results'],
        ['AEO', 'Answer Engine Optimisation', 'Be the direct answer in snippets, voice and “People also ask”'],
        ['GEO', 'Generative Engine Optimisation', 'Be cited or mentioned in AI-generated answers'],
        ['AIO', 'AI Optimisation', 'Umbrella term for optimising for AI-powered search'],
        ['LLMO', 'Large Language Model Optimisation', 'Help LLMs understand and accurately describe your brand'],
      ] },
      { type: 'h2', text: 'What do AI assistants look for?' },
      { type: 'ul', items: [
        'A clearly defined entity: who you are, what you do, where you operate and for whom.',
        'Consistent facts across your website, Google Business Profile, social profiles and directories.',
        'Concise, quotable answers near the top of pages, followed by depth.',
        'Original information — data, case studies, expert opinions — that is not available elsewhere.',
        'Structured data such as Organization, LocalBusiness, Service, FAQPage and Article schema.',
        'Crawlable HTML that does not hide content behind heavy JavaScript.',
        'Mentions and reviews on reputable third-party sites.',
      ] },
      { type: 'h2', text: 'How do you optimise for AI search in practice?' },
      { type: 'ol', items: [
        'Write a one-paragraph “about” statement and use it consistently everywhere.',
        'Start every service page with a two to three sentence direct answer.',
        'Add FAQ sections built from real customer questions.',
        'Implement accurate JSON-LD schema and validate it.',
        'Publish case studies with real numbers and named methodologies.',
        'Allow reputable AI crawlers in robots.txt if you want to be cited, and consider an llms.txt summary file.',
        'Earn mentions in Hyderabad and industry publications, lists and communities.',
      ] },
      { type: 'h2', text: 'Can anyone guarantee AI visibility?' },
      { type: 'p', text: 'No. AI systems are proprietary and change frequently, so no one can guarantee a citation or a “10/10 score”. What you can do is remove every obstacle to being understood and give these systems good reasons to trust and reference you.' },
      { type: 'h2', text: 'How do you measure AI search visibility?' },
      { type: 'p', text: 'Start simple. Each month, ask ChatGPT, Gemini, Perplexity and Google the ten questions your customers ask most, and record whether your brand is mentioned, whether the facts are right and which pages are cited. Combine that with referral traffic from AI assistants in your analytics. The trend over several months matters more than any single answer, because responses vary from one query to the next.' },
    ],
    faqs: [
      { q: 'Is SEO dead because of AI search?', a: 'No. AI answers rely heavily on content that is already discoverable and trusted in search. Strong SEO remains the foundation for GEO and LLM visibility.' },
      { q: 'What is llms.txt?', a: 'llms.txt is a proposed plain-text file at the root of a website that summarises the site and links to key pages for large language models. It is optional and not an official ranking factor, but it is low effort to provide.' },
      { q: 'How long does it take to appear in AI answers?', a: 'It depends on how often AI systems refresh their sources. Assistants that search the live web can pick up clear, well-structured pages within weeks; model knowledge built from training data can take many months to update.' },
    ],
    services: ['seo-services-hyderabad', 'content-marketing-hyderabad', 'website-design-development-hyderabad'],
  },
  {
    slug: 'local-seo-checklist-hyderabad',
    title: 'Local SEO Checklist: Rank Higher on Google Maps in Hyderabad',
    metaTitle: 'Local SEO Checklist: Rank on Google Maps in Hyderabad',
    description: 'A step-by-step local SEO checklist for Hyderabad businesses: Google Business Profile, reviews, citations, location pages and LocalBusiness schema.',
    published: '2026-10-05',
    updated: '2026-10-05',
    author: 'Bhupathi Reddy',
    readingMinutes: 6,
    category: 'Local SEO',
    tldr: 'To rank on Google Maps in Hyderabad, fully complete and verify your Google Business Profile, choose the most accurate primary category, keep your name, address and phone identical everywhere, earn genuine reviews steadily, and publish helpful location content on your website.',
    body: [
      { type: 'p', text: 'Google ranks local results using three broad factors: relevance, distance and prominence. You cannot change distance, but you can strongly influence relevance and prominence. This checklist is the same one we use when we take on a new local client in Hyderabad.' },
      { type: 'h2', text: 'Which local ranking factors can you control?' },
      { type: 'table', head: ['Factor', 'What Google looks at', 'What you can do'], rows: [
        ['Relevance', 'How well your profile and site match the search', 'Accurate categories, services and location pages'],
        ['Distance', 'How close you are to the searcher or the area named', 'Nothing directly; be honest about your address'],
        ['Prominence', 'How well known and trusted your business is', 'Reviews, citations, links and local press mentions'],
      ] },
      { type: 'h2', text: 'How do you optimise a Google Business Profile?' },
      { type: 'ul', items: [
        'Verify the profile and use your real business name — no keyword stuffing.',
        'Pick the most specific primary category and relevant secondary categories.',
        'Add services, products, hours, holiday hours, attributes and a service area if applicable.',
        'Upload real photos of your premises, team and work every month.',
        'Publish updates and offers regularly and answer questions in the Q&A section.',
      ] },
      { type: 'h2', text: 'How do you get more Google reviews?' },
      { type: 'ul', items: [
        'Ask every satisfied customer, using a short direct review link.',
        'Reply to every review, positive or negative, professionally and promptly.',
        'Never buy reviews or offer incentives — it violates Google’s policies.',
      ] },
      { type: 'h2', text: 'Where should a Hyderabad business be listed?' },
      { type: 'p', text: 'List your business on trusted directories such as Justdial, Sulekha, IndiaMART (for B2B), Bing Places and Apple Business Connect, plus industry-specific sites. Use exactly the same name, address and phone format everywhere.' },
      { type: 'h2', text: 'What does your website need for local SEO?' },
      { type: 'ul', items: [
        'Show your full address, phone and a Google Map on your contact page.',
        'Create genuinely useful pages for key areas you serve, with local detail.',
        'Add LocalBusiness schema with your address, geo-coordinates and opening hours.',
        'Make sure the site loads fast on mobile data.',
      ] },
      { type: 'h2', text: 'How long does local SEO take to work?' },
      { type: 'p', text: 'Fixing a neglected Google Business Profile can lift calls and direction requests within a few weeks. Climbing into the top three map results in a competitive category, such as dentists in Kukatpally or real estate in Gachibowli, usually takes three to six months of steady reviews, citations and content. Track calls, direction requests and website taps from your profile every month so you can see progress before the rankings move.' },
      { type: 'h2', text: 'Which local SEO mistakes should you avoid?' },
      { type: 'ul', items: [
        'Adding keywords or area names to your business name on Google.',
        'Creating profiles at addresses where you do not actually operate.',
        'Using different phone numbers or name formats on different directories.',
        'Copy-pasting the same location page and only swapping the area name.',
      ] },
    ],
    faqs: [
      { q: 'Can I rank in an area of Hyderabad where I do not have an office?', a: 'Map pack rankings depend heavily on proximity to your verified address. You can still rank organically with helpful service-area pages, but creating fake addresses risks suspension.' },
      { q: 'How many reviews do I need?', a: 'There is no magic number. Aim to match or exceed the review count and rating of the top three competitors in your category and area, and keep reviews coming in steadily.' },
      { q: 'Is local SEO worth it for a service-area business?', a: 'Yes. Plumbers, tutors and other businesses that visit customers can hide their address and set a service area on Google, then support it with helpful pages for the parts of Hyderabad they genuinely cover.' },
    ],
    services: ['local-seo-hyderabad', 'seo-services-hyderabad', 'website-design-development-hyderabad'],
  },
  {
    slug: 'google-ads-first-90-days-hyderabad',
    title: 'Google Ads in Hyderabad: What the First 90 Days Should Look Like',
    metaTitle: 'Google Ads in Hyderabad: First 90 Days',
    description: 'A practical 90-day Google Ads plan for Hyderabad businesses: tracking first, search before Performance Max, and how to judge cost per lead.',
    published: '2026-10-07',
    updated: '2026-10-07',
    author: 'Bhupathi Reddy',
    readingMinutes: 8,
    category: 'Paid Media',
    tldr: 'Do not start Hyderabad Google Ads by dumping budget into Performance Max. Fix conversion tracking, launch exact and phrase search on the terms that already describe your offer, and judge the first month on qualified leads — not on cheap clicks.',
    body: [
      { type: 'p', text: 'Most wasted Google Ads spend in Hyderabad has the same shape: the account was turned on before anyone could name a lead, the campaign type was chosen because it sounded modern, and the first report was a screenshot of impressions. After years of running paid search, this is the sequence we use instead.' },
      { type: 'h2', text: 'What should you set up before you spend a rupee?' },
      { type: 'ol', items: [
        'A conversion you can defend: a form, a call from a tracked number, or a WhatsApp click that a human then qualifies.',
        'Google Ads and Analytics talking to each other, with the same events named the same way.',
        'A landing page that matches the ad. Sending clinic ads to the homepage is how you pay for bounce.',
        'A negative-keyword list for jobs, tutorials, PDFs and other cities you do not serve.',
      ] },
      { type: 'h2', text: 'Which campaign type should a Hyderabad SME start with?' },
      { type: 'table', head: ['Campaign', 'Use it when', 'Skip it when'], rows: [
        ['Search (exact / phrase)', 'You know the words buyers type', 'You have no conversion tracking yet'],
        ['Performance Max', 'Search is already profitable and you want extra inventory', 'It is week one and you cannot see search terms'],
        ['Demand Gen / YouTube', 'You have a clear offer and creative to test', 'You only have a logo and a phone number'],
        ['Shopping', 'You sell products with a clean feed', 'Your catalogue titles are internal SKUs'],
      ] },
      { type: 'h2', text: 'How do you judge the first 30, 60 and 90 days?' },
      { type: 'ul', items: [
        'Days 1–30: tracking works, search terms are clean, and you have at least a handful of qualified leads you can point to in the CRM or WhatsApp.',
        'Days 31–60: cost per qualified lead is stable enough to raise or cut budget by channel, not by guesswork.',
        'Days 61–90: you keep the search terms that pay and pause the rest. Only then add Performance Max or a second network.',
      ] },
      { type: 'h2', text: 'What does “qualified” mean in Hyderabad?' },
      { type: 'p', text: 'A click from LB Nagar on a Gachibowli clinic ad is not a lead. A student looking for a job at your company is not a lead. Write the qualification rule down before the campaign starts — service, area, budget, and whether they can buy now — so the report is not an argument at the end of the month.' },
      { type: 'h2', text: 'When should you stop an ads test?' },
      { type: 'p', text: 'Stop a keyword or ad group when it has spent enough to have produced two or three leads at your target cost and has produced none that you would take. Do not stop a whole account because one week was slow. Hyderabad search volume moves with pay cycles, festivals and school calendars.' },
      { type: 'h2', text: 'What does a Hyderabad search account usually need in week one?' },
      { type: 'p', text: 'A single search campaign per service, split by intent — “near me” and area names in one ad group, brand terms in another, and competitor names only if you can afford to lose that auction. Write the ad like a person in Madhapur would read it on a phone: the service, the area, and what happens after they tap. Send each ad group to a page that repeats those three facts. If you only have a homepage, fix that before you raise budget.' },
      { type: 'p', text: 'Geo targeting should match where you can actually fulfil work. A Gachibowli clinic does not need clicks from Warangal. A D2C brand shipping pan-India can go broader, but still exclude job-seeker queries and other languages you cannot support. We keep a shared negative list for Hyderabad service businesses: “salary”, “job”, “course”, “PDF”, “meaning” and neighbouring cities you do not drive to.' },
      { type: 'h2', text: 'How should you talk about budget with a client — or with yourself?' },
      { type: 'p', text: 'Budget is not a personality trait. It is “enough trials to see a lead at a cost we could live with”. If a qualified enquiry is worth ₹4,000 to you, a ₹15,000 first month that produces three conversations is information. A ₹4,000 month that produces none is not a failed channel; it is an unfinished test. IdeaRevive will say that on the first call. We would rather turn work down than run an account that can only buy impressions.' },
      { type: 'p', text: 'Across the accounts we have run, the pattern is boring: the accounts that work have a named conversion, a human reading search terms every week, and a landing page that does not change the offer. The accounts that stall have a dashboard full of “optimisations” and no one who can point to a lead in WhatsApp.' },
    ],
    faqs: [
      { q: 'How much should a Hyderabad business spend on Google Ads to learn anything?', a: 'Enough to generate a few real enquiries in 30 days at a cost you could live with if it worked. A budget that only buys clicks and no conversations teaches you nothing.' },
      { q: 'Should I run ads and SEO together?', a: 'Yes. Ads tell you which phrases convert this month. SEO is how you stop renting those phrases forever. We use the search-term report to brief the next service pages.' },
      { q: 'Can you guarantee a cost per lead?', a: 'No one honest can, on day one, in a market they have not measured. We can promise tracking, a written target, and weekly cuts of what is not working.' },
    ],
    services: ['google-ads-ppc-hyderabad', 'performance-marketing-lead-generation-hyderabad', 'local-seo-hyderabad'],
  },
  {
    slug: 'website-that-gets-calls-hyderabad',
    title: 'Build a Hyderabad Website That Gets Calls, Not Just Traffic',
    metaTitle: 'Hyderabad Website That Gets Calls | IdeaRevive',
    description: 'What a Hyderabad service business website needs so visitors call or WhatsApp: one offer, one next step, proof, and a page that loads on a phone in traffic.',
    published: '2026-10-08',
    updated: '2026-10-08',
    author: 'Bhupathi Reddy',
    readingMinutes: 7,
    category: 'Websites',
    tldr: 'A useful Hyderabad website answers who you help, from where, and what to do next — on a phone. If the visitor has to hunt for the number, the page is not finished.',
    body: [
      { type: 'p', text: 'We still see new Hyderabad sites that look expensive and hide the phone number in a footer. The owner then asks why SEO “is not working”. Traffic without a next step is a brochure. This is the structure we use when the job is enquiries, not awards.' },
      { type: 'h2', text: 'What must sit above the fold on a phone?' },
      { type: 'ul', items: [
        'Who you are and the service, in one sentence.',
        'The area you actually serve — Kondapur, not “pan India” if you cannot get there today.',
        'A tap target for call or WhatsApp that does not move when the page loads.',
        'One proof point you can stand behind: years, clients, or a specific kind of work. Not a fake 4.9 from a widget.',
      ] },
      { type: 'h2', text: 'Which pages does a local business actually need?' },
      { type: 'table', head: ['Page', 'Job', 'Skip if'], rows: [
        ['Home', 'State the offer and the next step', 'You only sell one service and the service page is stronger'],
        ['One page per service', 'Match how people search', 'Nobody searches that service by name'],
        ['Contact', 'Same name, phone and address as Google', 'Never — even a service-area business needs a way to call'],
        ['About', 'Name the person responsible', 'You already say who runs the firm on the home page'],
      ] },
      { type: 'p', text: 'For IdeaRevive the about page names the director, Bhupathi Reddy. A Hyderabad clinic or interior studio should do the same with a real person, not a stock silhouette.' },
      { type: 'h2', text: 'What should you leave off the first version?' },
      { type: 'ul', items: [
        'A blog you will not update.',
        'A slider of stock photographs.',
        'Six equal buttons that all say “Learn more”.',
        'A chatbot that cannot book or quote.',
      ] },
      { type: 'h2', text: 'How fast is fast enough in Hyderabad?' },
      { type: 'p', text: 'If the first screen takes more than a couple of seconds on a mid-range Android on 4G, people leave. Compress images, skip unused fonts, and do not load a marketing pixel before the heading. We design mobile-first because that is how Kondapur, Dilsukhnagar and Kukatpally actually browse.' },
      { type: 'h2', text: 'How do you know the site is working?' },
      { type: 'p', text: 'Count calls, forms and WhatsApp messages that became a real conversation. Rankings without those numbers are vanity. Put the same phone number on the site, Google Business Profile and ads so you can see which surface started the call.' },
      { type: 'h2', text: 'What copy actually gets a Hyderabad visitor to act?' },
      { type: 'p', text: 'Write the first screen as an answer, not a mood. “Interior designers in Kokapet — site visits this week” beats “Crafting spaces that inspire”. Name the neighbourhoods you serve. Name the next step in the button: Call, WhatsApp, or Get a quote. If you have 10+ years or 50+ completed projects, say that once, in a sentence a stranger can check. Do not invent a 4.9 rating or a client logo wall you cannot stand behind.' },
      { type: 'p', text: 'Below the fold, answer the questions people already type: price range or starting fee, areas covered, how long the first visit takes, and what you need from them. A FAQ built from real WhatsApp chats outperforms a “Our process” graphic that could sit on any site in India. IdeaRevive writes those questions from the search-term report and from the calls the owner already answers.' },
      { type: 'h2', text: 'How should tracking sit on a lead-gen site?' },
      { type: 'p', text: 'Give every form, tap-to-call and WhatsApp link a named event. If Ads, Analytics and the CRM disagree, believe the inbox. We do not launch SEO or ads on a new Hyderabad site until that loop exists — even if it is a shared sheet of yesterday’s enquiries. A pretty site with no event is how teams argue about “brand awareness” at the end of the quarter.' },
      { type: 'p', text: 'If you already have a site, do not start with a redesign. Start with the first screen, the contact details, and the service pages that match how people search. Redesign after those pages get calls. That is slower to photograph and faster to pay for.' },
    ],
    faqs: [
      { q: 'Do I need a website if I rank on Google Maps?', a: 'Maps gets the call. The website closes people who want prices, hours, or to check you are real. They work together.' },
      { q: 'Should every service get its own page?', a: 'Yes, if people search for that service by name. One “services” dump page is how five offers compete and none rank.' },
      { q: 'Can IdeaRevive design and build the site as well as market it?', a: 'Yes. We design and develop the pages, then run the SEO and ads against the same conversion events, so build and growth are not two vendors arguing over tracking.' },
    ],
    services: ['website-design-development-hyderabad', 'local-seo-hyderabad', 'branding-creative-design-hyderabad'],
  },
  {
    slug: 'ecommerce-tracking-india-brands',
    title: 'eCommerce Tracking for India Brands: Know Which Orders Paid for the Ads',
    metaTitle: 'eCommerce Tracking for India Brands | IdeaRevive',
    description: 'How Indian eCommerce and D2C brands should track Google and Meta so ROAS is based on orders, not on thank-you page hits and duplicated pixels.',
    published: '2026-10-09',
    updated: '2026-10-09',
    author: 'Bhupathi Reddy',
    readingMinutes: 8,
    category: 'eCommerce',
    tldr: 'If your ROAS is calculated on page views, you do not have ROAS. Indian D2C brands need one purchase event, server-side or enhanced conversions where possible, and a weekly check that Ads, Analytics and the shop agree on order count.',
    body: [
      { type: 'p', text: 'IdeaRevive has worked with eCommerce brands in India and abroad. The accounts that scale have boring tracking. The accounts that stall have three pixels firing on the same thank-you page and a dashboard nobody trusts. This is the minimum we put in before we scale Shopping or Meta catalogue ads.' },
      { type: 'h2', text: 'Which events actually matter?' },
      { type: 'table', head: ['Event', 'Why it exists', 'Common failure'], rows: [
        ['View item', 'Tells the catalogue which products are seen', 'Fires on the collection page for every card'],
        ['Add to cart', 'Shows intent', 'Fires twice because two apps inject it'],
        ['Begin checkout', 'Separates browsers from buyers', 'Missing on buy-now buttons'],
        ['Purchase', 'The only number ROAS should use', 'Fires on thank-you reloads or not at all'],
      ] },
      { type: 'h2', text: 'What should match every week?' },
      { type: 'ol', items: [
        'Orders in the shop admin.',
        'Purchase events in Analytics.',
        'Conversions in Google Ads and Meta, after you allow for attribution windows.',
      ] },
      { type: 'p', text: 'If those three disagree by a wide margin, do not scale. Fix the event, the domain, or the duplicate tag. We would rather pause a week than buy fake ROAS.' },
      { type: 'h2', text: 'What about iOS, WhatsApp and UPI checkouts?' },
      { type: 'p', text: 'A lot of Indian checkout journeys leave the site: WhatsApp, UPI apps, or a payment page on another domain. Browser pixels miss those. That is why we use enhanced conversions or a server-side event where the platform allows it, and why we still reconcile against the order list rather than trusting the ad manager alone.' },
      { type: 'h2', text: 'When is catalogue advertising worth turning on?' },
      { type: 'p', text: 'When titles, prices and availability in the feed match the site, and purchase tracking has been clean for at least a couple of weeks. A broken feed plus a broken pixel is how you pay to advertise products you cannot fulfil.' },
      { type: 'h2', text: 'What we will not do' },
      { type: 'ul', items: [
        'Report ROAS from view-through clicks alone as if they were sales.',
        'Leave two Meta pixels racing on the same shop.',
        'Promise a platform-average ROAS for a brand we have not measured.',
      ] },
      { type: 'h2', text: 'What does a clean purchase event look like?' },
      { type: 'p', text: 'One fire per paid order, with value in the same currency as the ads account, and an order ID you can look up in the shop. If the customer lands on thank-you twice, the event must not double. If they pay on a Razorpay or PayU page and come back, the event should still fire once when the shop marks the order paid — not when the browser happens to load a pixel. That is the difference between a number you can take to a founder and a number you can only screenshot.' },
      { type: 'p', text: 'For India brands selling abroad, keep currency and tax rules explicit. A dollar order reported as rupees inflates ROAS until the first payout. We write the rule down in the tracking brief: which value, which ID, which refund handling. Refunds should reduce the conversion or be reconciled weekly, not ignored because the ad manager looks healthier without them.' },
      { type: 'h2', text: 'How IdeaRevive starts an eCommerce account' },
      { type: 'ol', items: [
        'Export last month’s orders and last month’s reported purchases. If they do not roughly match, we fix tracking before we touch bids.',
        'Open the live thank-you page and the tag inspector. One purchase event, or we stop.',
        'Check the product feed titles against the site. If they differ, Shopping waits.',
        'Only then write the first search and shopping plan, with a 90-day review against actual orders.',
      ] },
      { type: 'p', text: 'This is unglamorous work. It is also why we can say we have run eCommerce for brands in India and abroad without inventing a ROAS trophy. If your current agency cannot show the three-way match, start there — not with another creative sprint.' },
    ],
    faqs: [
      { q: 'Do you work with shops outside India?', a: 'Yes. We have run eCommerce marketing for brands selling in India and abroad. Tracking rules stay the same: one purchase event and a weekly reconciliation.' },
      { q: 'Shopify, WooCommerce or a custom stack?', a: 'All three, as long as we can fire a purchase event with order value and ID. Custom stacks take longer to instrument; they are not a reason to skip it.' },
      { q: 'Is this the same as “server-side tracking” sales pages talk about?', a: 'Server-side helps when browsers block tags. It is not magic. If the shop never sends the order, the server has nothing to forward.' },
    ],
    services: ['ecommerce-marketing-hyderabad', 'google-ads-ppc-hyderabad', 'performance-marketing-lead-generation-hyderabad'],
  },
];

const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' });

/** A post dated in the future stays off the site until the first build on or after that date. */
export const posts = allPosts.filter((p) => p.published <= today);

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
