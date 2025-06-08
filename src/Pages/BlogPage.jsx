import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"

import FreshDiscoveryCard from "../Components/FreshDiscoveryCard";
import AuthorCard from "../Components/AuthorCard";
import LatestArticleCard from "../Components/LatestArticleCard"

import ArrowLeft from "../assets/Icons/ArrowLeft.svg";
import ArrowRight from "../assets/Icons/ArrowRight.svg";


function BlogPage() {
  return (
    <>
        <Navbar />

        {/* Hero Section */}
        <section className="w-full bg-white py-0">
            <div className="w-[86%] mx-auto min-h-[24vh] md:min-h-[34vh] bg-gradient-to-br from-[#033d01] via-[#0b7507] to-[#066202] flex flex-col justify-center items-center text-white rounded-2xl overflow-hidden pb-4 shadow-md">
                <h1 className="font-[NeueHaasGrotesk] font-black text-3xl sm:text-4xl md:text-5xl text-white">Welcome</h1>
                <p className="text-sm sm:text-base text-white md:mt-3">Let set the ball rolling right away</p>
            </div>
        </section>

        {/* Fresh Discoveries */}
        <section className="w-[86%] mx-auto mt-8 md:mt-16">
            <div className="flex justify-between items-end mb-3 md:mb-6">
                <div>
                    <h2 className="">
                        <span className="font-[NeueHaasGrotesk] font-roman text-gray-800 text-xl sm:text-2xl">Fresh </span><br />
                        
                        <span className="font-[NeueHaasGrotesk]
                        font-black text-green-800 underline underline-offset-4 text-2xl sm:text-3xl">Discoveries</span>
                    </h2>
                </div>

                {/* Scroll Buttons (can be hooked later) */}
                <div className="flex items-center gap-5">
                    <button className="p-1.5 md:p-2 border-2 border-green-800 rounded-full hover:bg-green-800 transition duration-300">
                        <img src={ArrowLeft} alt="Left Arrow" className="w-5 h-5" />
                    </button>

                    <button className="p-1.5 md:p-2 border-2 border-green-800 rounded-full hover:bg-green-800 transition duration-300">
                        <img src={ArrowRight} alt="Right Arrow" className="w-5 h-5" />
                    </button>

                </div>
            </div>

            {/* Horizontal Scroll Wrapper */}
            <div className="flex px-0.5 gap-6 overflow-x-auto no-scrollbar scroll-smooth">
                {/* Each Card inside a wrapper with width control */}
                <div className="min-w-full sm:min-w-[60%] md:min-w-[50%] lg:min-w-[40%] xl:min-w-[33%] max-w-[300px]">
                  <FreshDiscoveryCard />
                </div>

                <div className="min-w-full sm:min-w-[60%] md:min-w-[50%] lg:min-w-[40%] xl:min-w-[33%] max-w-[300px]">
                  <FreshDiscoveryCard />
                </div>

                <div className="min-w-full sm:min-w-[60%] md:min-w-[50%] lg:min-w-[40%] xl:min-w-[33%] max-w-[300px]">
                  <FreshDiscoveryCard />
                </div>

                <div className="min-w-full sm:min-w-[60%] md:min-w-[50%] lg:min-w-[40%] xl:min-w-[33%] max-w-[300px]">
                  <FreshDiscoveryCard />
                </div>

                <div className="min-w-full sm:min-w-[60%] md:min-w-[50%] lg:min-w-[40%] xl:min-w-[33%] max-w-[300px]">
                  <FreshDiscoveryCard />
                </div>

            </div>
        </section>

        {/* Our Authors */}
        <section className="w-[86%] mx-auto mt-8 md:mt-16 mb-20">
            <div className="flex justify-between items-end mb-1 md:mb-2">
                <div>
                    <h2 className="">
                        <span className="font-[NeueHaasGrotesk] font-roman text-gray-800 text-xl sm:text-2xl">Our </span><br />
                        
                        <span className="font-[NeueHaasGrotesk]
                        font-black text-green-800 underline underline-offset-4 text-2xl sm:text-3xl">Authors</span>
                    </h2>
                </div>

                {/* Scroll Buttons (can be hooked later) */}
                <div className="flex items-center gap-5">
                    <button className="p-1.5 md:p-2 border-2 border-green-800 rounded-full hover:bg-green-800 transition duration-300">
                        <img src={ArrowLeft} alt="Left Arrow" className="w-5 h-5" />
                    </button>

                    <button className="p-1.5 md:p-2 border-2 border-green-800 rounded-full hover:bg-green-800 transition duration-300">
                        <img src={ArrowRight} alt="Right Arrow" className="w-5 h-5" />
                    </button>

                </div>
            </div>

            {/* Horizontal Scroll Wrapper */}
            <div className="flex px-0.5 gap-4 overflow-x-auto no-scrollbar scroll-smooth">
                {/* Each Card inside a wrapper with width control */}
                <div className="min-w-[100%] sm:min-w-[320px] max-w-[300px]">
                    <AuthorCard/>
                </div>

                <div className="min-w-[100%] sm:min-w-[320px] max-w-[300px]">
                    <AuthorCard/>
                </div>

                <div className="min-w-[100%] sm:min-w-[320px] max-w-[300px]">
                    <AuthorCard/>
                </div>

                <div className="min-w-[100%] sm:min-w-[320px] max-w-[300px]">
                    <AuthorCard/>
                </div>

                <div className="min-w-[100%] sm:min-w-[320px] max-w-[300px]">
                    <AuthorCard/>
                </div>

            </div>
        </section>

        {/* Latest Articles */}
        <section className="w-[86%] mx-auto mt-8 md:mt-16">
            <div className="flex justify-between items-end mb-1 md:mb-2">
                <div>
                    <h2 className="">
                        <span className="font-[NeueHaasGrotesk] font-roman text-gray-800 text-xl sm:text-2xl">Latest </span><br />
                        
                        <span className="font-[NeueHaasGrotesk]
                        font-black text-green-800 underline underline-offset-4 text-2xl sm:text-3xl">Articles</span>
                    </h2>
                </div>

                {/* Scroll Buttons (can be hooked later) */}
                <div className="flex items-center gap-5">
                    <button className="p-1.5 md:p-2 border-2 border-green-800 rounded-full hover:bg-green-800 transition duration-300">
                        <img src={ArrowLeft} alt="Left Arrow" className="w-5 h-5" />
                    </button>

                    <button className="p-1.5 md:p-2 border-2 border-green-800 rounded-full hover:bg-green-800 transition duration-300">
                        <img src={ArrowRight} alt="Right Arrow" className="w-5 h-5" />
                    </button>

                </div>
            </div>

            {/* Horizontal Scroll Wrapper */}
            <div className="px-0.5 flex flex-col gap-12 overflow-x-auto no-scrollbar scroll-smooth">
                {/* Each Card inside a wrapper with width control */}
                <div className="min-w-[90%] sm:min-w-[320px] max-w-[100%]">
                  <LatestArticleCard />
                </div>

                <div className="min-w-[90%] sm:min-w-[320px] max-w-[100%]">
                  <LatestArticleCard />
                </div>

                <div className="min-w-[90%] sm:min-w-[320px] max-w-[100%]">
                  <LatestArticleCard />
                </div>
            </div>
        </section>

        {/* Footer Section */}
        <Footer />
    </>
  );
}

export default BlogPage;