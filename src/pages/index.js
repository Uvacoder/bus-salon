import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Services from "../components/services"
import Review from "../components/reviews"
import Salon from "../components/salon"
import Instagram from "../components/instagram"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Accueil" />
    <Hero />
    <Services />
    <Review />
    <Instagram />
    <Salon />
    <Contact />
  </Layout>
)

export default IndexPage
