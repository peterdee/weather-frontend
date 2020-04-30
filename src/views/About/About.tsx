import React, { memo } from 'react';

const About: React.FC = () => (
  <div className="flex direction-column content">
    <h1 className="noselect">
      About
    </h1>
    <div className="margin-top">
      This is a frontend for the Moleculer microservices.
    </div>
  </div>
);

export default memo(About);
