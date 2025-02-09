import React, { forwardRef } from "react";
import Slider from "./Slider";

const Team = forwardRef(({teamRef},ref) =>{
  return (
    <>
    <div className="bg-[#ccd0cf] pt-[40px] pb-[4rem]" ref={teamRef}>
      <div className="h-16 text-4xl font-bold font-serif content-center text-center mb-[20px]">
        OUR TEAM
      </div>
      <div className="flex flex-col items-center justify-center bg-[#ccd0cf]">
        <Slider />
      </div>
    </div>
      
      <div className="font-semibold bg-[#ccd0cf]">        
        <div className="bg-[#04131a] p-4 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
            <div className="text-white col-span-2 w-full p-4 md:p-16">
              <div className="font-bold text-white">DISCLAIMER:</div>
              The CET Build Club is a dynamic and tech-focused community where students collaborate on innovative projects, ranging from AI and machine learning to robotics and IOT.
            </div>

            <div className="flex flex-col items-center w-full text-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1239.5025885171574!2d76.90607098767227!3d8.545771266330258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bec79541c519%3A0x98324eb5aafb3778!2sCollege%20of%20Engineering%20Trivandrum%20(CET)!5e0!3m2!1sen!2sin!4v1726547831627!5m2!1sen!2sin" 
                width="300px" 
                height="300px" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
              />
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#04131a]">
        <div className="bg-[#04131a] w-full max-w-screen-xl mx-auto py-4 md:py-8">
          <div className="flex flex-wrap justify-center space-x-4 md:space-x-5 rtl:space-x-reverse">
            <div className="bg-[#d9d9d9] mt-6 md:mt-0 p-2 md:p-4 rounded-3xl flex space-x-4 md:space-x-6">
              {/* Discord */}
              <a href="https://discord.com/invite/D54tWnv4dU" target="_blank" className="text-[#04131a] hover:text-gray-600">
                <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white shadow-lg">
                  <svg className="w-6 h-6 md:w-8 md:h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                  </svg>
                  <span className="sr-only">Discord community</span>
                </div>
              </a>

              {/* Twitter */}
              <a href="https://x.com/iitm_respark" target="_blank" className="text-[#04131a] hover:text-gray-600">
                <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white shadow-lg">
                  <svg className="w-6 h-6 md:w-8 md:h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Twitter page</span>
                </div>
              </a>

              {/* GitHub */}
              <a href="https://github.com/BuildClubCET" target="_blank" className="text-[#04131a] hover:text-gray-600">
                <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white shadow-lg">
                  <svg className="w-6 h-6 md:w-8 md:h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">GitHub account</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/build-club-cet/" target="_blank" className="text-[#04131a] hover:text-gray-600">
                <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span className="sr-only">LinkedIn account</span>
                </div>
              </a>
            </div>
          </div>
          <span className="block text-sm text-white text-center dark:text-gray-400 mt-4">
            © 2024{" "}
            <div className="hover:underline">
              BuildClubCet . All Rights Reserved.
            </div>
          </span>
        </div>
      </footer>
    </>
  );
})

Team.displayName = 'Team';
export default Team;