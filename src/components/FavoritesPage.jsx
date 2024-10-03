import RecipeCard from "./RecipeCard"

const FavoritesPage = () => {
  const Fav = false 
  return (
    <div className="flex-1 bg-[#faf9fb] p-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <p className="font-bold text-3xl md:text-5xl my-4">Favorites</p>
        {!Fav  && (
          <div className="h-[80vh] flex flex-col items-center gap-4">
            <img src="/404.svg" alt="not found" className="h-3/4" />
          </div>
        )}
        
        {Fav && (
          <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          </div>
        )}
      </div>
    </div>
  )
}

export default FavoritesPage