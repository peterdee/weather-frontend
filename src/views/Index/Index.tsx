import React, {
  FormEvent,
  memo,
  useState,
} from 'react';
import axios from 'axios';

import Details from './Details';
import Error from './Error';
import Form from './Form';
import Location from './Location';
import { DetailsState, LocationItem } from './types';
import './style.scss';

const Index: React.FC = () => {
  const detailsState: DetailsState = {
    data: {},
    isLoaded: false,
  }
  const [details, setDetails] = useState(detailsState);
  const [error, setError] = useState('');
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

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
      setDetails({
        data: {},
        isLoaded: false,
      });
      setLoading(true);
      const { data: { data = [] } = {} } = await axios({
        method: 'GET',
        url: `${process.env.REACT_APP_DATABASE_MS}/api/data/locations?query=${search}`,
      });

      setLoading(false);
      setList(data);
    } catch(error) {
      setLoading(false);
      return setError('Error loading locations!');
    }
  }

  const getDetails = async (id: number) => {
    try {
      setLoading(true);
      const { data: { data = {} } = {} } = await axios({
        method: 'GET',
        url: `${process.env.REACT_APP_DATABASE_MS}/api/data/location?id=${id}`,
      })
      setDetails({
        data: { ...data },
        isLoaded: true,
      });
      return setLoading(false);
    } catch (error) {
      setLoading(false);
      return setError('Error loading weather details!');
    }
  };

  return (
    <div className="flex direction-column content">
      <div className="margin-top">
        <Form
          handleForm={handleForm}
          handleInput={setSearch}
          isEnabled={!loading}
          search={search}
        />
      </div>
      { error && (
        <div className="margin-top noselect">
          <Error message={error} />
        </div>
      ) }
      { !error && !details.isLoaded && (
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
      ) }
      { details.isLoaded && (
        <div className="margin-top">
          <div>
            <Details
              name={details.data.cityName || '' }
              latitude={details.data.latitude || ''}
              longitude={details.data.longitude || ''}
              parent={details.data.parent ? details.data.parent.title : '' }
              sources={details.data.sources || []}
              sunRise={details.data.sunRise || ''}
              sunSet={details.data.sunSet || ''}
              weather={details.data.weather || []}
            />
          </div>
        </div>
      ) }
    </div>
  );
};

export default memo(Index);
