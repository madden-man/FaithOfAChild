import React from "react"

import saulWithDadDD from '../images/saul-with-dad-dd.jpg';
import saulWithAndre from '../images/saul-with-andre.jpg';
import Layout from "../components/layout"
import Helmet from "../components/helmet"

const AboutUsPage = () => (
  <Layout>
    <Helmet title="About Us" />
    <h2>About Us</h2>
    <p>Faith of a Child Foundation is dedicated to helping children to find Jesus.  We engage in projects in Latin America, Africa, and at home in California to provide children with basic needs:   clean water, nutrition, and medicine.  We simply shine the light of Jesus in dark places and help children to find Him.</p>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    }}>
      <img src={saulWithDadDD} style={{
        border: '2px ridge #006F45',
        height: '23.5rem',
        marginRight: '2rem',
      }}/>
      <img src={saulWithAndre} style={{
        border: '2px ridge #006F45',
        height: '23.5rem',
      }}/>
    </div>
  </Layout>
);

export default AboutUsPage;
