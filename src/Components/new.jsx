import VerifiedIcon from "../assets/Icons/Verified.svg"; // SVG icon path
import AuthorImage from "../assets/Images/author-img.jpg"; // Use actual path

function AuthorCard() {
  return (
    <div className="flex items-center gap-4 p-4 border border-green-800 rounded-xl shadow-sm hover:shadow-md transition">
      {/* Author Image */}
      <img
        src={AuthorImage}
        alt="Author"
        className="w-20 h-20 rounded-full object-cover"
      />

      {/* Author Info */}
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-bold text-gray-900">Nana Osele Prempeh</h3>
          <img src={VerifiedIcon} alt="Verified" className="w-4 h-4" />
        </div>
        <p className="text-sm text-gray-700">24 Articles Published</p>
        <p className="text-sm text-gray-700 mb-2">16K Likes</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {["Technology", "Science", "Innovation"].map((tag, index) => (
            <span
              key={index}
              className="border border-green-800 text-green-800 text-sm px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AuthorCard;
