import React, { memo, useEffect, useState, FormEvent } from 'react';
import axios from 'axios';

import Form from './Form';
import './style.scss';

type LocationItem = {
  latt_long: string,
  location_type: string,
  title: string,
  woeid: number,
};

const Index: React.FC = () => {
  const [databaseOnline, setDatabaseOnline] = useState(false);
  const [databaseLoading, setDatabaseLoading] = useState(false);
  const [metaweatherOnline, setMetaweatherOnline] = useState(false);
  const [metaweatherLoading, setMetaweatherLoading] = useState(false);

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
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
      if (!search || (search && search.length === 1)) {
        return null;
      }

      // run the search
      setLoading(true);
      const { data: { data = [] } = {} } = await axios({
        method: 'GET',
        url: `http://localhost:5522/api/data/locations?query=${search}`,
      });

      setLoading(false);
      console.log(data)
      setList(data);
    } catch(error) {
      setLoading(false);
      return console.log(error);
    }
  }

  const getDetails = (id: number) => console.log(id);

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
          isEnabled={!loading}
          search={search}
        />
      </div>
      <div className="margin-top">
        { list.map((location: LocationItem) => (
          <div key={location.woeid}>
            <button onClick={() => getDetails(location.woeid)}>
              { location.title }
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Index);
