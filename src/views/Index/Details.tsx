import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { DetailsProps, Source as SourceType } from './types';
import Source from './Source';
import './style.scss';

const Details: React.FunctionComponent<DetailsProps> = (props) => (
  <div className="flex direction-column details">
    <div className="name">
      { props.name.toUpperCase() }
    </div>
    <div>
      { props.parent.toUpperCase() }
    </div>
    <div className="margin-top">
      { `Geoposition: ${props.latitude} LAT, ${props.longitude} LON` }
    </div>
    <div className="margin-top">
      { `Sunrise: ${props.sunRise.split('T')[1].split('.')[0]}` }
    </div>
    <div className="margin-top">
      { `Sunset: ${props.sunSet.split('T')[1].split('.')[0]}` }
    </div>
    <div className="margin-top">
      Data sources:
    </div>
    <div className="flex direction-row justify-content-start sources-list">
      { props.sources && props.sources.map((source: SourceType) => (
        <Source
          key={source.title}
          link={source.url}
          name={source.title}
        />
      )) }
    </div>
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
