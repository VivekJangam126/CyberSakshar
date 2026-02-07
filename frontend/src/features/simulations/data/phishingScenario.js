// Phishing SMS/Email Scenario - Mock Data
// This scenario teaches users how to identify and handle phishing attempts

export const phishingScenario = {
  id: 'phishing-sms-email',
  title: 'Phishing SMS/Email',
  description: 'Learn to identify and handle suspicious messages claiming urgent action',
  difficulty: 'Common',
  estimatedTime: '3-4 minutes',
  category: 'Digital Fraud',
  xpReward: 50,
  
  // Introduction
  intro: {
    title: 'A Suspicious Message',
    message: 'You are about to experience a common phishing attempt. This is a safe practice environment.',
    instruction: 'Choose what you would do in each situation. There are no penalties - only learning.',
    safetyNote: 'Remember: Legitimate organizations never ask for sensitive information through SMS or email links.',
  },

  // Scenario Steps
  steps: [
    {
      id: 'step-1',
      type: 'scenario',
      title: 'The Urgent Message',
      situation: `You receive an SMS on your phone:

"URGENT: Your KYC details for your bank account will expire in 24 hours. Click here to update immediately: bit.ly/kyc-update-now

Failure to update will result in account suspension.

- State Bank of India"

The message looks somewhat official and creates a sense of urgency.`,
      context: 'You are checking your phone during lunch break.',
      decisions: [
        {
          id: 'decision-1-a',
          text: 'Click the link immediately to avoid account suspension',
          isSafe: false,
          riskLevel: 'high',
          nextStep: 'feedback-1-a',
        },
        {
          id: 'decision-1-b',
          text: 'Delete the message without clicking',
          isSafe: true,
          riskLevel: 'low',
          nextStep: 'feedback-1-b',
        },
        {
          id: 'decision-1-c',
          text: 'Check with the bank through official channels',
          isSafe: true,
          riskLevel: 'low',
          nextStep: 'feedback-1-c',
        },
        {
          id: 'decision-1-d',
          text: 'Forward the message to friends to warn them',
          isSafe: false,
          riskLevel: 'medium',
          nextStep: 'feedback-1-d',
        },
      ],
    },
    {
      id: 'step-2',
      type: 'scenario',
      title: 'The Fake Website',
      situation: `Out of curiosity, you want to see what the link leads to (in a safe way).

The website looks almost identical to your bank's website. It has:
- Similar logo and colors
- A form asking for: Account Number, Debit Card Number, CVV, ATM PIN, and Date of Birth
- A countdown timer showing "23:45:12" remaining
- Text saying "Secure SSL Connection" with a lock icon

The URL shows: "statebank-kyc-update.com" (not the official bank domain)`,
      context: 'The website looks convincing but something feels off.',
      decisions: [
        {
          id: 'decision-2-a',
          text: 'Fill in the details since it looks official',
          isSafe: false,
          riskLevel: 'high',
          nextStep: 'feedback-2-a',
        },
        {
          id: 'decision-2-b',
          text: 'Close the website immediately',
          isSafe: true,
          riskLevel: 'low',
          nextStep: 'feedback-2-b',
        },
        {
          id: 'decision-2-c',
          text: 'Check the website URL carefully',
          isSafe: true,
          riskLevel: 'low',
          nextStep: 'feedback-2-c',
        },
        {
          id: 'decision-2-d',
          text: 'Call the bank\'s customer care to verify',
          isSafe: true,
          riskLevel: 'low',
          nextStep: 'feedback-2-d',
        },
      ],
    },
  ],

  // Feedback for each decision
  feedback: {
    'feedback-1-a': {
      isCorrect: false,
      title: 'This Is Very Risky',
      explanation: 'Clicking unknown links is one of the most common ways people fall victim to phishing. These links can steal your information or install malware on your device.',
      whatScammersDo: 'Scammers create urgency ("24 hours", "account suspension") to make you act quickly without thinking. They use shortened URLs (bit.ly) to hide the real destination.',
      correctAction: 'Never click links in unexpected SMS or emails, especially those creating urgency. Always verify through official channels.',
      safetyTip: 'Banks never send KYC update requests through SMS links. They use official letters or ask you to visit the branch.',
      nextStep: 'step-2',
    },
    'feedback-1-b': {
      isCorrect: true,
      title: 'Good Decision!',
      explanation: 'Deleting suspicious messages without clicking is a safe approach. This prevents accidental clicks and removes the temptation.',
      whatScammersDo: 'Phishing messages are designed to look urgent and official. Scammers hope you\'ll click before thinking.',
      correctAction: 'Delete suspicious messages and report them. You can forward suspicious SMS to 1909 (TRAI) or report to your bank.',
      safetyTip: 'When in doubt, delete it out. Legitimate organizations will contact you through multiple official channels.',
      nextStep: 'step-2',
    },
    'feedback-1-c': {
      isCorrect: true,
      title: 'Excellent Approach!',
      explanation: 'Verifying through official channels is the safest way to handle suspicious messages. This ensures you get accurate information.',
      whatScammersDo: 'Scammers count on people not verifying. They create fake urgency to prevent you from checking with the real organization.',
      correctAction: 'Always contact organizations directly using official numbers from their website, app, or your documents - never use contact details from suspicious messages.',
      safetyTip: 'Real organizations will appreciate your caution. Scammers will try to discourage verification.',
      nextStep: 'step-2',
    },
    'feedback-1-d': {
      isCorrect: false,
      title: 'Good Intention, Wrong Method',
      explanation: 'While warning others is thoughtful, forwarding phishing messages can accidentally spread them. Someone might click the link thinking you verified it.',
      whatScammersDo: 'Scammers benefit when messages are forwarded - it gives them more potential victims and makes the scam look more legitimate.',
      correctAction: 'Instead of forwarding, tell people about the scam without including the link. Report it to authorities and your bank.',
      safetyTip: 'Warn others by describing the scam, not by sharing the actual phishing message.',
      nextStep: 'step-2',
    },
    'feedback-2-a': {
      isCorrect: false,
      title: 'This Would Lead to Fraud',
      explanation: 'This is a fake website designed to steal your information. By entering your details, you would be giving scammers everything they need to access your account and steal your money.',
      whatScammersDo: 'Scammers create fake websites that look identical to real ones. They use similar colors, logos, and layouts. The countdown timer is fake - designed to pressure you.',
      correctAction: 'Never enter sensitive information on websites you reached through SMS/email links. Always type the official URL directly in your browser.',
      safetyTip: 'No legitimate bank will ever ask for your ATM PIN, CVV, or password on any website. These are meant only for you.',
      nextStep: 'complete',
    },
    'feedback-2-b': {
      isCorrect: true,
      title: 'Smart Decision!',
      explanation: 'Closing the website immediately is the right action. You recognized something was wrong and didn\'t take any risks.',
      whatScammersDo: 'Phishing websites are designed to look real and create urgency. Scammers hope you\'ll be too rushed to notice the warning signs.',
      correctAction: 'Close suspicious websites immediately. Clear your browser history and run a security scan if you\'re concerned.',
      safetyTip: 'Trust your instincts. If something feels off, it probably is. Better safe than sorry.',
      nextStep: 'complete',
    },
    'feedback-2-c': {
      isCorrect: true,
      title: 'Excellent Observation!',
      explanation: 'Checking the URL is a critical skill. The fake URL "statebank-kyc-update.com" is not the official bank domain. Real bank websites have specific, verified URLs.',
      whatScammersDo: 'Scammers register domain names that look similar to real ones. They add words like "secure", "official", or "kyc" to seem legitimate.',
      correctAction: 'Always verify the exact URL. Official bank websites typically end with the bank\'s name followed by .com, .in, or .co.in (e.g., onlinesbi.sbi).',
      safetyTip: 'Look for the padlock icon AND verify the exact domain name. Scammers can fake the padlock, but they can\'t fake the official domain.',
      nextStep: 'complete',
    },
    'feedback-2-d': {
      isCorrect: true,
      title: 'Perfect Response!',
      explanation: 'Calling the bank\'s official customer care is the safest way to verify any suspicious communication. They can confirm whether the message is legitimate.',
      whatScammersDo: 'Scammers hope you won\'t take time to verify. They create fake urgency to prevent you from contacting the real organization.',
      correctAction: 'Always verify suspicious messages by calling official customer care numbers from the bank\'s website or your bank card - never use numbers from the suspicious message.',
      safetyTip: 'Real banks will never be upset if you call to verify. They appreciate cautious customers.',
      nextStep: 'complete',
    },
  },

  // Completion summary
  completion: {
    title: 'Simulation Complete',
    message: 'You\'ve practiced identifying and handling phishing attempts. These scams are extremely common and target millions of people daily.',
    keySafetyRules: [
      'Never click links in unexpected SMS or emails',
      'Always verify the exact website URL before entering information',
      'Banks never ask for PIN, CVV, or passwords online',
      'Urgency and threats are red flags - take time to verify',
      'When in doubt, contact the organization directly through official channels',
    ],
    realWorldImpact: 'Phishing is the most common cyber attack method. In 2023, over 60% of cyber fraud cases in India involved phishing.',
    nextSteps: [
      'Enable two-factor authentication on all accounts',
      'Bookmark official bank websites to avoid fake ones',
      'Report phishing attempts to 1930 (Cyber Crime Helpline)',
      'Educate family members, especially elderly relatives',
      'Regularly check your bank statements for unauthorized transactions',
    ],
  },
};
