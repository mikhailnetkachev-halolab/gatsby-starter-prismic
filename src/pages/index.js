import React from 'react';

// TODO: delete ->
import loadable from '@loadable/component';
import { graphql } from 'gatsby';
// <- end.

import Layout from '@templates/Layout';
const Component = loadable(() => import(`@organisms/Component`));

const Page = () => {
  return (
    <Layout>
      <div>Home page</div>
      <Component />
    </Layout>
  );
};

export const query = graphql`
  {
    image: file(relativePath: { eq: "gatsby.jpg" }) {
      publicURL
    }
  }
`;

export default Page;
