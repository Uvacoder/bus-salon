import React from 'react';
import { FiMapPin } from "react-icons/fi"
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"
import BadgeReview from './badgeReview';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      topbanner: file(name: {eq: "camiliacoiffure-banner"}) {
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
      <div className="w-full md:order-2">
        <Img fluid={data.topbanner.childImageSharp.fluid} className="h-full rounded-t-lg md:rounded-r-lg md:rounded-l-none"/>
      </div>    
      <div className="p-6 text-white rounded-b-lg md:p-8 font-branbold bg-pink md:order-1 md:text-left md:rounded-l-lg md:rounded-r-none md:w-bloc800 lg:w-bloc650">
        <h1 className="mb-4 text-4xl leading-none xl:mt-6">Salon de coiffure de mixte à Lyon</h1>
        <p className="mb-4 text-1xl">Ouvert du mercredi au <br className="hidden md:inline"/>dimanche, de 10h à 19h. <br className="hidden sm:inline"/>Uniquement sur rendez-vous.</p>
        <button className="px-6 pt-2 mb-4 text-3xl bg-white rounded-full text-brown font-branbold md:text-2xl md:pt-2">04 72 80 96 77</button><br/>
        <a href="http://google.fr" className="flex items-center justify-center mb-4 text-xl md:justify-start"><FiMapPin className="mb-1 mr-2"/> Voir sur la carte</a>
        <div className="flex flex-wrap justify-center -px-2 md:justify-start">
          <BadgeReview 
            name="Google"
            rate="4.7"
            totalReview="63"
          />
          <BadgeReview 
            name="Facebook"
            rate="4.8"
            totalReview="23"
          />
        </div>
      </div>
    </div>
  );
}
 
export default Hero;