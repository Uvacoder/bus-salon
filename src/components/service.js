import React from 'react';
import { FiCoffee } from "react-icons/fi"

const Service = ({title, text, button }) => {
  
  return (
    <div className="justify-center px-5 my-10 text-center w-96">
      <div className="flex items-center justify-center w-24 h-24 mx-auto mb-6 rounded-full bg-pastel text-brown">
        <FiCoffee className="text-4xl"/>
      </div>
      <h3 className="px-4 mb-4 text-3xl">
        {title}
      </h3>
      <p className="mb-6">
        {text}
      </p>
      <button href="" className="inline-block w-auto px-6 pt-3 pb-2 text-xl border rounded-full border-pink text-pink hover:text-white hover:bg-pink">
        {button}
      </button>
    </div>
  );
}
 
export default Service;