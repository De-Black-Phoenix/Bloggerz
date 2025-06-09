import VerifyIcon from "../assets/Icons/VerifyIcon.svg";

function AuthorCard(props) {
    const tags = props.tags || []; // 👈 default to empty array if undefined

    return(
        
        <div className="min-w-full max-w-full flex items-center gap-3 p-1 shadow-sm hover:shadow-2xl transition cursor-pointer">
            {/* Author Image */}
            <img src={props.image} alt="Author" className="w-22 h-26 rounded-xl object-cover border-1 border-green-800"/>

            {/* Author Info */}
            <div className="flex-1">
                <div className="flex items-center gap-1">
                    <h3 className="text-lg font-bold text-neutral-800">{props.name}</h3>
                    <img src={VerifyIcon} alt="Verified" className="w-4 h-4" />
                </div>

                <p className="text-sm text-gray-700">{props.numberPublished} Articles Published</p>
                <p className="text-sm text-gray-700 mb-1">{props.likes}K Likes</p>
    
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="border border-green-800 text-green-800 text-sm px-3 py-0.5 rounded-full">
                        {tag}
                    </span>
                    ))}
              </div>
            </div>
        </div>
    );
}

export default AuthorCard