import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Hero from "../components/hero"
import ServicesAlt from "../components/servicesAlt"
import Salon from "../components/salon"
import Instagram from "../components/instagram"
import Contact from "../components/contact"
import { useStaticQuery, graphql } from "gatsby"
import Reviews from "../components/reviews"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)  

  return (
    <Layout>
      <SEO title={data.site.siteMetadata.title} />
      <Header />
      <Hero />
      <ServicesAlt />
      <hr className="w-1/3 mx-auto border-2 rounded-sm border-pastel"/>
      <Instagram />
      <Reviews />
      <Salon />
      <hr className="w-1/3 mx-auto border-2 rounded-sm border-pastel"/>
      <Contact />
    </Layout>
  )
}

export default IndexPage
