import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { MoveLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
const APP_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;

const RecipeDetails = () => {
  const { id } = useParams();  // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch(
          `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await res.json();
        setRecipe(data.recipe);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <span className="loading loading-dots loading-lg absolute top-2/4 left-2/4 bg-yellow-400 "></span>; // to handle loading before showing recipes
  if (!recipe) return <p className='absolute top-2/4 left-2/4 text-lg'>Recipe not found</p>;

    return (
        <>
    <Header />  
    <div className='md:p-[70px] p-[25px] block relative back-g'>
    <div className='md:px-12 py-10 mx-auto my-0 bg-[#F9EFE1] content  '>
    <Link to={"/Recipes"}>
    <MoveLeft  size={24} className='bg-orange-300 rounded-full w-10 h-10 p-2 hover:bg-white cursor-pointer inline-block ml-4 md:block '/>
    </Link>
    <div className="p-6 flex flex-wrap flex-col lg:flex-row lg:flex-nowrap  ">
    <div className='flex flex-col px-9 self-start'>
    <h1 className="font-bold text-[1.85rem] md:text-4xl w-[223px] lg:w-full pb-10 ">{recipe.label}</h1>
    <img src={recipe.image} alt={recipe.label} className="rounded-md mr-12 mb-4 h-fit w-[420px]" />
                            </div>
                    <div>
                        <div className='flex pb-2'>
                        <p className='mr-2 font-bold'>Cuisine Type:</p>
                        <p className='capitalize'> {recipe.cuisineType}</p>
                        </div>
                        <div className='flex pb-2'>
                        <p className='mr-2 font-bold'>Dish Type: </p>
                        <p className='capitalize'>{recipe.dishType}</p>
                        </div>
                        <div className='flex pb-2'>
                        <p className='mr-2 font-bold'>Calories: </p>
                        <p className='capitalize'>{recipe.calories}</p>
                        </div>
                        <p className='mr-2 font-bold mb-2'>Ingredients:</p>
        <ul className='w-80 lg:w-full'>
          {recipe.ingredientLines.map((ingredient, idx) => (
            <li key={idx}>{ingredient}</li>
          ))}
                        </ul>

        <div className=' py-2'>
        <p className='mr-2 font-bold mb-2'>digest:</p>
       <ul className='grid grid-cols-1 md:grid-cols-2 gap-2'>
  {recipe.digest.slice(0, 10).map((digest, idx) => (
    <li key={idx}>
      {digest.label}: {digest.total.toFixed(2)} 
    </li>
  ))}
</ul>
      </div>        
        <div className=''>
        <h2 className='font-bold text-2xl mb-4 mt-6'>Watch Full Recipe on This Link</h2>
       <a href={recipe.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-[13px] md:text-lg ">
        Recipe Source: {recipe.url}
        </a>
        </div>
          </div>
                </div>
                </div>
            </div>
            <Footer />
            </>
  );
};

export default RecipeDetails;
