import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generateCertificatePDF = async (certificateData, element) => {
  if (!element) {
    console.error('Certificate element not found');
    return;
  }

  try {
    // Convert the certificate HTML to canvas
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
    });

    // Convert canvas to image
    const imgData = canvas.toDataURL('image/png');

    // Create PDF
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4',
    });

    const imgWidth = 297; // A4 landscape width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    
    // Save the PDF
    const fileName = `Certificate_${certificateData.userName.replace(/\s+/g, '_')}_${Date.now()}.pdf`;
    pdf.save(fileName);
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Failed to generate PDF. Please try again.');
  }
};

export const shareCertificate = async (certificateData) => {
  const shareData = {
    title: 'My CyberSakshar Certificate',
    text: `I completed the ${certificateData.courseName} course!`,
    url: window.location.href,
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      // Fallback for browsers that don't support Web Share API
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text)}&url=${encodeURIComponent(shareData.url)}`;
      window.open(url, '_blank');
    }
  } catch (error) {
    console.error('Error sharing certificate:', error);
  }
};

export const verifyCertificate = async (certificateId) => {
  // This would typically make an API call to verify the certificate
  // For now, it's a placeholder
  try {
    // const response = await apiClient.get(`/certificates/verify/${certificateId}`);
    // return response.data;
    return {
      valid: true,
      certificateId,
      userName: 'Sample User',
      courseName: 'Cybersecurity Awareness',
      completionDate: new Date().toLocaleDateString(),
    };
  } catch (error) {
    console.error('Error verifying certificate:', error);
    return { valid: false };
  }
};
