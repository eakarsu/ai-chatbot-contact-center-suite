export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  {
    "name": "AIChatbotBuilder",
    "ownership": "AIChatbotBuilder contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Chatbot Contact Center.",
    "coverage": [
      "Chatbots",
      "Knowledge Base",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "AiCustomerSupportAgent",
    "ownership": "AiCustomerSupportAgent contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Chatbot Contact Center.",
    "coverage": [
      "Knowledge Base",
      "Conversations",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "AISMSchatbot",
    "ownership": "AISMSchatbot contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Chatbot Contact Center.",
    "coverage": [
      "Conversations",
      "Live Handoff",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "aIVoiceAgent",
    "ownership": "aIVoiceAgent contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Chatbot Contact Center.",
    "coverage": [
      "Live Handoff",
      "Ticket Triage",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "AIEmailTriageResponseAgent",
    "ownership": "AIEmailTriageResponseAgent contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Chatbot Contact Center.",
    "coverage": [
      "Ticket Triage",
      "WhatsApp/Web Chat",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "AIConsumerComplaintResolutionAgent",
    "ownership": "AIConsumerComplaintResolutionAgent contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Chatbot Contact Center.",
    "coverage": [
      "WhatsApp/Web Chat",
      "Intents",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "AITelecomCustomerExperienceManager",
    "ownership": "AITelecomCustomerExperienceManager contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Chatbot Contact Center.",
    "coverage": [
      "Intents",
      "Analytics",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "AICitizenchatbot",
    "ownership": "AICitizenchatbot contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Chatbot Contact Center.",
    "coverage": [
      "Analytics",
      "QA Review",
      "AI tools",
      "Source tables"
    ]
  }
];

export const dashboardMetrics: Metric[] = [
  { label: 'Source Projects', value: '8', note: 'Mapped donors' },
  { label: 'Feature Groups', value: '16', note: 'Unified navigation' },
  { label: 'AI Tools', value: '12', note: 'Suite copilots' },
  { label: 'Open Work', value: '50', note: 'Across workflows' },
];

export const healthMetrics: Metric[] = [
  { label: 'Connector Health', value: '96%', note: 'Pilot baseline' },
  { label: 'Audit Coverage', value: '100%', note: 'All workflows logged' },
  { label: 'Review Queue', value: '16', note: 'Needs owner action' },
  { label: 'Automation Runs', value: '376', note: 'Last 24 hours' },
];

export const dashboardModules = [
  "Chatbots operating view",
  "Knowledge Base operating view",
  "Conversations operating view",
  "Live Handoff operating view",
  "Ticket Triage operating view",
  "WhatsApp/Web Chat operating view",
  "Intents operating view",
  "Analytics operating view"
];
export const workflowHighlights = [
  "Chatbots workflow with records, AI assist, approvals, audit, and reporting",
  "Knowledge Base workflow with records, AI assist, approvals, audit, and reporting",
  "Conversations workflow with records, AI assist, approvals, audit, and reporting",
  "Live Handoff workflow with records, AI assist, approvals, audit, and reporting",
  "Ticket Triage workflow with records, AI assist, approvals, audit, and reporting",
  "WhatsApp/Web Chat workflow with records, AI assist, approvals, audit, and reporting"
];
