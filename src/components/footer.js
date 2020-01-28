import React from 'react';
import { FiFacebook, FiInstagram, FiMap } from "react-icons/fi";
import { IoIosPin, IoIosCall, IoIosMail } from "react-icons/io";
import { MdStore } from "react-icons/md";
import CamiliaLogo from './camiliaLogo';

const Footer = () => {
  return (
    <footer className="px-2 py-20 text-white sm:px-10 md:py-32 bg-brown -px-9">
      <div className="flex flex-col justify-center text-center lg:text-left max-w-7xl lg:flex-row lg:mx-auto">
        <div className="flex flex-col px-6 mb-16 lg:flex-grow">
          <CamiliaLogo className="flex justify-center w-56 mx-auto mb-8 lg:justify-start lg:mx-0" color1="#FFF" color2="#FFF"/>
          <p className="text-base text-white">© {new Date().getFullYear()} Camilia Coiffure. Tous droits réservés.</p>
        </div>
        <div className="px-6 mb-16 text-center lg:text-left lg:w-1/3">
          <h3 className="mb-6 text-base tracking-widest uppercase text-middlepink font-branbold">Infos Pratiques</h3>
          <ul className="text-xl">
            <li><IoIosCall className="inline mb-1 mr-1"/> <a href="tel:0472787942" className="hover:underline">04 72 78 79 42</a></li>
            <li><IoIosMail className="inline mb-1 mr-1"/> <a href="mailto:camilia.coiffure@gmail.com" className="hover:underline">camilia.coiffure@gmail.com</a></li>
            <li><IoIosPin className="inline mb-1 mr-1"/> <a href="https://g.page/camiliacoiffure-lyon" className="hover:underline">17 rue Passet 69007 Lyon</a></li>
            <li><MdStore className="inline mb-1 mr-1"/> Ouvert du mer au dim de 10h à 19h</li>
          </ul>
        </div>
        <div className="mb-16 text-center sm:px-6 lg:text-right lg:w-1/4">
          <h3 className="mb-6 text-base tracking-widest uppercase text-middlepink font-branbold">Liens Utiles</h3>
          <div className="flex justify-center lg:justify-end">
            <a href="http://instagram.com/camilia_coiffure" className="flex items-center justify-center mr-3 rounded-full cursor-pointer w-14 h-14 bg-pastel hover:bg-pink">
              <FiInstagram className="text-2xl text-brown" />
            </a>
            <a href="http://facebook.com/camiliacoiffure.lyon" className="flex items-center justify-center mr-3 rounded-full cursor-pointer w-14 h-14 bg-pastel hover:bg-pink">
              <FiFacebook className="text-2xl text-brown" />
            </a>
            <a href="https://g.page/camiliacoiffure-lyon" className="flex items-center justify-center rounded-full cursor-pointer w-14 h-14 bg-pastel hover:bg-pink">
              <FiMap className="text-2xl text-brown" />
            </a>            
          </div>
        </div>
      </div>
      <div className="flex justify-center text-base text-center">
        <p className="px-6 py-2 text-base text-white rounded-full bg-middlebrown">Site internet réalisé par <a href="http://anhek.dev" className="link">Antonin Nhek</a>. <br className="inline md:hidden"/>Propulsé par <a href="https://www.gatsbyjs.org" className="link">Gatsby</a> et <a href="http://tailwindcss.com" className="link">Tailwind CSS</a>.</p>
      </div>
    </footer>
  );
}
 
export default Footer;