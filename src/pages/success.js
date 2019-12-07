import React from 'react';
import Layout from "../components/layout";
import Helmet from "../components/helmet";

export const SuccessPage = () =>
  <Layout>
    <Helmet title="Donate" />
    <h1>Your donation has been received. Thank you so much for your generous support.</h1>
  </Layout>;

export default SuccessPage;
