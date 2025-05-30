import React, { useState } from 'react';
import lefthand from "../assets/home-hand-left.svg";
import righthand from "../assets/home-hand-right.svg";
import hole from "../assets/hero-home_hole.svg";
import Button from './Button';

const CTA = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen flex justify-center items-center w-full">
      <div className="flex flex-col items-center space-y-4">
        {/* Hands */}
        <span
          className={`flex justify-center -translate-x-20 transition-transform duration-500 ${
            isHovered ? 'translate-y-6' : ''
          }`}
        >
          <img
            src={lefthand}
            className="translate-x-45"
            height={175}
            width={175}
            alt="left hand"
          />
          <img src={righthand} height={175} width={175} alt="right hand" />
        </span>

        {/* Text */}
        <span className="italic -translate-y-110 translate-x-5  text-[#e4f5b3] text-6xl z-50 mt-2">
          Coercive
        </span>
        <span className="italic -translate-y-110 translate-x-5  text-[#e4f5b3] text-7xl z-50 mt-2">
          CONTROL
        </span>
        <span className="italic -translate-y-110 translate-x-5  text-[#e4f5b3] z-50 mt-2">
          THE TRUE FACE OF CONJUGAL VIOLENCE
        </span>

        {/* Button */}
        <span className="-translate-y-110 translate-x-5 z-50 mt-4">
          <Button setIsHovered={setIsHovered} />
        </span>

        {/* Hole */}
        <span className="-translate-y-90 translate-x-5 z-50 mt-4">
          <img src={hole} height={200} width={200} alt="hole" />
        </span>
      </div>
    </div>
  );
};

export default CTA;
