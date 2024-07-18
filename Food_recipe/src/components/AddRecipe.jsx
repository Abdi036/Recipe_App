import BackButtons from "../utils/BackButtons";

export default function AddRecipe() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 pt-20">
      <BackButtons />
      <h2 className="text-3xl font-bold mb-8">Add a New Recipe</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            name="image"
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          {/* will be modified later */}
          <label className="block text-gray-700">Ingredients</label>
          <textarea
            name="ingredients"
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Cook Time</label>
          <input
            type="text"
            name="cookTime"
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Meal Type</label>
          <input
            type="text"
            name="mealType"
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}
