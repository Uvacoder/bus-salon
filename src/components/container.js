import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, id }) => {
  return (
    <section className="flex justify-center px-6 py-12 mx-auto max-w-8xl sm:py-16 md:py-20 lg:py-24" id={id}>
      {children}
    </section>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container;