import React, { useState } from 'react';

interface MenuButtonProps {
  onClick?: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onClick }) => {
  const [firstPillHovered, setFirstPillHovered] = useState(false);
  const [menuPillHovered, setMenuPillHovered] = useState(false);
  
  return (
    <div className="flex items-center h-12 relative">
      {/* Connecting line */}
      <div className={`absolute left-9 right-2 h-[16px] top-1/2 -translate-y-1/2 z-0 transition-colors duration-400 
        ${firstPillHovered ? 'bg-[#e4f5b3]' : 'bg-black'}`} 
      />

      {/* First pill with SVG */}
      <button
        className={`cursor-pointer relative flex items-center justify-center w-12 h-12 rounded-full z-10 transition-colors duration-400 
          ${firstPillHovered ? 'bg-[#e4f5b3]' : 'bg-black'} group`}
        onMouseEnter={() => setFirstPillHovered(true)}
        onMouseLeave={() => setFirstPillHovered(false)}
        onClick={onClick}
      >
        <div
          className="transform transition-all duration-400 ease-in-out group-hover:rotate-90 text-[#e4f5b3] group-hover:text-black"
        >
          <svg
            className="svg-logo"
            width="24"
            height="8"
            viewBox="0 0 24 8"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path
              d="M12.8738 4.00001C12.8738 5.17027 11.9222 6.12185 10.7517 6.12185L4.97589 6.12185C3.8054 6.12185 2.85404 5.17027 2.85404 4.00001C2.85404 2.82952 3.8054 1.87816 4.97589 1.87816L10.7517 1.87816C11.9222 1.87816 12.8738 2.82952 12.8738 4.00001ZM0.975669 4.00001C0.975669 6.20562 2.77005 8 4.97589 8H10.7517C12.9576 8 14.7517 6.20562 14.7517 4.00001C14.7517 1.79439 12.9576 1.41233e-05 10.7517 1.41233e-05L4.97589 1.41233e-05C2.77005 1.41233e-05 0.975669 1.79439 0.975669 4.00001Z"
            />
            <path
              d="M21.8248 3.99998C21.8248 5.17024 20.8732 6.12182 19.7029 6.12182L13.9266 6.12182C12.7566 6.12182 11.805 5.17024 11.805 3.99998C11.805 2.82949 12.7566 1.87813 13.9266 1.87813L19.7029 1.87813C20.8732 1.87813 21.8248 2.82949 21.8248 3.99998ZM9.92664 3.99998C9.92664 6.20559 11.7212 7.99997 13.9266 7.99997L19.7029 7.99997C21.9087 7.99997 23.7031 6.20559 23.7031 3.99998C23.7031 1.79436 21.9087 -1.63943e-05 19.7029 -1.63943e-05L13.9266 -1.63943e-05C11.7212 -1.63943e-05 9.92664 1.79436 9.92664 3.99998Z"
            />
            <path
              d="M14.752 3.99948C14.752 4.03165 14.743 4.06158 14.7426 4.09375H12.8644C12.8655 4.06181 12.8738 4.03165 12.8738 3.99948C12.8738 2.829 11.9225 1.87764 10.752 1.87764H8.07145V-0.000508332H10.752C12.9576 -0.000508332 14.752 1.79387 14.752 3.99948Z"
            />
          </svg>
        </div>
      </button>

      {/* Second pill with text and icon */}
      <button 
        className={`cursor-pointer relative flex items-center justify-center h-12 rounded-full z-10 overflow-hidden bg-black transition-all duration-400
          ${firstPillHovered ? 'w-80' : 'w-30'}`}
        onMouseEnter={() => setMenuPillHovered(true)}
        onMouseLeave={() => setMenuPillHovered(false)}
        onClick={onClick}
      >
        <div className={`absolute inset-0 bg-[#e4f5b3] transition-transform duration-400 origin-left
          ${firstPillHovered || menuPillHovered ? 'scale-x-100' : 'scale-x-0'}`} 
        />
        <span className={`font-base text-2xl raleway-font tracking-wide px-6 z-10 transition-colors duration-400 whitespace-nowrap
          ${firstPillHovered || menuPillHovered ? 'text-black' : 'text-[#e4f5b3]'}`}>
          {firstPillHovered ? <div><span className='italic '>The</span> COERCIVE CONTROL</div> : <div>Menu</div>}
        </span>

        {/* <Menu 
          size={18} 
          className={`mr-6 z-10 transition-all duration-400
            ${firstPillHovered || menuPillHovered ? 'rotate-90 text-black' : 'text-[#e4f5b3]'}`} 
        /> */}
      </button>
    </div>
  );
};

export default MenuButton;
