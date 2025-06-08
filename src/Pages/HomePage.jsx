import Navbar from "../Components/Navbar";
import LightBulb from "../assets/Images/LightBulb.svg";

function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="w-full bg-white py-0">
         <div className="w-[86%] mx-auto min-h-[calc(100vh-7rem-1rem)] md:min-h-[calc(100vh-8rem-1rem)] bg-gradient-to-br from-[#033d01] via-[#0b7507] to-[#066202] flex flex-col justify-center items-center text-white rounded-2xl overflow-hidden pb-4 shadow-md">

          {/* Light Bulb Image - centered & flush */}
          <div className="w-full flex justify-center mt-0">
            <img src={LightBulb} alt="Light Bulb" className="w-32 sm:w-40 md:w-42 -mb-4" />
          </div>

          {/* Main Content */}
          <div className="text-center px-6 py-16 flex flex-col items-center gap-2 md:gap-3">
            <h1 className="font-[NeueHaasGrotesk] font-black text-3xl sm:text-4xl md:text-5xl text-white">Bloggerz</h1>
            <p className="text-sm sm:text-base text-white">
              Widen your knowledge with our free daily articles
            </p>

            <button className="mt-4 sm:mt-6 px-8 py-2 md:px-12 md:py-3 border-2 border-white text-white rounded-full transform transition-transform duration-400 hover:scale-110 cursor-pointer">
              Explore
            </button>
          </div>

          {/* Footer - bottom of hero */}
          <div className="mt-auto pb-4">
            <p className="text-xs text-center text-white">2025 @BLOGGERZ. All rights reserved</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
