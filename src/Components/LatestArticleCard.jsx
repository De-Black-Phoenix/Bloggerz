import LA_Img1 from "../assets/Images/LatestArticles/LA_Img1.png"
import LikeIcon from "../assets/Icons/LikeIcon.svg"

function FreshDiscoveryCard(props) {
    const tags = props.tags || []; // 👈 default to empty array if undefined

    return(
        <div className="min-w-full p-2 max-w-full bg-white overflow-hidden shadow hover:shadow-lg hover:scale-102 transition duration-300 cursor-pointer flex flex-col md:flex-row md:items-center md:gap-4">

            <img src={props.image} alt="Article Image" className="w-full h-50 sm:h-80 md:w-[45%] md:h-[300px] lg:h-[440px] object-cover image-tweak" />

            <div>
                {/* Tags */}
                <div className="mt-3 flex flex-wrap">
                    {tags.slice(0, 1).map((tag, index) => (
                    <span key={index} className="border border-green-800 text-green-800 text-sm px-3 py-0.5 rounded-full">
                        {tag}
                    </span>
                    ))}
                </div>

                <h3 className="mt-2 md:mt-3 lg:mt-5 font-[NeueHaasGrotesk] font-bold md:font-dark text-neutral-900 text-lg md:text-2xl line-clamp-2">{props.title}</h3>
                <p className="text-xs text-green-700 mt-1 mb-1">{props.time} MINS READ</p>

                <p className="text-sm text-gray-500 mb-2 line-clamp-2 md:line-clamp-3 lg:line-clamp-4">{props.description}</p>
            

                <div className="flex gap-2 mt-3 md:mt-3 lg:mt-5">
                    <button><img src={LikeIcon} alt="Like Icon" /></button>
                    <p className="text-gray-500">{props.likes}k Likes</p>
                </div>
            </div>
        </div>
    );
}

export default FreshDiscoveryCard