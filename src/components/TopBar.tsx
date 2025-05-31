import { useState } from "react";
import WeirdLookingButton from "./WeirdLookingButton";

function TopBar() {
     const [showTooltip, setShowTooltip] = useState(false)
  return (
    <div className=" flex  justify-between items-center bg-transparent text-white  p-2 ">
      <WeirdLookingButton/>
      {!showTooltip && (
        <div className="flex gap-4">
          <div className="group flex items-center transition-all duration-300 focus:outline-none">
            <div className="flex items-center h-12 gap-1 relative">
              {/* line between the pills */}
              <div className="absolute left-9 right-2 h-[16px] bg-black top-1/2 -translate-y-1/2 z-0" />

              {/* Get Help pill */}
              <div className="flex raleway-font items-center justify-center px-10 py-3 z-10 rounded-full cursor-pointer bg-black text-lg text-[#e4f5b3] transition-colors duration-400 ease-in-out hover:bg-[#e4f5b3] hover:text-black">
                Get help
              </div>

              <div className="space-x-5 flex">
                {/* Quick Exit pill */}
                <div
                  className=" relative flex py-3 raleway-font items-center justify-center px-12 text-lg rounded-full  bg-black z-10 text-[#e4f5b3] cursor-pointer transition-colors duration-400 ease-in-out hover:bg-[#e4f5b3] hover:text-black"
                  onMouseEnter={() => setShowTooltip(true)}
                  
                >
                  Quick exit
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Expanded tooltip state */}
      {/* {showTooltip && ( */}
        <div
          className={`absolute top-2 right-2 cursor-pointer bg-[#f2fdcc] h-40 text-black rounded-3xl p-4 z-20 transition-all duration-700 origin-top-right ease-in-out transform ${
  showTooltip ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
}`}

          onMouseLeave={() => setShowTooltip(false)}
        >
          <div className="flex justify-between items-start h-6">
            {/* Left side - Tooltip content */}
            <div className="flex-1 pr-8">
              {/* Header */}
              {/* <div className="flex items-center mb-4">
                <h3 className="font-semibold text-lg">Quick exit</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 ml-2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div> */}

              {/* Subtitle */}
              <p className="italic text-sm mb-4 leading-relaxed">
                For your security and privacy, remember to clear your history:
              </p>

              {/* Instructions list */}
              <ol className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="font-medium mr-2">1.</span>
                  <span>Simultaneously press Ctrl + H or Cmd ⌘ + Y</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">2.</span>
                  <span>Click on "Clear browsing data" on the left-hand side.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">3.</span>
                  <span>In the new window that opens, click again on "Clear data"</span>
                </li>
              </ol>
            </div>

            {/* Right side - Quick exit button remains visible */}
            <div className="flex items-center">
              <div className="flex py-3 items-center justify-center px-12 text-lg rounded-full bg-[#e4f5b3] text-black gap-2">
                Quick exit
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
}

export default TopBar;