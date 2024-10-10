import React from 'react';
import Header from './Header'; // Assuming you have a Header component
import Footer from './Footer'; // Assuming you have a Footer component
import { Link } from 'react-router-dom';
const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="about-us-page bg-gray-100 py-10 ">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-orange-400 mb-6">About Us</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Welcome to <strong>Cookie Website</strong>, your ultimate destination for discovering, cooking, and sharing delicious recipes. 
            Whether you’re a seasoned chef or just starting your culinary journey, our platform is designed to help you explore flavors from around the world.
          </p>

          <div className="flex justify-center space-x-6">
            <div className="w-full lg:w-1/3">
              <img src="/public/2.png" alt="Our Team"  />
            </div>
            <div className="w-full lg:w-1/2 text-left">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-md text-gray-700 mb-4">
                At Cookie, we believe that cooking should be accessible, fun, and inspiring. Our mission is to bring people together through food, one recipe at a time. 
                We provide a platform where users can easily find recipes based on their preferences, dietary needs, and available ingredients.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
              <ul className="text-md text-gray-700 list-disc list-inside space-y-2">
                <li>Discover thousands of recipes from cuisines around the world.</li>
                <li>Search by ingredients, dietary restrictions, and meal types.</li>
                <li>Share your own personalized recipes with the community.</li>
                <li>Save your favorite recipes and create shopping lists effortlessly.</li>
              </ul>
            </div>
          </div>

          <div className="my-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Us</h2>
            <p className="text-md text-gray-700 max-w-2xl mx-auto">
              We’re more than just a recipe app. Cookie App is a community of passionate food lovers, and we invite you to be a part of it. 
              Whether you're here to explore new recipes or share your own, we’re excited to help you on your culinary adventure.
            </p>
            <Link to="/signup">
              <button className="mt-6 px-5 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600">
                Join the Community
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
