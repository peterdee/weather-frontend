import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { ErrorProps } from './types';
import './style.scss';

const Error: React.FunctionComponent<ErrorProps> = ({ message }) => (
  <div className="error-message text-center">
    { message }
  </div>
);

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default memo(Error);
