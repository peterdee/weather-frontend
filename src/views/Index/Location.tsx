import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';

import { LocationProps } from './types';
import './style.scss';

const Location: React.FunctionComponent<LocationProps> = ({
  handleClick,
  id,
  name,
}) => {
  const handler = useCallback(
    () => handleClick(id),
    [handleClick, id],
  );

  return (
    <button
      className="location text-left"
      onClick={handler}
    >
      { name }
    </button>
  );
};

Location.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default memo(Location);
