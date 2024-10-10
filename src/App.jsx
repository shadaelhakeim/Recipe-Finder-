// import ThemeCustomize from "./components/themeCustomize"
import HomePage from "./components/HomePage"
import FavoritesPage from "./components/FavoritesPage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeDetails from "./components/RecipeDetails";
import RecipePage from "./components/RecipePage";
import AboutUs from "./components/AboutUS";
function App() {


  return (
    <>
      <div >
       <Router  basename="/Recipe-Finder-App">
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Recipes" element={<RecipePage />} />
        <Route path="/Favorites" element={<FavoritesPage />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} /> 
        <Route path="/About" element={<AboutUs />} /> 
        
          </Routes>
          </Router>
      </div>
      
      </>
  )

}

export default App
