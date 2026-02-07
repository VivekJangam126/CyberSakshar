/**
 * UPI / Payment Fraud Guidance Data
 */

export const upiFraudData = {
  id: 'upi-fraud',
  title: 'UPI / Payment Fraud',
  
  questions: [
    {
      id: 'timing',
      question: 'When did the transaction happen?',
      type: 'select',
      options: [
        'Within last hour',
        'Today',
        'Yesterday',
        'Few days ago',
      ],
      optional: true,
    },
    {
      id: 'transaction-type',
      question: 'What happened?',
      type: 'radio',
      options: [
        'Wrong person received money',
        'Scanned fake QR code',
        'Received payment request scam',
        'Other',
      ],
      optional: true,
    },
    {
      id: 'amount',
      question: 'Transaction amount',
      type: 'text',
      placeholder: 'Optional',
      optional: true,
    },
  ],

  immediateActions: [
    {
      priority: 'critical',
      action: 'Contact your UPI app support',
      detail: 'Use in-app support or helpline. Report the transaction immediately.',
      icon: '📱',
    },
    {
      priority: 'critical',
      action: 'Call Cyber Helpline 1930',
      detail: 'Report UPI fraud for quick action.',
      icon: '🚨',
    },
    {
      priority: 'high',
      action: 'Take screenshot of transaction',
      detail: 'Capture UPI transaction ID, time, and recipient details.',
      icon: '📸',
    },
    {
      priority: 'high',
      action: 'Note transaction ID',
      detail: 'Write down or copy the UPI transaction reference number.',
      icon: '🔢',
    },
    {
      priority: 'medium',
      action: 'Check bank statement',
      detail: 'Verify if money was actually debited.',
      icon: '💰',
    },
  ],

  doList: [
    'Report within 24 hours for better recovery chances',
    'Keep UPI transaction ID ready',
    'Save screenshots of payment confirmation',
    'Note down recipient UPI ID or phone number',
    'Contact your bank if amount is large',
  ],

  dontList: [
    'Do NOT accept payment requests from unknown numbers',
    'Do NOT scan QR codes from suspicious sources',
    'Do NOT share UPI PIN with anyone',
    'Do NOT make another payment to "reverse" the transaction',
    'Do NOT trust calls claiming to be from UPI support',
  ],

  safetyReminders: [
    'Always verify recipient before sending money',
    'UPI transactions are instant and hard to reverse',
    'No one can take money without your UPI PIN',
    'Report suspicious transactions immediately',
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
      name: 'NPCI (UPI Authority)',
      url: 'https://www.npci.org.in',
      description: 'UPI guidelines and support',
    },
  ],
};
