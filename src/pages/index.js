import React from "react"

import womanWithChild from '../images/woman-with-child.jpg';
import proverbs22_6 from '../images/proverbs-22-6.jpg';
import Layout from "../components/layout"
import Helmet from "../components/helmet"

const IndexPage = () => (
  <Layout alignment="center">
    <Helmet title="Home" />
    <h1 style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center'}}>
      <span style={{whiteSpace: 'pre'}}>Welcome to </span>
      <span>Faith of a Child!</span>
    </h1>
    <img src={womanWithChild} alt="Woman with child" style={{border: '2px ridge #006F45'}}/>
    <p>Six million babies died in 2018, mostly from preventable causes such as dirty water and malnutrition.</p>
    <p>You can be a part of changing that!</p>
    <img src={proverbs22_6} alt="Proverbs 22:6" style={{border: '2px ridge #006F45'}} />
  </Layout>
)

export default IndexPage
