import { ListFilterIcon } from "lucide-react"

// to handle the category filter
const RecipeCategory = ({ fetchRecipes }) => {
  const handleCategoryRecipe = (e) => {
      fetchRecipes(e.target.value);
  };
    
  return (
            <div className="py-5 border-t-slate-400"> 
          <div className="flex border-b-[1px] ">
           <ListFilterIcon size={24}  className=" self-center mr-3 mb-3 md:inline-block hidden"/>
            <h3 className="mb-3 text-g ">Filter by category</h3>
            </div>
          <div className="flex mr-3 pb-4 pt-10">
              <input onClick={handleCategoryRecipe} type="radio" name="radio-6" value={"main course"} className="radio radio-warning mr-3 w-3 h-3 md:w-5 md:h-5 self-center " />
               <p className="text-gray-500 text-sm md:text-lg">Main Course </p>
          </div>
          <div  className="flex mr-3 py-4">
             <input onClick={handleCategoryRecipe} type="radio" name="radio-6" value={"desserts"} className="radio radio-warning mr-3  w-3 h-3 md:w-5 md:h-5 self-center " />
            <p className="text-gray-500 text-sm md:text-lg">Desserts</p>
          </div>
          <div  className="flex mr-3 py-4">
             <input onClick={handleCategoryRecipe} type="radio" name="radio-6" value={"Soup"} className="radio radio-warning mr-3  w-3 h-3 md:w-5 md:h-5 self-center" />
            <p className="text-gray-500 text-sm md:text-lg">Soup</p>
          </div>
          <div  className="flex mr-3 py-4">
             <input onClick={handleCategoryRecipe} type="radio" name="radio-6" value={"Appetizer"} className="radio radio-warning mr-3 md:w-5 md:h-5 w-3 h-3 self-center" />
            <p className="text-gray-500 text-sm md:text-lg">Appetizer</p>
            </div>
          <div  className="flex mr-3 py-4">
             <input onClick={handleCategoryRecipe} type="radio" name="radio-6" value={"Salad"} className="radio radio-warning mr-3 md:w-5 md:h-5 w-3 h-3 self-center" />
            <p className="text-gray-500 text-sm md:text-lg">Salad</p>
            </div>
          <div  className="flex mr-3 py-4">
             <input onClick={handleCategoryRecipe} type="radio" name="radio-6" value={"Bakery"} className="radio radio-warning mr-3 md:w-5 md:h-5 w-3 h-3 self-center" />
            <p className="text-gray-500 sm:text-sm md:text-lg">Baked-goods</p>
            </div>
          <div  className="flex mr-3 py-4">
             <input onClick={handleCategoryRecipe} type="radio" name="radio-6" value={"Snack"} className="radio radio-warning mr-3 md:w-5 md:h-5 w-3 h-3 self-center" />
            <p className="text-gray-500 text-sm md:text-lg">Snack</p>
            </div>
          <div  className="flex mr-3 py-4">
             <input onClick={handleCategoryRecipe} type="radio" name="radio-6" value={"sandwich"} className="radio radio-warning mr-3 md:w-5 md:h-5 w-3 h-3 self-center" />
            <p className="text-gray-500 text-sm md:text-lg">Sandwiches</p>
            </div>
        </div>
  )
}


export default RecipeCategory