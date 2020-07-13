import React from 'react';

// TODO: delete ->
import Image from '@atoms/Image';
import loadable from '@loadable/component';
import { graphql } from 'gatsby';

import Layout from '@templates/Layout';
const Component = loadable(() => import(`@organisms/Component`));

const Page = (props) => {
  console.log(props);

  return (
    <Layout>
      <div>Home page</div>
      <Component />
      <Image image={props.data.image} />
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
