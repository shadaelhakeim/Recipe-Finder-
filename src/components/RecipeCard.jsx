import { Heart, HeartPulse, LucideListFilter, Soup } from "lucide-react"

const RecipeCard = () => {
  return (
   <div className="flex flex-col rounded-md overflow-hidden relative p-3 bg-[#ecf7d4]">
            <a href="#" className="h-32 relative">
              <img src="/img1.jpg" alt="recipe img" className="rounded-md w-full h-full object-cover cursor-pointer" />
              <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 
              cursor-pointer flex items-center gap-1 text-sm">
              <Soup size={16} /> 4 Servings
              </div>
              <div className="top-1 right-2 absolute bg-white rounded-full p-1 cursor-pointer "> 
              <Heart size={20} className="hover:fill-red-500 hover:text-red-500"/>
              </div>
            </a>
            <div className="flex mt-1">
              <p className="font-bold tracking-wide">Burger Sandwich</p>
            </div>
            <div className="flex ">
               <p className="my-2">American Kitchen</p>
            </div>
            <div className="flex gap-2 mt-auto">
              <div className="flex gap-1 bg-[#f7a3596e] items-center rounded-md p-1">
                <LucideListFilter size={16}/>
                <span className="text-sm tracking-tighter font-semibold">Main Course</span>
            </div>

            </div>
            <div className="flex gap-2 mt-2">
              <div className="flex gap-1 bg-[#d6f497] items-center rounded-md p-1">
                <HeartPulse size={16}/>
                <span className="text-sm tracking-tighter font-semibold">Gluten free</span>
            </div>
              <div className="flex gap-1 bg-[#d6f497] items-center rounded-md p-1">
                <HeartPulse size={16}/>
                <span className="text-xs tracking-tighter font-semibold">Heart Healthy</span>
            </div>
            </div>
          </div>
  )
}

export default RecipeCard