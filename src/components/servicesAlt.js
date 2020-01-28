import React from 'react';
import { FiCoffee, FiFileText, FiMessageCircle } from "react-icons/fi"
import Icon24 from './icon24';
import Container from './container';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const ServicesAlt = () => {
  return (
    <Container>
      <div className="flex flex-wrap justify-center">
        <div className="service-card sm:px-5">
          <Icon24>
            <FiFileText className="text-brown"/>
          </Icon24>
          <h3 className="service-title">
            Grille tarifaire des prestations
          </h3>
          <p className="mb-6">
            Pour connaître le prix de nos différentes prestations (coupe, coloration, mèches, balayages, tie & dye, etc…)
          </p>
          <a href="https://www.dropbox.com/s/oh5wa8ktjr5pav8/camilia-tarifs-2020.pdf?dl=0" className="service-link">
            Télécharger le PDF
          </a>
        </div>

        <div className="service-card sm:px-5">
          <Icon24>
            <FiCoffee className="text-brown"/>
          </Icon24>
          <h3 className="service-title">
            Le salon, un espace accueillant et cozy
          </h3>
          <p className="mb-6">
            Marine, coiffeuse styliste & visagiste est à votre écoute pour vous conseiller et vous guider dans vos envies
          </p>
          <AnchorLink href="#salon" className="service-link">
            Découvrir le salon
          </AnchorLink>
        </div>

        <div className="service-card sm:px-5">
          <Icon24>
            <FiMessageCircle className="text-brown"/>
          </Icon24>
          <h3 className="service-title">
            Contact et informations
          </h3>
          <p className="mb-6">
            Besoin d’un renseignement pour une prestation ? Nous vous répondrons dans les plus brefs délais.
          </p>
          <AnchorLink href="#contactus" className="service-link">
            Nous écrire
          </AnchorLink>
        </div>
        
      </div>
    </Container>
  );
}
 
export default ServicesAlt;