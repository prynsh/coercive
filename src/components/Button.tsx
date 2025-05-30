import React, { useEffect } from 'react';

const Button = ({ setIsHovered }) => {
  useEffect(() => {
    // optional cleanup handled by parent if needed
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div
      className="bg-[#1c1c1c] border border-[#e4f5b3] text-[#e4f5b3] access p-2 px-4 rounded-4xl text-xl cursor-pointer"
      onMouseEnter={() => {
        setIsHovered(true);
        document.body.style.backgroundColor = '#e4f5b3';
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        document.body.style.backgroundColor = 'black';
      }}
    >
      Access the experience
    </div>
  );
};

export default Button;
