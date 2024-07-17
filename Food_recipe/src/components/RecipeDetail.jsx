import { useParams } from "react-router-dom";
import Recipes from "../../public/Recipes.json";

export default function RecipeDetail() {
  let { id } = useParams();
  let recipe = Recipes.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="text-2xl text-red-400 flex justify-center items-center">
        Recipe not found.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 pt-20">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          className="w-full h-64 object-cover object-center"
          src={recipe.image}
          alt={recipe.title}
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">{recipe.title}</h2>
          <p className="text-gray-700 mb-4">{recipe.description}</p>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Ingredients</h3>
            <ul className="list-disc list-inside text-gray-700">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div className="flex items-center mb-4">
            <svg
              className="w-6 h-6 text-gray-600 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span className="text-gray-700">{recipe.cookTime}</span>
          </div>

          <div className="flex items-center mb-4">
            <svg
              className="w-6 h-6 text-gray-600 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span className="text-gray-700">{recipe.mealType}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
