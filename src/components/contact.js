import React from 'react';
import Icon24 from './icon24';
import { FiMessageCircle, FiClock, FiInfo } from "react-icons/fi";
import { IoIosPin, IoIosCall, IoIosMail, IoLogoFacebook, IoLogoInstagram } from "react-icons/io";
import Container from './container';
import Form from './form';

const Contact = () => {
  return (
    <Container id="contact">
      <div className="w-full text-center md:max-w-4xl lg:max-w-6xl">

        <h2 className="flex flex-col justify-center mb-3 md:flex-row md:mb-6">
          <div className="inline md:hidden">
            <Icon24>
              <FiMessageCircle />
            </Icon24>
          </div>
          <FiMessageCircle className="hidden mr-4 md:inline"/>
          Pour nous contacter
        </h2>

        <div className="flex flex-col rounded-lg lg:flex-row bg-pastel">
          <div className="w-full p-6 text-left sm:p-10 text-brown lg:w-1/2">
            <div className="flex flex-col md:flex-row lg:flex-col">
            
              <div className="w-full">
                <h4 className="mb-4 uppercase font-branbold"><FiInfo className="inline mb-2 mr-2"/>Coordonnées</h4>
                <ul className="mb-8 text-xl sm:text-1xl">
                  <li>
                    <IoIosCall className="coor-icon"/> <a href="tel:0472787942" className="coor-link font-branbold">04 72 78 79 42</a>
                  </li>
                  <li>
                    <IoIosMail className="coor-icon"/> <a href="mailto:camilia.coiffure@gmail.com" className="coor-link">camilia.coiffure@gmail.com</a>
                  </li>
                  <li>
                    <IoIosPin className="coor-icon"/> <a href="https://g.page/camiliacoiffure-lyon" className="coor-link">17 rue Passet 69007 Lyon</a>
                  </li>
                  <li>
                    <IoLogoFacebook className="coor-icon"/> <a href="https://www.facebook.com/camiliacoiffure.lyon" className="coor-link">camiliacoiffure.lyon</a>
                  </li>
                  <li>
                    <IoLogoInstagram className="coor-icon"/> <a href="http://instagram.com/camilia_coiffure" className="coor-link">camilia_coiffure</a>
                  </li>
                </ul>
              </div>

              <div className="w-full">
                <h4 className="mb-4 text-2xl uppercase font-branbold"><FiClock className="inline mb-2 mr-2"/>Horaires</h4>
                <ul className="text-xl">
                  <li>Lundi — fermé</li>
                  <li>Mardi — fermé</li>
                  <li>Mercredi — 10h à 19h</li>
                  <li>Jeudi — 10h à 19h</li>
                  <li>Vendredi — 10h à 19h</li>
                  <li>Samedi — 10h à 19h</li>
                  <li>Dimanche — 10h à 19h</li>
                </ul>
              </div>
              
            </div>
          </div>

          <div id="contactus" className="w-full p-6 border-t-4 border-white lg:w-1/2 sm:p-10 lg:border-l-4 lg:border-t-0">
            <Form />
          </div>
          
        </div>
      </div>
    </Container>
  );
}
 
export default Contact;