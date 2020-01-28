import React from 'react';
import { FiCoffee, FiFileText, FiMessageSquare } from "react-icons/fi"
import Icon24 from './icon24';
import Container from './container';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const ServicesAlt = () => {
  return (
    <Container>
      <div className="flex flex-wrap justify-center">
        <div className="service-card sm:px-5 sm:w-96">
          <Icon24>
            <FiFileText className="text-brown"/>
          </Icon24>
          <h3 className="px-4 mb-4">
            Tarifs des prestations pour l’année 2020
          </h3>
          <p className="mb-6">
            Pour connaître le prix de nos différentes prestations (coupe, coloration, mèches, balayages, etc…)
          </p>
          <a href="https://www.dropbox.com/s/oh5wa8ktjr5pav8/camilia-tarifs-2020.pdf?dl=0" className="service-link">
            Télécharger le PDF
          </a>
        </div>

        <div className="service-card sm:px-5 sm:w-96">
          <Icon24>
            <FiCoffee className="text-brown"/>
          </Icon24>
          <h3 className="px-4 mb-4">
            Le salon, un espace accueillant et cozy
          </h3>
          <p className="mb-6">
            Marine, coiffeuse styliste/visagiste est à votre écoute pour vous conseiller et vous guider dans vos envies
          </p>
          <AnchorLink href="#salon" className="service-link">
            Découvrir le salon
          </AnchorLink>
        </div>

        <div className="service-card sm:px-5 sm:w-96">
          <Icon24>
            <FiMessageSquare className="text-brown"/>
          </Icon24>
          <h3 className="px-4 mb-4">
            Contact, demande d’infos et partenariats
          </h3>
          <p className="mb-6">
            Besoin d’un renseignement ou souhaitez entrer en contact pour une demande professionnelle ?
          </p>
          <AnchorLink href="#contact" className="service-link">
            Nous écrire
          </AnchorLink>
        </div>
        
      </div>
    </Container>
  );
}
 
export default ServicesAlt;