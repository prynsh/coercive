import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import lefthand from "../assets/home-hand-left.svg";
import righthand from "../assets/home-hand-right.svg";
import hole from "../assets/hero-home_hole.svg";

const CTA = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setStartAnimation(true);
    setTimeout(() => {
      navigate('/experience');
    }, 800);
  };

  useEffect(() => {
    document.body.style.backgroundColor = isHovered ? '#e4f5b3' : 'black';
    return () => {
      document.body.style.backgroundColor = 'black';
    };
  }, [isHovered]);

  return (
    <div className="min-h-screen flex flex-col items-center w-full relative">
      {/* Topbar (remains visible) */}
    

      {/* Expanding Circle */}
      {startAnimation && (
        <div className="expanding-circle absolute top-[60%] left-1/2 z-10" />
      )}

      {/* CTA Content - Hidden on transition */}
      <div
        className={`flex flex-col items-center space-y-2 z-20 transition-opacity duration-500 ${
          startAnimation ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
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
        <span className="larken-font-italic -translate-y-110 translate-x-5 text-[#e4f5b3] text-6xl z-50">
          Coercive
        </span>
        <span className="larken-font-thin -translate-y-110 translate-x-5 text-[#e4f5b3] text-7xl z-50">
          CONTROL
        </span>
        <span className="font-raleway -translate-y-110 translate-x-5 text-[#e4f5b3] z-50 mt-2">
          THE TRUE FACE OF CONJUGAL VIOLENCE
        </span>

        {/* Button */}
        <span className="-translate-y-110 translate-x-5 z-50 mt-4">
          <div
            className="bg-[#1c1c1c] border border-[#e4f5b3] text-[#e4f5b3] p-2 px-4 rounded-4xl text-xl cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
          >
            Access the experience
          </div>
        </span>

        {/* Hole */}
        <span className="-translate-y-90 translate-x-5 z-50 mt-20">
          <img src={hole} height={200} width={200} alt="hole" />
        </span>
      </div>
    </div>
  );
};


export default CTA;

