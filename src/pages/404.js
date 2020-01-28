import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderAlt from "../components/headerAlt"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      kitty: file(name: {eq: "error-404"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Erreur 404: Page non trouvée" />
      <HeaderAlt/>
      <div className="p-10 mx-auto text-center lg:p-20 max-w-7xl">
        <div className="mb-10">
          <h1 className="mb-4">Erreur 404 !</h1>
          <p>L'URL ne mène nulle part...</p>
          <p>Mais voici une photo de chaton.</p>
        </div>
        <Img fluid={data.kitty.childImageSharp.fluid} className="w-full mx-auto mb-10 rounded-lg md:w-2/3"/>
        <Link to="/" className="service-link">Retour à l'accueil</Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage
