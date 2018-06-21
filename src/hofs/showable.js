import React from 'react';

const showable = (WrappedComponent) => ({ isVisible, ...props }) =>  (
    isVisible ? <WrappedComponent {...props} /> : null
);

export default showable;
