import React from 'react';
import PropTypes from 'prop-types';

import { components } from './data';

const Sections = ({ slices }) => {
  return (
    <>
      {slices.map((item, index) => {
        const Component = components[item.type];

        if (!Component) return null;

        return <Component key={index} {...item} />;
      })}
    </>
  );
};

Sections.defaultProps = {
  slices: [],
};

Sections.propTypes = {
  slices: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Sections;
