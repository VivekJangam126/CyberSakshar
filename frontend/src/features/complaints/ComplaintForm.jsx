import React, { useState } from 'react';
import { complaintAPI } from './complaintAPI';
import StepsGuide from './StepsGuide';
import Button from '../../components/Button';
import Card from '../../components/Card';

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    type: '',
    description: '',
    incidentDate: '',
    evidence: null,
    contactInfo: {
      name: '',
      email: '',
      phone: '',
    },
  });
  const [showGuide, setShowGuide] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const complaintTypes = [
    { value: 'phishing', label: 'Phishing/Scam' },
    { value: 'identity_theft', label: 'Identity Theft' },
    { value: 'financial_fraud', label: 'Financial Fraud' },
    { value: 'cyberbullying', label: 'Cyberbullying' },
    { value: 'hacking', label: 'Hacking/Unauthorized Access' },
    { value: 'other', label: 'Other' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('contact.')) {
      const field = name.split('.')[1];
      setFormData({
        ...formData,
        contactInfo: { ...formData.contactInfo, [field]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, evidence: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await complaintAPI.submitComplaint(formData);
      setSubmitted(true);
    } catch (err) {
      setError('Failed to submit complaint. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
        <Card className="max-w-md w-full text-center">
          <div className="text-green-500 text-6xl mb-4">✓</div>
          <h2 className="text-2xl font-bold mb-4">Complaint Submitted</h2>
          <p className="text-gray-600 mb-4">
            Your complaint has been successfully submitted to the authorities.
            You will receive a confirmation email shortly.
          </p>
          <Button onClick={() => window.location.href = '/dashboard'}>
            Back to Dashboard
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Report Cybercrime</h1>
        
        {showGuide && (
          <div className="mb-6">
            <StepsGuide onClose={() => setShowGuide(false)} />
          </div>
        )}

        <Card>
          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Type of Complaint *
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select type...</option>
                {complaintTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="6"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe what happened in detail..."
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Incident Date *
              </label>
              <input
                type="date"
                name="incidentDate"
                value={formData.incidentDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Evidence (Screenshots, Documents)
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                accept="image/*,.pdf,.doc,.docx"
              />
            </div>

            <h3 className="text-xl font-bold mb-4 mt-6">Contact Information</h3>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Name *
              </label>
              <input
                type="text"
                name="contact.name"
                value={formData.contactInfo.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                name="contact.email"
                value={formData.contactInfo.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Phone *
              </label>
              <input
                type="tel"
                name="contact.phone"
                value={formData.contactInfo.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex gap-4">
              <Button type="submit" disabled={loading} className="flex-1">
                {loading ? 'Submitting...' : 'Submit Complaint'}
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => window.history.back()}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ComplaintForm;
