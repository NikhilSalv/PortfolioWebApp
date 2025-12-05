import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="section-title">
      {title && <h2>{title}</h2>}
      {subtitle && <p className="subtitle">{subtitle}</p>}
      <div className="title-underline"></div>
    </div>
  );
};

export default SectionTitle;

