import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Favorites from "./pages/Favorites";
import Myrecipes from "./pages/Myrecipes";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/my-recipes" element={<Myrecipes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
