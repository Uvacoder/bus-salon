import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Services from "../components/services"
import Review from "../components/reviews"
import Salon from "../components/salon"

const IndexPage = () => (
  <Layout>
    <SEO title="Accueil" />
    <Hero />
    <Services />
    <Review />
    <Salon />
  </Layout>
)

export default IndexPage
