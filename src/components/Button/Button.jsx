import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', onClick, href, download, ...props }) => {
  const className = `btn btn-${variant}`;

  if (href) {
    return (
      <a
        href={href}
        className={className}
        download={download}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

