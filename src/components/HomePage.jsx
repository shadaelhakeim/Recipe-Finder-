import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';
const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0); 
  const circleRef = useRef(null);

const images = ["/1.png", "/2.png", "/3.png"];


  useEffect(() => {
    // Circle text logic
    const textCircle = circleRef.current.innerText.split('');
    circleRef.current.innerText = '';
    textCircle.forEach((value, key) => {
      const newSpan = document.createElement("span");
      newSpan.innerText = value;
      const rotateThisSpan = (360 / textCircle.length) * (key + 1);
      newSpan.style.setProperty('--rotate', rotateThisSpan + 'deg');
      circleRef.current.appendChild(newSpan);
    });
  }, []);

  // handle circular index values
  const getIndex = (index) => {
    if (index < 0) {
      return images.length - 1; //  back to last image
    }
    if (index >= images.length) {
      return 0; //  back to first image
    }
    return index;
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => getIndex(prevIndex + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => getIndex(prevIndex - 1));
  };

  return (
    <div>
      <Header />
      <div className='mainbg h-[80vh] lg:h-[130vh] overflow-hidden relative'>
        <div className='content-home flex absolute w-max h-full justify-start items-center  top-[-10%] left-[1%] lg:top-[-5%] lg-left-[0] '>

          <div className='imgs text-center rotate-45'>
            <img src={images[getIndex(activeIndex - 1)]} className='imgh w-[90%]' alt="Recipe" />
          </div>

          <div className='imgs text-center rotate-45'>
            <img src={images[activeIndex]} className='imgh w-[90%]' alt="Recipe" />
          </div>

          <div className='imgs text-center rotate-45'>
            <img src={images[getIndex(activeIndex + 1)]} className='imgh w-[90%]' alt="Recipe" />
          </div>
        </div>

        <div className='circle absolute top-[-23%;] lg:top-[-9rem] left-0 w-full h-[125%] lg:h-[121%]' ref={circleRef}>
          Cookie Recipes-Discover, Cook, Share- Your Culinary Adventure Starts Here!
        </div>

        <div className='absolute bottom-[15%] md:bottom-[10%] lg:bottom-[9%] left-2/4 -translate-x-1/2 text-center text-white w-max'>
          <p className='text-left uppercase translate-y-3 lg:translate-y-5'>Cookie's</p>
          <p className='sec-content text-7xl uppercase font-bold relative'>Recipes</p>
                  <Link to="/Recipes">
                            <button className='button relative -bottom-5 px-5 py-3 text-white bg-transparent rounded-3xl hover:bg-white hover:text-orange-500 hover:scale-105'>Explore Recipes</button>
                  </Link>
        </div>  
        <div>
          <button onClick={handlePrev} className='slider absolute top-2/4 -translate-y-1/2 w-10 h-10 rounded-[50%] bg-[#2f2f2f55] text-white text-xl cursor-pointer z-20 ml-5 left-[5%]'>&lt; </button>
          <button onClick={handleNext} className='slider absolute top-2/4 -translate-y-1/2 w-10 h-10 rounded-[50%] bg-[#2f2f2f55] text-white text-xl cursor-pointer z-20 ml-5 right-[5%]'>&gt; </button>
        </div>

          </div>
          <Footer />
    </div>
  );
};

export default HomePage;
