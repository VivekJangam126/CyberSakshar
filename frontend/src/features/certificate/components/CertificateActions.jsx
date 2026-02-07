import React from 'react';
import Button from '../../../components/Button';

const CertificateActions = ({ 
  onGenerate, 
  onDownload, 
  onNavigate, 
  isGenerated = false,
  isGenerating = false 
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {!isGenerated ? (
        <Button
          onClick={onGenerate}
          disabled={isGenerating}
          className="px-8 py-3"
        >
          {isGenerating ? 'Generating...' : 'Generate Certificate'}
        </Button>
      ) : (
        <>
          <Button
            onClick={onDownload}
            className="px-8 py-3"
          >
            Download PDF
          </Button>
          {onNavigate && (
            <Button
              onClick={onNavigate}
              variant="secondary"
              className="px-8 py-3"
            >
              Return to Dashboard
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default CertificateActions;
