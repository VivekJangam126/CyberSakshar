/**
 * Incident Types for Complaint Guidance System
 * Each type maps to a specific guidance flow
 */

export const incidentTypes = [
  {
    id: 'otp-fraud',
    title: 'OTP / Bank Fraud',
    description: 'Someone got your OTP or bank details',
    icon: '🏦',
    severity: 'high',
    color: 'from-red-50 to-orange-50',
    border: 'border-red-200',
  },
  {
    id: 'upi-fraud',
    title: 'UPI / Payment Fraud',
    description: 'Wrong payment or UPI scam',
    icon: '💳',
    severity: 'high',
    color: 'from-orange-50 to-amber-50',
    border: 'border-orange-200',
  },
  {
    id: 'phishing',
    title: 'Phishing (SMS / Email)',
    description: 'Suspicious link or fake message',
    icon: '📧',
    severity: 'medium',
    color: 'from-yellow-50 to-amber-50',
    border: 'border-yellow-200',
  },
  {
    id: 'fake-app',
    title: 'Fake App Scam',
    description: 'Downloaded a suspicious app',
    icon: '📱',
    severity: 'medium',
    color: 'from-blue-50 to-cyan-50',
    border: 'border-blue-200',
  },
  {
    id: 'social-media-hack',
    title: 'Social Media Account Hack',
    description: 'Account taken over or misused',
    icon: '🔐',
    severity: 'medium',
    color: 'from-purple-50 to-pink-50',
    border: 'border-purple-200',
  },
];

export const getIncidentById = (id) => {
  return incidentTypes.find(type => type.id === id);
};
