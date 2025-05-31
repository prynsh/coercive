// import { FaInstagram, FaLinkedinIn, FaRegCopyright } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaFacebookF } from "react-icons/fa";
// const Footer = () => {
//   return (
//     <div className="bg-black">
//       <div className="flex justify-between p-5 text-[#e5f4b3]">
//         <div className="space-y">

//         <div className="larken-font-normal">COERCIVE CONTROL</div>
//         <div className="fixed bottom-0 left-0 raleway-font-bold ">An initiative of the Regroupement <br/> des maisons pour femmes <br/> victimes de violence conjugale
// </div>
//         </div>
//         <div className="flex-col space-y-60">
//           <div>
//             <div className="space-y-10">
//               <div className="space-y-5">
//                 <div className="raleway-font-bold ">OUR TOOLS</div>
//                 <div className="text-4xl larken-font-italic hover:text-[#cce5ed] cursor-pointer">
//                   Content Library
//                 </div>
//                 <div className="text-4xl larken-font-italic hover:text-[#cce5ed] cursor-pointer">
//                   Steps
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <div className="raleway-font-bold">Experience</div>
//                 <div className="text-4xl larken-font-italic hover:text-[#cce5ed] cursor-pointer">
//                   It May Not Be What You Think
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div>Terms and Conditions</div>
//             <div>Cookie Preferences</div>
//           </div>
//           {/* <div>OUR TOOLS</div> */}
//         </div>
//         <div className="flex-col">
//             <div className="space-y-68">
//           <div className="space-y-20">
//             <div className="space-y-2">
//               <div className="raleway-font-bold">FIND OUT MORE</div>
//               <div className="text-4xl larken-font-italic hover:text-[#cce5ed] cursor-pointer">
//                 About Us
//               </div>
//               <div className="text-4xl larken-font-italic hover:text-[#cce5ed] cursor-pointer">
//                 FAQ
//               </div>
//             </div>
//             <div>
//               <div className="flex items-center h-12 relative  space-x-1">
//                 {/* Connecting line */}
//                 <div
//                   className={`absolute left-9 right-2 h-[20px] top-1/2 bg-[#1c1c1c] -translate-y-1/2 z-0 transition-colors duration-400 `}
//                 />

//                 {/* First pill with SVG */}
//                 <button
//                   className={` hover:bg-[#e4f5b3] hover:text-black cursor-pointer relative flex items-center bg-[#1c1c1c] p-5 justify-center w-20 h-20 rounded-full z-10 transition-colors duration-400`}
//                 >
//                   <FaFacebookF />
//                 </button>
//                 <button
//                   className={`hover:bg-[#e4f5b3] hover:text-black  cursor-pointer relative flex items-center bg-[#1c1c1c] p-5 justify-center w-20 h-20 rounded-full z-10 transition-colors duration-400`}
//                 >
//                   <FaXTwitter />
//                 </button>
//                 <button
//                   className={`hover:bg-[#e4f5b3] hover:text-black cursor-pointer relative flex items-center bg-[#1c1c1c] p-5 justify-center w-20 h-20 rounded-full z-10 transition-colors duration-400`}
//                 >
//                   <FaLinkedinIn />
//                 </button>
//                 <button
//                   className={`hover:bg-[#e4f5b3] hover:text-black  cursor-pointer relative flex items-center bg-[#1c1c1c] p-5 justify-center w-20 h-20 rounded-full z-10 transition-colors duration-400`}
//                 >
//                   <FaInstagram />
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="raleway-font-bold ">
//             Website by Locomotive
//           </div>
//           </div>
//         </div>
//         <div className="raleway-font-bold ">
//         <div>FR</div>
//         <div className="flex items-center fixed bottom-0 right-0 p-5 "><FaRegCopyright /> 2025</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;


import { FaInstagram, FaLinkedinIn, FaRegCopyright } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="flex justify-between p-5 text-[#e5f4b3] flex-wrap">
        <div className="space-y">
          <div className="larken-font-normal">COERCIVE CONTROL</div>
        </div>

        <div className="flex-col space-y-60">
          <div>
            <div className="space-y-10 pl-50">
              <div className="space-y-5">
                <div className="raleway-font-bold">OUR TOOLS</div>
                <div className="text-4xl larken-font-italic hover:text-[#cce5ed] cursor-pointer">
                  Content Library
                </div>
                <div className="text-4xl larken-font-italic hover:text-[#cce5ed] cursor-pointer">
                  Steps
                </div>
              </div>
              <div className="space-y-2">
                <div className="raleway-font-bold">Experience</div>
                <div className="text-4xl larken-font-italic hover:text-[#cce5ed] cursor-pointer">
                  It May Not Be What You Think
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-col">
          <div className="space-y-68">
            <div className="space-y-20">
              <div className="space-y-2">
                <div className="raleway-font-bold">FIND OUT MORE</div>
                <div className="text-4xl larken-font-italic hover:text-[#cce5ed] cursor-pointer">
                  About Us
                </div>
                <div className="text-4xl larken-font-italic hover:text-[#cce5ed] cursor-pointer">
                  FAQ
                </div>
              </div>
              <div>
                <div className="flex items-center h-12 relative space-x-1">
                  {/* Connecting line */}
                  <div
                    className={`absolute left-9 right-2 h-[20px] top-1/2 bg-[#1c1c1c] -translate-y-1/2 z-0 transition-colors duration-400`}
                  />
                  <button className="hover:bg-[#e4f5b3] hover:text-black cursor-pointer relative flex items-center bg-[#1c1c1c] p-5 justify-center w-20 h-20 rounded-full z-10 transition-colors duration-400">
                    <FaFacebookF />
                  </button>
                  <button className="hover:bg-[#e4f5b3] hover:text-black cursor-pointer relative flex items-center bg-[#1c1c1c] p-5 justify-center w-20 h-20 rounded-full z-10 transition-colors duration-400">
                    <FaXTwitter />
                  </button>
                  <button className="hover:bg-[#e4f5b3] hover:text-black cursor-pointer relative flex items-center bg-[#1c1c1c] p-5 justify-center w-20 h-20 rounded-full z-10 transition-colors duration-400">
                    <FaLinkedinIn />
                  </button>
                  <button className="hover:bg-[#e4f5b3] hover:text-black cursor-pointer relative flex items-center bg-[#1c1c1c] p-5 justify-center w-20 h-20 rounded-full z-10 transition-colors duration-400">
                    <FaInstagram />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col">
            FR
        </div>

      </div>
        {/* Final combined section */}
        {/* <div className="flex justify-between p-5 text-[#e5f4b3]">  */}

        <div className="flex  justify-between text-sm space-y-3 mt-10 p-3 text-[#e5f4b3] items-center raleway-font-bold">
          <div className="text-left">
            An initiative of the Regroupement <br />
            des maisons pour femmes <br />
            victimes de violence conjugale
          </div>
          <div>
            <div className=" hover:text-[#cce5ed] cursor-pointer">Terms and Conditions</div>
            <div className="hover:text-[#cce5ed] cursor-pointer">Cookie Preferences</div>
          </div>
          <div className="pl-40 hover:text-[#cce5ed] cursor-pointer">Website by Locomotive</div>
          <div className="flex items-center">
            <FaRegCopyright className="mr-1" /> 2025
          </div>
        </div>
        {/* </div> */}
    </div>
  );
};

export default Footer;
