import React from 'react';
import Button from '../../components/Button/Button';
import cvPdf from '../../assets/pdf/NikhilSalvi-CV.pdf';
import './DownloadCV.css';

const DownloadCV = () => {
  return (
    <section className="download-cv">
      <div className="download-cv-container">
        <div className="download-cv-content">
          <h2>Interested in working together?</h2>
          <p>Download my resume to learn more about my experience and skills.</p>
          <Button
            href={cvPdf}
            download="NikhilSalvi-CV.pdf"
            variant="primary"
          >
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DownloadCV;

