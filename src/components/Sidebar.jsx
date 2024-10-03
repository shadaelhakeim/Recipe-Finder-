import { Heart, HomeIcon } from "lucide-react"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div>
    <DesktopSidebar />
    <MobileSidebar />       
    </div>
  )
}

export default Sidebar

const DesktopSidebar = () => {
  return (
      <div className="p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block">
      <div className="flex flex-col gap-16 left-0 top-10 sticky">
        
        <div className='w-full flex justify-center'>
					<img src='/logo2.png' alt='logo' className='hidden md:block w-4/5'  />
					<img src='/mobile-logo1.png' alt='logo' className='block md:hidden w-3/5' />
        </div>
        
        <ul className="flex flex-col items-center md:items-start gap-8">

          <Link to={"/Home"} className="flex gap-1">
          <HomeIcon size={24} />
            <span className="font-bold hidden md:block">Home</span>
          </Link>

          <Link to={"/Favorites"} className="flex gap-1">
            <Heart size={24}  className="hover:fill-red-500" />
            <span className="font-bold hidden md:block">Favorites</span>
          </Link>

               </ul>
          </div>
          
          
          
    </div>
  )
}

const MobileSidebar = () => {
  return (
    <div className="flex justify-center gap-10  border-t fixed w-full bottom-0 left-0 bg-white z-10 p-2 sm:hidden">
     <Link to={"/Home"}>
        <HomeIcon size={24} className="cursor-pointer" />
      </Link>  
      <Link to={"/Favorites"}>
        <Heart size={24} className="cursor-pointer" />
        </Link>

          
    </div>
  )
}