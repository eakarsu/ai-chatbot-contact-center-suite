export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "contact-center-operations-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve the Contact Center Operations workflow and produce a decision-ready output.",
      "placeholder": "Describe the goal, customer, case, or decision needed",
      "options": [],
      "required": true,
      "source": "AIChatbotBuilder, AiCustomerSupportAgent, AISMSchatbot, AIConsumerComplaintResolutionAgent"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste records, documents, transcript text, metrics, case notes, or source details for Contact Center Operations.",
      "placeholder": "Paste the source context to analyze",
      "options": [],
      "required": true,
      "source": "AIChatbotBuilder, AiCustomerSupportAgent, AISMSchatbot, AIConsumerComplaintResolutionAgent"
    },
    {
      "name": "workflow_focus",
      "label": "Workflow Focus",
      "type": "select",
      "defaultValue": "Conversation Console",
      "placeholder": "Select the workflow",
      "options": [
        "Conversation Console",
        "Handoff Queue",
        "Knowledge Grounding",
        "QA Scoring",
        "Intent Analytics"
      ],
      "required": true,
      "source": "AIChatbotBuilder, AiCustomerSupportAgent, AISMSchatbot, AIConsumerComplaintResolutionAgent"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Professional action plan",
      "placeholder": "Select output format",
      "options": [
        "Professional action plan",
        "Evidence table",
        "Risk review",
        "Checklist",
        "Executive summary"
      ],
      "required": true,
      "source": "AIChatbotBuilder, AiCustomerSupportAgent, AISMSchatbot, AIConsumerComplaintResolutionAgent"
    }
  ],
  "chatbots-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Chatbots workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Chatbot Contact Center Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Chatbots request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Chatbot Contact Center Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Chatbot Contact Center Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Chatbot Contact Center Suite"
    }
  ],
  "knowledge-base-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Knowledge Base workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Chatbot Contact Center Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Knowledge Base request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Chatbot Contact Center Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Chatbot Contact Center Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Chatbot Contact Center Suite"
    }
  ],
  "conversations-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Conversations workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Chatbot Contact Center Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Conversations request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Chatbot Contact Center Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Chatbot Contact Center Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Chatbot Contact Center Suite"
    }
  ],
  "live-handoff-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Live Handoff workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Chatbot Contact Center Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Live Handoff request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Chatbot Contact Center Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Chatbot Contact Center Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Chatbot Contact Center Suite"
    }
  ],
  "ticket-triage-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Ticket Triage workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Chatbot Contact Center Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Ticket Triage request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Chatbot Contact Center Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Chatbot Contact Center Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Chatbot Contact Center Suite"
    }
  ],
  "whatsapp-webchat-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve WhatsApp/Web Chat workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Chatbot Contact Center Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample WhatsApp/Web Chat request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Chatbot Contact Center Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Chatbot Contact Center Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Chatbot Contact Center Suite"
    }
  ],
  "intents-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Intents workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Chatbot Contact Center Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Intents request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Chatbot Contact Center Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Chatbot Contact Center Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Chatbot Contact Center Suite"
    }
  ],
  "analytics-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Analytics workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Chatbot Contact Center Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Analytics request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Chatbot Contact Center Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Chatbot Contact Center Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Chatbot Contact Center Suite"
    }
  ],
  "qa-review-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve QA Review workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Chatbot Contact Center Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample QA Review request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Chatbot Contact Center Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Chatbot Contact Center Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Chatbot Contact Center Suite"
    }
  ],
  "broadcasts-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Broadcasts workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Chatbot Contact Center Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Broadcasts request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Chatbot Contact Center Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Chatbot Contact Center Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Chatbot Contact Center Suite"
    }
  ]
};
