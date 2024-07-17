export default function LandingPage() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center md:text-left p-6 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            The Easiest Way to Make Your Favorite Meal
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Discover many recipes and step-by-step guides to create delicious
            meals at home.
          </p>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">
            Explore Recipes
          </button>
        </div>
        <div className="p-6 md:p-12">
          <img
            src="/Gemini_Generated_Image_ok9sb3ok9sb3ok9s.jfif"
            alt="Delicious Food"
            className="w-full md:w-96 rounded shadow-lg"
          />
        </div>
      </div>
      );
    </div>
  );
}
