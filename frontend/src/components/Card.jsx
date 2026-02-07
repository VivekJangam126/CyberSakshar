import React from 'react';

const Card = ({ children, title, className = '', onClick }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 ${className}`}
      onClick={onClick}
    >
      {title && <h3 className="text-xl font-bold mb-4">{title}</h3>}
      {children}
    </div>
  );
};

export default Card;
