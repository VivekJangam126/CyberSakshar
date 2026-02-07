// OTP Safety Micro Learning Module
// 2-3 minute focused learning on OTP security

export const otpSafetyModule = {
  id: 'otp-safety',
  title: 'Why OTP Should Never Be Shared',
  duration: '2 min',
  icon: '🔐',
  category: 'Banking Safety',
  
  // Contextual entry
  context: {
    message: 'You recently practiced an OTP scam scenario. This short lesson explains why OTP sharing is dangerous.',
    tone: 'calm-reassuring',
  },

  // Content blocks (5-7 max, short and focused)
  content: [
    {
      id: 'block-1',
      type: 'concept',
      title: 'What is OTP?',
      text: 'OTP stands for One Time Password. It\'s a special code sent to YOUR phone to prove that YOU are making a transaction.',
      example: 'When you transfer money online, the bank sends OTP to confirm it\'s really you.',
    },
    {
      id: 'block-2',
      type: 'concept',
      title: 'OTP = Your Digital Signature',
      text: 'Think of OTP like signing a check. When you share OTP with someone, you\'re giving them permission to sign on your behalf.',
      example: 'Sharing OTP is like handing over a signed blank check to a stranger.',
    },
    {
      id: 'block-3',
      type: 'real-world',
      title: 'What Happens When You Share OTP',
      text: 'The moment you tell someone your OTP, they can complete transactions from your account - transfer money, make purchases, or change passwords.',
      example: 'In 2023, thousands of people lost lakhs of rupees by sharing OTP over phone calls.',
    },
    {
      id: 'block-4',
      type: 'concept',
      title: 'Banks Never Ask for OTP',
      text: 'Your bank already has access to your account. They don\'t need OTP from you. Anyone asking for OTP is trying to steal from you.',
      example: 'Real bank employees will tell you: "Never share OTP with anyone, including us."',
    },
    {
      id: 'block-5',
      type: 'real-world',
      title: 'The 10-Minute Window',
      text: 'OTP is valid for only 5-10 minutes. Scammers create urgency to make you share it quickly before you think clearly.',
      example: 'They say: "Your account will be blocked!" or "Money is being transferred!" to panic you.',
    },
  ],

  // Psychology insight (critical component)
  psychology: {
    title: 'How Scammers Manipulate You',
    insight: 'Scammers create urgency and fear so you don\'t stop to think logically. They know that panic makes people act without questioning.',
    technique: 'They use authority (claiming to be from bank), urgency (account will be blocked), and fear (money will be lost) to override your rational thinking.',
    awareness: 'When you feel rushed or scared during a call, that\'s your signal to STOP and think.',
  },

  // One safety rule (the memory anchor)
  safetyRule: {
    rule: 'Banks will never ask for OTP on calls or messages.',
    explanation: 'OTP is YOUR password. Keep it to yourself, always.',
    action: 'If someone asks for OTP, hang up immediately and call your bank directly.',
  },

  // Completion
  completion: {
    xpGained: 30,
    message: 'You now understand why OTP security matters.',
    nextAction: 'Practice this in real life - never share OTP with anyone.',
  },
};
