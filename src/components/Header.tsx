import React, { memo } from 'react';

import './Header.scss';

const Header: React.FC = () => {
  return (
    <div className="flex justify-content-start">
      <h1>Header</h1>
    </div>
  );
};

export default memo(Header);
