import React from 'react';
import { FiUsers } from 'react-icons/fi';
import { FaFacebook } from 'react-icons/fa';
const Review = () => {
  return (
    <div className="px-10 py-20 text-center bg-pastel">
      <h2 className="flex items-center justify-center mb-3 text-3xl"><FiUsers className="mb-1 mr-2"/>Avis des clientes</h2>
      <p className="max-w-3xl mx-auto mb-4 text-center">“Quel professionnalisme ! J’ai rarement vu des coiffeurs vous conseiller aussi bien. Elle connaît vraiment bien les cheveux, vous donne des conseils avant, pendant et après la coiffure... Accueil chaleureux et résultat qui pour une fois correspond à 100% à ce que j’attendais... Merci encore et je la recommande vivement…”</p>
      <span className="flex justify-center"><p>Helene Fabry Oval</p><FaFacebook className="mt-1 ml-2 text-xl"/></span>
    </div>
  );
}
 
export default Review;