import { LessonContent } from './types';

export const AVAILABLE_UNITS = [
  { id: 'unit-1', title: 'Unit 1: Introductions and Networking' },
  { id: 'unit-2', title: 'Unit 2: Scheduling and Time Management' },
  { id: 'unit-3', title: 'Unit 3: Office Communication' },
];

export const UNIT_1_CONTENT: LessonContent = {
  unitTitle: "Unit 1: Introductions and Networking",
  unitTopic: "Professional Introductions",
  presentation: [
    {
      title: "Welcome to Professional Introductions",
      bullets: [
        "Learn how to introduce yourself in business settings",
        "Master the art of small talk and networking",
        "Build confidence in professional environments",
        "Practice formal and informal introductions"
      ],
      speakerNotes: "Begin by asking students about their experiences with business introductions. Have they ever felt nervous meeting new colleagues?"
    },
    {
      title: "Key Elements of a Good Introduction",
      bullets: [
        "Your name and job title",
        "Your company and department",
        "A brief mention of your role or responsibilities",
        "A professional but friendly tone"
      ],
      speakerNotes: "Emphasize the importance of being concise yet memorable. A good introduction should be 20-30 seconds."
    },
    {
      title: "Networking Best Practices",
      bullets: [
        "Maintain eye contact and smile",
        "Offer a firm handshake",
        "Listen actively to the other person",
        "Exchange business cards appropriately"
      ],
      speakerNotes: "Role-play different networking scenarios. Discuss cultural differences in greetings."
    },
    {
      title: "Common Phrases for Introductions",
      bullets: [
        "\"Nice to meet you, I'm [name] from [company].\"",
        "\"I work in the [department] as a [job title].\"",
        "\"I've heard great things about your team.\"",
        "\"Let me give you my business card.\""
      ],
      speakerNotes: "Have students practice these phrases in pairs, then switch partners for more practice."
    }
  ],
  vocabulary: [
    {
      word: "Networking",
      translation: "Networking (criar rede de contatos)",
      example: "Networking events are great opportunities to meet potential clients.",
      imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop"
    },
    {
      word: "Colleague",
      translation: "Colega de trabalho",
      example: "My colleague Sarah will be joining us for the meeting.",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
    },
    {
      word: "Department",
      translation: "Departamento",
      example: "I work in the marketing department.",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
    },
    {
      word: "Business card",
      translation: "Cartão de visita",
      example: "Here's my business card with all my contact details.",
      imageUrl: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=300&fit=crop"
    }
  ],
  flashcards: [
    { front: "Networking", back: "The act of making professional contacts", example: "I met my current boss at a networking event." },
    { front: "Colleague", back: "A person you work with", example: "My colleagues are very supportive." },
    { front: "Department", back: "A division of a company", example: "Which department do you work in?" },
    { front: "Business card", back: "A small card with professional contact info", example: "May I have your business card?" },
    { front: "Introduction", back: "The act of presenting yourself", example: "Let me make the introductions." },
    { front: "Handshake", back: "A greeting by shaking hands", example: "A firm handshake shows confidence." }
  ],
  grammarContext: {
    description: "We use the Present Simple tense to talk about jobs, roles, and regular professional activities.",
    sentences: [
      "I work as a project manager at ABC Company.",
      "She handles client relationships in our team.",
      "We meet with clients every Monday morning.",
      "The marketing department launches new campaigns quarterly."
    ]
  },
  grammarStructure: {
    title: "Present Simple for Professional Contexts",
    explanation: "The Present Simple is used to describe current job positions, regular work activities, and general truths about your profession.",
    structure: [
      { form: "Affirmative", rule: "Subject + base verb (+ s/es for he/she/it)" },
      { form: "Negative", rule: "Subject + do/does + not + base verb" },
      { form: "Question", rule: "Do/Does + subject + base verb?" }
    ],
    examples: [
      "I manage a team of five developers.",
      "She doesn't work on weekends.",
      "Do you attend the weekly meetings?"
    ]
  },
  quiz: [
    {
      question: "Which phrase is appropriate for a formal introduction?",
      options: [
        "Hey, what's up? I'm John.",
        "Nice to meet you, I'm John Smith from the Marketing Department.",
        "Yo, I work here too!",
        "Whatever, I'm just an employee."
      ],
      correctAnswer: 1,
      explanation: "In professional settings, we use formal language and include our full name and department."
    },
    {
      question: "Complete the sentence: 'She _____ in the finance department.'",
      options: ["work", "works", "working", "worked"],
      correctAnswer: 1,
      explanation: "With third person singular (she), we add -s to the verb in Present Simple."
    }
  ],
  reading: {
    title: "A Day at the Tech Conference",
    body: "Sarah arrived at the annual tech conference feeling nervous but excited. She was representing her company for the first time. At the registration desk, she met Tom, a software developer from a partner company. 'Nice to meet you, I'm Sarah from CloudTech. I work in the sales department,' she said confidently. Tom smiled and handed her his business card. 'Great to meet you, Sarah. I've heard excellent things about CloudTech. Let's connect on LinkedIn.' By the end of the day, Sarah had made ten new professional contacts.",
    questions: [
      {
        question: "What department does Sarah work in?",
        options: ["Marketing", "Sales", "IT", "Finance"],
        correctAnswer: 1,
        explanation: "Sarah mentions she works in the sales department."
      },
      {
        question: "How did Tom and Sarah agree to stay connected?",
        options: ["Email", "Phone call", "LinkedIn", "WhatsApp"],
        correctAnswer: 2,
        explanation: "Tom suggested connecting on LinkedIn."
      }
    ]
  },
  gapFill: [
    {
      sentenceParts: ["I", "in the human resources department."],
      answer: "work",
      options: ["work", "works", "working"]
    },
    {
      sentenceParts: ["Nice to", "you. I'm the new project manager."],
      answer: "meet",
      options: ["see", "meet", "know"]
    },
    {
      sentenceParts: ["Let me give you my", "."],
      answer: "business card",
      options: ["phone", "email", "business card"]
    }
  ],
  listening: {
    title: "Meeting a New Client",
    transcript: "Client: Good morning! You must be from the design agency. Sales Rep: Yes, good morning! I'm Michael Thompson, the account manager. Nice to finally meet you in person. Client: Likewise, Michael. I'm Patricia Santos, the creative director here. Sales Rep: Thank you for having me. I've prepared some concepts based on our initial discussions. Client: Wonderful! Let's head to the conference room and take a look.",
    questions: [
      {
        question: "What is Michael's job title?",
        options: ["Creative Director", "Account Manager", "Sales Director", "Designer"],
        correctAnswer: 1,
        explanation: "Michael introduces himself as the account manager."
      },
      {
        question: "Where will they discuss the concepts?",
        options: ["In the office", "In the conference room", "At a café", "On the phone"],
        correctAnswer: 1,
        explanation: "Patricia suggests heading to the conference room."
      }
    ]
  },
  writing: {
    prompt: "Write a professional email introducing yourself to a new team. Include your name, job title, department, and a brief description of your role and responsibilities.",
    minWords: 80,
    rubric: [
      "Include a proper greeting and closing",
      "State your name and job title clearly",
      "Mention your department and main responsibilities",
      "Use professional but friendly language",
      "Express enthusiasm about joining the team"
    ]
  }
};

