import React from 'react';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';

const Image = ({ image, ...properties }) => {
  const fluid = image?.fluid;
  const fixed = image?.fixed;

  if (fluid) {
    return <GatsbyImage fluid={fluid} loading="lazy" {...properties} />;
  }

  if (fixed) {
    return <GatsbyImage fixed={fixed} loading="lazy" {...properties} />;
  }

  return (
    <img
      src={image?.publicURL}
      loading="lazy"
      className="default-image-wrapper"
      {...properties}
    />
  );
};

Image.propTypes = {
  image: PropTypes.object.isRequired,
};

export default Image;
