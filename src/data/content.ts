import type { CaseStudy, Industry, Testimonial, Stat, NavLink } from "../types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about-us" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Our Clients", href: "/our-clients" },
  { label: "Our Team", href: "/our-team" },
  { label: "FAQs", href: "/faqs" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact-us" },
];

export const featuredCaseStudies: CaseStudy[] = [
  {
    id: "ecommerce",
    category: "E-COMMERCE",
    title: "E-Commerce Growth with SystemMap.AI",
    description:
      "40+ projects delivered across retail, food & beverage, lifestyle, and electronics.",
    metrics: [
      { label: "Average conversion lift", value: "32% ↑" },
      { label: "Higher order value", value: "18% ↑" },
      { label: "Load times on headless builds", value: "Sub-2s" },
    ],
    href: "/case-studies/e-commerce-growth-with-systemmap-ai",
  },
  {
    id: "apps",
    category: "MOBILE & WEB APPS",
    title: "Scaling Apps That Scale Users",
    description:
      "50+ apps launched across fintech, healthtech, travel, beauty, and e-commerce.",
    metrics: [
      { label: "Average MVP launch", value: "12–16 Weeks" },
      { label: "User retention boost", value: "27% ↑" },
      { label: "Cost savings via cross-platform", value: "40% ↓" },
    ],
    href: "/case-studies/scaling-apps-that-scale-users",
  },
  {
    id: "crm",
    category: "CUSTOM SOFTWARE",
    title: "Smarter Business with Custom CRM Platforms",
    description:
      "50+ CRM & workflow automation builds across finance, healthcare, real estate, logistics, and SaaS.",
    metrics: [
      { label: "Efficiency gains", value: "65% ↑" },
      { label: "Manual work reduction", value: "40% ↓" },
      { label: "User adoption increase", value: "30% ↑" },
    ],
    href: "/case-studies/smarter-business-with-custom-crm-platforms",
  },
];

export const blockchainCaseStudies: CaseStudy[] = [
  {
    id: "layer1",
    category: "BLOCKCHAIN | GAMING | WEB3",
    title: "Layer 1 Blockchain for Gaming - Full Ecosystem Build",
    description:
      "Built an Ethereum-compatible Layer 1 blockchain with a full product ecosystem: NFT marketplace, DEX, cross-chain bridge, wallet, AI NFT studio, launchpad, and developer SDKs. Carbon-neutral by design.",
    metrics: [
      { label: "Users", value: "149,998" },
      { label: "Platform Volume", value: "$137.12M" },
      { label: "Commission Revenue", value: "$40.1M" },
      { label: "TPS", value: "2,500–3,000" },
    ],
    href: "/case-studies/layer-1-blockchain-for-gaming-full-ecosystem-build",
  },
  {
    id: "nft-marketplace",
    category: "BLOCKCHAIN | NFT | DEFI",
    title: "Cross-Chain EVM NFT Marketplace",
    description:
      "Multi-chain NFT marketplace on Ethereum, BSC, and Polygon with gasless minting, batch listings, audited smart contracts, and automated royalties.",
    metrics: [
      { label: "NFTs Listed", value: "11,444" },
      { label: "Token Volume", value: "65,156" },
      { label: "Offers", value: "3,791" },
      { label: "Status", value: "Gas-Optimised" },
    ],
    href: "/case-studies/cross-chain-evm-nft-marketplace",
  },
  {
    id: "wallet",
    category: "BLOCKCHAIN | FINTECH | MOBILE",
    title: "Non-Custodial Crypto Wallet",
    description:
      "Non-custodial multi-currency wallet: transact, store, swap, send, buy, and earn crypto. 2FA/biometric, dual merchant-consumer mode, QR payments, native stablecoin.",
    metrics: [
      { label: "Cryptos Integrated", value: "5" },
      { label: "Mode", value: "Dual Mode" },
      { label: "Swaps", value: "No KYC" },
      { label: "Transparency", value: "On-Chain" },
    ],
    href: "/case-studies/non-custodial-crypto-wallet",
  },
  {
    id: "ai-networking",
    category: "AI | SAAS | AGENTIC AI",
    title: "AI-Powered Networking Platform",
    description:
      "Designed and built an AI-powered networking platform where every user gets a personal AI agent that learns their goals, expertise, and preferences then autonomously matches them with high-relevance contacts through consent-based, reciprocal introductions.",
    metrics: [
      { label: "Feature", value: "AI Agent per User" },
      { label: "Tech", value: "NLU + Intent Scoring" },
      { label: "Privacy", value: "Privacy-First Sandbox" },
      { label: "Model", value: "Multi-Tier SaaS" },
    ],
    href: "/case-studies/ai-powered-networking-platform",
  },
  {
    id: "gold-rwa",
    category: "BLOCKCHAIN | RWA | DEFI | TOKENISATION",
    title: "Real-World Asset Gold Tokenisation Platform",
    description:
      "Engineered a blockchain platform that tokenises real-world gold mining capacity — linking each ERC-20 token to measurable extraction throughput at a licensed mining concession. Features DAO governance, PAXG staking rewards, deflationary burn mechanics, and full on-chain transparency.",
    metrics: [
      { label: "Recoverable Gold", value: "9+ Tonnes" },
      { label: "Extraction", value: "8,000g/day" },
      { label: "Fixed Supply", value: "806M" },
      { label: "Audits", value: "CertiK + PeckShield" },
    ],
    href: "/case-studies/real-world-asset-gold-tokenisation-platform",
  },
  {
    id: "fantasy-football",
    category: "BLOCKCHAIN | NFT | PLAY-TO-EARN",
    title: "Play-to-Earn Fantasy Football Game",
    description:
      "Next-gen fantasy football manager where players are NFTs. First comprehensive football metaverse with full team ownership, training, matches, and governance on blockchain.",
    metrics: [
      { label: "Players", value: "Blockchain-Verified" },
      { label: "Rewards", value: "Real Crypto" },
      { label: "Governance", value: "In-Game Tokens" },
      { label: "Marketplace", value: "NFT Integrated" },
    ],
    href: "/case-studies/play-to-earn-fantasy-football-game",
  },
];

