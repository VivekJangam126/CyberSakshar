// Mock quiz questions - real-life cyber scenarios in simple language
export const quizQuestions = [
  {
    id: 1,
    question: "You receive a message saying you've won a lottery you never entered. What do you do?",
    scenario: "A message claims you won ₹10 lakh in a lottery. They ask for your bank details to transfer the money.",
    options: [
      {
        id: 'a',
        text: "Share my bank details to claim the prize",
        riskLevel: 'high',
        feedback: "This is a common scam. Never share bank details with unknown sources."
      },
      {
        id: 'b',
        text: "Ignore and delete the message",
        riskLevel: 'low',
        feedback: "Excellent choice! This is the safest response to lottery scams."
      },
      {
        id: 'c',
        text: "Call the number to verify if it's real",
        riskLevel: 'medium',
        feedback: "Calling unknown numbers can expose you to more scams. Better to ignore completely."
      },
      {
        id: 'd',
        text: "Forward it to friends to check if they got it too",
        riskLevel: 'medium',
        feedback: "Forwarding scam messages can spread the threat. Better to delete and report."
      }
    ],
    category: 'phishing',
    difficulty: 'beginner'
  },
  {
    id: 2,
    question: "You're using public WiFi at a cafe. What's the safest way to browse?",
    scenario: "You need to check your email and social media while waiting at a coffee shop with free WiFi.",
    options: [
      {
        id: 'a',
        text: "Use it normally for everything including banking",
        riskLevel: 'high',
        feedback: "Public WiFi is not secure for sensitive activities like banking."
      },
      {
        id: 'b',
        text: "Only browse general websites, avoid banking",
        riskLevel: 'medium',
        feedback: "Good thinking, but even general browsing can be risky on public WiFi."
      },
      {
        id: 'c',
        text: "Use a VPN before connecting",
        riskLevel: 'low',
        feedback: "Perfect! A VPN encrypts your connection and protects your data."
      },
      {
        id: 'd',
        text: "Turn off WiFi and use mobile data instead",
        riskLevel: 'low',
        feedback: "Excellent choice! Mobile data is much safer than public WiFi."
      }
    ],
    category: 'network-security',
    difficulty: 'intermediate'
  },
  {
    id: 3,
    question: "Your friend sends you a link on WhatsApp saying 'Check this out!'. What do you do?",
    scenario: "The message seems normal but the link looks unusual with random letters and numbers.",
    options: [
      {
        id: 'a',
        text: "Click immediately since it's from a friend",
        riskLevel: 'high',
        feedback: "Friend's accounts can be hacked. Always verify suspicious links first."
      },
      {
        id: 'b',
        text: "Call my friend to confirm they sent it",
        riskLevel: 'low',
        feedback: "Smart move! Always verify suspicious links even from known contacts."
      },
      {
        id: 'c',
        text: "Click but don't enter any personal information",
        riskLevel: 'high',
        feedback: "Just clicking can install malware. Better to verify first."
      },
      {
        id: 'd',
        text: "Ignore it completely",
        riskLevel: 'medium',
        feedback: "Safe approach, but verifying with your friend would be even better."
      }
    ],
    category: 'phishing',
    difficulty: 'beginner'
  },
  {
    id: 4,
    question: "How often do you update your smartphone and apps?",
    scenario: "Your phone shows notifications about available updates for the system and apps.",
    options: [
      {
        id: 'a',
        text: "Never, they work fine as they are",
        riskLevel: 'high',
        feedback: "Updates fix security vulnerabilities. Skipping them leaves you exposed."
      },
      {
        id: 'b',
        text: "Only when I have time, maybe once a year",
        riskLevel: 'high',
        feedback: "Waiting too long leaves security gaps. Update at least monthly."
      },
      {
        id: 'c',
        text: "Whenever I see the notification",
        riskLevel: 'low',
        feedback: "Great habit! Regular updates keep your device secure."
      },
      {
        id: 'd',
        text: "I have automatic updates turned on",
        riskLevel: 'low',
        feedback: "Perfect! Automatic updates ensure you're always protected."
      }
    ],
    category: 'device-security',
    difficulty: 'beginner'
  },
  {
    id: 5,
    question: "You receive an email from 'your bank' asking you to verify your account urgently. What do you do?",
    scenario: "The email looks official with bank logos, but the sender address is slightly different from usual.",
    options: [
      {
        id: 'a',
        text: "Click the link and enter my details quickly",
        riskLevel: 'high',
        feedback: "Banks never ask for details via email. This is a phishing attempt."
      },
      {
        id: 'b',
        text: "Call my bank's official number to verify",
        riskLevel: 'low',
        feedback: "Excellent! Always verify through official channels, never through email links."
      },
      {
        id: 'c',
        text: "Reply to the email asking if it's real",
        riskLevel: 'high',
        feedback: "Replying confirms your email is active. Call the bank directly instead."
      },
      {
        id: 'd',
        text: "Check the sender's email address carefully",
        riskLevel: 'medium',
        feedback: "Good instinct! But even if it looks real, always verify with the bank directly."
      }
    ],
    category: 'phishing',
    difficulty: 'intermediate'
  },
  {
    id: 6,
    question: "What kind of password do you typically use for important accounts?",
    scenario: "You're creating a password for your email or banking app.",
    options: [
      {
        id: 'a',
        text: "My name or birthdate - easy to remember",
        riskLevel: 'high',
        feedback: "Personal information is easy to guess. Use complex, unique passwords."
      },
      {
        id: 'b',
        text: "Same password for all accounts",
        riskLevel: 'high',
        feedback: "If one account is hacked, all are at risk. Use different passwords."
      },
      {
        id: 'c',
        text: "Mix of letters, numbers, and symbols",
        riskLevel: 'medium',
        feedback: "Good! Even better if you use a password manager for unique passwords."
      },
      {
        id: 'd',
        text: "Unique complex passwords with a password manager",
        riskLevel: 'low',
        feedback: "Perfect! This is the most secure approach to password management."
      }
    ],
    category: 'password-security',
    difficulty: 'beginner'
  },
  {
    id: 7,
    question: "Someone calls claiming to be from tech support saying your computer has a virus. What do you do?",
    scenario: "The caller sounds professional and knows your name. They want remote access to fix the 'problem'.",
    options: [
      {
        id: 'a',
        text: "Give them remote access to fix it",
        riskLevel: 'high',
        feedback: "This is a scam. Real tech support never calls unsolicited."
      },
      {
        id: 'b',
        text: "Hang up immediately",
        riskLevel: 'low',
        feedback: "Perfect! Legitimate companies don't make unsolicited tech support calls."
      },
      {
        id: 'c',
        text: "Ask them to prove they're legitimate",
        riskLevel: 'medium',
        feedback: "Good instinct, but it's better to hang up and call the company directly if concerned."
      },
      {
        id: 'd',
        text: "Tell them you'll call back on the official number",
        riskLevel: 'low',
        feedback: "Smart approach! Always verify through official channels."
      }
    ],
    category: 'social-engineering',
    difficulty: 'intermediate'
  },
  {
    id: 8,
    question: "You're about to make an online payment. How do you ensure the website is safe?",
    scenario: "You found a great deal on a website you haven't used before.",
    options: [
      {
        id: 'a',
        text: "If it looks professional, it's probably safe",
        riskLevel: 'high',
        feedback: "Appearance can be deceiving. Always check for security indicators."
      },
      {
        id: 'b',
        text: "Check if the URL starts with 'https' and has a lock icon",
        riskLevel: 'low',
        feedback: "Excellent! HTTPS and the lock icon indicate a secure connection."
      },
      {
        id: 'c',
        text: "Use any payment method they accept",
        riskLevel: 'high',
        feedback: "Some payment methods offer better protection. Also verify the site's security first."
      },
      {
        id: 'd',
        text: "Read reviews and check for secure payment options",
        riskLevel: 'low',
        feedback: "Great approach! Multiple verification steps ensure maximum safety."
      }
    ],
    category: 'online-safety',
    difficulty: 'intermediate'
  }
];

// Function to get questions based on difficulty (for adaptive logic later)
export const getQuestionsByDifficulty = (difficulty) => {
  return quizQuestions.filter(q => q.difficulty === difficulty);
};

// Function to get questions by category
export const getQuestionsByCategory = (category) => {
  return quizQuestions.filter(q => q.category === category);
};
