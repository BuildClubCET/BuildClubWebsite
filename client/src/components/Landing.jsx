import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import robotImage from '../assets/robot.png'; // Robot image
import whatsappLogo from '../assets/buildClubLogo.png'; // WhatsApp Logo
import iitmicLogo from '../assets/IITMIC.png'; // IITMIC Logo
import iitmLogo from '../assets/IITRP.png'; // IITM Logo

const Landing = forwardRef(({ homeRef, eventRef, galleryRef, teamRef }) => {
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Header Section */}
      <header className="sticky left-0 right-0 top-0 bg-white shadow-md flex items-center justify-between px-4 sm:px-10 md:px-12 py-2">
        <div className="flex items-center">
          <img src={whatsappLogo} alt="WhatsApp Logo" className="h-12 sm:h-16 mr-3 sm:mr-5" />
        </div>

        <nav className="hidden sm:flex items-center space-x-4 md:space-x-8 font-semibold font-serif">
          <button onClick={() => scrollToSection(homeRef)} className="hover:text-gray-600">
            HOME
          </button>
          <button onClick={() => scrollToSection(eventRef)} className="hover:text-gray-600">
            EVENTS
          </button>
          <button onClick={() => scrollToSection(galleryRef)} className="hover:text-gray-600">
            GALLERY
          </button>
          <button onClick={() => scrollToSection(teamRef)} className="hover:text-gray-600">
            TEAM
          </button>
        </nav>

        <div className="flex items-center">
          <img src={iitmLogo} alt="IITM Logo" className="w-16 h-12 sm:w-20 sm:h-16 mr-2" />
          <img src={iitmicLogo} alt="IITMIC Logo" className="h-16 sm:h-20" />
        </div>
      </header>

      {/* Main Content Section */}
      <main
        className="flex flex-col-reverse md:flex-row justify-between items-center 
        px-4 sm:px-10 md:px-24 
        mb-[36px] md:mb-0 
        space-y-8 md:space-y-0 
        h-[80vh]"
        ref={homeRef}
      >
        <div className="w-full md:w-2/3 text-center flex flex-col items-center md:text-left" >
          <h1 className="font-extralight text-2xl italic md:text-4xl leading-none tracking-wide text-black m-0">
            Welcome to
          </h1>
          <h2 className="font-bold text-4xl md:text-8xl leading-none text-black m-0">
            BUILD CLUB CET!
          </h2>
          <p
            className="mx-auto md:mx-0 font-normal text-sm sm:text-base leading-6 text-justify tracking-wide text-black mt-6 sm:mt-8 max-w-[75%]"
          >
            The CET Build Club is a dynamic and tech-focused community where students collaborate on
            innovative projects, ranging from artificial intelligence and machine learning to
            robotics and the Internet of Things (IoT).
          </p>
        </div>

        <div className="w-full md:w-1/3 flex justify-center">
          <img src={robotImage} alt="Robot" className="w-48 sm:w-64 md:w-80 h-auto" />
        </div>
      </main>
    </div>
  );
});
Landing.propTypes = {
  homeRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
  eventRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
  galleryRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
  teamRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
};

Landing.displayName = 'Landing';

export default Landing;
