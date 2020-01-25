import React from 'react';
import GoogleLogo from './googleLogo';
import FacebookLogo from './facebookLogo';
import { MdStar, MdStarHalf } from "react-icons/md"

const BadgeReview = ({name, rate, totalReview}) => { 

  return (
    <div className="w-32 p-3 mx-1 mb-3 text-center bg-white rounded-lg sm:w-40 text-brown badge md:mx-0">
      <p>Avis sur</p>
      <div className="flex justify-center">
        { name === 'Google' ? <GoogleLogo className="w-full h-full mb-2"/> : <FacebookLogo className="w-full h-full mt-1 mb-3"/>}
      </div>
      <p className="mb-0 text-4xl leading-none font-branbold">{rate}/5</p>
      <div className="flex justify-center text-2xl text-yellow-500 stars">
        <MdStar/><MdStar/><MdStar/><MdStar/><MdStarHalf/>
      </div>
      <p className="text-base">(sur {totalReview} avis)</p>
    </div>
  );
}
 
export default BadgeReview;