export const UNIT_2_CONTENT: LessonContent = {
  unitTitle: "Unit 2: Scheduling and Time Management",
  unitTopic: "Managing Your Professional Time",
  presentation: [
    {
      title: "Mastering Your Schedule",
      bullets: [
        "Learn vocabulary for scheduling meetings",
        "Practice making and confirming appointments",
        "Understand time zones and international scheduling",
        "Handle schedule conflicts professionally"
      ],
      speakerNotes: "Ask students how they currently manage their schedules. What tools do they use?"
    },
    {
      title: "Common Scheduling Vocabulary",
      bullets: [
        "Appointment, meeting, conference call",
        "Deadline, due date, timeline",
        "Reschedule, postpone, cancel",
        "Available, unavailable, tentative"
      ],
      speakerNotes: "Write these words on the board and have students use them in sentences."
    },
    {
      title: "Making Appointments",
      bullets: [
        "Check your calendar before suggesting times",
        "Offer multiple time options when possible",
        "Confirm the date, time, and location",
        "Send calendar invitations promptly"
      ],
      speakerNotes: "Practice role-playing scheduling scenarios between pairs."
    },
    {
      title: "Handling Schedule Changes",
      bullets: [
        "Notify all parties as soon as possible",
        "Apologize for any inconvenience",
        "Suggest alternative times immediately",
        "Update calendar invitations accordingly"
      ],
      speakerNotes: "Discuss how to professionally handle last-minute changes."
    }
  ],
  vocabulary: [
    {
      word: "Deadline",
      translation: "Prazo",
      example: "The deadline for the project is next Friday.",
      imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=300&fit=crop"
    },
    {
      word: "Appointment",
      translation: "Compromisso/Agendamento",
      example: "I have an appointment with the client at 2 PM.",
      imageUrl: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=400&h=300&fit=crop"
    },
    {
      word: "Reschedule",
      translation: "Reagendar",
      example: "We need to reschedule the meeting to Thursday.",
      imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop"
    },
    {
      word: "Availability",
      translation: "Disponibilidade",
      example: "What's your availability next week?",
      imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop"
    }
  ],
  flashcards: [
    { front: "Deadline", back: "The final time by which something must be completed", example: "We met all our deadlines this quarter." },
    { front: "Appointment", back: "A scheduled meeting", example: "I scheduled an appointment for 3 PM." },
    { front: "Reschedule", back: "To arrange a new time for an event", example: "Can we reschedule for next week?" },
    { front: "Availability", back: "Being free to do something", example: "Please check your availability." },
    { front: "Postpone", back: "To delay to a later time", example: "They had to postpone the launch." },
    { front: "Tentative", back: "Not certain or fixed", example: "This is just a tentative schedule." }
  ],
  grammarContext: {
    description: "We use future forms (will, going to, Present Continuous) to talk about scheduled events and plans.",
    sentences: [
      "I will send the report by Friday.",
      "We're going to have a team meeting tomorrow.",
      "The conference is starting at 9 AM next Monday.",
      "I'm meeting the client this afternoon."
    ]
  },
  grammarStructure: {
    title: "Future Forms for Scheduling",
    explanation: "Different future forms are used depending on how certain or planned the event is. Present Continuous is often used for fixed arrangements.",
    structure: [
      { form: "Will", rule: "Subject + will + base verb (decisions, promises)" },
      { form: "Going to", rule: "Subject + am/is/are + going to + base verb (plans)" },
      { form: "Present Continuous", rule: "Subject + am/is/are + verb-ing (fixed arrangements)" }
    ],
    examples: [
      "I'll confirm the meeting time later.",
      "We're going to launch the product in March.",
      "She's flying to London tomorrow."
    ]
  },
  quiz: [
    {
      question: "Which sentence correctly uses future scheduling language?",
      options: [
        "I meet the client yesterday.",
        "We're having a conference call at 3 PM tomorrow.",
        "She deadline next week.",
        "They rescheduled since Monday."
      ],
      correctAnswer: 1,
      explanation: "Present Continuous is correctly used for a fixed future arrangement."
    },
    {
      question: "What does 'postpone' mean?",
      options: ["To cancel permanently", "To delay to a later time", "To start early", "To finish quickly"],
      correctAnswer: 1,
      explanation: "To postpone means to delay or put off to a later time."
    }
  ],
  reading: {
    title: "Managing a Busy Week",
    body: "John looked at his calendar for the week ahead. Monday was packed with back-to-back meetings. On Tuesday, he had a deadline for the quarterly report. Wednesday seemed lighter, with only a client call at 11 AM. However, on Thursday, he received an email asking to reschedule his Friday presentation. 'I'll have to move some things around,' he thought. He opened his calendar app and started reorganizing his week to accommodate the change.",
    questions: [
      {
        question: "What did John have to do on Tuesday?",
        options: ["Client call", "Presentation", "Submit quarterly report", "Team meeting"],
        correctAnswer: 2,
        explanation: "John had a deadline for the quarterly report on Tuesday."
      },
      {
        question: "Why did John need to reorganize his schedule?",
        options: ["He wanted a day off", "His Friday presentation was rescheduled", "He had too many deadlines", "The client canceled"],
        correctAnswer: 1,
        explanation: "Someone asked to reschedule his Friday presentation."
      }
    ]
  },
  gapFill: [
    {
      sentenceParts: ["The project", "is next Monday."],
      answer: "deadline",
      options: ["meeting", "deadline", "appointment"]
    },
    {
      sentenceParts: ["Could we", "the meeting to Thursday?"],
      answer: "reschedule",
      options: ["cancel", "reschedule", "forget"]
    },
    {
      sentenceParts: ["What's your", "next week?"],
      answer: "availability",
      options: ["deadline", "meeting", "availability"]
    }
  ],
  listening: {
    title: "Rescheduling a Meeting",
    transcript: "Manager: Hi James, I'm afraid we need to reschedule tomorrow's presentation. Something urgent came up. Employee: No problem, when would work better for you? Manager: How about Friday at 2 PM? Employee: Let me check my calendar... Yes, Friday at 2 PM works for me. Manager: Perfect. I'll send an updated calendar invite. Sorry for the inconvenience. Employee: Not at all. See you Friday!",
    questions: [
      {
        question: "Why is the presentation being rescheduled?",
        options: ["The room is booked", "Something urgent came up", "The employee is sick", "The project isn't ready"],
        correctAnswer: 1,
        explanation: "The manager mentions that something urgent came up."
      },
      {
        question: "What day is the new presentation scheduled for?",
        options: ["Thursday", "Friday", "Saturday", "Next week"],
        correctAnswer: 1,
        explanation: "They agreed to reschedule to Friday at 2 PM."
      }
    ]
  },
  writing: {
    prompt: "Write an email to your team informing them that next week's team meeting needs to be rescheduled. Explain the reason briefly, suggest new times, and ask for their availability.",
    minWords: 70,
    rubric: [
      "Include a clear subject line reference",
      "Apologize for the schedule change",
      "Explain the reason briefly",
      "Suggest at least two alternative times",
      "Ask recipients to confirm their availability"
    ]
  }
};

