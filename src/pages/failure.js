import React from 'react';
import Layout from "../components/layout";
import Helmet from "../components/helmet";

export const FailurePage = () =>
  <Layout>
    <Helmet title="Donate" />
    <h1>Your donation has not been received. Something went wrong. Sorry about that!</h1>
  </Layout>;

export default FailurePage;


