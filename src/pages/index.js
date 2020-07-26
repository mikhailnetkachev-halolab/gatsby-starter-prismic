import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '@templates/Layout';
import Sections from '@templates/Sections';
import { extractSlices } from '@utils';

const Page = ({ data }) => {
  const slices = extractSlices(data);

  return (
    <Layout>
      <Sections slices={slices} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.shape({
    prismic: PropTypes.object.isRequired,
  }).isRequired,
};

export default Page;

export const query = graphql`
  query {
    prismic {
      staticpage(lang: "en-us", uid: "home") {
        body {
          ... on PRISMIC_StaticpageBodyBanner {
            type
            label
            primary {
              title
              subtitle
              background
              backgroundSharp {
                publicURL
              }
            }
          }
          ... on PRISMIC_StaticpageBodyBlockquote {
            type
            label
            primary {
              author
              quote
            }
          }
          ... on PRISMIC_StaticpageBodyContact_us {
            type
            label
            primary {
              email
              title
            }
          }
        }
      }
    }
  }
`;
