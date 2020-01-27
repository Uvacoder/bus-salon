import React from 'react';
import { FiUsers } from 'react-icons/fi';
import { FaFacebook } from 'react-icons/fa';

const Review = () => {
  return (
    <div className="px-10 py-20 text-center bg-pastel lg:py-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="flex flex-col justify-center mb-3 md:flex-row md:mb-6">
          <div className="inline md:hidden">
            <div className="flex items-center justify-center w-24 h-24 mx-auto mb-6 text-4xl bg-white rounded-full text-brown">
              <FiUsers />
            </div>
          </div>
          <FiUsers className="hidden mr-4 md:inline"/>Avis des clientes
        </h2>
        <p className="mb-3 text-center md:text-2xl md:mb-6">“Quel professionnalisme ! J’ai rarement vu des coiffeurs vous conseiller aussi bien. Elle connaît vraiment bien les cheveux, vous donne des conseils avant, pendant et après la coiffure... Accueil chaleureux et résultat qui pour une fois correspond à 100% à ce que j’attendais... Merci encore et je la recommande vivement…”</p>
        <span className="flex justify-center"><p>Helene Fabry Oval</p><FaFacebook className="mt-1 ml-2 text-xl"/></span>
      </div>
    </div>
  );
}
 
export default Review;