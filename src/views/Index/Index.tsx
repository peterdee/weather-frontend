import React, { memo, useEffect, useState } from 'react';

import './style.scss';

const Index: React.FC = () => {
  const [databaseOnline, setDatabaseOnline] = useState(false);
  const [metaweatherOnline, setMetaweatherOnline] = useState(false);

  useEffect(
    () => {

    },
    [],
  );

  return (
    <div className="flex direction-column content">
      <h1>MetaWeather</h1>
    </div>
  );
};

export default memo(Index);
