import React from 'react';
import { FiFacebook, FiInstagram, FiMap, FiArrowUp } from "react-icons/fi";
import { IoIosPin, IoIosCall, IoIosMail } from "react-icons/io";
import { MdStore } from "react-icons/md";
import CamiliaLogo from './camiliaLogo';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="px-2 py-20 text-white sm:px-10 md:py-24 bg-brown -px-9">
      <div className="flex flex-col justify-center text-center lg:text-left max-w-7xl lg:flex-row lg:mx-auto">
        <div className="flex flex-col px-6 mb-16 lg:flex-grow">
          <Link to="/">
            <CamiliaLogo className="flex justify-center w-56 mx-auto mb-8 lg:justify-start lg:mx-0" color1="#FFF" color2="#FFF"/>
          </Link>
          <p className="text-base text-white">© {new Date().getFullYear()} Camilia Coiffure. Tous droits réservés.</p>
        </div>

        <div className="px-6 mb-16 text-center lg:text-left lg:w-1/3">
          <h3 className="mb-6 text-base tracking-widest uppercase text-middlepink font-branbold">Infos Pratiques</h3>
          <ul className="text-lg sm:text-xl">
            <li>
              <IoIosCall className="footer-icon"/> <a href="tel:0472787942" title="Numéro de téléphone" className="footer-link">04 72 78 79 42</a>
            </li>
            <li>
              <IoIosMail className="footer-icon"/> <a href="mailto:camilia.coiffure@gmail.com" title="Adresse e-mail" className="footer-link">camilia.coiffure@gmail.com</a>
            </li>
            <li>
              <IoIosPin className="footer-icon"/> <a href="https://g.page/camiliacoiffure-lyon" title="Adresse postale" className="footer-link">17 rue Passet 69007 Lyon</a>
            </li>
            <li>
              <MdStore className="footer-icon"/> Ouvert du mer au dim de 10h à 19h
            </li>
          </ul>
        </div>

        <div className="mb-16 text-center sm:px-6 lg:text-right lg:w-1/4">
          <h3 className="mb-6 text-base tracking-widest uppercase text-middlepink font-branbold">Liens Utiles</h3>
          <div className="flex justify-center lg:justify-end">
            <a href="http://instagram.com/camilia_coiffure" title="URL page Instagram" className="mr-3 picto-link hover:bg-pink">
              <FiInstagram className="footer-picto" />
            </a>
            <a href="http://facebook.com/camiliacoiffure.lyon" title="URL page Facebook" className="mr-3 picto-link hover:bg-pink">
              <FiFacebook className="footer-picto" />
            </a>
            <a href="https://g.page/camiliacoiffure-lyon" title="Lien Google Maps" className="picto-link hover:bg-pink">
              <FiMap className="footer-picto" />
            </a>            
          </div>
        </div>
      </div>
      <div className="mx-auto mb-12 text-center max-w-7xl">
        <AnchorLink href="#header" title="Remonter en haut de page" className="inline-block px-5 py-3 text-xl border-2 border-white rounded-full font-branbold">
          <FiArrowUp className="inline mb-1 text-xl"/> Remonter en haut de page
        </AnchorLink>
      </div>
      <div className="flex justify-center mx-auto text-base text-center max-w-7xl">
        <p className="text-base text-white">Site internet réalisé par <a href="http://anhek.dev" title="Lien portfolio Antonin Nhek" className="footer-link">Antonin Nhek</a>. <br className="inline md:hidden"/>Propulsé par <a href="https://www.gatsbyjs.org" title="Site officiel GatsbyJS" className="footer-link">Gatsby</a> et <a href="http://tailwindcss.com" title="Site officiel Tailwind CSS" className="footer-link">Tailwind CSS</a>.</p>
      </div>
      
    </footer>
  );
}
 
export default Footer;