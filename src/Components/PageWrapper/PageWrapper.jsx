import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const PageWrapper = ({ children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => setShow(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-all duration-500 ease-in-out transform ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {children}
    </div>
  );
};
PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
