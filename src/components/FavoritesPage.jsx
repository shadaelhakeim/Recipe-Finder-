import  Sidebar from "./Sidebar"
import RecipeCard from "./RecipeCard"
import { getRandomColor } from "../lib/randomFunc"
 const FavoritesPage = ({ fetchRecipes }) => {
	const favorites = JSON.parse(localStorage.getItem("favorites")) || []; 


   return (
	   <>
		   <div className="flex">
       <Sidebar fetchRecipes={fetchRecipes} />
		<div className='bg-[#faf9fb] flex-1 p-10 min-h-screen'>
			<div className='max-w-screen-lg mx-auto'>
				<p className='font-bold text-3xl md:text-5xl my-4'>My Favorites</p>

				{favorites.length === 0 && (
					<div className='h-[80vh] flex flex-col items-center gap-4'>
						<img src='/404.svg' className='h-3/4' alt='404 svg' />
					</div>
				)}

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{favorites.map((recipe, index) => (
						<RecipeCard key={`${recipe.uri}-${index}`} recipe={recipe} {...getRandomColor()} />
					))}
				</div>
			</div>
			   </div>
			   </div>
       </>
	);
};
export default FavoritesPage