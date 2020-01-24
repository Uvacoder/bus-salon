import React from 'react';
import Service from './service';
import { FiCoffee, FiList, FiMessageCircle } from "react-icons/fi"

const Services = () => {
  return (
    <div className="flex flex-wrap justify-center py-10 mx-auto text-center max-w-7xl -px-10 lg:py-14">
      <Service 
        title="Tarifs des prestations pour l’année 2020"
        text="Pour connaître le prix de nos différentes prestations (coupe, coloration, mèches, balayages, etc…)"
        button="Télécharger le PDF"
        link="https://www.dropbox.com/s/oh5wa8ktjr5pav8/camilia-tarifs-2020.pdf?dl=0"
        icon={FiList}
      />
      <Service 
        title="Le salon, un espace accueillant et cozy"
        text="Marine, coiffeuse styliste/visagiste est à votre écoute pour vous conseiller et vous guider dans vos envies"
        button="Découvrir le salon"
        link="#salon"
        icon={FiCoffee}
      />
      <Service 
        title="Contact, demande d’infos et partenariats"
        text="Besoin d’un renseignement ou souhaitez entrer en contact pour une demande professionnelle ?"
        button="Nous écrire"
        link="http://duckduckgo.fr"
        icon={FiMessageCircle}
      />            
    </div>
  );
}
 
export default Services;