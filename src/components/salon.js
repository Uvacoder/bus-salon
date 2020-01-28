import React from 'react';
import { FiCoffee } from "react-icons/fi";
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image";
import Icon24 from './icon24';
import Container from './container';

const Salon = () => {
  const data = useStaticQuery(graphql`
    query {
      salon01: file(name: {eq: "camilia-coiffure-salon-photo01"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      salon02: file(name: {eq: "camilia-coiffure-salon-photo02"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }            
    }
  `)

  return (
    <Container id="salon">
      <div className="flex flex-col w-full">
      <div className="max-w-3xl mx-auto mb-12 text-center intro lg:px-0">
        <h2 className="flex flex-col justify-center mb-3 md:flex-row md:mb-6">
          <div className="inline md:hidden">
            <Icon24>
              <FiCoffee />
            </Icon24>
          </div>
          <FiCoffee className="hidden mr-4 md:inline"/>
          Un espace convivial et chaleureux
        </h2>
        <p className="max-w-3xl mx-auto text-1xl sm:text-2xl">
        Le salon vous propose des prestations toujours à l’affut des dernières tendances. Notre coiffeuse styliste/visagiste vous apportera conseils et expertise du cheveu selon vos envies.
        </p>
      </div>
      <div className="flex flex-col justify-center w-full lg:flex-row">
        <div className="w-full mb-10 rounded-lg md:w-3/4 md:mx-auto lg:w-full lg:mb-0 lg:mx-6">
          <Img fluid={data.salon01.childImageSharp.fluid} className="rounded-lg h-96"/>
        </div>
        <div className="w-full rounded-lg md:w-3/4 md:mx-auto lg:w-full lg:mb-0 lg:mx-6">
          <Img fluid={data.salon02.childImageSharp.fluid} className="rounded-lg h-96"/>
        </div>
      </div>
      </div>
    </Container>
  );
}
 
export default Salon;