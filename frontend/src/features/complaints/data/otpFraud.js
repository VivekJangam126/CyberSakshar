/**
 * OTP / Bank Fraud Guidance Data
 */

export const otpFraudData = {
  id: 'otp-fraud',
  title: 'OTP / Bank Fraud',
  
  questions: [
    {
      id: 'timing',
      question: 'When did this happen?',
      type: 'select',
      options: [
        'Within last hour',
        'Today',
        'Yesterday',
        'Few days ago',
        'More than a week ago',
      ],
      optional: true,
    },
    {
      id: 'money-lost',
      question: 'Was money deducted from your account?',
      type: 'radio',
      options: ['Yes', 'No', 'Not sure'],
      optional: true,
    },
    {
      id: 'otp-shared',
      question: 'Did you share OTP with anyone?',
      type: 'radio',
      options: ['Yes', 'No', 'Not sure'],
      optional: true,
    },
    {
      id: 'amount',
      question: 'Approximate amount (if any)',
      type: 'text',
      placeholder: 'Optional',
      optional: true,
    },
  ],

  immediateActions: [
    {
      priority: 'critical',
      action: 'Call your bank immediately',
      detail: 'Use the number on your card or bank website. Block your card/account.',
      icon: '📞',
    },
    {
      priority: 'critical',
      action: 'Call Cyber Helpline 1930',
      detail: 'Report the fraud to National Cyber Crime Helpline.',
      icon: '🚨',
    },
    {
      priority: 'high',
      action: 'Take screenshots',
      detail: 'Capture all messages, call logs, and transaction details.',
      icon: '📸',
    },
    {
      priority: 'high',
      action: 'Note down details',
      detail: 'Write down: time, caller number, what they said, transaction IDs.',
      icon: '📝',
    },
    {
      priority: 'medium',
      action: 'Change passwords',
      detail: 'Update passwords for banking apps and email.',
      icon: '🔑',
    },
  ],

  doList: [
    'Keep all evidence safe (messages, emails, screenshots)',
    'Note down exact time and date of incident',
    'Save caller ID or sender details',
    'Keep your bank statements ready',
    'Stay calm and follow official procedures',
  ],

  dontList: [
    'Do NOT share OTP with anyone calling you',
    'Do NOT trust "bank officials" calling you',
    'Do NOT delete any messages or call logs',
    'Do NOT make any payment to "reverse" the fraud',
    'Do NOT panic or make hasty decisions',
  ],

  safetyReminders: [
    'Banks never ask for OTP over phone',
    'No genuine official will ask you to install apps',
    'Report within 24 hours for better chances of recovery',
    'Keep your phone number updated with bank',
  ],

  officialLinks: [
    {
      name: 'National Cyber Crime Portal',
      url: 'https://cybercrime.gov.in',
      description: 'File official complaint',
    },
    {
      name: 'Cyber Helpline 1930',
      description: 'Call for immediate assistance',
    },
    {
      name: 'Reserve Bank of India',
      url: 'https://rbi.org.in',
      description: 'Banking fraud guidelines',
    },
  ],
};
