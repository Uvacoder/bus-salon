import React from 'react';
import { Link } from 'gatsby';
import { FiFacebook, FiInstagram } from "react-icons/fi"
import CamiliaLogo from "./camiliaLogo"

const HeaderAlt = () => {
  return (
    <header id="header" className="bg-white">
        <div className="px-6 py-8 mx-auto sm:py-10 sm:px-8 max-w-8xl">
          <div className="flex flex-col justify-center md:flex-row md:justify-between">

            <div className="flex justify-center flex-1 mb-6 md:mb-0 md:justify-start">
              <Link to="/">
                <CamiliaLogo className="flex justify-center w-56 h-full mx-auto md:w-48 lg:w-56 md:mx-0" color1="#e73a65" color2="#4b3f42"/>
              </Link>
            </div>

            <nav className="flex flex-wrap justify-center text-center md:px-6 md:mt-0 md:items-center text-1xl font-branbold text-brown">
              <Link to="/" className="hover:text-pink">
                Accueil
              </Link>
            </nav>

            <div className="flex justify-center mt-4 md:mt-0 md:items-center">
              <a href="http://instagram.com/camilia_coiffure/" className="mr-3 header-link hover:bg-pink">
                <FiInstagram className="header-icon" />
              </a>
              <a href="http://facebook.com/camiliacoiffure.lyon/" className="header-link hover:bg-pink">
                <FiFacebook className="header-icon" />
              </a>
            </div>
            
          </div>
        </div>
      </header>
  );
}
 
export default HeaderAlt;