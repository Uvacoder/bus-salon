import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import logo, { ReactComponent as Logo } from '../images/logo.svg'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ 
      textAlign: `center`,
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`,
      flexDirection: `column`,
      flexGrow: `1`,
      height: `90vh`,
    }}>
      <Logo />
    </div>
  </Layout>
)

export default IndexPage
