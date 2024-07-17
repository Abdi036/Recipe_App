/* eslint-disable react/prop-types */
export default function RecipeCard({ recipe }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-48 object-cover"
        src={recipe.image}
        alt={recipe.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{recipe.title}</div>
        <p className="text-gray-700 text-base">{recipe.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full">
          View Recipe
        </button>
      </div>
    </div>
  );
}