export const industries: Industry[] = [
  {
    id: "1",
    name: "Media & Entertainment",
    description:
      "Built streaming platforms and content hubs serving global audiences.",
  },
  {
    id: "2",
    name: "Agriculture",
    description:
      "AI-powered precision farming and blockchain-enabled traceability tools helping farmers boost yield and prove provenance.",
  },
  {
    id: "3",
    name: "Automotive",
    description:
      "Custom dealer portals and IoT-enabled apps driving smarter vehicle management.",
  },
  {
    id: "4",
    name: "Logistics",
    description:
      "ERP and fleet management systems cutting delivery times by up to 30%.",
  },
  {
    id: "5",
    name: "Retail",
    description:
      "Omnichannel e-commerce platforms with seamless payment integration.",
  },
  {
    id: "6",
    name: "Hospitality & Travel",
    description:
      "Booking engines, hotel apps, and travel marketplaces built for scale.",
  },
  {
    id: "7",
    name: "Insurance",
    description:
      "AI-driven claims automation, risk modelling platforms, and policy administration systems built for compliance.",
  },
  {
    id: "8",
    name: "Energy & Utilities",
    description:
      "Smart monitoring dashboards and IoT integrations for energy management.",
  },
  {
    id: "9",
    name: "Healthcare",
    description:
      "HIPAA-compliant apps, telemedicine platforms, and patient portals.",
  },
  {
    id: "10",
    name: "Finance / FinTech",
    description:
      "Secure fintech apps, digital wallets, DeFi platforms, and AI-driven risk engines with compliance built in.",
  },
  {
    id: "11",
    name: "Food & Beverage",
    description:
      "Restaurant ordering apps, delivery platforms, and inventory management systems.",
  },
  {
    id: "12",
    name: "Telecom",
    description:
      "Custom communication platforms, billing systems, and support apps.",
  },
  {
    id: "13",
    name: "Sports & Fitness",
    description:
      "Workout tracking apps, fitness marketplaces, and fan engagement platforms.",
  },
  {
    id: "14",
    name: "Non-Profit & NGOs",
    description:
      "Donation platforms, volunteer portals, and impact tracking dashboards.",
  },
  {
    id: "15",
    name: "Real Estate",
    description:
      "Property portals, virtual tours, and CRM solutions for real estate firms.",
  },
  {
    id: "16",
    name: "Education (EdTech)",
    description:
      "E-learning platforms, LMS, and mobile apps for interactive learning.",
  },
];

export const stats: Stat[] = [
  { value: "16+", label: "Years of Experience" },
  { value: "200+", label: "Projects Completed" },
  { value: "30+", label: "Team of Experts" },
  { value: "20+", label: "Tech Stacks" },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Working with SystemMap.AI was wonderful—knowledgeable, professional & responsive with insights that added real value.",
    author: "Connie Woo",
  },
  {
    id: "2",
    quote:
      "Professional, efficient team! Our company website turned out beautifully and was a pleasure to build with SystemMapAi.",
    author: "Léna Derigent",
  },
  {
    id: "3",
    quote:
      "SystemMapAi understood our vision and turned ideas into actions. A professional, creative, and reliable development partner.",
    author: "Juliette Alemany",
  },
  {
    id: "4",
    quote:
      "Their SEO & marketing boosted traffic, engagement & conversions. Professional, creative & easy to work with.",
    author: "Teddy James",
  },
  {
    id: "5",
    quote:
      "Fast, reliable & amazing developers. Everything delivered on time and as expected—my go-to team for projects.",
    author: "X M",
  },
  {
    id: "6",
    quote:
      "Beyond skill, their communication stood out—friendly, honest & responsive from start to finish.",
    author: "Emma1111-6",
  },
  {
    id: "7",
    quote:
      "The estimate given was the price we paid—no hidden fees or upselling. Just solid, honest delivery.",
    author: "MikeM-3026",
  },
  {
    id: "8",
    quote:
      "SystemMapAi built our MVP in under 6 weeks on a tight budget. Startup-friendly, fast & on point without cutting corners.",
    author: "MichelleM-1264",
  },
];

export const techStack = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Python",
  "Solidity",
  "Flutter",
  "React Native",
  "AWS",
  "Azure",
  "GCP",
  "Kubernetes",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Kafka",
  "Docker",
  "GraphQL",
  "TensorFlow",
  "PyTorch",
  "OpenAI",
  "LangChain",
  "Ethereum",
  "Polygon",
];
