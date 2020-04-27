import React, { memo } from 'react';

import './style.css';

export default memo((): React.ReactElement => (
  <div className="not-found-wrap">
    <h1>Page not found!</h1>
  </div>
));
