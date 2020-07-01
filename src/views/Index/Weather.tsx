import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Weather as WeatherType } from './types';
import './style.scss';

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Weather: React.FunctionComponent<WeatherType> = (props) => {
  const [year, month, date] = props.applicable_date.split('-');
  const formattedDate = `${days[new Date(
    Number(year),
    Number(month) - 1,
    Number(date),
  ).getDay()]}, ${months[Number(month) - 1]} ${date}, ${year}`;


  return (
    <div className="flex direction-column weather-item">
      <div className="weather-title">
        { formattedDate }
      </div>
      <div>
        { `Temperature: ${props.the_temp.toFixed(1)} (max: ${props.max_temp.toFixed(1)},
          min: ${props.min_temp.toFixed(1)})` }
      </div>
      <div>
        { `Air pressure: ${props.air_pressure.toFixed(1)}` }
      </div>
      <div>
        { `Air humidity: ${props.humidity.toFixed(1)}%` }
      </div>
      <div>
        { `Visibility: ${props.visibility.toFixed(1)} kilometers` }
      </div>
    </div>
  );
};

Weather.propTypes = {
  air_pressure: PropTypes.number.isRequired,
  applicable_date: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  humidity: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  max_temp: PropTypes.number.isRequired,
  min_temp: PropTypes.number.isRequired,
  predictability: PropTypes.number.isRequired,
  the_temp: PropTypes.number.isRequired,
  visibility: PropTypes.number.isRequired,
  weather_state_abbr: PropTypes.string.isRequired,
  weather_state_name: PropTypes.string.isRequired,
  wind_direction: PropTypes.number.isRequired,
  wind_direction_compass: PropTypes.string.isRequired,
  wind_speed: PropTypes.number.isRequired,
};

export default memo(Weather);
