import React from 'react';
import Layout from "../components/layout";
import Helmet from "../components/helmet";
import womanWithChild from '../images/woman-with-child.jpg';

export const SuccessPage = () =>
  <Layout>
    <Helmet title="Success" />
    <h1>Your donation has been received. Thank you so much for your generous support.</h1>
    <img src={womanWithChild} alt="Woman with child" style={{border: '2px ridge #006F45'}}/>
  </Layout>;

export default SuccessPage;
