import LA_Img1 from "../assets/Images/LatestArticles/LA_Img1.png"
import LikeIcon from "../assets/Icons/LikeIcon.svg"

function FreshDiscoveryCard() {
    return(
        <div className="min-w-full p-2 max-w-full bg-white overflow-hidden shadow hover:shadow-lg hover:scale-102 transition duration-300 cursor-pointer flex flex-col md:flex-row md:items-center md:gap-4">

            <img src={LA_Img1} alt="Article Image" className="w-full h-50 sm:h-80 md:w-[50%] md:h-[300px] lg:h-[440px] object-cover image-tweak" />

            <div>
                {/* Tags */}
                <div className="mt-3 flex flex-wrap">
                    {["Technology"].map((tag, index) => (
                    <span key={index} className="border border-green-800 text-green-800 text-sm px-4 py-1.5 rounded-full">
                        {tag}
                    </span>
                    ))}
                </div>

                <h3 className="mt-2 md:mt-3 lg:mt-5 font-[NeueHaasGrotesk] font-bold md:font-dark text-neutral-900 text-lg md:text-2xl line-clamp-2">Cyber Security: Shielding the Digital Frontier</h3>
                <p className="text-xs text-green-700 mt-1 mb-1">30 MINS READ</p>

                <p className="text-sm text-gray-500 mb-2 line-clamp-2 md:line-clamp-3 lg:line-clamp-4">In our increasingly digital world, cyber security has become essential to protect our personal data, corporate assets, and national infrastructure. As cyber threats evolve in complexity and frequency, organizations and individuals alike must stay</p>
            

                <div className="flex gap-2 mt-3 md:mt-3 lg:mt-5">
                    <button><img src={LikeIcon} alt="Like Icon" /></button>
                    <p className="text-gray-500">15k Likes</p>
                </div>
            </div>
        </div>
    );
}

export default FreshDiscoveryCard