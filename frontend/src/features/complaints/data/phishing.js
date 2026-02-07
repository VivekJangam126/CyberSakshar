/**
 * Phishing (SMS / Email) Guidance Data
 */

export const phishingData = {
  id: 'phishing',
  title: 'Phishing (SMS / Email)',
  
  questions: [
    {
      id: 'clicked-link',
      question: 'Did you click on any link?',
      type: 'radio',
      options: ['Yes', 'No', 'Not sure'],
      optional: true,
    },
    {
      id: 'entered-details',
      question: 'Did you enter any personal information?',
      type: 'radio',
      options: ['Yes', 'No', 'Not sure'],
      optional: true,
    },
    {
      id: 'source',
      question: 'Where did you receive this?',
      type: 'radio',
      options: ['SMS', 'Email', 'WhatsApp', 'Other app'],
      optional: true,
    },
  ],

  immediateActions: [
    {
      priority: 'critical',
      action: 'Change passwords immediately',
      detail: 'If you entered any password, change it now on official website.',
      icon: '🔑',
    },
    {
      priority: 'high',
      action: 'Take screenshot of message',
      detail: 'Capture the suspicious SMS/email with sender details.',
      icon: '📸',
    },
    {
      priority: 'high',
      action: 'Do NOT click any links',
      detail: 'If you haven\'t clicked yet, don\'t. If you did, don\'t enter any info.',
      icon: '⛔',
    },
    {
      priority: 'medium',
      action: 'Report to platform',
      detail: 'Mark as spam/phishing in your email or messaging app.',
      icon: '🚩',
    },
    {
      priority: 'medium',
      action: 'Scan your device',
      detail: 'Run antivirus scan if you clicked suspicious links.',
      icon: '🛡️',
    },
  ],

  doList: [
    'Save the phishing message as evidence',
    'Note sender email/number',
    'Check if any accounts were accessed',
    'Enable two-factor authentication',
    'Inform your contacts if your account was compromised',
  ],

  dontList: [
    'Do NOT click on suspicious links',
    'Do NOT download attachments from unknown senders',
    'Do NOT enter passwords on suspicious websites',
    'Do NOT trust urgent messages asking for action',
    'Do NOT forward phishing messages to others',
  ],

  safetyReminders: [
    'Banks and companies never ask for passwords via email/SMS',
    'Check sender email address carefully',
    'Hover over links to see actual URL before clicking',
    'When in doubt, visit official website directly',
  ],

  officialLinks: [
    {
      name: 'National Cyber Crime Portal',
      url: 'https://cybercrime.gov.in',
      description: 'Report phishing attempts',
    },
    {
      name: 'Cyber Helpline 1930',
      description: 'Call for guidance',
    },
  ],
};
