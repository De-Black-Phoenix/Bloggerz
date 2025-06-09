import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"

import FreshDiscoveryCard from "../Components/FreshDiscoveryCard";
import AuthorCard from "../Components/AuthorCard";
import LatestArticleCard from "../Components/LatestArticleCard"

import ArrowLeft from "../assets/Icons/ArrowLeft.svg";
import ArrowRight from "../assets/Icons/ArrowRight.svg";

// Fresh Discovery Img Imports
import FD_Img1 from "../assets/Images/FreshDiscoveries/FD_Img1.png"
import FD_Img2 from "../assets/Images/FreshDiscoveries/FD_Img2.png"
import FD_Img3 from "../assets/Images/FreshDiscoveries/FD_Img3.png"
import FD_Img4 from "../assets/Images/FreshDiscoveries/FD_Img4.png"
import FD_Img5 from "../assets/Images/FreshDiscoveries/FD_Img5.png"

// Our Authors Img Imports
import OA_Img1 from "../assets/Images/OurAuthors/OA_Img1.png"
import OA_Img2 from "../assets/Images/OurAuthors/OA_Img2.png"
import OA_Img3 from "../assets/Images/OurAuthors/OA_Img3.png"
import OA_Img4 from "../assets/Images/OurAuthors/OA_Img4.png"
import OA_Img5 from "../assets/Images/OurAuthors/OA_Img5.png"
import OA_Img6 from "../assets/Images/OurAuthors/OA_Img6.png"
import OA_Img7 from "../assets/Images/OurAuthors/OA_Img7.png"
import OA_Img8 from "../assets/Images/OurAuthors/OA_Img8.png"

