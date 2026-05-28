export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "contact-center-operations",
    "label": "Contact Center Operations",
    "description": "Open Contact Center Operations workflows inside this existing merged suite.",
    "href": "/conversation-console",
    "sourceProjects": [
      "AIChatbotBuilder",
      "AiCustomerSupportAgent",
      "AISMSchatbot",
      "AIConsumerComplaintResolutionAgent"
    ],
    "examples": [
      "Conversation Console",
      "Handoff Queue",
      "Knowledge Grounding",
      "QA Scoring",
      "Intent Analytics"
    ],
    "count": 5
  },
  {
    "id": "chatbots",
    "label": "Chatbots",
    "description": "Chatbots actions optimized from donor dashboards and exposed as one AI Chatbot Contact Center action group.",
    "href": "/chatbots",
    "sourceProjects": [
      "AIChatbotBuilder",
      "AiCustomerSupportAgent",
      "AISMSchatbot",
      "aIVoiceAgent",
      "AIEmailTriageResponseAgent"
    ],
    "examples": [
      "Open Chatbots",
      "Review Conversation AI",
      "Run Chatbots AI check"
    ],
    "count": 5
  },
  {
    "id": "knowledge-base",
    "label": "Knowledge Base",
    "description": "Knowledge Base actions optimized from donor dashboards and exposed as one AI Chatbot Contact Center action group.",
    "href": "/knowledge-base",
    "sourceProjects": [
      "AiCustomerSupportAgent",
      "AISMSchatbot",
      "aIVoiceAgent",
      "AIEmailTriageResponseAgent",
      "AIConsumerComplaintResolutionAgent"
    ],
    "examples": [
      "Open Knowledge Base",
      "Review Conversation AI",
      "Run Knowledge Base AI check"
    ],
    "count": 5
  },
  {
    "id": "conversations",
    "label": "Conversations",
    "description": "Conversations actions optimized from donor dashboards and exposed as one AI Chatbot Contact Center action group.",
    "href": "/conversations",
    "sourceProjects": [
      "AISMSchatbot",
      "aIVoiceAgent",
      "AIEmailTriageResponseAgent",
      "AIConsumerComplaintResolutionAgent",
      "AITelecomCustomerExperienceManager"
    ],
    "examples": [
      "Open Conversations",
      "Review Support Operations",
      "Run Conversations AI check"
    ],
    "count": 5
  },
  {
    "id": "live-handoff",
    "label": "Live Handoff",
    "description": "Live Handoff actions optimized from donor dashboards and exposed as one AI Chatbot Contact Center action group.",
    "href": "/live-handoff",
    "sourceProjects": [
      "aIVoiceAgent",
      "AIEmailTriageResponseAgent",
      "AIConsumerComplaintResolutionAgent",
      "AITelecomCustomerExperienceManager",
      "AICitizenchatbot"
    ],
    "examples": [
      "Open Live Handoff",
      "Review Support Operations",
      "Run Live Handoff AI check"
    ],
    "count": 5
  },
  {
    "id": "ticket-triage",
    "label": "Ticket Triage",
    "description": "Ticket Triage actions optimized from donor dashboards and exposed as one AI Chatbot Contact Center action group.",
    "href": "/ticket-triage",
    "sourceProjects": [
      "AIEmailTriageResponseAgent",
      "AIConsumerComplaintResolutionAgent",
      "AITelecomCustomerExperienceManager",
      "AICitizenchatbot",
      "AIChatbotBuilder"
    ],
    "examples": [
      "Open Ticket Triage",
      "Review Support Operations",
      "Run Ticket Triage AI check"
    ],
    "count": 5
  },
  {
    "id": "whatsapp-webchat",
    "label": "WhatsApp/Web Chat",
    "description": "WhatsApp/Web Chat actions optimized from donor dashboards and exposed as one AI Chatbot Contact Center action group.",
    "href": "/whatsapp-webchat",
    "sourceProjects": [
      "AIConsumerComplaintResolutionAgent",
      "AITelecomCustomerExperienceManager",
      "AICitizenchatbot",
      "AIChatbotBuilder",
      "AiCustomerSupportAgent"
    ],
    "examples": [
      "Open WhatsApp/Web Chat",
      "Review Conversation Channels",
      "Run WhatsApp/Web Chat AI check"
    ],
    "count": 5
  },
  {
    "id": "intents",
    "label": "Intents",
    "description": "Intents actions optimized from donor dashboards and exposed as one AI Chatbot Contact Center action group.",
    "href": "/intents",
    "sourceProjects": [
      "AITelecomCustomerExperienceManager",
      "AICitizenchatbot",
      "AIChatbotBuilder",
      "AiCustomerSupportAgent",
      "AISMSchatbot"
    ],
    "examples": [
      "Open Intents",
      "Review Conversation AI",
      "Run Intents AI check"
    ],
    "count": 5
  },
  {
    "id": "analytics",
    "label": "Analytics",
    "description": "Analytics actions optimized from donor dashboards and exposed as one AI Chatbot Contact Center action group.",
    "href": "/analytics",
    "sourceProjects": [
      "AICitizenchatbot",
      "AIChatbotBuilder",
      "AiCustomerSupportAgent",
      "AISMSchatbot",
      "aIVoiceAgent"
    ],
    "examples": [
      "Open Analytics",
      "Review Governance",
      "Run Analytics AI check"
    ],
    "count": 5
  },
  {
    "id": "qa-review",
    "label": "QA Review",
    "description": "QA Review actions optimized from donor dashboards and exposed as one AI Chatbot Contact Center action group.",
    "href": "/qa-review",
    "sourceProjects": [
      "AIChatbotBuilder",
      "AiCustomerSupportAgent",
      "AISMSchatbot",
      "aIVoiceAgent",
      "AIEmailTriageResponseAgent"
    ],
    "examples": [
      "Open QA Review",
      "Review Governance",
      "Run QA Review AI check"
    ],
    "count": 5
  }
];
