// OTP Call Fraud Scenario - Mock Data
// This scenario teaches users how to handle fake bank OTP calls

export const otpCallScenario = {
  id: 'otp-call-fraud',
  title: 'Fake Bank OTP Call',
  description: 'Practice handling a suspicious call claiming to be from your bank',
  difficulty: 'Common',
  estimatedTime: '3-4 minutes',
  category: 'Phone Fraud',
  xpReward: 50,
  
  // Introduction
  intro: {
    title: 'A Call From Your Bank?',
    message: 'You are about to experience a real-life cyber fraud situation. This is a safe practice environment.',
    instruction: 'Choose what you would do in each situation. There are no penalties - only learning.',
    safetyNote: 'Remember: Real banks NEVER ask for OTP, PIN, or passwords over phone calls.',
  },

  // Scenario Steps
  steps: [
    {
      id: 'step-1',
      type: 'scenario',
      title: 'The Phone Rings',
      situation: `Your phone rings. The caller ID shows a number that looks official.

The caller says: "Hello, I am calling from State Bank of India. We have detected suspicious activity on your account. For your security, we need to verify your identity."

The voice sounds professional and urgent.`,
      context: 'It\'s 2 PM on a weekday. You are at home.',
      decisions: [
        {
          id: 'decision-1-a',
          text: 'Share my account number to verify',
          isSafe: false,
          riskLevel: 'high',
          nextStep: 'feedback-1-a',
        },
        {
          id: 'decision-1-b',
          text: 'Ask them to verify who they are first',
          isSafe: true,
          riskLevel: 'low',
          nextStep: 'feedback-1-b',
        },
        {
          id: 'decision-1-c',
          text: 'Hang up and call the bank directly',
          isSafe: true,
          riskLevel: 'low',
          nextStep: 'feedback-1-c',
        },
        {
          id: 'decision-1-d',
          text: 'Listen to what they have to say',
          isSafe: false,
          riskLevel: 'medium',
          nextStep: 'feedback-1-d',
        },
      ],
    },
    {
      id: 'step-2',
      type: 'scenario',
      title: 'The OTP Request',
      situation: `The caller continues: "Sir/Madam, to stop the suspicious transaction, I need to send you an OTP. Please share that OTP with me immediately to block the fraudulent activity."

You receive an SMS: "Your OTP is 847392. Do not share this with anyone. Valid for 10 minutes."

The caller says: "Please tell me the OTP quickly, or your money will be transferred!"`,
      context: 'You feel pressured. The caller sounds urgent.',
      decisions: [
        {
          id: 'decision-2-a',
          text: 'Share the OTP to stop the fraud',
          isSafe: false,
          riskLevel: 'high',
          nextStep: 'feedback-2-a',
        },
        {
          id: 'decision-2-b',
          text: 'Refuse to share and hang up immediately',
          isSafe: true,
          riskLevel: 'low',
          nextStep: 'feedback-2-b',
        },
        {
          id: 'decision-2-c',
          text: 'Ask why they need the OTP',
          isSafe: false,
          riskLevel: 'medium',
          nextStep: 'feedback-2-c',
        },
        {
          id: 'decision-2-d',
          text: 'Tell them you will visit the bank branch',
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
      title: 'This Could Be Risky',
      explanation: 'Sharing your account number with an unknown caller is dangerous. Scammers use this information to gain your trust and ask for more sensitive details.',
      whatScammersDo: 'Fraudsters often start by asking for "harmless" information like account numbers to make you comfortable. Once you share one detail, they ask for more.',
      correctAction: 'Never share any banking details over unexpected calls. Always verify the caller by hanging up and calling your bank\'s official number.',
      safetyTip: 'Banks already have your account number. They will never call and ask for it.',
      nextStep: 'step-2',
    },
    'feedback-1-b': {
      isCorrect: true,
      title: 'Good Thinking!',
      explanation: 'Asking the caller to verify themselves first is a smart move. However, remember that scammers can fake details too.',
      whatScammersDo: 'Fraudsters may give fake employee IDs or reference numbers to sound legitimate.',
      correctAction: 'The safest approach is to hang up and call your bank directly using the number on their official website or your bank card.',
      safetyTip: 'Always verify unexpected calls by contacting the organization directly through official channels.',
      nextStep: 'step-2',
    },
    'feedback-1-c': {
      isCorrect: true,
      title: 'Excellent Decision!',
      explanation: 'This is the safest action. By hanging up and calling the bank directly, you ensure you\'re speaking to a real bank employee.',
      whatScammersDo: 'Scammers rely on you staying on the call. They create urgency to prevent you from thinking clearly or verifying their identity.',
      correctAction: 'Always end unexpected calls and contact your bank using the official number from their website, app, or your bank card.',
      safetyTip: 'Real banks will never mind if you hang up and call them back. Scammers will try to keep you on the line.',
      nextStep: 'step-2',
    },
    'feedback-1-d': {
      isCorrect: false,
      title: 'Be Careful',
      explanation: 'Listening to scammers gives them time to manipulate you with urgency and fear. They are trained to sound convincing.',
      whatScammersDo: 'Fraudsters use psychological tricks - urgency, fear, and authority - to make you act without thinking.',
      correctAction: 'Don\'t engage with suspicious callers. Hang up immediately and verify by calling your bank directly.',
      safetyTip: 'The longer you stay on a suspicious call, the more likely you are to be manipulated.',
      nextStep: 'step-2',
    },
    'feedback-2-a': {
      isCorrect: false,
      title: 'This Is Very Dangerous',
      explanation: 'Sharing an OTP is like handing over the keys to your bank account. The OTP is used to authorize transactions - by sharing it, you authorize the scammer to steal your money.',
      whatScammersDo: 'Scammers create panic and urgency to make you share OTPs. Once they have it, they can transfer money from your account within seconds.',
      correctAction: 'NEVER share OTP with anyone - not even someone claiming to be from your bank. Banks NEVER ask for OTP.',
      safetyTip: 'OTP = One Time Password. It\'s meant only for YOU to complete YOUR transactions. Sharing it means authorizing someone else to access your account.',
      nextStep: 'complete',
    },
    'feedback-2-b': {
      isCorrect: true,
      title: 'Perfect! You Stayed Safe',
      explanation: 'This is exactly the right action. By refusing to share the OTP and hanging up, you protected your money and personal information.',
      whatScammersDo: 'Scammers use pressure and urgency to make you act quickly without thinking. They know that if you pause and think, you\'ll realize it\'s a scam.',
      correctAction: 'Always refuse to share OTP, PIN, CVV, or passwords. Hang up immediately and report the number to your bank and cybercrime authorities.',
      safetyTip: 'Remember: OTP is YOUR password. Would you give your house keys to a stranger on the phone? Never!',
      nextStep: 'complete',
    },
    'feedback-2-c': {
      isCorrect: false,
      title: 'Still Engaging Is Risky',
      explanation: 'Asking questions keeps you on the call, giving scammers more time to manipulate you. They have convincing answers prepared for every question.',
      whatScammersDo: 'Fraudsters are trained to handle objections. They will give you fake technical reasons why they "need" your OTP.',
      correctAction: 'Don\'t waste time asking questions. Hang up immediately and call your bank directly to check if there\'s really any issue.',
      safetyTip: 'Scammers are professional manipulators. The best defense is to end the conversation immediately.',
      nextStep: 'complete',
    },
    'feedback-2-d': {
      isCorrect: true,
      title: 'Smart and Safe Choice!',
      explanation: 'Telling them you\'ll visit the branch shows you\'re not falling for the urgency trap. This is a safe response that protects you.',
      whatScammersDo: 'When you mention visiting the branch, scammers often become more aggressive or hang up themselves - because they know you\'re not falling for their trick.',
      correctAction: 'Always prefer in-person verification for important banking matters. Or call the bank directly using official numbers.',
      safetyTip: 'Real bank employees will support your decision to visit the branch. Scammers will try to stop you with more urgency.',
      nextStep: 'complete',
    },
  },

  // Completion summary
  completion: {
    title: 'Simulation Complete',
    message: 'You\'ve practiced handling a fake bank OTP call. These situations happen every day to real people.',
    keySafetyRules: [
      'Banks NEVER call and ask for OTP, PIN, CVV, or passwords',
      'Always hang up and call the bank directly using official numbers',
      'OTP is YOUR password - never share it with anyone',
      'Scammers create urgency and fear - take time to think',
      'When in doubt, visit your bank branch in person',
    ],
    realWorldImpact: 'In 2023, over ₹1,750 crores were lost to banking frauds in India. Most victims shared OTP over phone calls.',
    nextSteps: [
      'Share this knowledge with family and friends',
      'Save your bank\'s official customer care number',
      'Enable transaction alerts on your phone',
      'Report suspicious calls to 1930 (Cyber Crime Helpline)',
    ],
  },
};
