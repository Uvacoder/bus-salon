import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"
import { FiInstagram } from "react-icons/fi";

const Prestations = () => {
  const data = useStaticQuery(graphql`
    query {
    allInstaNode {
      edges {
        node {
          id
          likes
          comments
          mediaType
          preview
          original
          timestamp
          caption
          localFile {
            childImageSharp {
              fixed(width: 288, height: 288) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
  `)

  const insta = data.allInstaNode.edges;
  const url = `https://www.instagram.com/p/`;
  
  return (
    <div className="flex flex-wrap justify-center px-4 py-20 mx-auto text-center sm:px-10 max-w-8xl lg:py-24">
      <div className="max-w-3xl mb-10">
        <h2 className="flex justify-center mb-3 md:mb-6"><FiInstagram className="mb-2 mr-3"/>
          Flux Instagram
        </h2>
        <h3 className="text-1xl sm:text-2xl">Chez Camilia Coiffure, votre satisfaction est notre plus grande mission. Voici un aperçu des prestations réalisées pour nos clientes.</h3>
      </div>
      <div className="flex flex-wrap justify-center mb-10">
        {
          insta.map(({node})=> (
            <div className="flex p-3" key={node.id}>
              <a href={url + node.id} className="flex">
                <Img fixed={node.localFile.childImageSharp.fixed} className="w-full rounded-lg"/>
              </a>
            </div>
          ))
        }
      </div>
      <div>
        <button href="" className="inline-block w-auto px-6 pt-3 pb-2 text-2xl text-white border rounded-full bg-pink hover:text-white hover:bg-pink">Suivez-nous sur Instagram</button>
      </div>
    </div>
  );
}
 
export default Prestations;