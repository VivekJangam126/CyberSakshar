import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateSummary } from '../utils/complaintFlowEngine';
import SummaryBlock from '../components/SummaryBlock';
import Button from '../../../components/Button';
import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';

const ComplaintSummary = () => {
  const navigate = useNavigate();
  const [summary, setSummary] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const type = localStorage.getItem('complaintIncidentType');
    const answersStr = localStorage.getItem('complaintAnswers');
    
    if (!type) {
      navigate('/complaints/type');
      return;
    }

    const answers = answersStr ? JSON.parse(answersStr) : {};
    const summaryText = generateSummary(type, answers);
    setSummary(summaryText);
  }, [navigate]);

  const handleCopy = () => {
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([summary], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cybercrime-summary-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50/50 flex flex-col">
      <AppHeader />
      
      <div className="flex-1 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <span className="text-3xl">📋</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Your Complaint Summary
            </h1>
            <p className="text-lg text-gray-600">
              Use this summary when filing your official complaint
            </p>
          </div>

          {/* Summary Content */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-6">
            <div className="bg-gray-50 rounded-xl p-6 mb-6 font-mono text-sm whitespace-pre-wrap">
              {summary}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleCopy}
                variant="secondary"
                className="flex-1"
              >
                {copied ? '✓ Copied!' : '📋 Copy Summary'}
              </Button>
              <Button
                onClick={handleDownload}
                variant="secondary"
                className="flex-1"
              >
                💾 Download as Text
              </Button>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Next Step</h3>
                <p className="text-gray-700">
                  Save this summary and use it when filing your complaint on the official government portal.
                  It will help you provide all necessary information clearly.
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate('/complaints/official')}
              className="px-8 py-3"
            >
              Go to Official Portal
            </Button>
            <Button
              onClick={() => navigate('/complaints/actions')}
              variant="secondary"
              className="px-8 py-3"
            >
              Back
            </Button>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
};

export default ComplaintSummary;
