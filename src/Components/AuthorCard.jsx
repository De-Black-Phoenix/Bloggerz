import VerifyIcon from "../assets/Icons/VerifyIcon.svg";
import AuthorImage from "../assets/Images/OurAuthors/OA_Img1.png"

function AuthorCard() {
    return(
        <div className="min-w-full max-w-full flex items-center gap-3 p-1 shadow-sm hover:shadow-2xl transition cursor-pointer">
            {/* Author Image */}
            <img src={AuthorImage} alt="Author" className="w-22 h-26 rounded-xl object-cover border-1 border-green-800"/>

            {/* Author Info */}
            <div className="flex-1">
                <div className="flex items-center gap-1">
                    <h3 className="text-lg font-bold text-neutral-800">Nana Osele</h3>
                    <img src={VerifyIcon} alt="Verified" className="w-4 h-4" />
                </div>

                <p className="text-sm text-gray-700">24 Articles Published</p>
                <p className="text-sm text-gray-700 mb-1">16K Likes</p>
    
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {["Technology", "Science"].map((tag, index) => (
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