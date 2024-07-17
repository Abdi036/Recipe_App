import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto p-6 md:p-12 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="text-center md:text-left p-6 md:p-12">
          <h1 className="text-4xl  md:text-5xl font-bold mb-4 text-green-600">
            The Easiest Way to Make Your Favorite Meal
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-700">
            Discover many recipes and step-by-step guides to create delicious
            meals at home.
          </p>
          <Link
            to="/all-recipes"
            className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition duration-300 shadow-lg"
          >
            Explore Recipes
          </Link>
        </div>
        <div className="p-6 md:p-12">
          <img
            src="/Gemini_Generated_Image_ok9sb3ok9sb3ok9s.jfif"
            alt="Delicious Food"
            className="w-full md:w-96 rounded shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
