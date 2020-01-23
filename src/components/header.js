import React from "react"
import { ReactComponent as Logo } from '../images/svg/camilia-logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FiFacebook, FiInstagram } from "react-icons/fi"

const Header = () => (
  <header className="bg-white">
    <div className="px-6 mx-auto my-8 sm:my-10 sm:px-8 max-w-8xl">
      <div className="flex flex-col justify-center md:flex-row md:justify-between">
        <div className="flex-1">
          <Logo className="flex justify-center w-56 mx-auto md:mx-0"/>
        </div>
        <nav className="mt-8 text-center text-1xl font-branbold text-brown">
          <AnchorLink href="#prestations" className="mr-6 lg:mr-8 hover:text-pink">
            Prestations
          </AnchorLink>
          <AnchorLink href="#salon" className="mr-6 lg:mr-8 hover:text-pink">
            Le salon
          </AnchorLink>
          <AnchorLink href="#infos-pratiques" className="md:mr-6 lg:mr-8 hover:text-pink">
            Contact
          </AnchorLink>
        </nav>
        <div className="flex justify-center mt-6 md:mt-0 md:items-center">
          <a href="http://instagram.com/camilia_coiffure/" className="flex items-center justify-center mr-2 rounded-full cursor-pointer w-14 h-14 bg-pastel hover:bg-pink">
            <FiInstagram className="text-2xl text-brown" />
          </a>
          <a href="http://facebook.com/camiliacoiffure.lyon/" className="flex items-center justify-center rounded-full cursor-pointer w-14 h-14 bg-pastel hover:bg-pink">
            <FiFacebook className="text-2xl text-brown" />
          </a>
        </div>
      </div>
    </div>
  </header>
)

export default Header
