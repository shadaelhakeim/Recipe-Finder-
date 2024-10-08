import { ListFilterIcon } from 'lucide-react'
import React from 'react'

const CategoryForMobile = ({ fetchRecipes }) => {

      const handleCategoryRecipe = (e) => {
      fetchRecipes(e.target.getAttribute("data-value"));
      
    };
    
return (
    <div className="block md:hidden py-5">
      <details className="dropdown">
        <summary className="btn m-1 text-lg">
          <ListFilterIcon size={24} /> Filter
        </summary>
        <div className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <p data-value="main course" onClick={handleCategoryRecipe} className="text-gray-500 text-sm md:text-lg py-2 hover:text-orange-500">Main Course</p>
          <p data-value="desserts" onClick={handleCategoryRecipe} className="text-gray-500 text-sm md:text-lg py-2 hover:text-orange-500">Desserts</p>
          <p data-value="soup" onClick={handleCategoryRecipe} className="text-gray-500 text-sm md:text-lg py-2 hover:text-orange-500">Soup</p>
          <p data-value="appetizer" onClick={handleCategoryRecipe} className="text-gray-500 text-sm md:text-lg py-2 hover:text-orange-500">Appetizer</p>
          <p data-value="salad" onClick={handleCategoryRecipe} className="text-gray-500 text-sm md:text-lg py-2 hover:text-orange-500">Salad</p>
          <p data-value="baked-goods" onClick={handleCategoryRecipe} className="text-gray-500 text-sm md:text-lg py-2 hover:text-orange-500">Baked-goods</p>
          <p data-value="snacks" onClick={handleCategoryRecipe} className="text-gray-500 text-sm md:text-lg py-2 hover:text-orange-500">Snacks</p>
          <p data-value="sandwiches" onClick={handleCategoryRecipe} className="text-gray-500 text-sm md:text-lg py-2 hover:text-orange-500">Sandwiches</p>
        </div>
      </details>
    </div>
  );
};

export default CategoryForMobile