// Latest Articles Img Imports
import LA_Img1 from "../assets/Images/LatestArticles/LA_Img1.png"
import LA_Img2 from "../assets/Images/LatestArticles/LA_Img2.png"
import LA_Img3 from "../assets/Images/LatestArticles/LA_Img3.png"


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
                    <FreshDiscoveryCard 
                        time={4} 
                        title="Designing in the Dark: The Rise of Glowy UI Aesthetics" 
                        description="Discover how neon-inspired shapes are redefining modern UI design language " 
                        likes={14} 
                        image={FD_Img1}
                        body="The design world in 2025 is glowing—literally. Sleek, irregular shapes on dark canvases are taking over digital spaces, turning interfaces into immersive art. These luminous forms aren’t just visually striking; they guide attention, improve contrast, and add futuristic flair. From landing pages to app dashboards, glowing elements are the new go-to for creating high-impact visuals that feel alive. Dive into how this aesthetic trend is influencing brand perception and digital storytelling"
                        tags={["Design", "UI/UX", "Inspiration"]}
                    />
                </div>

                <div className="min-w-full sm:min-w-[60%] md:min-w-[50%] lg:min-w-[40%] xl:min-w-[33%] max-w-[300px]">
                    <FreshDiscoveryCard 
                        time={6} 
                        title="The Dev Cave: Crafting Your Creative Coding Space" 
                        description="Behind every great project is a vibe-y workspace. Let’s explore how devs are turning rooms into productivity zones." 
                        likes={24} 
                        image={FD_Img2}
                        body="Clean code needs clean energy — and for many developers, that starts with a dope setup. Picture RGB lights, a multi-monitor station, maybe a warm brew on the side. Your workspace isn't just where you work — it's an extension of your brain. In this post, we explore how developers are building environments that balance comfort, focus, and tech-flex. From mood lighting to noise control and plant life, welcome to the world where setup equals mindset."
                        tags={["Productivity", "Developer Lifestyle/UX", "Tech Aesthetic"]}
                    />
                </div>

                <div className="min-w-full sm:min-w-[60%] md:min-w-[50%] lg:min-w-[40%] xl:min-w-[33%] max-w-[300px]">
                    <FreshDiscoveryCard 
                        time={6} 
                        title="Welcome to 2025: What's Hot in Tech & Design Right Now" 
                        description="A quick pulse check on trends shaping the digital world in 2025" 
                        likes={12} 
                        image={FD_Img3}
                        body="It’s 2025, and the digital landscape is evolving faster than ever. From AI-generated art to no-code platforms getting smarter, creators and developers are being handed more power with less complexity. Black backgrounds and bold typography are trending, giving digital spaces a more cinematic feel. Meanwhile, personalization is at an all-time high — users want experiences that feel tailored and intuitive. In this article, we scan the biggest trends defining the creative and tech space this year"
                        tags={["Trends", "UI/Future", "Technology", "Design"]}
                    />
                </div>

                <div className="min-w-full sm:min-w-[60%] md:min-w-[50%] lg:min-w-[40%] xl:min-w-[33%] max-w-[300px]">
                    <FreshDiscoveryCard 
                        time={6} 
                        title="Bright Ideas: How Simplicity Sparks Innovation" 
                        description="Sometimes, one small light is all it takes to light up big thinking" 
                        likes={28} 
                        image={FD_Img4}
                        body="Innovation doesn’t always need a full whiteboard of planning. Sometimes, it's just one clear thought — one “light bulb moment.” This blog explores how keeping your mind calm, your visuals minimal, and your workflow simple can be the secret recipe for your best ideas. Inspired by the minimal contrast of a glowing bulb on a plain background, we’re diving into the beauty of stripping away the noise so your ideas can finally shine"
                        tags={["Creativity", "Mindset", "Innovation"]}
                    />
                </div>

                <div className="min-w-full sm:min-w-[60%] md:min-w-[50%] lg:min-w-[40%] xl:min-w-[33%] max-w-[300px]">
                    <FreshDiscoveryCard 
                        time={4} 
                        title="Digital Bonding: How Technology is Strengthening Friendships" 
                        description="From Netflix parties to late-night design collabs, laptops are the new hangout zones" 
                        likes={14} 
                        image={FD_Img5}
                        body="Picture this: two friends, one laptop, endless laughter. Whether it's planning a trip, working on a shared doc, or just binge-watching the latest K-drama, tech has become a new social glue. In this story, we highlight how digital devices — far from isolating us — are giving friendships new ways to thrive. With cozy vibes, shared screens, and spontaneous creativity, the laptop becomes more than a tool; it becomes a bridge."
                        tags={["Lifestyle", "Digital Culture", "Relationships"]}
                    />
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
                    <AuthorCard 
                        image={OA_Img1}
                        name= "Nana Osele"
                        numberPublished={12}
                        likes={24}
                        tags={["Design", "UI/UX", "Inspiration"]}
                    />
                </div>

                <div className="min-w-[100%] sm:min-w-[320px] max-w-[300px]">
                    <AuthorCard 
                        image={OA_Img2}
                        name= "Efua Sunderland"
                        numberPublished={10}
                        likes={34}
                        tags={["Design", "UI/UX", "Inspiration"]}
                    />
                </div>

                <div className="min-w-[100%] sm:min-w-[320px] max-w-[300px]">
                    <AuthorCard 
                        image={OA_Img3}
                        name= "Ama Burland"
                        numberPublished={8}
                        likes={6}
                        tags={["Design", "UI/UX", "Inspiration"]}
                    />
                </div>

                <div className="min-w-[100%] sm:min-w-[320px] max-w-[300px]">
                    <AuthorCard 
                        image={OA_Img4}
                        name= "John Doe"
                        numberPublished={8}
                        likes={11}
                        tags={["Design", "UI/UX", "Inspiration"]}
                    />
                </div>

                <div className="min-w-[100%] sm:min-w-[320px] max-w-[300px]">
                    <AuthorCard 
                        image={OA_Img5}
                        name= "Judith Adams"
                        numberPublished={21}
                        likes={18}
                        tags={["Design", "UI/UX", "Inspiration"]}
                    />
                </div>
                
                <div className="min-w-[100%] sm:min-w-[320px] max-w-[300px]">
                    <AuthorCard 
                        image={OA_Img6}
                        name= "Bruce Bannes"
                        numberPublished={16}
                        likes={12}
                        tags={["Design", "UI/UX", "Inspiration"]}
                    />
                </div>

                <div className="min-w-[100%] sm:min-w-[320px] max-w-[300px]">
                    <AuthorCard 
                        image={OA_Img7}
                        name= "Araba Drew"
                        numberPublished={33}
                        likes={42}
                        tags={["Design", "UI/UX", "Inspiration"]}
                    />
                </div>

                <div className="min-w-[100%] sm:min-w-[320px] max-w-[300px]">
                    <AuthorCard 
                        image={OA_Img8}
                        name= "Mark Blakes"
                        numberPublished={28}
                        likes={22}
                        tags={["Design", "UI/UX", "Inspiration"]}
                    />
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
                    <LatestArticleCard 
                        image={LA_Img1}
                        tags={["Cybersecurity", "Tech", "Awareness"]}
                        title= "Securing the Digital Realm: What Designers Must Know"
                        time={4}
                        description="As hackers grow smarter, designers can no longer afford to ignore cybersecurity. Here's what to keep in mind"
                        likes={24}
                    />
                </div>

                <div className="min-w-[90%] sm:min-w-[320px] max-w-[100%]">
                    <LatestArticleCard 
                        image={LA_Img2}
                        tags={["Creativity", "Productivity", "Mindset"]}
                        title= "Write It Down: Why Great Ideas Deserve Paper Too"
                        time={3}
                        description="In an overly digital world, handwritten thoughts might be your creative edge. Let’s explore the science behind jotting things down"
                        likes={9}
                    />
                </div>

                <div className="min-w-[90%] sm:min-w-[320px] max-w-[100%]">
                    <LatestArticleCard 
                        image={LA_Img3}
                        tags={["Virtual Reality", "Tech Trends", "3D"]}
                        title= "Beyond Reality: Designing for the Metaverse"
                        time={6}
                        description="Step into the future of design with VR. Here’s how spatial thinking and immersive UX will change your creative process"
                        likes={44}
                    />
                </div>
            </div>
        </section>

        {/* Footer Section */}
        <Footer />
    </>
  );
}

export default BlogPage;