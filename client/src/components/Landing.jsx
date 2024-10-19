import robotImage from '../assets/robot.png'; // Robot image in your src folder
import whatsappLogo from '../assets/buildClubLogo.png'; // WhatsApp Image
import iitmicLogo from '../assets/IITMIC.png'; // IITMIC Logo
import iitmLogo from '../assets/IITRP.png'; // IITM Logo

function Landing() {
  return (
    <div>
      {/* Header Section */}
      <header className="absolute left-0 right-0 top-0 bg-white shadow-md flex items-center justify-between px-10 sm:px-10 md:px-12 py-2">
        <div className="flex items-center">
          <img src={whatsappLogo} alt="WhatsApp Logo" className="h-16 sm:h-[66.49px] mr-3 sm:mr-5" />
        </div>

        <nav className="hidden sm:flex items-center space-x-4 md:space-x-8 font-semibold font-serif">
          <a href="#home" className="hover:text-gray-800">HOME</a>
          <a href="#about" className="hover:text-gray-800">ABOUT</a>
          <a href="#events" className="hover:text-gray-800">EVENTS</a>
          <a href="#gallery" className="hover:text-gray-800">GALLERY</a>
          <a href="#team" className="hover:text-gray-800">TEAM</a>
        </nav>

        <div className="flex items-center">
          <img src={iitmLogo} alt="IITM Logo" className="w-20 h-16 mr-2" />
          <img src={iitmicLogo} alt="IITMIC Logo" className="h-20" />
        </div>
      </header>

      {/* Main Content Section */}
      <main className="flex flex-col-reverse md:flex-row justify-between items-center px-6 sm:px-10 md:px-24 mt-[8rem] md:mt-[10rem] space-y-8 md:space-y-0">
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 className="font-extralight text-[2.5rem] sm:text-[5rem] md:text-[7rem] leading-none tracking-wide text-black m-0">
            WELCOME!
          </h1>
          <h2 className="font-bold text-[2rem] sm:text-[4rem] md:text-[5rem] leading-none text-black m-0">
            CET BUILD CLUB
          </h2>
          <p className="max-w-3xl mx-auto md:mx-0 font-normal text-[15px] sm:text-[16.5px] leading-[25px] text-justify tracking-wide text-black mt-6 sm:mt-8">
            The CET Build Club is a dynamic and tech-focused community where students collaborate on innovative projects, ranging from artificial intelligence and machine learning to robotics and the Internet of Things (IoT).
          </p>
        </div>

        <div className="w-full md:w-1/3 flex justify-center">
          <img src={robotImage} alt="Robot" className="w-64 sm:w-[300px] md:w-[400px] h-auto" />
        </div>
      </main>
    </div>
  );
}

export default Landing;
