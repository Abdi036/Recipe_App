import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* Logo */}
            <div>
              <Link
                to="/"
                className="flex items-center py-5 px-2 text-gray-700"
              >
                <span className="font-bold">FoodRecipe</span>
              </Link>
            </div>
          </div>
          {/* Primary Nav */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="py-5 px-3 text-gray-700">
              Home
            </Link>
            <Link to="/my-recipes" className="py-5 px-3 text-gray-700">
              My Recipes
            </Link>
            <Link to="/favorites" className="py-5 px-3 text-gray-700">
              Favorites
            </Link>
          </div>
          {/* Secondary Nav */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/signin"
              className="py-2 px-3 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="py-2 px-3 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
            >
              Sign Up
            </Link>
          </div>
          {/* Mobile button */}
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="mobile-menu hidden md:hidden">
        <Link to="/" className="block py-2 px-4 text-sm text-gray-700">
          Home
        </Link>
        <Link
          to="/my-recipes"
          className="block py-2 px-4 text-sm text-gray-700"
        >
          My Recipes
        </Link>
        <Link to="/favorites" className="block py-2 px-4 text-sm text-gray-700">
          Favorites
        </Link>

        <Link to="/signin" className="block py-2 px-4 text-sm text-gray-700">
          Sign In
        </Link>
        <Link to="/signup" className="block py-2 px-4 text-sm text-gray-700">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

