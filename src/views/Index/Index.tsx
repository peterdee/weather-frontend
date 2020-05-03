import React, { memo, useEffect, useState } from 'react';
import axios from 'axios';

import './style.scss';

const Index: React.FC = () => {
  const [databaseOnline, setDatabaseOnline] = useState(false);
  const [databaseLoading, setDatabaseLoading] = useState(false);
  const [metaweatherOnline, setMetaweatherOnline] = useState(false);
  const [metaweatherLoading, setMetaweatherLoading] = useState(false);

  const [search, setSearch] = useState('');

  useEffect(
    () => {
      setDatabaseLoading(true);
      setMetaweatherLoading(true);
      axios({
        method: 'GET',
        url: 'http://localhost:5522/api/ping',
      }).then(() => setDatabaseOnline(true))
      .catch(() => setDatabaseOnline(false))
      .finally(() => setDatabaseLoading(false));
      axios({
        method: 'GET',
        url: 'http://localhost:5544/api/ping',
      }).then(() => setMetaweatherOnline(true))
      .catch(() => setMetaweatherOnline(false))
      .finally(() => setMetaweatherLoading(false));
    },
    [],
  );

  return (
    <div className="flex direction-column content">
      <h1 className="noselect">MetaWeather</h1>
      <div className="margin-top">
        { `Database microservice: ${!databaseLoading && databaseOnline
          ? 'online'
          : 'offline'}`
        }
      </div>
      <div className="margin-top">
        { `MetaWeather API microservice: ${!metaweatherLoading && metaweatherOnline
          ? 'online'
          : 'offline'}`
        }
      </div>
      <div className="margin-top">
        <input
          name="search"
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search location"
          type="text"
          value={search}
        />
      </div>
    </div>
  );
};

export default memo(Index);
