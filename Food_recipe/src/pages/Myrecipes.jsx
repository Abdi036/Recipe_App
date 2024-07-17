import { Link } from "react-router-dom";
import Recipes from "../../public/Recipes.json";
import RecipeCard from "../components/RecipeCard";

export default function Myrecipe() {
  return (
    <div className="relative min-h-screen pt-20 mt-[5%]">
      <div className="absolute top-5 right-5 md:top-6 md:right-6">
        <Link
          to="/add-recipe"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
        >
          Add Recipe
        </Link>
      </div>
      <div className="pt-20 flex flex-wrap items-center justify-center gap-5 px-4 md:px-8 lg:px-16">
        {Recipes.map(
          (recipe) =>
            recipe.id < 3 && <RecipeCard key={recipe.id} recipe={recipe} />
        )}
      </div>
    </div>
  );
}
