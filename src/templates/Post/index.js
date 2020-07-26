import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { graphql } from 'gatsby';

import Layout from '@templates/Layout';
import { extractPost } from './utils';

const Page = ({ data }) => {
  const post = extractPost(data);

  return (
    <Layout>
      <div>Post: {RichText.asText(post.title)}</div>
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
  query($uid: String) {
    prismic {
      allPosts(uid: $uid) {
        edges {
          node {
            _meta {
              uid
              tags
            }
            title
            summary
          }
        }
      }
    }
  }
`;
