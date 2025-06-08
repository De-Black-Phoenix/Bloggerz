import FD_Img1 from "../assets/Images/FreshDiscoveries/FD_Img1.png"
import LikeIcon from "../assets/Icons/LikeIcon.svg"

function FreshDiscoveryCard() {
    return(
        <div className="min-w-full max-w-full bg-white overflow-hidden shadow hover:shadow-lg hover:scale-102 transition duration-300 cursor-pointer">

            <img src={FD_Img1} alt="Blog Image" className="w-full h-40 md:h-45 object-cover" />

            <div className="pl-1">
                <p className="text-xs text-green-700 mt-3 mb-1">15 MINS READ</p>

                <h3 className="font-[NeueHaasGrotesk] font-bold text-neutral-800 text-lg line-clamp-1 sm:line-clamp-2 md:line-clamp-none">The Evolvement of AI: From Early Concepts to Modern Innovations</h3>
                <p className="text-sm text-gray-500 mb-0 line-clamp-1 sm:line-clamp-2 md:line-clamp-none">Out of nowhere, AI is currently making waves in almost all sectors of the human sphere</p>
            </div>

            <div className="flex gap-2 mt-2 pl-1 pb-2">
                <button><img src={LikeIcon} alt="Like Icon" /></button>
                <p className="text-gray-500">15k Likes</p>
            </div>
        </div>
    );
}

export default FreshDiscoveryCard