// Urgency Scam Tactics Micro Learning Module
// 2-3 minute focused learning on recognizing urgency manipulation

export const urgencyScamModule = {
  id: 'urgency-scams',
  title: 'The Urgency Trap',
  duration: '2 min',
  icon: '⏰',
  category: 'Scam Psychology',
  
  // Contextual entry
  context: {
    message: 'Scammers use urgency as their most powerful weapon. Understanding this tactic will protect you from most cyber frauds.',
    tone: 'calm-reassuring',
  },

  // Content blocks (5-7 max, short and focused)
  content: [
    {
      id: 'block-1',
      type: 'concept',
      title: 'What is the Urgency Trap?',
      text: 'Urgency is when scammers make you feel you must act immediately or face serious consequences. This pressure stops you from thinking clearly.',
      example: '"Your account will be blocked in 10 minutes!" or "Limited time offer - act now!"',
    },
    {
      id: 'block-2',
      type: 'real-world',
      title: 'Why Urgency Works',
      text: 'When we feel rushed, our brain switches to panic mode. We stop analyzing and start reacting. Scammers know this.',
      example: 'In panic, people share OTP, click suspicious links, or transfer money without verifying.',
    },
    {
      id: 'block-3',
      type: 'concept',
      title: 'Common Urgency Phrases',
      text: 'Learn to recognize these red flags: "Immediate action required", "Last chance", "Account suspended", "Verify within 24 hours".',
      example: 'Real organizations give you time. Scammers create artificial deadlines.',
    },
    {
      id: 'block-4',
      type: 'real-world',
      title: 'The Pause Principle',
      text: 'Whenever you feel rushed to make a decision, that\'s your signal to STOP. Take a breath. Real emergencies are rare.',
      example: 'Banks don\'t block accounts suddenly. Government offices send official letters. Prizes don\'t expire in minutes.',
    },
    {
      id: 'block-5',
      type: 'concept',
      title: 'Breaking the Urgency Spell',
      text: 'Simple rule: If someone is rushing you, slow down. End the call. Close the message. Verify through official channels.',
      example: 'Tell yourself: "If this is real, it will still be real after I verify it properly."',
    },
  ],

  // Psychology insight
  psychology: {
    title: 'The Science Behind Urgency',
    insight: 'Urgency triggers your fight-or-flight response. Your body releases stress hormones that impair logical thinking and decision-making.',
    technique: 'Scammers are trained to maintain pressure throughout the conversation. They don\'t give you time to think or consult others.',
    awareness: 'Feeling rushed, pressured, or panicked during any transaction is a major red flag. That feeling itself is the warning.',
  },

  // One safety rule
  safetyRule: {
    rule: 'Real organizations never rush you. Scammers always do.',
    explanation: 'When you feel urgency, pause. Verify. Consult someone you trust.',
    action: 'Make it a habit: Any urgent request = Stop and verify first.',
  },

  // Completion
  completion: {
    xpGained: 30,
    message: 'You now recognize urgency as a manipulation tactic.',
    nextAction: 'Practice the pause principle in your daily digital life.',
  },
};
