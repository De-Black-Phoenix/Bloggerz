import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import NotFoungImg from "../assets/Images/404ErrorImage.svg";

function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Main 404 Section */}
      <main className="flex-grow flex flex-col justify-center items-center text-green-800 px-4">
        <img src={NotFoungImg} alt="404 Animation" className="w-84 md:w-104 mb-6" />

        <a href="/" className="text-white bg-green-800 px-8 mt-2 md:mt-4 py-2 md:px-10 md:py-4 rounded-full hover:bg-green-900 transition duration-300">Back to Home</a>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default NotFound