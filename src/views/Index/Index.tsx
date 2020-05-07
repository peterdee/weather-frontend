import React, { memo, useEffect, useState, FormEvent } from 'react';
import axios from 'axios';

import Form from './Form';
import Location from './Location';
import { LocationItem } from './types';
import './style.scss';

const Index: React.FC = () => {
  const [database, setDatabase] = useState({
    isLoading: false,
    isOnline: false,
  });
  const [metaweather, setMetaweather] = useState({
    isLoading: false,
    isOnline: false,
  });

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(
    () => {
      setDatabase({
        isLoading: true,
        isOnline: false,
      });
      setMetaweather({
        isLoading: true,
        isOnline: false,
      });
      axios({
        method: 'GET',
        url: 'http://localhost:5522/api/ping',
      }).then(() => setDatabase({
        isLoading: false,
        isOnline: true,
      }))
      .catch(() => setDatabase((state) => ({
        ...state,
        isLoading: false,
      })));
      axios({
        method: 'GET',
        url: 'http://localhost:5544/api/ping',
      }).then(() => setMetaweather({
        isLoading: false,
        isOnline: true,
      }))
      .catch(() => setMetaweather((state) => ({
        ...state,
        isLoading: false,
      })));
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
        { `Database microservice: ${!database.isLoading && database.isOnline
          ? 'online'
          : 'offline'}`
        }
      </div>
      <div className="margin-top">
        { `MetaWeather API microservice: ${!metaweather.isLoading && metaweather.isOnline
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
            <Location
              handleClick={getDetails}
              id={location.woeid}
              name={location.title}
            />
          </div>
        )) }
      </div>
    </div>
  );
};

export default memo(Index);
