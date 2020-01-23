import React from 'react';
import GoogleLogo from './googleLogo';
import FacebookLogo from './facebookLogo';
import { MdStar, MdStarHalf } from "react-icons/md"

const BadgeReview = ({name, rate, totalReview}) => { 

  return (
    <div className="w-40 p-3 mx-1 mb-3 text-center bg-white rounded-lg text-brown badge md:mx-0">
      <p>Avis sur</p>
      <div className="flex justify-center">
        { name === 'Google' ? <GoogleLogo className="w-3/4 mb-2 sm:w-full"/> : <FacebookLogo className="mt-1 mb-4" />}
      </div>
      <p className="mb-0 text-4xl leading-none font-branbold">{rate}/5</p>
      <div className="flex justify-center text-2xl text-yellow-500 stars">
        <MdStar/><MdStar/><MdStar/><MdStar/><MdStarHalf/>
      </div>
      <p>(sur {totalReview} avis)</p>
    </div>
  );
}
 
export default BadgeReview;