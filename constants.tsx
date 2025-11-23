import { PackageItem, FaqItem, TestimonialItem, BenefitItem, WorkflowStep } from './types';

export const PACKAGES: PackageItem[] = [
  {
    name: "The Starter",
    priceBuild: 299,
    priceMonthly: 99,
    features: [
      "Professional 5-Page Website",
      "Mobile & Tablet Responsive",
      "Contact Form & Click-to-Call",
      "Basic SEO Setup",
      "Hosting & Security Included",
      "Monthly Backups",
      "1hr Content Updates / Mo"
    ],
    cta: "Get Started"
  },
  {
    name: "The Growth",
    priceBuild: 599,
    priceMonthly: 149,
    popular: true,
    features: [
      "Everything in Starter",
      "Google Business Profile Setup",
      "Project Gallery / Portfolio",
      "Social Media Integration",
      "Speed Optimisation Pack",
      "Priority Email Support",
      "2hr Content Updates / Mo"
    ],
    cta: "Most Popular"
  },
  {
    name: "The Dominator",
    priceBuild: 1299,
    priceMonthly: 299,
    features: [
      "Everything in Growth",
      "Copywriting Included (5 Pages)",
      "Logo Design / Refresh",
      "Booking System Integration",
      "Monthly SEO Reporting",
      "Google Ads Setup (Ad spend extra)",
      "Dedicated Account Manager"
    ],
    cta: "Go Premium"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "I’m not tech savvy, can I still manage the site?",
    answer: "Absolutely. We build on user-friendly platforms. If you can use Facebook, you can update your site. Plus, with our monthly support, you can just text us photos or changes and we handle it for you."
  },
  {
    question: "How long will it take and what’s the cost?",
    answer: "Our streamlined builds launch in 4-6 weeks (or faster if you have your content ready). Pricing starts at $299 upfront for the build, with a simple monthly fee for hosting and support."
  },
  {
    question: "Will this get me more jobs or just look better?",
    answer: "Both. A professional look builds trust, but our layouts are designed for conversion. We place 'Call Now' buttons and quote forms where they matter most to turn visitors into paying jobs."
  },
  {
    question: "What happens after launch?",
    answer: "We don't just love you and leave you. We monitor your site's security, handle backups, and help you grow. As your business scales, we're here to add new features or pages."
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Dave M.",
    role: "Sparky in Brisbane",
    quote: "Verdant made it dead simple. I spent 20 mins on the phone, sent some photos, and the site was live. The best part is I don't have to worry about technical stuff.",
    rating: 5,
    result: "Leads up 45% in 90 days"
  },
  {
    name: "Sarah T.",
    role: "Landscaping Business Owner",
    quote: "I was quoted $5k by another agency. Verdant did it for a fraction of that. The new site actually brings in qualified leads, not just tyre kickers.",
    rating: 5,
    result: "20+ Enquiries per month"
  },
  {
    name: "Mikey R.",
    role: "Roofing Contractor",
    quote: "No fluff, no tech jargon. Just a solid site that works on mobile. The boys at Verdant know what they're doing.",
    rating: 5,
    result: "Ranked #1 in Local Search"
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    title: "Lead-Optimised Design",
    description: "Built for smartphone users and local search. We ensure your phone number is clickable and your quote form is never more than a scroll away.",
    iconName: "Smartphone"
  },
  {
    title: "Fast Turnaround",
    description: "We get you live quickly so you don't miss the next job. Our process is streamlined to get your business online in 4-6 weeks.",
    iconName: "Clock"
  },
  {
    title: "Trade-Friendly Backend",
    description: "You or your admin can easily update jobs and photos without a degree in computer science. It's drag-and-drop simple.",
    iconName: "Settings"
  },
  {
    title: "Ongoing Support & Growth",
    description: "We’re there as your business grows. Need a new page for a new service? Just let us know.",
    iconName: "TrendingUp"
  }
];

export const WORKFLOW: WorkflowStep[] = [
  {
    step: 1,
    title: "Quick Kickoff Chat",
    description: "A 15-minute call to get your details. We handle the writing, photos, and structure."
  },
  {
    step: 4,
    title: "Review Draft",
    description: "We send you a full link. You tell us what to tweak. We don't stop until you're happy."
  },
  {
    step: 7,
    title: "Launch",
    description: "We flip the switch. Your business is live, indexed by Google, and ready for quotes."
  }
];