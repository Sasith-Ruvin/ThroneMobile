import React from 'react';

const WrapperContainer = ({ navHead, children }) => {
  return (
    <div className={!navHead ? "wrapper-container " : "container"}>
      {children}
    </div>
  );
};

export default WrapperContainer;
