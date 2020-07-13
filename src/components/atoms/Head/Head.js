import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const Head = ({ children, meta, url }) => {
  return (
    <Helmet>
      {/* Encoding and other */}
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge"></meta>
      <meta
        content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"
        name="viewport"
      />

      {/* General meta */}
      <meta content={meta.description} name="description" />
      <meta content={meta.title} name="author" />

      {/* Twitter meta */}
      <meta content="summary" name="twitter:card" />
      <meta content={meta.title} name="twitter:title" />
      <meta content={meta.description} name="twitter:description" />
      <meta content={`${url}images/meta/tile.png`} name="twitter:image" />
      <meta content={url} name="twitter:url" />

      {/* Facebook meta */}
      <meta content={url} property="og:site_name" />
      <meta content={meta.title} property="og:title" />
      <meta content={meta.description} property="og:description" />
      <meta content="website" property="og:type" />
      <meta content={`${url}images/meta/tile.png`} property="og:image" />
      <meta content={url} property="og:url" />
      <meta property="og:locale" content="en_US" />

      <title>{meta.title}</title>

      {/* Specified tags */}
      {children}
    </Helmet>
  );
};

Head.defaultProps = {
  meta: {
    title: `Gatsby Starer Prismic`,
    description: `Basic start for Gatsby + Prismic`,
  },
  url: `http://localhost:8000/`,
};
Head.propTypes = {
  children: PropTypes.node,
  meta: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  url: PropTypes.string.isRequired,
};

export default Head;
