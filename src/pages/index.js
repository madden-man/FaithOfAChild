import React from "react"

import womanWithChild from '../images/woman-with-child.jpg';
import proverbs22_6 from '../images/proverbs-22-6.jpg';
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout alignment="center">
    <SEO title="Home" />
    <h1>Welcome to Faith of a Child!</h1>
    <img src={womanWithChild} alt="Woman with child" style={{border: '2px ridge #006F45'}}/><br />
    <span>Six million babies died in 2018, mostly from preventable causes such as dirty water and malnutrition.<br />
    You can be a part of changing that! <br /></span><br />
    <img src={proverbs22_6} alt="Proverbs 22:6" style={{border: '2px ridge #006F45'}} /><br />
  </Layout>
)

export default IndexPage
