import React from 'react';

// TODO: delete ->
import loadable from '@loadable/component';
import { graphql } from 'gatsby';
import Sections from '@templates/Sections';
// <- end.

import Layout from '@templates/Layout';
const Component = loadable(() => import(`@organisms/Component`));

const Page = () => {
  const slices = [
    { type: `banner` },
    { type: `blockquote` },
    { type: `contact_us` },
  ];

  return (
    <Layout>
      <div>Home page</div>
      <Component />
      <Sections slices={slices} />
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
