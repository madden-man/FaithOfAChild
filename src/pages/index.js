import React from "react"

import homerPresidentGif from '../images/homer-president.gif';
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to Faith of a Child!</h1>
    <img src={homerPresidentGif} alt="Go for life!" style={{border: '2px ridge darkorange'}}/>
  </Layout>
)

export default IndexPage
