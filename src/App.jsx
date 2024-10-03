// import ThemeCustomize from "./components/themeCustomize"
import Sidebar from "./components/sidebar"
import Home from "./components/HomePage"
import FavoritesPage from "./components/FavoritesPage"
import { Routes, Route } from "react-router-dom"
function App() {



  return (
    <div className="flex">
      
      <Sidebar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Favorites" element={<FavoritesPage />} />
      </Routes>
      {/* <ThemeCustomize /> */}
   </div>
  )

}

export default App
