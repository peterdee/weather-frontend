import React, { memo } from 'react';

import './Loader.scss';

const Loader: React.FunctionComponent = () => {
  return (
    <div className="loader-wrap">
      <div className="loader" />
    </div>
  )
};

export default memo(Loader);
