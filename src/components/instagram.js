import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"
import { FiInstagram } from "react-icons/fi";
import Icon24 from './icon24';
import Container from './container';

const Instagram = () => {
  const data = useStaticQuery(graphql`
    query {
    allInstaNode(sort: {fields: timestamp, order: DESC}) {
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
    <Container id="actus">
    <div className="flex flex-wrap justify-center text-center">
      <div className="max-w-3xl mb-10">
        <h2 className="flex flex-col justify-center mb-3 md:flex-row md:mb-6">
          <div className="inline md:hidden">
            <Icon24>
              <FiInstagram />
            </Icon24>
          </div>
          <FiInstagram className="hidden mr-4 md:inline"/>
          Actus Instagram
        </h2>
        <h3 className="text-1xl sm:text-2xl">Chez Camilia Coiffure, votre satisfaction est notre plus grande mission. Voici un aperçu des prestations réalisées pour nos clientes.</h3>
      </div>
      <div className="flex flex-wrap justify-center mb-10">
        {
          insta.map(({node})=> (
            <div className="flex p-3" key={node.id}>
              <a href={url + node.id} className="flex">
                <Img fixed={node.localFile.childImageSharp.fixed} className="w-full border-4 border-white rounded-lg instapic hover:border-pink"/>
              </a>
            </div>
          ))
        }
      </div>
      <div>
        <a href="http://instagram.com/camilia_coiffure" className="inline-block w-auto px-6 pt-3 pb-2 text-xl text-white border rounded-full md:text-2xl bg-pink hover:text-white hover:bg-pink">Suivez-nous sur Instagram</a>
      </div>
    </div>
    </Container>
  );
}
 
export default Instagram;