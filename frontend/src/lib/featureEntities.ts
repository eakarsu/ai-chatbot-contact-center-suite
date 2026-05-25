export type EntityRecord = { id: string; name: string; status: string; owner: string; amount?: string; dueDate?: string; priority?: string };
export type FeatureEntitySet = { title: string; columns: string[]; rows: EntityRecord[] };

function buildSet(slug: string, title: string, firstName: string, firstStatus: string, secondName: string, owner: string, amount: string): FeatureEntitySet {
  return {
    title,
    columns: ['Name', 'Status', 'Owner', 'Amount', 'Due Date', 'Priority'],
    rows: [
      { id: slug + '-1', name: firstName, status: firstStatus, owner, amount, dueDate: '2026-06-03', priority: 'High' },
      { id: slug + '-2', name: secondName, status: 'In progress', owner: 'AI Operations', amount: '$980', dueDate: '2026-06-11', priority: 'Medium' },
      { id: slug + '-3', name: title + ' quality review', status: 'Queued', owner: 'Quality Review', amount: '$640', dueDate: '2026-06-18', priority: 'Normal' },
    ],
  };
}

const entitySeeds = [
  [
    "chatbots",
    "Chatbots Records",
    "Chatbots intake 1",
    "Open",
    "Chatbots follow-up 1",
    "Operations Lead",
    "$1,200"
  ],
  [
    "knowledge-base",
    "Knowledge Base Records",
    "Knowledge Base intake 2",
    "Review",
    "Knowledge Base follow-up 2",
    "AI Specialist",
    "$1,550"
  ],
  [
    "conversations",
    "Conversations Records",
    "Conversations intake 3",
    "Ready",
    "Conversations follow-up 3",
    "Client Success",
    "$1,900"
  ],
  [
    "live-handoff",
    "Live Handoff Records",
    "Live Handoff intake 4",
    "Needs attention",
    "Live Handoff follow-up 4",
    "Delivery Manager",
    "$2,250"
  ],
  [
    "ticket-triage",
    "Ticket Triage Records",
    "Ticket Triage intake 5",
    "Open",
    "Ticket Triage follow-up 5",
    "Operations Lead",
    "$2,600"
  ],
  [
    "whatsapp-webchat",
    "WhatsApp/Web Chat Records",
    "WhatsApp/Web Chat intake 6",
    "Review",
    "WhatsApp/Web Chat follow-up 6",
    "AI Specialist",
    "$2,950"
  ],
  [
    "intents",
    "Intents Records",
    "Intents intake 7",
    "Ready",
    "Intents follow-up 7",
    "Client Success",
    "$3,300"
  ],
  [
    "analytics",
    "Analytics Records",
    "Analytics intake 8",
    "Needs attention",
    "Analytics follow-up 8",
    "Delivery Manager",
    "$3,650"
  ],
  [
    "qa-review",
    "QA Review Records",
    "QA Review intake 9",
    "Open",
    "QA Review follow-up 9",
    "Operations Lead",
    "$4,000"
  ],
  [
    "broadcasts",
    "Broadcasts Records",
    "Broadcasts intake 10",
    "Review",
    "Broadcasts follow-up 10",
    "AI Specialist",
    "$4,350"
  ],
  [
    "documents",
    "Documents Records",
    "Documents intake 11",
    "Ready",
    "Documents follow-up 11",
    "Client Success",
    "$4,700"
  ],
  [
    "notifications",
    "Notifications Records",
    "Notifications intake 12",
    "Needs attention",
    "Notifications follow-up 12",
    "Delivery Manager",
    "$5,050"
  ],
  [
    "integrations",
    "Integrations Records",
    "Integrations intake 13",
    "Open",
    "Integrations follow-up 13",
    "Operations Lead",
    "$5,400"
  ],
  [
    "profiles",
    "Profiles Records",
    "Profiles intake 14",
    "Review",
    "Profiles follow-up 14",
    "AI Specialist",
    "$5,750"
  ]
];

export const featureEntitiesBySlug: Record<string, FeatureEntitySet> = Object.fromEntries(entitySeeds.map(([slug, title, firstName, firstStatus, secondName, owner, amount]) => [slug, buildSet(slug, title, firstName, firstStatus, secondName, owner, amount)]));
