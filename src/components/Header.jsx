import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
 <div className="navbar bg-base-100 bg-[#ffffffc4] sticky top-0 z-20 lg:w-[90%] lg:mx-auto lg:my-0">
  <div className='w-full'>
  <div className="dropdown ">
  <div className='flex justify-end lg:justify-center'>
     <Link to="/Home">
     <img src="/public/logo2.png" alt="logo" className='w-3/12 lg:w-[7%] ml-4 ' />
    </Link>

     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden flex justify-end self-end w-2/4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-4/12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
        </div>
        </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow content-between right-0 h-36">
        <Link to={"/Home"}>
                  <li className='font-bold text-orange-500 py-1'><a className='text-[20px]'>Home</a></li>
                  </Link>
                  <Link to={"/Home"}>
                   <li className=' hover:text-orange-500 py-1'><a className='text-[20px]'>Recipes</a></li>
                  </Link>
                  <Link to={"/About"}>
                   <li className=' hover:text-orange-500 py-1'><a className='text-[20px]'>About</a></li>
                  </Link>
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[18px]">
                  <Link to={"/Home"}>
                  <li className='font-bold text-orange-500'><a>Home</a></li>
                  </Link>
                  <Link to={"/Home"}>
                   <li className=' hover:text-orange-500'><a>Recipes</a></li>
                  </Link>
                  <Link to={"/About"}>
                   <li className=' hover:text-orange-500'><a>About</a></li>
                  </Link>
    </ul>
  </div>
  
</div>
  )
}

export default Header