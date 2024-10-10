import { ForkKnifeCrossedIcon, Heart, HomeIcon, Info } from "lucide-react"
import { Link } from "react-router-dom"
import RecipeCategory from "./RecipeCategory"

const Sidebar = ({ fetchRecipes }) => {
  return (
    <div>
      <DesktopSidebar fetchRecipes={fetchRecipes} />
      <MobileSidebar />
    </div>
  );
};

export default Sidebar

const DesktopSidebar = ({ fetchRecipes }) => {
  return (
      <div className="pl-3 md:p-10  border-r min-h-screen w-28 md:w-64 hidden md:block ">
      <div className="flex flex-col gap-16 left-0 top-10 sticky">
        
        <div className='w-full flex justify-center'>
					<img src='/logo2.png' alt='logo' className='hidden md:block w-4/5'  />
					<img src='/mobile-logo1.png' alt='logo' className='block md:hidden w-3/5' />
        </div>
        
        <ul className="flex flex-col items-center md:items-start gap-8">

          <Link to={"/"} className="flex gap-1">
          <HomeIcon size={24} />
            <span className="font-bold hidden md:block">Home</span>
          </Link>

          <Link to={"/Recipes"} className="flex gap-1">
            <ForkKnifeCrossedIcon size={24}  className="hover:fill-orange-500" />
            <span className="font-bold hidden md:block">Recipes</span>
          </Link>

          <Link to={"/Favorites"} className="flex gap-1">
            <Heart size={24}  className="hover:fill-red-500" />
            <span className="font-bold hidden md:block">Favorites</span>
          </Link>
          <Link to={"/About"} className="flex gap-1">
            <Info size={24}  className="hover:fill-gray-200" />
            <span className="font-bold hidden md:block">About us</span>
          </Link>

        </ul>
        
         <RecipeCategory fetchRecipes={fetchRecipes} />
          </div>
          
          
          
    </div>
  )
}

const MobileSidebar = () => {
  return (
    <div className="flex justify-center gap-10  border-t fixed w-full bottom-0 left-0 bg-white z-10 p-2 sm:hidden">
     <Link to={"/"}>
        <HomeIcon size={24} className="cursor-pointer" />
      </Link>  
      <Link to={"/Recipes"} className="flex gap-1">
            <ForkKnifeCrossedIcon size={24}  className="hover:fill-orange-500" />
      </Link>
      <Link to={"/Favorites"}>
        <Heart size={24} className="cursor-pointer" />
        </Link>

        
    </div>
  )
}