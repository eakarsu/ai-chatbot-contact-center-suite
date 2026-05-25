import {
  Activity,
  BarChart3,
  Bell,
  Blocks,
  Bot,
  BriefcaseBusiness,
  CalendarCheck,
  ClipboardList,
  Database,
  FileText,
  Files,
  LayoutDashboard,
  Mail,
  MessageSquareText,
  PackageCheck,
  Plug,
  ShieldCheck,
  UserRound,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

export type NavItem = { label: string; href: string; icon: LucideIcon };
export type FeatureDefinition = { title: string; href: string; category: string; summary: string; bullets: string[] };
export type PageDefinition = {
  title: string;
  eyebrow: string;
  subtitle: string;
  category: string;
  summary: string;
  bullets: string[];
  metrics: Array<{ label: string; value: string; note: string }>;
};
export type FeatureContext = {
  sourceOwners: string[];
  operatingQueues: string[];
  outputs: string[];
  relatedRoutes: Array<{ label: string; href: string }>;
};

const suiteSourceOwners = ["AIChatbotBuilder","AiCustomerSupportAgent","AISMSchatbot","aIVoiceAgent","AIEmailTriageResponseAgent","AIConsumerComplaintResolutionAgent","AITelecomCustomerExperienceManager","AICitizenchatbot"];

const features = [
  {
    slug: "chatbots",
    title: "Chatbots",
    href: "/chatbots",
    category: "Conversation AI",
    icon: Bot,
    summary: "Chatbots combines donor project behavior into the AI Chatbot Contact Center operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Chatbots queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Chatbots", value: "18", note: 'Active records' },
      { label: 'Exceptions', value: "2", note: 'Need review' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "knowledge-base",
    title: "Knowledge Base",
    href: "/knowledge-base",
    category: "Conversation AI",
    icon: Workflow,
    summary: "Knowledge Base combines donor project behavior into the AI Chatbot Contact Center operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Knowledge Base queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Knowledge Base", value: "27", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "conversations",
    title: "Conversations",
    href: "/conversations",
    category: "Support Operations",
    icon: Users,
    summary: "Conversations combines donor project behavior into the AI Chatbot Contact Center operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Conversations queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Conversations", value: "36", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "live-handoff",
    title: "Live Handoff",
    href: "/live-handoff",
    category: "Support Operations",
    icon: CalendarCheck,
    summary: "Live Handoff combines donor project behavior into the AI Chatbot Contact Center operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Live Handoff queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Live Handoff", value: "45", note: 'Active records' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "ticket-triage",
    title: "Ticket Triage",
    href: "/ticket-triage",
    category: "Support Operations",
    icon: Mail,
    summary: "Ticket Triage combines donor project behavior into the AI Chatbot Contact Center operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Ticket Triage queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Ticket Triage", value: "54", note: 'Active records' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "8", note: 'Next 14 days' },
    ],
  },
  {
    slug: "whatsapp-webchat",
    title: "WhatsApp/Web Chat",
    href: "/whatsapp-webchat",
    category: "Conversation Channels",
    icon: MessageSquareText,
    summary: "WhatsApp/Web Chat combines donor project behavior into the AI Chatbot Contact Center operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["WhatsApp/Web Chat queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "WhatsApp/Web Chat", value: "63", note: 'Active records' },
      { label: 'Exceptions', value: "2", note: 'Need review' },
      { label: 'Due Soon', value: "9", note: 'Next 14 days' },
    ],
  },
  {
    slug: "intents",
    title: "Intents",
    href: "/intents",
    category: "Conversation AI",
    icon: BarChart3,
    summary: "Intents combines donor project behavior into the AI Chatbot Contact Center operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Intents queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Intents", value: "72", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "analytics",
    title: "Analytics",
    href: "/analytics",
    category: "Governance",
    icon: ClipboardList,
    summary: "Analytics combines donor project behavior into the AI Chatbot Contact Center operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Analytics queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Analytics", value: "81", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "qa-review",
    title: "QA Review",
    href: "/qa-review",
    category: "Governance",
    icon: FileText,
    summary: "QA Review combines donor project behavior into the AI Chatbot Contact Center operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["QA Review queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "QA Review", value: "90", note: 'Active records' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "broadcasts",
    title: "Broadcasts",
    href: "/broadcasts",
    category: "Conversation Channels",
    icon: PackageCheck,
    summary: "Broadcasts combines donor project behavior into the AI Chatbot Contact Center operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Broadcasts queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Broadcasts", value: "99", note: 'Active records' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "documents",
    title: "Documents",
    href: "/documents",
    category: "Core Platform",
    icon: Files,
    summary: "AI Chatbot Contact Center documents, packets, evidence, uploads, and exports.",
    bullets: ["Documents","Uploads","Exports"],
    metrics: [
      { label: "Documents", value: "48", note: 'Tracked' },
      { label: 'Open', value: "7", note: 'Needs review' },
      { label: 'Updated', value: "21", note: 'This week' },
    ],
  },
  {
    slug: "notifications",
    title: "Notifications",
    href: "/notifications",
    category: "Core Platform",
    icon: Bell,
    summary: "AI Chatbot Contact Center alerts, reminders, exceptions, and approvals.",
    bullets: ["Alerts","Reminders","Exceptions"],
    metrics: [
      { label: "Notifications", value: "65", note: 'Tracked' },
      { label: 'Open', value: "10", note: 'Needs review' },
      { label: 'Updated', value: "29", note: 'This week' },
    ],
  },
  {
    slug: "integrations",
    title: "Integrations",
    href: "/integrations",
    category: "Core Platform",
    icon: Plug,
    summary: "AI Chatbot Contact Center source-system connector health and sync status.",
    bullets: ["Connectors","Sync","Warnings"],
    metrics: [
      { label: "Integrations", value: "82", note: 'Tracked' },
      { label: 'Open', value: "13", note: 'Needs review' },
      { label: 'Updated', value: "37", note: 'This week' },
    ],
  },
  {
    slug: "profiles",
    title: "Profiles",
    href: "/profiles",
    category: "Core Platform",
    icon: UserRound,
    summary: "AI Chatbot Contact Center users, roles, teams, permissions, and ownership settings.",
    bullets: ["Users","Roles","Teams"],
    metrics: [
      { label: "Profiles", value: "99", note: 'Tracked' },
      { label: 'Open', value: "16", note: 'Needs review' },
      { label: 'Updated', value: "45", note: 'This week' },
    ],
  },
] as const;

