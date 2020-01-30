import React from 'react';
import { FiPenTool } from "react-icons/fi";

const Form = () => {
  return (
    <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/thank-you" className="max-w-2xl mx-auto">
      <input type="hidden" name="contact" value="contact" />
      <h3 className="text-left coor-title"><FiPenTool className="inline mb-1 mr-2"/>Formulaire de contact</h3>

      <div className="form-block">
        <label>Prénom*
        <input type="text" name="name" className="focus:border-pink focus:outline-none" placeholder="Camille" required/>
        </label>
      </div>

      <div className="form-block">
        <label>Email*
          <input type="email" name="email" className="focus:border-pink focus:outline-none" placeholder="mail@icloud.com" required/>
        </label>
      </div>

      <div className="form-block">
        <label>Objet
          <input type="text" name="subject" className="focus:border-pink focus:outline-none" placeholder="Renseignement pour une couleur" required/>
        </label>
      </div>   

      <div className="form-block">
        <label>Message*
          <textarea name="message" className="focus:border-pink focus:outline-none" rows="4" placeholder="Bonjour, j'aurais aimé avoir un renseignement concernant..." required></textarea>
        </label>
      </div>

      <div className="flex justify-start md:justify-center">
        <button type="submit" className="service-link">Envoyer</button>
      </div>
      
    </form>    
  );
}
 
export default Form;