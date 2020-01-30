import React from 'react';
import { FiCoffee } from "react-icons/fi"
import Icon24 from './icon24';

const Service = ({title, text, button }) => {
  
  return (
    <div className="justify-center px-4 mx-3 my-10 text-center sm:px-5 max-w-96 sm:w-96">
      <Icon24>
        <FiCoffee className="text-brown"/>
      </Icon24>
      <h3 className="px-4 mb-4 text-3xl">
        {title}
      </h3>
      <p className="mb-6">
        {text}
      </p>
      <button href="" className="service-link">
        {button}
      </button>
    </div>
  );
}
 
export default Service;