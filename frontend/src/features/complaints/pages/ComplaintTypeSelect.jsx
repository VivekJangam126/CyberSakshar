import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { incidentTypes } from '../data/incidentTypes';
import IncidentTypeCard from '../components/IncidentTypeCard';
import Button from '../../../components/Button';
import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';

const ComplaintTypeSelect = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState(null);

  const handleContinue = () => {
    if (selectedType) {
      // Store selected type in localStorage for flow
      localStorage.setItem('complaintIncidentType', selectedType);
      navigate('/complaints/questions');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50/50 flex flex-col">
      <AppHeader />
      
      <div className="flex-1 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              What Happened?
            </h1>
            <p className="text-lg text-gray-600">
              Select the type of incident so we can provide specific guidance
            </p>
          </div>

          {/* Incident Type Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {incidentTypes.map((incident) => (
              <IncidentTypeCard
                key={incident.id}
                incident={incident}
                selected={selectedType === incident.id}
                onClick={setSelectedType}
              />
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleContinue}
              disabled={!selectedType}
              className="px-8 py-3"
            >
              Continue
            </Button>
            <Button
              onClick={() => navigate('/complaints/intro')}
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

export default ComplaintTypeSelect;
