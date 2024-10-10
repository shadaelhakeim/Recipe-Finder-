import { Heart, HeartPulse, LucideListFilter, Soup } from "lucide-react"
import { useState } from "react";
import { Link } from 'react-router-dom';

//to return first two values from health labels
const getTwoValuesFromArray = (arr) => {
	return [arr[0], arr[1]];
}; 
  
const RecipeCard = ({ recipe, bg, bgtype , badge }) => {
  const healthLabels = getTwoValuesFromArray(recipe.healthLabels);
  const recipeId = encodeURIComponent(recipe.uri.split("_")[1]);
  const [isFavorite, setIsFavorite] = useState(localStorage.getItem("favorites")?.includes(recipe.label));

  //to handle add to favorite function
const addRecipeToFavorites = () => {
		let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
		const isRecipeAlreadyInFavorites = favorites.some((fav) => fav.label === recipe.label);

		if (isRecipeAlreadyInFavorites) {
			favorites = favorites.filter((fav) => fav.uri !== recipe.uri);
			setIsFavorite(false);
		} else {
			favorites.push(recipe);
			setIsFavorite(true);
		}

		localStorage.setItem("favorites", JSON.stringify(favorites));
	};

  
  return (
   <div className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative`}>
           <Link to={`/recipe/${recipeId}`} className="h-40 lg:h-[23] relative">
              <img 	src={recipe.image} alt="recipe img" className="rounded-md w-full h-full object-cover cursor-pointer" />
              <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 
              cursor-pointer flex items-center gap-1 text-sm">
              <Soup size={16} /> {recipe.yield} Servings
              </div>
        <div className="top-1 right-2 absolute bg-white rounded-full p-1 cursor-pointer "
          onClick={(e) => {
            e.preventDefault();
            addRecipeToFavorites();
        }}
        > 
          {!isFavorite && <Heart size={20} className='hover:fill-red-500 hover:text-red-500' />}
					{isFavorite && <Heart size={20} className='fill-red-500 text-red-500' />} {/*to keep the icon red if it's added to fav page */}
              </div>
            </Link>
            <div className="flex mt-1">
              <p className="font-bold tracking-wide">{recipe.label}</p>
            </div>
            <div className="flex ">
               <p className="my-2 capitalize">{recipe.cuisineType}</p>
            </div>
            <div className="flex gap-2 mt-auto">
              <div className={`flex gap-1 ${bgtype} items-center rounded-md p-1`}>
                <LucideListFilter size={16}/>
                <span className="text-sm tracking-tighter font-semibold">{recipe.dishType}</span>
            </div>

            </div>

          <div className="flex gap-2 mt-2">
          {healthLabels.map((label, idx)=>
          <div key={idx} className={`flex gap-1 ${badge} items-center rounded-md p-1`}>
                <HeartPulse size={16}/>
                <span className="text-sm tracking-tighter font-semibold">{label} </span>
            </div>
             )}
            </div>

            </div>
         
  )
}

export default RecipeCard