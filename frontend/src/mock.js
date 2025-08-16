/* All mocked content for the AI Amplify site (clone of inflate.agency, rebranded) */

export const BRAND = {
  name: "AI Amplify",
  tagline: "Handle real calls with AI Voice Agents",
  subTagline:
    "We build advanced AI Voice Agents to automate inbound & outbound phone calls.",
  primary: "#8B5CF6", // violet-500
  accent: "#A78BFA", // violet-400
  email: "hello@aiamplify.co",
  addressLines: [
    "Office 2666, Ground floor",
    "470 St Kilda Road",
    "Melbourne VIC 3004",
  ],
  abn: "ABN: 12386387099",
};

export const NAV_LINKS = [
  { label: "Solutions", href: "#solutions" },
  { label: "Benefits", href: "#benefits" },
  { label: "How it works", href: "#process" },
  { label: "Case studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
];

export const LOGOS = [
  // Using a few neutral placeholder brand marks
  "https://framerusercontent.com/images/zvVp0t7zmvXFl7Z1QzjSItXDV6g.png",
  "https://framerusercontent.com/images/prY8vO6lY7L3AkJTRdSx7XyxHMU.png",
  "https://framerusercontent.com/images/Zy2G7OAbTjUMsyW1kHSju083mrQ.png",
  "https://framerusercontent.com/images/V43091o5CMncDSbveFe7gIDcU6g.png",
  "https://framerusercontent.com/images/ZCKwp1lTrcZvMmhv1MaPqVLudKw.png",
];

export const SERVICES = [
  {
    title: "Inbound Calls",
    desc: "Human-like virtual receptionist to handle your incoming calls.",
    icon: "PhoneIncoming",
  },
  {
    title: "Outbound Calls",
    desc: "Automate reminders, lead re-activation, follow-ups and more.",
    icon: "PhoneOutgoing",
  },
  {
    title: "Lead Qualification",
    desc: "Capture and qualify leads in real-time, route to the right team.",
    icon: "BadgeCheck",
  },
  {
    title: "Appointment Booking",
    desc: "Book meetings on your calendar instantly during calls.",
    icon: "Calendar",
  },
  {
    title: "Ticketing + CRM",
    desc: "Create tickets, update CRMs, and sync notes to your stack.",
    icon: "Cable",
  },
  {
    title: "Knowledge Q&amp;A",
    desc: "Answer FAQs with your policies, docs, and knowledge base.",
    icon: "BookOpen",
  },
];

export const BENEFITS = [
  {
    title: "Instant replies, 24/7",
    desc:
      "Pick up the phone instantly, even at night or on weekends – so you don’t lose leads or keep customers waiting.",
    icon: "Clock",
  },
  {
    title: "Save your team time",
    desc:
      "Handle repetitive calls so your team focuses on high-value work that needs a human.",
    icon: "Timer",
  },
  {
    title: "Own your agent",
    desc:
      "Full ownership. No hidden platform fees or subscriptions. You stay in control.",
    icon: "ShieldCheck",
  },
  {
    title: "Plugs into your stack",
    desc:
      "Connects to CRMs, schedulers, and calendars – fits right into existing workflows.",
    icon: "Plug",
  },
  {
    title: "Custom-built",
    desc:
      "We tailor prompts, flows, and automations to your business goals.",
    icon: "Wand2",
  },
  {
    title: "Rigorous testing",
    desc:
      "We validate edge cases and ensure agents behave reliably before launch.",
    icon: "CheckCircle2",
  },
];

export const CASE_STUDIES = [
  {
    id: "luxury-travel",
    company: "Luxury Travel",
    headline: "+$400K/month in new bookings",
    blurb:
      "We launched an AI Voice Agent that called every new lead within seconds.",
    industry: "Travel",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "jili-properties",
    company: "Jili Properties",
    headline: "3 hours saved daily &amp; faster lead handling",
    blurb:
      "200+ inbound calls/month were handled manually. Our agent now routes every call instantly.",
    industry: "Property Management",
    youtubeId: "ysz5S6PUM-U",
  },
  {
    id: "managed-it",
    company: "River Cities Systems",
    headline: "Handles 200 calls/mo",
    blurb:
      "Off-hours calls resolved automatically – even at 2am.",
    industry: "Managed IT",
    youtubeId: "kXYiU_JCYtU",
  },
];

export const PROCESS = [
  {
    step: 1,
    title: "Discovery Call",
    desc: "We learn about your business and figure out what kind of agent you need.",
    icon: "MessagesSquare",
  },
  {
    step: 2,
    title: "Scoping Call",
    desc: "We plan end-to-end and design a high-impact voice agent.",
    icon: "Pipeline",
  },
  {
    step: 3,
    title: "Development",
    desc: "Your agent and automations are built and connected to your systems.",
    icon: "Cog",
  },
  {
    step: 4,
    title: "Testing &amp; Launch",
    desc: "Final validation, then your agent goes live and starts taking calls.",
    icon: "Rocket",
  },
];

export const TESTIMONIALS = [
  {
    name: "Chad Castellanos",
    title: "Founder, River Cities Systems",
    quote:
      "AI Amplify quickly understood our needs and built an AI Receptionist that fit right into our workflow. It saves us hours each week and makes everything more efficient.",
  },
  {
    name: "Operations Lead",
    title: "Jili Properties",
    quote:
      "Our inbound volume is now handled instantly and routed properly. The impact was immediate.",
  },
];

export const LEGAL = {
  privacyUrl: "/privacy",
  termsUrl: "/terms",
};

export const BOOKING = {
  calendlyUrl: "https://calendly.com/d/cwy5-jwz-fmg/ai-voice-agent-discovery-call",
  fallbackText:
    "Can't see the booking form? Click the button to open Calendly in a new tab.",
};