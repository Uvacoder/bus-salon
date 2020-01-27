import React from 'react';
import PropTypes from 'prop-types';

const Icon24 = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-24 h-24 mx-auto mb-6 text-4xl rounded-full bg-pastel text-brown">
      {children}
    </div>
  );
}
 
Icon24.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Icon24