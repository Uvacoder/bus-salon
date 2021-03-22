import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FiInstagram } from "react-icons/fi"
import Icon24 from "./icon24"
import Container from "./container"

const Instagram = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { absolutePath: { regex: "/instagram/" } }) {
        edges {
          node {
            id
            childImageSharp {
              fixed(width: 448) {
                src
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Container id="actus">
      <div className="justify-center text-center xl:max-w-6xl">
        <div className="max-w-3xl mx-auto mb-10 ">
          <h2 className="flex flex-col justify-center mb-3 md:flex-row md:mb-6">
            <div className="inline md:hidden">
              <Icon24>
                <FiInstagram />
              </Icon24>
            </div>
            <FiInstagram className="hidden mr-4 md:inline" />
            Actus Instagram
          </h2>
          <h3 className="leading-normal text-1xl sm:text-2xl font-body">
            Chez Camilia Coiffure, votre satisfaction est notre plus grande
            mission. Voici un aperçu des prestations réalisées pour nos
            clientes.
          </h3>
        </div>
        <div className="flex flex-wrap justify-center mb-10">
          {data.allFile.edges.map(({ node }) => (
            <div className="flex w-64 h-64 p-3" key={node.id}>
              <Img
                fixed={node.childImageSharp.fixed}
                className="w-full border-4 border-white rounded-lg instapic hover:border-pink"
              />
            </div>
          ))}
        </div>
        <div>
          <a
            href="http://instagram.com/camilia_coiffure"
            title="Aller sur la page Instagram"
            className="service-link"
          >
            Voir le profil Instagram
          </a>
        </div>
      </div>
    </Container>
  )
}

export default Instagram
