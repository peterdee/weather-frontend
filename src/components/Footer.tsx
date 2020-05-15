import React, { memo } from 'react';

import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <div className="flex justify-content-center footer">
      By <a href="https://github.com/peterdee">Peter Dyumin</a> with love, { new Date().getFullYear() } 
    </div>
  );
};

export default memo(Footer);