const aiFeatures = [
  {
    slug: 'ai-assistant',
    title: 'AI Assistant',
    href: '/features/ai-assistant',
    category: 'Intelligence Layer',
    icon: Bot,
    summary: "AI Chatbot Contact Center assistant for triage, drafting, analysis, recommendations, and operational review.",
    bullets: ['Triage support', 'Drafting', 'Review guidance'],
    metrics: [
      { label: 'Sessions', value: '128', note: 'Last 24 hours' },
      { label: 'Drafts', value: '204', note: 'Generated' },
      { label: 'Escalations', value: '14', note: 'Expert review' },
    ],
  },
  {
    slug: 'ai-tools',
    title: 'AI Tools',
    href: '/features/ai-tools',
    category: 'Intelligence Layer',
    icon: Activity,
    summary: "Targeted AI Chatbot Contact Center AI tools for scoring, generation, extraction, classification, exception review, and reporting.",
    bullets: ['Scoring', 'Classification', 'Exception review'],
    metrics: [
      { label: 'Runs', value: '318', note: 'Last 24 hours' },
      { label: 'Signals', value: '88', note: 'New alerts' },
      { label: 'Accepted', value: '117', note: 'Reviewer accepted' },
    ],
  },
] as const;

const allFeatures = [...features, ...aiFeatures];

export const primaryNav: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'All Features', href: '/features', icon: Blocks },
  { label: 'Documents', href: '/documents', icon: Files },
  { label: 'Source Tables', href: '/source-tables', icon: Database },
  { label: 'Profiles', href: '/profiles', icon: UserRound },
];

export const featureNav: NavItem[] = allFeatures.map((feature) => ({ label: feature.title, href: feature.href, icon: feature.icon }));
export const featureCatalog: FeatureDefinition[] = allFeatures.map((feature) => ({ title: feature.title, href: feature.href, category: feature.category, summary: feature.summary, bullets: [...feature.bullets] }));

export const featureFamilies = [
  {
    "name": "Conversation AI",
    "features": [
      "Chatbots",
      "Knowledge Base",
      "Intents"
    ]
  },
  {
    "name": "Support Operations",
    "features": [
      "Conversations",
      "Live Handoff",
      "Ticket Triage"
    ]
  },
  {
    "name": "Conversation Channels",
    "features": [
      "WhatsApp/Web Chat",
      "Broadcasts"
    ]
  },
  {
    "name": "Governance",
    "features": [
      "Analytics",
      "QA Review"
    ]
  },
  {
    "name": "Intelligence Layer",
    "features": [
      "AI Assistant",
      "AI Tools"
    ]
  },
  {
    "name": "Core Platform",
    "features": [
      "Documents",
      "Notifications",
      "Integrations",
      "Profiles"
    ]
  }
];

function toPage(feature: (typeof allFeatures)[number]): PageDefinition {
  return {
    title: feature.title,
    eyebrow: feature.category,
    subtitle: feature.summary,
    category: feature.category,
    summary: feature.title + ' is normalized from source applications into one merged suite workflow.',
    bullets: [...feature.bullets],
    metrics: [...feature.metrics],
  };
}

export const pageRegistry: Record<string, PageDefinition> = Object.fromEntries(features.map((feature) => [feature.slug, toPage(feature)]));
export const aiFeatureRegistry: Record<string, PageDefinition> = Object.fromEntries(aiFeatures.map((feature) => [feature.slug, toPage(feature)]));
export const featureContexts: Record<string, FeatureContext> = Object.fromEntries(
  allFeatures.map((feature) => [
    feature.title,
    {
      sourceOwners: suiteSourceOwners.length ? suiteSourceOwners : ["AI Chatbot Contact Center"],
      operatingQueues: [feature.title + ' records', feature.title + ' approvals', feature.title + ' exceptions'],
      outputs: [feature.title + ' dashboard', feature.title + ' export', feature.title + ' audit trail'],
      relatedRoutes: [{ label: 'Dashboard', href: '/dashboard' }, { label: 'All Features', href: '/features' }, { label: 'AI Tools', href: '/features/ai-tools' }],
    },
  ]),
);
