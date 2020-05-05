import React, { memo, useEffect, useState, FormEvent } from 'react';
import axios from 'axios';

import Form from './Form';
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

  /**
   * Handle the search form
   * @param {FormEvent} event - form event
   * @returns {Promise<*>}
   */
  const handleForm = async (event: FormEvent) => {
    try {
      event.preventDefault();

      // check if search is empty
      if (!search) {
        return null;
      }

      // run the search
      const response = await axios({
        method: 'GET',
        url: `http://localhost:5522/api/data/locations?query=${search}`,
      });

      return console.log(response);
    } catch(error) {
      return console.log(error);
    }
  }

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
        <Form
          handleForm={handleForm}
          handleInput={setSearch}
          search={search}
        />
      </div>
    </div>
  );
};

export default memo(Index);
