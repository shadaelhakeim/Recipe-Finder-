// import ThemeCustomize from "./components/themeCustomize"
import Home from "./components/HomePage"
import FavoritesPage from "./components/FavoritesPage"
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import RecipeDetails from "./components/RecipeDetails";

function App() {


  return (
    <>
      <div >
      
      <Routes>
        <Route path="/Home" element={<Home />} />
          <Route path="/Favorites" element={<FavoritesPage />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} /> 
        
      </Routes>
      {/* <ThemeCustomize /> */}
      </div>
      <Footer />
      </>
  )

}

export default App
