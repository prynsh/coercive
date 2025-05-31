import React, { useState, useEffect } from 'react';

interface ReusableButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const ReusableButton: React.FC<ReusableButtonProps> = ({ text, onClick, className }) => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.transition = 'background-color 0.5s ease-in-out';

    if (hovered) {
      document.body.style.backgroundColor = '#cce5ed';
    } else {
      document.body.style.backgroundColor = 'black';
    }

    return () => {
      document.body.style.backgroundColor = 'black';
    };
  }, [hovered]);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative group border border-[#e4f5b3] bg-[#1c1c1c] rounded-3xl text-xl cursor-pointer overflow-hidden h-12 min-w-[250px] px-10 transition-colors duration-500 ease-in-out ${className}`}
    >
      {/* Outgoing Text */}
      <div className="absolute inset-0 flex items-center justify-center text-[#e4f5b3] transition-transform duration-250 ease-in-out group-hover:-translate-y-full">
        {text}
      </div>

      {/* Incoming Text */}
      <div className="absolute inset-0 flex items-center justify-center text-black bg-[#cce5ed] translate-y-full transition-transform duration-250 ease-in-out group-hover:translate-y-0">
        {text}
      </div>
    </button>
  );
};

export default ReusableButton;
