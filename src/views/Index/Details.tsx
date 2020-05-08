import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { DetailsProps } from './types';
import './style.scss';

const Details: React.FunctionComponent<DetailsProps> = (props) => (
  <div className="details">
    { props.name }
  </div>
);

Details.propTypes = {
  name: PropTypes.string.isRequired,
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
  parent: PropTypes.string.isRequired,
  sources: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  sunRise: PropTypes.string.isRequired,
  sunSet: PropTypes.string.isRequired,
  weather: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default memo(Details);
