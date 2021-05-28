import React from 'react';
import Loading from '../components/loading/Loading'

const withLoading = (Component) => {
  return ({ isLoading, ...props }) => {
    return isLoading ? <Loading /> : <Component {...props} />;
  };
};

export default withLoading