/**
 * Fake App Scam Guidance Data
 */

export const fakeAppData = {
  id: 'fake-app',
  title: 'Fake App Scam',
  
  questions: [
    {
      id: 'app-name',
      question: 'What is the app name?',
      type: 'text',
      placeholder: 'Optional',
      optional: true,
    },
    {
      id: 'downloaded-from',
      question: 'Where did you download it from?',
      type: 'select',
      options: [
        'Google Play Store',
        'Apple App Store',
        'Link from SMS/WhatsApp',
        'Unknown website',
        'Other',
      ],
      optional: true,
    },
    {
      id: 'permissions-given',
      question: 'Did you give any permissions to the app?',
      type: 'radio',
      options: ['Yes', 'No', 'Not sure'],
      optional: true,
    },
  ],

  immediateActions: [
    {
      priority: 'critical',
      action: 'Uninstall the app immediately',
      detail: 'Remove the suspicious app from your device right away.',
      icon: '🗑️',
    },
    {
      priority: 'critical',
      action: 'Change all passwords',
      detail: 'Update passwords for banking, email, and social media accounts.',
      icon: '🔑',
    },
    {
      priority: 'high',
      action: 'Check bank accounts',
      detail: 'Review recent transactions for any unauthorized activity.',
      icon: '💰',
    },
    {
      priority: 'high',
      action: 'Run antivirus scan',
      detail: 'Scan your device with a trusted antivirus app.',
      icon: '🛡️',
    },
    {
      priority: 'medium',
      action: 'Take screenshots',
      detail: 'Capture app details, permissions requested, and any suspicious behavior.',
      icon: '📸',
    },
  ],

  doList: [
    'Uninstall the app immediately',
    'Download apps only from official stores',
    'Check app reviews and ratings before installing',
    'Review app permissions carefully',
    'Keep your device software updated',
  ],

  dontList: [
    'Do NOT keep the app installed',
    'Do NOT give unnecessary permissions to apps',
    'Do NOT download apps from unknown sources',
    'Do NOT click on app download links in messages',
    'Do NOT ignore security warnings',
  ],

  safetyReminders: [
    'Official apps are available on Play Store/App Store',
    'Check developer name and reviews before installing',
    'Be cautious of apps asking for too many permissions',
    'Banks never ask you to download apps via SMS/WhatsApp',
  ],

  officialLinks: [
    {
      name: 'National Cyber Crime Portal',
      url: 'https://cybercrime.gov.in',
      description: 'Report fake app scams',
    },
    {
      name: 'Cyber Helpline 1930',
      description: 'Call for guidance',
    },
  ],
};
