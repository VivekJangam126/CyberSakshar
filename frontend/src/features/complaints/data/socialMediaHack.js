/**
 * Social Media Account Hack Guidance Data
 */

export const socialMediaHackData = {
  id: 'social-media-hack',
  title: 'Social Media Account Hack',
  
  questions: [
    {
      id: 'platform',
      question: 'Which platform?',
      type: 'select',
      options: [
        'Facebook',
        'Instagram',
        'Twitter/X',
        'WhatsApp',
        'Other',
      ],
      optional: true,
    },
    {
      id: 'access',
      question: 'Can you still access your account?',
      type: 'radio',
      options: ['Yes', 'No', 'Partially'],
      optional: true,
    },
    {
      id: 'misuse',
      question: 'Is your account being misused?',
      type: 'radio',
      options: ['Yes', 'No', 'Not sure'],
      optional: true,
    },
  ],

  immediateActions: [
    {
      priority: 'critical',
      action: 'Try to recover account',
      detail: 'Use "Forgot Password" or account recovery options immediately.',
      icon: '🔐',
    },
    {
      priority: 'critical',
      action: 'Report to platform',
      detail: 'Use platform\'s "Report Hacked Account" feature.',
      icon: '🚨',
    },
    {
      priority: 'high',
      action: 'Change passwords',
      detail: 'Change password for email and other linked accounts.',
      icon: '🔑',
    },
    {
      priority: 'high',
      action: 'Alert your contacts',
      detail: 'Inform friends/family that your account is compromised.',
      icon: '📢',
    },
    {
      priority: 'medium',
      action: 'Take screenshots',
      detail: 'Capture evidence of unauthorized posts or messages.',
      icon: '📸',
    },
  ],

  doList: [
    'Use account recovery options immediately',
    'Enable two-factor authentication after recovery',
    'Check connected apps and remove suspicious ones',
    'Review recent login activity',
    'Warn your contacts about potential scam messages',
  ],

  dontList: [
    'Do NOT pay anyone claiming to recover your account',
    'Do NOT trust messages from "support" asking for passwords',
    'Do NOT click on recovery links sent via DM',
    'Do NOT share recovery codes with anyone',
    'Do NOT create new account without trying recovery first',
  ],

  safetyReminders: [
    'Use strong, unique passwords for each platform',
    'Enable two-factor authentication',
    'Don\'t use same password across multiple sites',
    'Be cautious of phishing messages',
  ],

  officialLinks: [
    {
      name: 'National Cyber Crime Portal',
      url: 'https://cybercrime.gov.in',
      description: 'Report account hacking',
    },
    {
      name: 'Cyber Helpline 1930',
      description: 'Call for guidance',
    },
  ],
};
