import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ReactComponent as Logo } from '../images/svg/camilia-logo.svg'

const IndexPage = () => (
  <Layout>
    <SEO title="Accueil" />
      <Logo />
  </Layout>
)

export default IndexPage
