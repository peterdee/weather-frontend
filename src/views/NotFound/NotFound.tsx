import React, { memo, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Loader from '../../components/Loader';
import './style.scss';

const NotFound: React.FunctionComponent = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout((): void => history.push('/'), 3000);
  });

  return (
    <div className="flex direction-column justify-content-center not-found-wrap">
      <div>
        Page not found! Redirecting...
      </div>
      <Loader />
    </div>
  );
};

export default memo(NotFound);
