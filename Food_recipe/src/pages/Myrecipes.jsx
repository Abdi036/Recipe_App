import Recipes from "../../public/Recipes.json";
import RecipeCard from "../components/RecipeCard";

export default function Myrecipe() {
  return (
    <div className="pt-20 flex flex-wrap items-center justify-center gap-5">
      {Recipes.map(
        (recipe) =>
          recipe.id < 3 && <RecipeCard key={recipe.id} recipe={recipe} />
      )}
    </div>
  );
}
