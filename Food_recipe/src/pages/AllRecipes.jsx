import { useState } from "react";
import Recipes from "../../public/Recipes.json";
import RecipeCard from "../components/RecipeCard";

export default function AllRecipes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [mealType, setMealType] = useState("");

  const filteredRecipes = Recipes.filter((recipe) => {
    return (
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (mealType === "" || recipe.mealType === mealType)
    );
  });

  return (
    <div className="pt-20 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 py-5">
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded-3xl mb-4 md:mb-0"
        />
        <h2 className="text-lg md:text-xl mx-4">Sort Recipes by:</h2>
        <select
          value={mealType}
          onChange={(e) => setMealType(e.target.value)}
          className="w-full md:w-1/4 p-2 border border-gray-300 rounded-lg"
        >
          <option value="">All Meal Types</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <div className="flex justify-center items-center mt-10 text-xl">
            No recipe found!
          </div>
        )}
      </div>
    </div>
  );
}
