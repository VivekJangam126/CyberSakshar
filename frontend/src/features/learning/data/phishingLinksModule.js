// Phishing Links Micro Learning Module
// 2-3 minute focused learning on identifying dangerous links

export const phishingLinksModule = {
  id: 'phishing-links',
  title: 'Spotting Dangerous Links',
  duration: '3 min',
  icon: '🎣',
  category: 'Online Safety',
  
  // Contextual entry
  context: {
    message: 'Clicking the wrong link can compromise your entire device. Let\'s learn how to spot dangerous links before it\'s too late.',
    tone: 'calm-reassuring',
  },

  // Content blocks (5-7 max, short and focused)
  content: [
    {
      id: 'block-1',
      type: 'concept',
      title: 'What is Phishing?',
      text: 'Phishing is when scammers send fake links that look real. These links steal your passwords, banking details, or install harmful software.',
      example: 'A message saying "Your package is waiting" with a link - but you didn\'t order anything.',
    },
    {
      id: 'block-2',
      type: 'real-world',
      title: 'How Fake Links Look Real',
      text: 'Scammers copy the design of real websites perfectly. The only difference is in the web address (URL).',
      example: 'Real: www.sbi.co.in | Fake: www.sbi-secure.com or www.sbionline.net',
    },
    {
      id: 'block-3',
      type: 'concept',
      title: 'Check Before You Click',
      text: 'Before clicking any link, hover over it (on computer) or long-press it (on phone) to see the actual web address.',
      example: 'A message says "Click here for SBI" but the link shows "www.random-site.com" - that\'s a scam.',
    },
    {
      id: 'block-4',
      type: 'real-world',
      title: 'Common Phishing Tricks',
      text: 'Scammers use urgency: "Account will be closed", "Prize waiting", "Verify now". They want you to click without thinking.',
      example: 'Messages with spelling errors, urgent deadlines, or too-good-to-be-true offers are red flags.',
    },
    {
      id: 'block-5',
      type: 'concept',
      title: 'Safe Link Practices',
      text: 'Never click links in unexpected messages. Instead, open your browser and type the official website address yourself.',
      example: 'Got a message about your bank account? Don\'t click the link. Open your banking app or type the bank website directly.',
    },
    {
      id: 'block-6',
      type: 'real-world',
      title: 'What If You Already Clicked?',
      text: 'If you clicked a suspicious link, don\'t enter any information. Close it immediately and change your passwords from a safe device.',
      example: 'Also inform your bank if it was related to banking, and run antivirus on your device.',
    },
  ],

  // Psychology insight
  psychology: {
    title: 'Why We Fall for Phishing',
    insight: 'Scammers exploit curiosity and fear. Messages about prizes make us curious. Messages about account problems make us afraid.',
    technique: 'They design messages to trigger emotional responses that bypass logical thinking. Curiosity and fear are powerful motivators.',
    awareness: 'When a message makes you feel excited or worried, pause. That emotional reaction is exactly what scammers want.',
  },

  // One safety rule
  safetyRule: {
    rule: 'Never click links in unexpected messages or emails.',
    explanation: 'When in doubt, type the website address yourself or use official apps.',
    action: 'Check the sender, check the URL, and think before you click.',
  },

  // Completion
  completion: {
    xpGained: 30,
    message: 'You can now identify suspicious links before clicking.',
    nextAction: 'Share this knowledge with family members who might be vulnerable.',
  },
};