export const UNIT_3_CONTENT: LessonContent = {
  unitTitle: "Unit 3: Office Communication",
  unitTopic: "Effective Workplace Communication",
  presentation: [
    {
      title: "Clear Office Communication",
      bullets: [
        "Master professional email etiquette",
        "Learn to communicate effectively in meetings",
        "Handle phone calls professionally",
        "Use appropriate tone in different situations"
      ],
      speakerNotes: "Discuss the importance of clear communication in avoiding workplace misunderstandings."
    },
    {
      title: "Email Best Practices",
      bullets: [
        "Use clear and specific subject lines",
        "Keep emails concise and focused",
        "Use appropriate greetings and sign-offs",
        "Proofread before sending"
      ],
      speakerNotes: "Show examples of good vs. poor email communication."
    },
    {
      title: "Effective Meeting Participation",
      bullets: [
        "Come prepared with relevant information",
        "Listen actively and take notes",
        "Contribute ideas constructively",
        "Follow up on action items"
      ],
      speakerNotes: "Practice meeting scenarios with different roles."
    },
    {
      title: "Phone and Video Call Etiquette",
      bullets: [
        "Identify yourself and your purpose clearly",
        "Speak clearly and at a moderate pace",
        "Mute when not speaking in group calls",
        "Maintain professional background for video"
      ],
      speakerNotes: "Have students practice phone introductions and common phrases."
    }
  ],
  vocabulary: [
    {
      word: "Feedback",
      translation: "Retorno/Feedback",
      example: "I would appreciate your feedback on this proposal.",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop"
    },
    {
      word: "Follow-up",
      translation: "Acompanhamento",
      example: "I'm sending this as a follow-up to our meeting yesterday.",
      imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop"
    },
    {
      word: "Update",
      translation: "Atualização",
      example: "Let me give you a quick update on the project status.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      word: "Minutes",
      translation: "Ata (de reunião)",
      example: "Could you send the meeting minutes to the team?",
      imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop"
    }
  ],
  flashcards: [
    { front: "Feedback", back: "Information about reactions to a product or performance", example: "The manager gave positive feedback." },
    { front: "Follow-up", back: "An action taken to continue or add to something", example: "Schedule a follow-up meeting." },
    { front: "Update", back: "New or current information about something", example: "Do you have an update on the project?" },
    { front: "Minutes", back: "The official record of a meeting", example: "The minutes were sent by email." },
    { front: "Agenda", back: "A list of items to be discussed at a meeting", example: "What's on today's agenda?" },
    { front: "Action items", back: "Tasks assigned during a meeting", example: "Let's review the action items." }
  ],
  grammarContext: {
    description: "We use modal verbs (could, would, should) to make polite requests and suggestions in professional communication.",
    sentences: [
      "Could you send me the report by end of day?",
      "Would you mind reviewing this document?",
      "We should schedule a follow-up meeting.",
      "It would be helpful if you could attend."
    ]
  },
  grammarStructure: {
    title: "Modal Verbs for Polite Requests",
    explanation: "Modal verbs like could, would, and should are used to make requests more polite and professional in workplace communication.",
    structure: [
      { form: "Could you...?", rule: "Used for polite requests" },
      { form: "Would you mind...?", rule: "Very polite way to ask someone to do something" },
      { form: "Should", rule: "Used for suggestions and recommendations" }
    ],
    examples: [
      "Could you please forward the email?",
      "Would you mind joining the call a bit earlier?",
      "We should discuss this before the deadline."
    ]
  },
  quiz: [
    {
      question: "Which is the most polite way to request a document?",
      options: [
        "Send me the document now.",
        "Could you please send me the document?",
        "I need that document.",
        "Where's the document?"
      ],
      correctAnswer: 1,
      explanation: "'Could you please...' is the most polite and professional way to make a request."
    },
    {
      question: "What are 'meeting minutes'?",
      options: ["The duration of a meeting", "The official record of what was discussed", "The agenda for the meeting", "The start time of the meeting"],
      correctAnswer: 1,
      explanation: "Meeting minutes are the official written record of what was discussed and decided."
    }
  ],
  reading: {
    title: "The Importance of Clear Communication",
    body: "Effective communication is the backbone of successful teams. When messages are clear and concise, projects run smoothly and misunderstandings are minimized. Maria, a project manager, always ensures her team receives regular updates. She sends weekly summaries and schedules short check-in meetings. 'I believe that over-communication is better than under-communication,' she says. Her team appreciates the transparency and feels more connected to the project goals.",
    questions: [
      {
        question: "How often does Maria send summaries to her team?",
        options: ["Daily", "Weekly", "Monthly", "Quarterly"],
        correctAnswer: 1,
        explanation: "The text mentions she sends weekly summaries."
      },
      {
        question: "What does Maria believe about communication?",
        options: ["Less is more", "Over-communication is better than under-communication", "Only email when necessary", "Meetings are unnecessary"],
        correctAnswer: 1,
        explanation: "Maria says she believes over-communication is better than under-communication."
      }
    ]
  },
  gapFill: [
    {
      sentenceParts: ["Could you please send me the meeting", "?"],
      answer: "minutes",
      options: ["feedback", "minutes", "schedule"]
    },
    {
      sentenceParts: ["I'm sending this as a", "to our conversation."],
      answer: "follow-up",
      options: ["follow-up", "deadline", "agenda"]
    },
    {
      sentenceParts: ["", "you mind reviewing this report?"],
      answer: "Would",
      options: ["Will", "Would", "Should"]
    }
  ],
  listening: {
    title: "Weekly Team Check-in",
    transcript: "Manager: Good morning everyone. Let's start with a quick update on our projects. Sarah, could you go first? Sarah: Sure. I finished the client proposal and sent it for review. I should have feedback by Wednesday. Manager: Great work, Sarah. Mike, how about you? Mike: I'm still working on the data analysis. I should be done by end of day tomorrow. Manager: Perfect. Let's schedule a follow-up meeting for Thursday to review everything.",
    questions: [
      {
        question: "When does Sarah expect to receive feedback?",
        options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        correctAnswer: 2,
        explanation: "Sarah mentions she should have feedback by Wednesday."
      },
      {
        question: "When is the follow-up meeting scheduled for?",
        options: ["Wednesday", "Thursday", "Friday", "Next week"],
        correctAnswer: 1,
        explanation: "The manager suggests scheduling a follow-up for Thursday."
      }
    ]
  },
  writing: {
    prompt: "Write a follow-up email after a meeting. Summarize the key points discussed, list the action items with responsible persons, and mention the date of the next meeting.",
    minWords: 90,
    rubric: [
      "Include a clear subject line",
      "Thank participants for attending",
      "Summarize 2-3 key discussion points",
      "List action items with assigned names",
      "Mention the next meeting date"
    ]
  }
};
