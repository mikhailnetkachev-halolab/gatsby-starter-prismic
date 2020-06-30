import React from 'react';
import loadable from '@loadable/component';

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

export default Page;
