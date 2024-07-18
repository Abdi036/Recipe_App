import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Favorites from "./pages/Favorites";
import Myrecipes from "./pages/Myrecipes";
import AllRecipes from "./pages/AllRecipes";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipe from "./components/AddRecipe";

export default function App() {
  return (
    <Router>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/all-recipes" element={<AllRecipes />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/my-recipes" element={<Myrecipes />} />
            <Route path="/recipe-detail/:id" element={<RecipeDetail />} />
            <Route path="/add-recipe" element={<AddRecipe />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
