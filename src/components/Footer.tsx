import React, { memo } from 'react';

import './Footer.scss';

const Footer: React.FC = () => (
  <div className="flex justify-content-center footer">
    <a href="https://github.com/peterdee">
      Peter Dyumin, 2020
    </a>
  </div>
);

export default memo(Footer);
