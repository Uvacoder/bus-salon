import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import ServicesAlt from "../components/servicesAlt"
import Review from "../components/reviews"
import Salon from "../components/salon"
import Instagram from "../components/instagram"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Accueil" />
    <Hero />
    <ServicesAlt />
    <hr className="w-1/3 mx-auto border-2 rounded-sm border-pastel"/>
    <Instagram />
    <Review />
    <Salon />
    <hr className="w-1/3 mx-auto border-2 rounded-sm border-pastel"/>
    <Contact />
  </Layout>
)

export default IndexPage
