import React from 'react';
import { FiMapPin } from "react-icons/fi"
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: {eq: "camiliacoiffure-banner"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="h-full px-6 mx-auto mb-6 text-center max-w-7xl md:flex">
      <div className="md:order-2 md:w-3/5 lg:w-4/5 w-5/5">
        <Img fluid={data.file.childImageSharp.fluid} className="h-full rounded"/>
      </div>    
      <div className="w-full p-6 text-white rounded md:p-8 font-branbold bg-pink md:order-1 md:w-2/5 md:text-left">
        <h1 className="mb-4 text-4xl leading-none xl:mt-6">Salon de coiffure mixte à Lyon</h1>
        <p className="mb-4 text-1xl">Ouvert du mercredi au <br className="hidden md:inline"/>dimanche, de 10h à 19h. <br className="hidden sm:inline"/>Uniquement sur rendez-vous.</p>
        <button className="px-6 pt-2 mb-4 text-3xl bg-white rounded-full text-brown font-branbold md:text-2xl md:pt-1">04 72 80 96 77</button><br/>
        <a href="http://google.fr" className="flex items-center justify-center text-xl md:justify-start"><FiMapPin className="mb-1 mr-2"/> Voir sur la carte</a>
      </div>
    </div>
  );
}
 
export default Hero;